import { useRef, useEffect } from 'react'
import * as THREE from 'three'

// Shared helpers
function mat(color, emissive = false) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: emissive ? 0.3 : 0.6,
    metalness: emissive ? 0.1 : 0.05,
    ...(emissive ? { emissive: color, emissiveIntensity: 0.15 } : {})
  })
}

const BLACK = 0x171717
const RED = 0xDC2626
const GRAY = 0xD4D4D4
const MUTED = 0x737373

const blackMat = mat(BLACK)
const redMat = mat(RED, true)
const grayMat = mat(GRAY)
const mutedMat = mat(MUTED)

// ============================================================
// SCENE BUILDERS — each returns { scene, camera, animate(t) }
// ============================================================

function buildScene1_Builder() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xFFFFFF)
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 500)
  camera.position.set(12, 10, 16)
  camera.lookAt(0, 3, 0)

  const vGeo = new THREE.BoxGeometry(1, 1, 1)
  const figure = new THREE.Group()

  function addV(x, y, z, m = blackMat) {
    const mesh = new THREE.Mesh(vGeo, m); mesh.position.set(x, y, z); mesh.castShadow = true; figure.add(mesh)
  }
  addV(-0.5,0,0); addV(-0.5,1,0); addV(0.5,0,0); addV(0.5,1,0)
  addV(0,2,0); addV(0,3,0); addV(0,4,0); addV(-1,4,0); addV(1,4,0)
  addV(-1,3,0); addV(-1,2,0.5); addV(1,3,0); addV(1,2,0.5)
  addV(0,5,0); addV(0,6,0, redMat)
  scene.add(figure)

  const blockPositions = [
    {target:new THREE.Vector3(3,0,2),delay:0},{target:new THREE.Vector3(4,0,2),delay:0.5},
    {target:new THREE.Vector3(3,1,2),delay:1},{target:new THREE.Vector3(4,1,2),delay:1.5},
    {target:new THREE.Vector3(3,2,2),delay:2},{target:new THREE.Vector3(4,2,2),delay:2.5},
    {target:new THREE.Vector3(3,0,3),delay:0.3},{target:new THREE.Vector3(4,0,3),delay:0.8},
    {target:new THREE.Vector3(3,1,3),delay:1.3},{target:new THREE.Vector3(4,1,3),delay:1.8},
    {target:new THREE.Vector3(3.5,3,2.5),delay:3},
    {target:new THREE.Vector3(-3,0,-1),delay:0.2},{target:new THREE.Vector3(-3,1,-1),delay:0.7},
    {target:new THREE.Vector3(-3,0,0),delay:1.1},{target:new THREE.Vector3(-3,1,0),delay:1.6},
    {target:new THREE.Vector3(-3,2,-0.5),delay:2.2},
  ]
  const floatingBlocks = []
  blockPositions.forEach(bp => {
    const m = bp.target.y > 2 ? redMat : (Math.random() > 0.7 ? mutedMat : grayMat)
    const mesh = new THREE.Mesh(vGeo, m)
    mesh.castShadow = true
    mesh.position.set(bp.target.x+(Math.random()-0.5)*8, bp.target.y+15+Math.random()*10, bp.target.z+(Math.random()-0.5)*8)
    scene.add(mesh)
    floatingBlocks.push({mesh, target:bp.target, delay:bp.delay, arrived:false, speed:0.02+Math.random()*0.01})
  })

  const pGeo = new THREE.BoxGeometry(0.15,0.15,0.15)
  const particles = []
  for(let i=0;i<40;i++){
    const p = new THREE.Mesh(pGeo, redMat)
    p.position.set((Math.random()-0.5)*12, Math.random()*12, (Math.random()-0.5)*12)
    scene.add(p)
    particles.push({mesh:p, vy:0.01+Math.random()*0.02, vx:(Math.random()-0.5)*0.01})
  }

  addLights(scene)

  let angle = 0
  return { scene, camera, animate(t) {
    angle += 0.0006
    camera.position.x = Math.cos(angle)*18; camera.position.z = Math.sin(angle)*18
    camera.position.y = 10+Math.sin(t*0.06); camera.lookAt(0,3,0)
    floatingBlocks.forEach(b => {
      if(t<b.delay) return
      if(b.arrived){b.mesh.position.y=b.target.y+Math.sin(t*0.4+b.delay)*0.03; return}
      const dir = new THREE.Vector3().subVectors(b.target, b.mesh.position)
      const dist = dir.length()
      if(dist<0.1){b.mesh.position.copy(b.target);b.arrived=true}
      else{dir.normalize().multiplyScalar(Math.min(b.speed*0.2*(1+t*0.06),dist));b.mesh.position.add(dir)}
    })
    figure.position.y = Math.sin(t*0.3)*0.1
    particles.forEach(p => {
      p.mesh.position.y+=p.vy*0.2; p.mesh.position.x+=p.vx*0.2
      p.mesh.rotation.x+=0.004; p.mesh.rotation.z+=0.002
      if(p.mesh.position.y>14){p.mesh.position.y=-1;p.mesh.position.x=(Math.random()-0.5)*12;p.mesh.position.z=(Math.random()-0.5)*12}
    })
  }}
}

