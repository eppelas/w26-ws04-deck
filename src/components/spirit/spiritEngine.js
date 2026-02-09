// ═══════════════════════════════════════════════════════════════
// Spirit Engine — physics, drawing, sleep, particles, bubbles
// Ported from aim-character.html (Tanki project)
// ═══════════════════════════════════════════════════════════════

import { PHRASES, pick, getSlideRemark, getBlockEnergy } from './spiritPersonality'
import { getPacingHint } from './spiritPacing'

// ─── CONFIG ──────────────────────────────────────────────────

const CONFIG = {
  size: 14,
  lineWidth: 1.2,
  headRatio: 1.0,

  // swiss design palette
  bodyColor: '#737373',
  eyeColor: '#444',
  blushColor: 'rgba(220,38,38,0.10)',
  glyphColor: '#DC2626',
  trailColor: 'rgba(220,38,38,0.05)',
  bubbleBackground: 'rgba(23,23,23,0.90)',
  bubbleText: '#bbb',
  bubbleFontSize: 11,
  bubbleFontWeight: 400,

  wanderSpeed: 0.02,
  maxSpeed: 2.5,
  friction: 0.975,
  gravity: 0.005,
  bounciness: 0.5,

  cursorRadius: 90,
  cursorChaseForce: 0.03,
  clickPushForce: 2,
  manyClickThreshold: 5,

  sleepAfterIdle: 25,
  sleepCornerPadding: 20,
  wakeRadius: 50,

  phases: {
    newcomer:    { after: 0,    eyeScale: 1.3, smileCurve: 0.15, glyphOpacity: 0.3 },
    comfortable: { after: 60,   eyeScale: 1.1, smileCurve: 0.25, glyphOpacity: 0.5 },
    inspired:    { after: 180,  eyeScale: 1.0, smileCurve: 0.35, glyphOpacity: 0.8 },
    deep:        { after: 420,  eyeScale: 0.9, smileCurve: 0.2,  glyphOpacity: 1.0 },
  },
}

// ─── ENGINE STATE ────────────────────────────────────────────