function buildScene2_Compass() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xFFFFFF)
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 500)
  camera.position.set(0, 14, 18); camera.lookAt(0, 0, 0)

  const vGeo = new THREE.BoxGeometry(1, 1, 1)
  const compass = new THREE.Group()

  for(let x=-1;x<=1;x++) for(let z=-1;z<=1;z++){
    const m=new THREE.Mesh(vGeo,redMat);m.position.set(x,0,z);m.castShadow=true;compass.add(m)
  }
  const m2=new THREE.Mesh(vGeo,redMat);m2.position.set(0,1,0);compass.add(m2)

  const dirs=[{dx:1,dz:0},{dx:-1,dz:0},{dx:0,dz:1},{dx:0,dz:-1},{dx:1,dz:1},{dx:-1,dz:-1},{dx:1,dz:-1},{dx:-1,dz:1}]
  const lens=[6,6,6,6,4,4,4,4]
  dirs.forEach((dir,idx)=>{
    const len=lens[idx]; const isCard=idx<4
    for(let i=2;i<=len;i++){
      const mt=(i===len)?redMat:(isCard?blackMat:grayMat)
      const m=new THREE.Mesh(vGeo,mt);m.position.set(dir.dx*i,0,dir.dz*i);m.castShadow=true;compass.add(m)
      if(i===len){const tip=new THREE.Mesh(vGeo,redMat);tip.position.set(dir.dx*i,1,dir.dz*i);compass.add(tip)}
    }
  })
  scene.add(compass)

  const orbiters=[]
  for(let i=0;i<8;i++){
    const angle=(i/8)*Math.PI*2; const radius=9+Math.random()*2; const height=2+Math.random()*3
    const m=new THREE.Mesh(new THREE.BoxGeometry(0.4,0.4,0.4), i%3===0?redMat:mat(0x999999))
    scene.add(m)
    orbiters.push({mesh:m,angle,radius,height,speed:0.3+Math.random()*0.3})
  }

  addLights(scene)

  return { scene, camera, animate(t) {
    compass.rotation.y=t*0.03; compass.position.y=Math.sin(t*0.16)*0.3
    orbiters.forEach(o=>{
      o.angle+=o.speed*0.002
      o.mesh.position.x=Math.cos(o.angle)*o.radius; o.mesh.position.z=Math.sin(o.angle)*o.radius
      o.mesh.position.y=o.height+Math.sin(t*0.3+o.angle)*0.5
      o.mesh.rotation.x+=0.004; o.mesh.rotation.y+=0.006
    })
  }}
}

function buildScene3_Steps() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xFFFFFF)
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 500)
  camera.position.set(16, 12, 20); camera.lookAt(0, 3, 0)

  const vGeo = new THREE.BoxGeometry(1, 1, 1)
  const platforms=[
    {x:-8,h:2,w:3,d:3,color:MUTED,label:'done'},{x:-4,h:4,w:3,d:3,color:MUTED,label:'done'},
    {x:0,h:6,w:3,d:3,color:MUTED,label:'done'},{x:4,h:8,w:3,d:3,color:RED,label:'active'},
    {x:8,h:10,w:3,d:3,color:GRAY,label:'upcoming'},
  ]
  const platformGroups=[]
  platforms.forEach(p=>{
    const group=new THREE.Group(); const isActive=p.label==='active'; const isUpcoming=p.label==='upcoming'
    for(let x=0;x<p.w;x++) for(let z=0;z<p.d;z++) for(let y=0;y<p.h;y++){
      const isShell=x===0||x===p.w-1||z===0||z===p.d-1||y===0||y===p.h-1
      if(!isShell&&!isActive) continue
      if(isUpcoming){
        const edges=new THREE.EdgesGeometry(vGeo)
        const line=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:GRAY,transparent:true,opacity:0.4}))
        line.position.set(p.x+x,y,z);group.add(line)
      } else {
        let color=p.color; if(isActive&&y===p.h-1) color=RED; else if(isActive) color=(y%2===0)?BLACK:0x2A2A2A
        const mt=new THREE.MeshStandardMaterial({color,roughness:isActive?0.4:0.8,metalness:isActive?0.2:0.05})
        const m=new THREE.Mesh(vGeo,mt);m.position.set(p.x+x,y,z);m.castShadow=true;group.add(m)
      }
    }
    scene.add(group); platformGroups.push({group,config:p})
  })

  const activeP=platforms[3]; const pGeo=new THREE.BoxGeometry(0.2,0.2,0.2)
  const particles=[]
  for(let i=0;i<30;i++){
    const m=new THREE.Mesh(pGeo,new THREE.MeshStandardMaterial({color:RED,roughness:0.3}))
    m.position.set(activeP.x+1+(Math.random()-0.5)*3, activeP.h+Math.random()*5, 1+(Math.random()-0.5)*3)
    scene.add(m); particles.push({mesh:m,vy:0.015+Math.random()*0.02,baseY:activeP.h})
  }

  addLights(scene)

  let camAngle=0.3
  return { scene, camera, animate(t) {
    camAngle+=0.0004
    camera.position.x=Math.cos(camAngle)*22; camera.position.z=Math.sin(camAngle)*22
    camera.position.y=12+Math.sin(t*0.06); camera.lookAt(0,4,0)
    platformGroups[3].group.position.y=Math.sin(t*0.4)*0.15
    particles.forEach(p=>{
      p.mesh.position.y+=p.vy*0.2; p.mesh.rotation.x+=0.006; p.mesh.rotation.z+=0.004
      if(p.mesh.position.y>p.baseY+8){p.mesh.position.y=p.baseY;p.mesh.position.x=activeP.x+1+(Math.random()-0.5)*3;p.mesh.position.z=1+(Math.random()-0.5)*3}
    })
  }}
}

function buildScene4_Archive() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xFFFFFF)
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 500)
  camera.position.set(0, 8, 18); camera.lookAt(0, 2, 0)

  const vGeo = new THREE.BoxGeometry(1, 1, 1)
  const archive = new THREE.Group()

  for(let x=-4;x<=-1;x++) for(let y=0;y<5;y++){
    const isEdge=x===-4||y===0||y===4
    archive.add(Object.assign(new THREE.Mesh(vGeo,isEdge?blackMat:grayMat),{position:new THREE.Vector3(x,y,0),castShadow:true}))
  }
  for(let x=1;x<=4;x++) for(let y=0;y<5;y++){
    const isEdge=x===4||y===0||y===4
    archive.add(Object.assign(new THREE.Mesh(vGeo,isEdge?blackMat:grayMat),{position:new THREE.Vector3(x,y,0),castShadow:true}))
  }
  for(let y=0;y<5;y++) archive.add(Object.assign(new THREE.Mesh(vGeo,redMat),{position:new THREE.Vector3(0,y,0),castShadow:true}))

  const lineGeo=new THREE.BoxGeometry(0.3,0.15,0.15); const lineMat2=mat(RED,true)
  for(let row=1;row<=3;row++) for(let col=0;col<3;col++){
    archive.add(Object.assign(new THREE.Mesh(lineGeo,lineMat2),{position:new THREE.Vector3(-3+col*0.8,row,0.55)}))
    archive.add(Object.assign(new THREE.Mesh(lineGeo,lineMat2),{position:new THREE.Vector3(2+col*0.8,row,0.55)}))
  }
  archive.position.y=2; scene.add(archive)

  const memGeo=new THREE.BoxGeometry(0.25,0.25,0.25); const memColors=[RED,BLACK,MUTED,GRAY]
  const memories=[]
  for(let i=0;i<50;i++){
    const col=memColors[Math.floor(Math.random()*memColors.length)]
    const mt=new THREE.MeshStandardMaterial({color:col,roughness:0.5,transparent:true,opacity:0.8})
    const m=new THREE.Mesh(memGeo,mt)
    const angle=Math.random()*Math.PI*2; const radius=1+Math.random()*2
    m.position.set(Math.cos(angle)*radius, 2+Math.random()*3, Math.sin(angle)*radius)
    scene.add(m)
    memories.push({mesh:m,angle,radius:radius+Math.random()*4,vy:0.005+Math.random()*0.015,vAngle:0.005+Math.random()*0.01,maxY:10+Math.random()*5,startY:2+Math.random()*2})
  }

  addLights(scene)

  let camAngle=0
  return { scene, camera, animate(t) {
    camAngle+=0.0006
    camera.position.x=Math.cos(camAngle)*16; camera.position.z=Math.sin(camAngle)*16
    camera.position.y=8+Math.sin(t*0.08); camera.lookAt(0,3,0)
    archive.rotation.y=Math.sin(t*0.06)*0.3; archive.position.y=2+Math.sin(t*0.16)*0.3
    memories.forEach(m=>{
      m.angle+=m.vAngle*0.2
      m.mesh.position.x=Math.cos(m.angle)*m.radius; m.mesh.position.z=Math.sin(m.angle)*m.radius
      m.mesh.position.y+=m.vy*0.2; m.mesh.rotation.x+=0.004; m.mesh.rotation.z+=0.003
      const progress=(m.mesh.position.y-m.startY)/(m.maxY-m.startY)
      m.mesh.material.opacity=Math.max(0,1-progress)
      if(m.mesh.position.y>m.maxY){m.mesh.position.y=m.startY;m.radius=1+Math.random()*2;m.mesh.material.opacity=0.8}
    })
  }}
}