export function createSpiritEngine(canvas) {
  const ctx = canvas.getContext('2d')
  let W = 0, H = 0, dt = 0.016, time = 0, sessionTime = 0
  let mouse = { x: -9999, y: -9999, active: false }
  let fontReady = false
  let animId = null

  // external refs (set via setSlide)
  let currentSlide = null
  let slideIndex = 0
  let totalSlides = 1
  let slideDwellTime = 0
  let lastPacingHintTime = 0

  document.fonts.ready.then(() => { fontReady = true })

  // ─── phase system ──────────────────────────────

  function getCurrentPhase() {
    const p = CONFIG.phases
    if (sessionTime >= p.deep.after) return 'deep'
    if (sessionTime >= p.inspired.after) return 'inspired'
    if (sessionTime >= p.comfortable.after) return 'comfortable'
    return 'newcomer'
  }

  function getPhaseData() {
    return CONFIG.phases[getCurrentPhase()]
  }

  let lastPhase = 'newcomer'

  // ─── particles ─────────────────────────────────

  const particles = []

  function spawnParticles(x, y, count, color) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2
      const s = 0.5 + Math.random() * 1.5
      particles.push({
        x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 0.3,
        life: 1, decay: 0.02 + Math.random() * 0.02,
        size: 0.8 + Math.random() * 1.2, color,
      })
    }
  }

  function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      p.x += p.vx; p.y += p.vy; p.vy += 0.02; p.life -= p.decay
      if (p.life <= 0) particles.splice(i, 1)
    }
  }

  function drawParticles() {
    for (const p of particles) {
      ctx.globalAlpha = p.life * 0.5
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }

  // ─── speech bubble ─────────────────────────────

  const bubble = { text: '', timer: 0, duration: 0, opacity: 0, slideY: 0, charReveal: 0 }

  function say(text, dur = 2.8) {
    bubble.text = text
    bubble.timer = 0
    bubble.duration = dur
    bubble.opacity = 0
    bubble.slideY = 6
    bubble.charReveal = 0
  }

  function updateBubble() {
    if (bubble.opacity <= 0 && bubble.timer === 0 && bubble.slideY <= 0) return
    bubble.timer += dt
    if (bubble.timer < 0.25) {
      bubble.opacity = Math.min(1, bubble.timer / 0.25)
    } else if (bubble.timer < bubble.duration - 0.6) {
      bubble.opacity = 1
    } else if (bubble.timer < bubble.duration) {
      bubble.opacity = Math.max(0, (bubble.duration - bubble.timer) / 0.6)
    } else {
      bubble.opacity = 0
    }
    bubble.slideY += (0 - bubble.slideY) * 0.15
    bubble.charReveal = Math.min(bubble.text.length, bubble.charReveal + 12 * dt)
  }

  function drawBubble(x, y) {
    if (bubble.opacity <= 0.01 || !fontReady) return
    ctx.save()
    ctx.font = `${CONFIG.bubbleFontWeight} ${CONFIG.bubbleFontSize}px "IBM Plex Mono", monospace`
    const displayText = bubble.text.slice(0, Math.floor(bubble.charReveal))
    const fullWidth = ctx.measureText(bubble.text).width
    const pad = 9
    const bw = fullWidth + pad * 2
    const bh = CONFIG.bubbleFontSize + pad * 2 - 2
    let bx = Math.max(6, Math.min(W - bw - 6, x - bw / 2))
    let by = Math.max(6, y - CONFIG.size * CONFIG.headRatio - 28 + bubble.slideY)
    ctx.globalAlpha = bubble.opacity * 0.95

    // shadow
    ctx.fillStyle = 'rgba(0,0,0,0.12)'
    roundRect(ctx, bx + 1, by + 2, bw, bh, 4); ctx.fill()
    // bg
    ctx.fillStyle = CONFIG.bubbleBackground
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'
    ctx.lineWidth = 0.5
    roundRect(ctx, bx, by, bw, bh, 4); ctx.fill(); ctx.stroke()
    // tail
    ctx.fillStyle = CONFIG.bubbleBackground
    ctx.beginPath()
    const tailX = Math.max(bx + 8, Math.min(bx + bw - 8, x))
    ctx.moveTo(tailX - 3, by + bh)
    ctx.lineTo(tailX + 3, by + bh)
    ctx.lineTo(tailX, by + bh + 4)
    ctx.closePath(); ctx.fill()
    // text
    ctx.textBaseline = 'middle'
    ctx.fillStyle = CONFIG.bubbleText
    ctx.fillText(displayText, bx + pad, by + bh / 2 + 0.5)
    ctx.restore()
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath(); c.moveTo(x + r, y); c.lineTo(x + w - r, y)
    c.quadraticCurveTo(x + w, y, x + w, y + r); c.lineTo(x + w, y + h - r)
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h); c.lineTo(x + r, y + h)
    c.quadraticCurveTo(x, y + h, x, y + h - r); c.lineTo(x, y + r)
    c.quadraticCurveTo(x, y, x + r, y); c.closePath()
  }

  // ─── zzz ───────────────────────────────────────

  const zzzList = []
  function updateZzz(sleeping, x, y) {
    if (sleeping && Math.random() < 0.015) {
      zzzList.push({ x: x + 6, y: y - 8, vx: 0.12, vy: -0.2, life: 1, size: 6 + Math.random() * 2 })
    }
    for (let i = zzzList.length - 1; i >= 0; i--) {
      const z = zzzList[i]; z.x += z.vx; z.y += z.vy; z.life -= 0.005; z.size += 0.02
      if (z.life <= 0) zzzList.splice(i, 1)
    }
  }
  function drawZzz() {
    if (!fontReady) return
    for (const z of zzzList) {
      ctx.globalAlpha = z.life * 0.3
      ctx.font = `300 ${Math.round(z.size)}px "IBM Plex Mono", monospace`
      ctx.fillStyle = '#555'; ctx.fillText('z', z.x, z.y)
    }
    ctx.globalAlpha = 1
  }

  // ─── character state ───────────────────────────

  const ch = {
    x: 0, y: 0, vx: 0, vy: 0,
    sleeping: false, sleepTimer: 0, sleepTarget: null, sleepBreath: 0,
    idleTimer: 0, clickCount: 0, clickReset: 0,
    squash: 0.2, squashV: 0, squashTarget: 1,
    tilt: 0, hopY: 0, hopV: 0,
    blinkTimer: 0, blinkState: false,
    legPhase: 0,
    born: false, birthTimer: 0,
    breathPhase: 0,
    floatPhase: Math.random() * Math.PI * 2,
    trail: [],
  }

  let waypoint = { x: 0, y: 0 }, wpTimer = 0

  function newWaypoint() {
    waypoint.x = 40 + Math.random() * (W - 80)
    waypoint.y = 40 + Math.random() * (H - 80)
    wpTimer = 0
  }

  function pickCorner() {
    const p = CONFIG.sleepCornerPadding
    const c = [
      { x: p, y: H - p },
      { x: W - p, y: H - p },
      { x: p, y: p + 10 },
      { x: W - p, y: p + 10 },
    ]
    return c[Math.floor(Math.random() * c.length)]
  }

  // ─── drawing ───────────────────────────────────

  function drawCharacter() {
    const S = CONFIG.size
    const phase = getPhaseData()
    const lw = CONFIG.lineWidth

    ctx.save()
    ctx.translate(ch.x, ch.y + ch.hopY)
    ctx.rotate(ch.tilt)
    ctx.scale(1 + (1 - ch.squash) * 0.3, ch.squash)

    const breathOffset = Math.sin(ch.breathPhase) * 0.8
    const floatY = Math.sin(ch.floatPhase) * 1.5
    ctx.translate(0, floatY)

    const headR = S * CONFIG.headRatio

    // shadow
    ctx.save()
    ctx.translate(0, headR + S * 0.7 + 4)
    ctx.scale(1, 0.2)
    ctx.beginPath()
    ctx.arc(0, 0, S * 0.4, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(0,0,0,0.06)'
    ctx.fill()
    ctx.restore()

    // body
    const bodyTop = headR * 0.6
    const bodyBottom = headR + S * 0.55
    ctx.strokeStyle = CONFIG.bodyColor
    ctx.lineWidth = lw
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(0, bodyTop)
    ctx.quadraticCurveTo(breathOffset * 0.3, bodyTop + (bodyBottom - bodyTop) * 0.5, 0, bodyBottom)
    ctx.stroke()

    // arms
    const armY = bodyTop + (bodyBottom - bodyTop) * 0.3
    const armLen = S * 0.45
    const armWave = Math.sin(ch.legPhase * 0.7) * 3
    ctx.lineWidth = lw * 0.8
    ctx.beginPath()
    ctx.moveTo(-1, armY)
    ctx.quadraticCurveTo(-armLen * 0.6, armY + armWave + 2, -armLen, armY + 4 + armWave)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(1, armY)
    ctx.quadraticCurveTo(armLen * 0.6, armY - armWave + 2, armLen, armY + 4 - armWave)
    ctx.stroke()

    // legs
    const speed = Math.sqrt(ch.vx * ch.vx + ch.vy * ch.vy)
    const legAmp = ch.sleeping ? 0 : Math.min(speed * 3, 8)
    const legLen = S * 0.4
    ctx.lineWidth = lw * 0.8
    for (let i = 0; i < 2; i++) {
      const side = i === 0 ? -1 : 1
      const swing = Math.sin(ch.legPhase + i * Math.PI) * legAmp
      const lx = side * 2
      ctx.beginPath()
      ctx.moveTo(lx, bodyBottom)
      ctx.quadraticCurveTo(lx + swing * 0.4, bodyBottom + legLen * 0.5, lx + swing, bodyBottom + legLen)
      ctx.stroke()
    }

    // head
    ctx.lineWidth = lw
    ctx.beginPath()
    ctx.ellipse(0, 0, headR * 0.85, headR * 0.92, 0, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(30,30,30,0.5)'
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(0, 0, headR * 0.85, headR * 0.92, 0, 0, Math.PI * 2)
    ctx.strokeStyle = CONFIG.bodyColor
    ctx.stroke()

    if (ch.sleeping) {
      drawSleepingFace(headR, lw, phase)
    } else {
      drawFace(headR, lw, phase)
    }

    ctx.restore()
  }

  function drawFace(headR, lw, phase) {
    const eyeY = -headR * 0.1
    const eyeSpacing = headR * 0.32
    const eyeR = headR * 0.14 * phase.eyeScale

    // AIM glyph
    if (phase.glyphOpacity > 0) {
      ctx.globalAlpha = phase.glyphOpacity * 0.5
      ctx.beginPath()
      ctx.arc(0, -headR * 0.48, headR * 0.14, Math.PI, 0)
      ctx.strokeStyle = CONFIG.glyphColor
      ctx.lineWidth = lw * 0.8
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(0, -headR * 0.48)
      ctx.lineTo(0, -headR * 0.32)
      ctx.stroke()
      ctx.globalAlpha = 1
    }

    // eyes
    if (!ch.blinkState) {
      const pdx = mouse.x - ch.x, pdy = mouse.y - ch.y
      const pd = Math.sqrt(pdx * pdx + pdy * pdy)
      const shift = Math.min(pd > 0 ? 1 : 0, 1) * headR * 0.04
      const sx = pd > 0 ? (pdx / pd) * shift : 0
      const sy = pd > 0 ? (pdy / pd) * shift : 0
      for (let side = -1; side <= 1; side += 2) {
        const ex = eyeSpacing * side
        ctx.beginPath()
        ctx.arc(ex + sx, eyeY + sy, eyeR, 0, Math.PI * 2)
        ctx.fillStyle = CONFIG.eyeColor
        ctx.fill()
        ctx.beginPath()
        ctx.arc(ex + sx + eyeR * 0.3, eyeY + sy - eyeR * 0.3, eyeR * 0.25, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.25)'
        ctx.fill()
      }
    } else {
      ctx.strokeStyle = CONFIG.eyeColor
      ctx.lineWidth = lw
      for (let side = -1; side <= 1; side += 2) {
        ctx.beginPath()
        ctx.arc(eyeSpacing * side, eyeY, eyeR * 0.8, 0.2, Math.PI - 0.2)
        ctx.stroke()
      }
    }

    // blush
    for (let side = -1; side <= 1; side += 2) {
      ctx.beginPath()
      ctx.ellipse(eyeSpacing * side * 1.3, eyeY + headR * 0.2, headR * 0.1, headR * 0.05, 0, 0, Math.PI * 2)
      ctx.fillStyle = CONFIG.blushColor
      ctx.fill()
    }

    // mouth
    const mouthY = headR * 0.3
    const mouthW = headR * 0.22
    const curve = phase.smileCurve * headR
    ctx.strokeStyle = CONFIG.bodyColor
    ctx.lineWidth = lw * 0.8
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(-mouthW, mouthY)
    ctx.quadraticCurveTo(0, mouthY + curve, mouthW, mouthY)
    ctx.stroke()
  }

  function drawSleepingFace(headR, lw, phase) {
    const eyeY = -headR * 0.1
    const eyeSpacing = headR * 0.32
    ctx.strokeStyle = CONFIG.eyeColor
    ctx.lineWidth = lw * 0.8
    ctx.lineCap = 'round'
    for (let side = -1; side <= 1; side += 2) {
      ctx.beginPath()
      ctx.arc(eyeSpacing * side, eyeY, headR * 0.1, 0.3, Math.PI - 0.3)
      ctx.stroke()
    }
    for (let side = -1; side <= 1; side += 2) {
      ctx.beginPath()
      ctx.ellipse(eyeSpacing * side * 1.3, eyeY + headR * 0.18, headR * 0.08, headR * 0.04, 0, 0, Math.PI * 2)
      ctx.fillStyle = CONFIG.blushColor
      ctx.fill()
    }
    const mouthY = headR * 0.28
    ctx.beginPath()
    ctx.moveTo(-headR * 0.08, mouthY)
    ctx.quadraticCurveTo(0, mouthY + headR * 0.04, headR * 0.08, mouthY)
    ctx.strokeStyle = CONFIG.bodyColor
    ctx.lineWidth = lw * 0.6
    ctx.stroke()
    if (phase.glyphOpacity > 0.3) {
      ctx.globalAlpha = 0.15
      ctx.beginPath()
      ctx.arc(0, -headR * 0.48, headR * 0.12, Math.PI, 0)
      ctx.strokeStyle = CONFIG.glyphColor
      ctx.lineWidth = lw * 0.6
      ctx.stroke()
      ctx.globalAlpha = 1
    }
  }

  function drawTrail() {
    if (ch.sleeping) return
    const speed = Math.sqrt(ch.vx * ch.vx + ch.vy * ch.vy)
    if (speed < 1) return
    for (let i = 0; i < ch.trail.length; i++) {
      const t = ch.trail[i]
      const a = (i / ch.trail.length) * 0.08 * Math.min(speed / 3, 1)
      ctx.beginPath()
      ctx.arc(t.x, t.y, CONFIG.size * 0.12 * (i / ch.trail.length), 0, Math.PI * 2)
      ctx.fillStyle = `rgba(220,38,38,${a})`
      ctx.fill()
    }
  }

  // ─── update ────────────────────────────────────

  function update() {
    time += dt
    sessionTime += dt
    slideDwellTime += dt

    // phase change
    const curPhase = getCurrentPhase()
    if (curPhase !== lastPhase) {
      const msg = PHRASES.phaseChange[curPhase]
      if (msg) {
        say(msg, 3)
        spawnParticles(ch.x, ch.y - 6, 6, CONFIG.glyphColor)
      }
      lastPhase = curPhase
    }

    // pacing hints (every 20s check)
    if (currentSlide && slideDwellTime - lastPacingHintTime > 20 && bubble.opacity <= 0) {
      const hint = getPacingHint(currentSlide.type, slideDwellTime)
      if (hint) {
        say(hint, 3)
        lastPacingHintTime = slideDwellTime
      }
    }

    // birth
    if (!ch.born) {
      ch.birthTimer += dt
      ch.squashTarget = 1
      if (ch.birthTimer > 0.6 && ch.birthTimer < 0.7) {
        say(pick(PHRASES.birth), 3)
      }
      if (ch.birthTimer > 1) ch.born = true
    }

    // click reset
    ch.clickReset += dt
    if (ch.clickReset > 5) { ch.clickCount = 0; ch.clickReset = 0 }

    // squash spring
    ch.squashV += (ch.squashTarget - ch.squash) * 0.18
    ch.squashV *= 0.72
    ch.squash += ch.squashV
    ch.squashTarget += (1 - ch.squashTarget) * 0.08

    // hop spring
    ch.hopV += (-ch.hopY) * 0.12
    ch.hopV *= 0.78
    ch.hopY += ch.hopV

    // breath
    ch.breathPhase += dt * 2
    ch.floatPhase += dt * 0.8

    if (!ch.born) return

    const speed = Math.sqrt(ch.vx * ch.vx + ch.vy * ch.vy)
    const dx = mouse.x - ch.x, dy = mouse.y - ch.y
    const distMouse = Math.sqrt(dx * dx + dy * dy)

    if (ch.sleeping) {
      ch.sleepBreath += dt * 1.2
      if (ch.sleepTarget) {
        const sx = ch.sleepTarget.x - ch.x, sy = ch.sleepTarget.y - ch.y
        const sd = Math.sqrt(sx * sx + sy * sy)
        if (sd > 2) { ch.vx += (sx / sd) * 0.03; ch.vy += (sy / sd) * 0.03 }
        ch.vx *= 0.92; ch.vy *= 0.92
      }
      if (distMouse < CONFIG.wakeRadius && mouse.active) {
        ch.sleeping = false; ch.sleepTimer = 0
        say(pick(PHRASES.wake)); ch.hopV = -2; ch.squashTarget = 1.15
      }
    } else {
      if (speed < 0.3 && bubble.opacity <= 0) ch.idleTimer += dt; else ch.idleTimer = 0

      // idle mumble
      if (ch.idleTimer > 12 && Math.random() < 0.0015) {
        const phase = getCurrentPhase()
        const idlePhrases = PHRASES.idle[phase] || PHRASES.idle.newcomer
        say(pick(idlePhrases))
        ch.idleTimer = 0
      }

      // sleep
      ch.sleepTimer += dt
      if (ch.sleepTimer > CONFIG.sleepAfterIdle + Math.random() * 10) {
        ch.sleeping = true
        ch.sleepTarget = pickCorner()
        ch.sleepTimer = 0
        say(pick(PHRASES.sleep), 2)
      }

      // cursor
      const energy = currentSlide ? getBlockEnergy(currentSlide.block) : 0.8
      const cursorForce = CONFIG.cursorChaseForce * energy
      if (distMouse < CONFIG.cursorRadius && mouse.active) {
        ch.sleepTimer = 0
        ch.vx += (dx / distMouse) * cursorForce
        ch.vy += (dy / distMouse) * cursorForce
      } else {
        wpTimer += dt
        if (wpTimer > 6 + Math.random() * 4 || Math.abs(ch.x - waypoint.x) < 15) newWaypoint()
        const wx = waypoint.x - ch.x, wy = waypoint.y - ch.y
        const wd = Math.sqrt(wx * wx + wy * wy)
        const ws = CONFIG.wanderSpeed * energy
        if (wd > 1) { ch.vx += (wx / wd) * ws; ch.vy += (wy / wd) * ws }
      }
    }

    ch.vx *= CONFIG.friction; ch.vy *= CONFIG.friction
    const cs = Math.sqrt(ch.vx * ch.vx + ch.vy * ch.vy)
    if (cs > CONFIG.maxSpeed) { ch.vx = (ch.vx / cs) * CONFIG.maxSpeed; ch.vy = (ch.vy / cs) * CONFIG.maxSpeed }
    if (!ch.sleeping) ch.vy += CONFIG.gravity
    ch.x += ch.vx; ch.y += ch.vy

    const m = CONFIG.size + 3
    if (ch.x < m) { ch.x = m; ch.vx *= -CONFIG.bounciness }
    if (ch.x > W - m) { ch.x = W - m; ch.vx *= -CONFIG.bounciness }
    if (ch.y < m) { ch.y = m; ch.vy *= -CONFIG.bounciness }
    if (ch.y > H - m) { ch.y = H - m; ch.vy *= -CONFIG.bounciness; ch.hopV = -0.8 }

    ch.legPhase += cs * 0.25
    ch.tilt += (ch.vx * 0.04 - ch.tilt) * 0.06

    // blink
    ch.blinkTimer += dt
    if (ch.blinkTimer > 3 + Math.random() * 4) { ch.blinkState = true; ch.blinkTimer = 0 }
    if (ch.blinkState && ch.blinkTimer > 0.1) ch.blinkState = false

    // trail
    ch.trail.push({ x: ch.x, y: ch.y })
    if (ch.trail.length > 10) ch.trail.shift()

    updateBubble()
    updateParticles()
    updateZzz(ch.sleeping, ch.x, ch.y)
  }

  // ─── draw ──────────────────────────────────────

  function draw() {
    ctx.clearRect(0, 0, W, H)
    drawTrail()
    drawParticles()
    drawZzz()
    drawCharacter()
    drawBubble(ch.x, ch.y + ch.hopY)
  }

  // ─── loop ──────────────────────────────────────

  let lastTime = performance.now()

  function loop(now) {
    dt = Math.min((now - lastTime) / 1000, 0.05)
    lastTime = now
    update()
    draw()
    animId = requestAnimationFrame(loop)
  }

  // ─── resize ────────────────────────────────────

  function resize() {
    W = canvas.width = window.innerWidth
    H = canvas.height = window.innerHeight
  }

  // ─── click handler ─────────────────────────────

  function handleClick(e) {
    const dx = e.clientX - ch.x, dy = e.clientY - (ch.y + ch.hopY)
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < CONFIG.size + 20) {
      ch.clickCount++; ch.clickReset = 0
      ch.squashTarget = 0.7; ch.hopV = -2.5
      ch.idleTimer = 0; ch.sleepTimer = 0
      spawnParticles(ch.x, ch.y - 4, 4, CONFIG.glyphColor)
      if (ch.sleeping) {
        ch.sleeping = false; ch.sleepTimer = 0
        say(pick(PHRASES.wake)); ch.squashTarget = 1.2; return
      }
      if (ch.clickCount >= CONFIG.manyClickThreshold) {
        say(pick(PHRASES.manyClicks), 3.5)
        ch.vx += (ch.x - e.clientX) * 0.08; ch.vy += (ch.y - e.clientY) * 0.08
      } else {
        say(pick(PHRASES.click))
        ch.vx += (dx < 0 ? 1 : -1) * CONFIG.clickPushForce; ch.vy -= CONFIG.clickPushForce * 0.5
      }
    } else {
      if (ch.sleeping) { ch.sleeping = false; ch.sleepTimer = 0; say(pick(PHRASES.wake)) }
      ch.idleTimer = 0; ch.sleepTimer = 0
    }
  }

  // ─── mouse ─────────────────────────────────────

  function handleMouseMove(e) {
    mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true
  }
  function handleMouseLeave() { mouse.active = false }

  // ─── public API ────────────────────────────────

  return {
    start() {
      resize()
      ch.x = W * 0.65; ch.y = H * 0.55
      newWaypoint()
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseleave', handleMouseLeave)
      window.addEventListener('resize', resize)
      window.addEventListener('click', handleClick)
      lastTime = performance.now()
      animId = requestAnimationFrame(loop)
    },

    stop() {
      if (animId) cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', resize)
      window.removeEventListener('click', handleClick)
    },

    setSlide(slide, index, total) {
      const changed = currentSlide && (currentSlide.id !== slide.id)
      currentSlide = slide
      slideIndex = index
      totalSlides = total

      if (changed) {
        slideDwellTime = 0
        lastPacingHintTime = 0

        // wake on slide change
        if (ch.sleeping) {
          ch.sleeping = false
          ch.sleepTimer = 0
        }

        // small reaction
        ch.hopV = -1.5
        ch.squashTarget = 0.85
        spawnParticles(ch.x, ch.y - 4, 3, CONFIG.glyphColor)

        // contextual remark
        if (bubble.opacity <= 0.1) {
          const remark = getSlideRemark(slide)
          if (remark) say(remark, 2.5)
        }
      }
    },

    setSessionTime(t) { sessionTime = t },

    getCharPos() { return { x: ch.x, y: ch.y } },
  }
}