function buildScene9_Mindshift() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xFFFFFF)
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 500)
  camera.position.set(0, 12, 28); camera.lookAt(0, 4, 0)

  const PALETTE = {
    coral:0xFF6B6B, amber:0xFFB347, gold:0xFFD93D, mint:0x6BCB77, teal:0x4ECDC4,
    sky:0x45B7D1, indigo:0x6C5CE7, violet:0xA55EEA, rose:0xFD79A8, warm:0xFAB1A0, sand:0xF8E9A1
  }
  const palKeys = Object.keys(PALETTE)
  const vGeo = new THREE.BoxGeometry(1, 1, 1)
  const islands = []

  function createIsland(cx,cy,cz,radius,colorA,colorB){
    const group=new THREE.Group(); const matA=mat(colorA,true); const matB=mat(colorB); const darkMat=mat(0x5C4033)
    for(let x=-radius;x<=radius;x++) for(let z=-radius;z<=radius;z++){
      if(Math.sqrt(x*x+z*z)>radius) continue
      const surfaceY=Math.floor(Math.sin(x*0.5)*Math.cos(z*0.5)*1.5)
      group.add(Object.assign(new THREE.Mesh(vGeo,Math.random()>0.4?matA:matB),{position:new THREE.Vector3(x,surfaceY,z),castShadow:true}))
      const depth=Math.max(1,Math.floor((radius-Math.sqrt(x*x+z*z))*0.8))
      for(let y=1;y<=depth;y++) group.add(Object.assign(new THREE.Mesh(vGeo,darkMat),{position:new THREE.Vector3(x,surfaceY-y,z)}))
    }
    const structs=2+Math.floor(Math.random()*3)
    for(let i=0;i<structs;i++){
      const sx=Math.round((Math.random()-0.5)*radius*1.2); const sz=Math.round((Math.random()-0.5)*radius*1.2)
      const sh=2+Math.floor(Math.random()*4); const sMat=mat(Math.random()>0.5?colorA:colorB,true)
      for(let y=0;y<sh;y++) group.add(Object.assign(new THREE.Mesh(vGeo,sMat),{position:new THREE.Vector3(sx,y+1,sz),castShadow:true}))
      const crownMat=mat(PALETTE[palKeys[Math.floor(Math.random()*palKeys.length)]],true)
      for(let dx=-1;dx<=1;dx++) for(let dz=-1;dz<=1;dz++) if(Math.random()>0.4)
        group.add(Object.assign(new THREE.Mesh(vGeo,crownMat),{position:new THREE.Vector3(sx+dx,sh+1,sz+dz),castShadow:true}))
    }
    group.position.set(cx,cy,cz); scene.add(group)
    islands.push({group,baseY:cy,speed:0.1+Math.random()*0.1,phase:Math.random()*Math.PI*2})
  }

  createIsland(0,0,0,5,PALETTE.mint,PALETTE.teal)
  createIsland(-10,2,-4,3,PALETTE.coral,PALETTE.rose)
  createIsland(9,-1,3,3,PALETTE.gold,PALETTE.amber)
  createIsland(3,6,-8,2,PALETTE.sky,PALETTE.indigo)
  createIsland(-6,4,6,2,PALETTE.violet,PALETTE.warm)

  const particles=[]
  for(let i=0;i<60;i++){
    const col=PALETTE[palKeys[Math.floor(Math.random()*palKeys.length)]]
    const size=0.15+Math.random()*0.2; const pMat=mat(col,true)
    const m=new THREE.Mesh(new THREE.BoxGeometry(size,size,size),pMat)
    m.position.set((Math.random()-0.5)*30, Math.random()*15-3, (Math.random()-0.5)*25)
    scene.add(m)
    particles.push({mesh:m,vy:0.002+Math.random()*0.004,vx:(Math.random()-0.5)*0.003,vz:(Math.random()-0.5)*0.003,rotSpeed:(Math.random()-0.5)*0.01})
  }

  addLights(scene)
  scene.add(new THREE.PointLight(PALETTE.coral,0.4,30).translateX(-8).translateY(5))
  scene.add(new THREE.PointLight(PALETTE.sky,0.3,30).translateX(8).translateY(3).translateZ(-5))

  let camAngle=0
  return { scene, camera, animate(t) {
    camAngle+=0.0004
    camera.position.x=Math.cos(camAngle)*26; camera.position.z=Math.sin(camAngle)*26
    camera.position.y=12+Math.sin(t*0.05)*2; camera.lookAt(0,3,0)
    islands.forEach(isl=>{isl.group.position.y=isl.baseY+Math.sin(t*isl.speed+isl.phase)*0.4})
    particles.forEach(p=>{
      p.mesh.position.y+=p.vy; p.mesh.position.x+=p.vx; p.mesh.position.z+=p.vz
      p.mesh.rotation.x+=p.rotSpeed; p.mesh.rotation.z+=p.rotSpeed*0.7
      if(p.mesh.position.y>14){p.mesh.position.y=-3;p.mesh.position.x=(Math.random()-0.5)*30;p.mesh.position.z=(Math.random()-0.5)*25}
    })
  }}
}

// Shared lighting setup
function addLights(scene) {
  scene.add(new THREE.AmbientLight(0xffffff, 0.6))
  const sun = new THREE.DirectionalLight(0xffffff, 1.1)
  sun.position.set(10, 20, 10); sun.castShadow = true
  sun.shadow.mapSize.set(512, 512); sun.shadow.camera.far = 50
  sun.shadow.camera.left = -15; sun.shadow.camera.right = 15
  sun.shadow.camera.top = 15; sun.shadow.camera.bottom = -15
  scene.add(sun)
  scene.add(new THREE.DirectionalLight(0xE0E8FF, 0.3).translateZ(-10))
}

// Scene registry
const BUILDERS = {
  '/voxels/slide1-builder.html': buildScene1_Builder,
  '/voxels/slide2-compass.html': buildScene2_Compass,
  '/voxels/slide3-steps.html': buildScene3_Steps,
  '/voxels/slide4-archive.html': buildScene4_Archive,
  '/voxels/slide9-mindshift.html': buildScene9_Mindshift,
}

// ============================================================
// React Component
// ============================================================

export default function VoxelScene({ src, className, style }) {
  const containerRef = useRef(null)
  const cleanupRef = useRef(null)

  useEffect(() => {
    const builder = BUILDERS[src]
    if (!builder || !containerRef.current) return

    const container = containerRef.current
    const { scene, camera, animate } = builder()

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0xFFFFFF, 0)
    container.appendChild(renderer.domElement)

    function resize() {
      const w = container.clientWidth, h = container.clientHeight
      if (w === 0 || h === 0) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    resize()
    window.addEventListener('resize', resize)

    const clock = new THREE.Clock()
    let raf
    function loop() {
      raf = requestAnimationFrame(loop)
      animate(clock.getElapsedTime())
      renderer.render(scene, camera)
    }
    loop()

    cleanupRef.current = () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }

    return () => { if (cleanupRef.current) cleanupRef.current() }
  }, [src])

  return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%', ...style }} />
}
