export const NodeType = {
  MINDSET: 'MINDSET',
  CODING: 'CODING',
  CREATIVE: 'CREATIVE',
  MUSIC: 'MUSIC',
  DESIGN: 'DESIGN',
  INFRA: 'INFRA'
}

export const SCHEMA_NODES = [
  // ═══ LEFT COLUMN: LEVELS (isLevel = true) ═══
  {
    id: 'level-1',
    type: NodeType.MINDSET,
    isLevel: true,
    title: 'Lvl 1: Awareness',
    description: 'How AI is changing life, work, and the world.',
    details: 'The hardest part isn\'t the tools — it\'s believing what is possible. The real barrier is the "glass ceiling" in your head. Start by understanding how AI is reshaping industries, regulations, and daily life.',
    connections: ['level-2'],
    tools: ['AI Mindset YouTube', 'gap.aimindset.org'],
    timeEstimate: '0-5 Hours',
    x: 0, y: 0,
    toolDetails: [
      { name: 'AI Mindset YouTube', url: 'https://youtube.com/@aimindset', category: 'YouTube', description: 'Video lectures and workshops from the AI Mindset Lab.', bestFor: 'Getting started, understanding the landscape.', pros: 'Free, structured, in Russian.', cons: 'New channel, growing library.' },
      { name: 'AI Mindset Gap Map', url: 'https://gap.aimindset.org/', category: 'Interactive Tool', description: 'Interactive map for finding your AI adoption gaps.', bestFor: 'Self-assessment, finding where to start.', pros: 'Visual, actionable.', cons: 'Work in progress.' },
    ]
  },
  {
    id: 'level-2',
    type: NodeType.MINDSET,
    isLevel: true,
    title: 'Lvl 2: Usage & Diversity',
    description: 'Probing the filters. DeepSeek vs GPT vs Claude.',
    details: 'Models are not "all human knowledge" but a heavily filtered slice. Each company has different safety filters, data, and cultural biases. Try the same provocative questions across models — you\'ll see the difference immediately.',
    connections: ['level-3'],
    tools: ['ChatGPT', 'Claude', 'DeepSeek', 'Gemini', 'Perplexity'],
    timeEstimate: '5-30 Hours',
    x: 0, y: 1,
    toolDetails: [
      { name: 'ChatGPT', url: 'https://chat.openai.com', category: 'Chat', description: 'The most popular AI chat. Strong safety filters, good for code and analysis.', bestFor: 'General tasks, coding, analysis.', pros: 'Ecosystem, plugins, GPT Store.', cons: 'Conservative filters, expensive Pro.' },
      { name: 'Claude', url: 'https://claude.ai', category: 'Chat', description: 'Best for long texts, reasoning, and nuanced conversation.', bestFor: 'Writing, analysis, long documents.', pros: 'Thoughtful, large context.', cons: 'Cautious, sometimes refuses.' },
      { name: 'DeepSeek', url: 'https://chat.deepseek.com', category: 'Chat', description: 'Chinese open model with different cultural filters.', bestFor: 'Comparing perspectives, coding.', pros: 'Free, open weights, different POV.', cons: 'Chinese political censorship.' },
      { name: 'Gemini', url: 'https://gemini.google.com', category: 'Chat', description: 'Google\'s model with massive context and ecosystem integration.', bestFor: 'Research, Google Workspace integration.', pros: 'Huge context, multimodal.', cons: 'Conservative, Google lock-in.' },
      { name: 'Perplexity', url: 'https://perplexity.ai', category: 'AI Search', description: 'Search + AI. Always gives sources.', bestFor: 'Fact-checking, research with citations.', pros: 'Sources, Pro Search mode.', cons: 'Not great for creative tasks.' },
    ]
  },
  {
    id: 'level-3',
    type: NodeType.MINDSET,
    isLevel: true,
    title: 'Lvl 3: Context & RAG',
    description: 'Knowledge Bases, Second Brains.',
    details: 'Moving beyond the "mainstream" answer. Using RAG (Retrieval-Augmented Generation) to feed specific books or context. Reducing hallucinations by providing specific modern data.',
    connections: ['level-4'],
    tools: ['Custom GPTs', 'NotebookLM', 'Obsidian'],
    timeEstimate: '30-100 Hours',
    x: 0, y: 2
  },
  {
    id: 'level-4',
    type: NodeType.MINDSET,
    isLevel: true,
    title: 'Lvl 4: Building & Engineering',
    description: 'Creating custom tools for yourself.',
    details: 'Building your own instruments with AI. From app generators to full IDEs, from simple automations to complex agent pipelines. The moment you stop consuming and start creating — everything changes.',
    connections: [],
    tools: ['Cursor', 'Windsurf', 'Lovable', 'MCP'],
    timeEstimate: '50-200+ Hours',
    x: 0, y: 3
  },

  // ═══ RIGHT SIDE: TOOLS & DOMAINS (distributed by level) ═══

  // --- Level 2 row: Creative consumption ---
  {
    id: 'creative-image',
    type: NodeType.CREATIVE,
    title: 'Image Generation',
    description: 'The vast ecosystem of Image Models.',
    details: 'From high-end art to precise editing. The ecosystem is huge.',
    connections: ['creative-video'],
    tools: ['Midjourney', 'Flux', 'Seedream', 'Fusara'],
    timeEstimate: '20 Hours',
    x: 2, y: 1,
    toolDetails: [
      { name: 'Midjourney v7', url: 'https://midjourney.com', category: 'Art Model', description: 'The aesthetic king. Painterly and rich.', bestFor: 'High-end art, fantasy, advertising.', pros: 'Aesthetics, Sref (Style Reference).', cons: 'Text generation is weak, Hands.' },
      { name: 'Flux.1', url: 'https://blackforestlabs.ai', category: 'Open Model', description: 'Excellent prompt adherence and object rotation.', bestFor: 'Complex scenes, realistic text.', pros: 'Prompt adherence, Rotation.', cons: 'Plastic/Smooth look.' },
      { name: 'Seedream (Dreamina)', url: 'https://dreamina.capcut.com', category: 'Gen & Edit', description: 'CapCut\'s powerhouse. Great text and editing.', bestFor: 'Realism, Editing, Typography.', pros: 'Inpaint tools, Upscaler, Describe.', cons: 'Limited creativity vs MJ.' },
      { name: 'Fusara', url: 'https://fusara.ai', category: 'Aggregator', description: 'Access to 10+ models (Flux, MJ, Imagen 4, etc) in one place.', bestFor: 'Comparing models, Accessing paid models.', pros: 'Many models, Node graph.', cons: 'Wrapper dependency.' },
      { name: 'Imagen 4', url: 'https://labs.google/fx/tools/image-fx', category: 'Model', description: 'Google\'s photorealism standard.', bestFor: 'Photorealism, Text.', pros: 'Micro-details, Lighting.', cons: 'Plastic/Retouched look.' },
      { name: 'Fooocus', url: 'https://github.com/lllyasviel/Fooocus', category: 'Local Interface', description: 'Simplest offline interface for SDXL.', bestFor: 'Beginners wanting local privacy.', pros: 'Easy, Auto-prompting.', cons: 'Less control than ComfyUI.' }
    ]
  },
  {
    id: 'music-gen',
    type: NodeType.MUSIC,
    title: 'Music & Audio',
    description: 'Suno, Udio & Voice Cloning.',
    details: 'Generating the soundtrack of the future. From "Chain-smoking hits" to precise professional dubbing.',
    connections: [],
    tools: ['Suno', 'Udio', 'ElevenLabs'],
    timeEstimate: 'Fun / Fast',
    x: 3, y: 1,
    toolDetails: [
      { name: 'Suno', url: 'https://suno.com', category: 'Song Generator', description: 'Radio-ready songs from simple prompts.', bestFor: 'Catchy hooks, Full songs, Fun.', pros: 'High creativity, viral potential.', cons: 'Low control over stems.' },
      { name: 'Udio', url: 'https://udio.com', category: 'Song Generator', description: 'High fidelity audio with complex structure control.', bestFor: 'Realistic vocals, complex genres.', pros: 'Audio fidelity, Inpainting.', cons: 'Steeper learning curve, sometimes ignores prompts.' },
      { name: 'ElevenLabs', url: 'https://elevenlabs.io', category: 'Speech (TTS)', description: 'Industry standard for AI Voice.', bestFor: 'Dubbing, Audiobooks, Narrators.', pros: 'Unmatched realism, Voice Cloning.', cons: 'Music is not the focus, Legal risks.' }
    ]
  },

  // --- Level 3 row: Design & deeper creative ---
  {
    id: 'design-start',
    type: NodeType.DESIGN,
    title: 'Design & Vector',
    description: 'Clean logos, icons, and consistent assets.',
    details: 'Moving away from raster noise to clean, usable design assets and consistent styling.',
    connections: ['design-3d'],
    tools: ['Recraft', 'Ideogram', 'Krea', 'Visual Electric'],
    timeEstimate: '10 Hours',
    x: 1, y: 2,
    toolDetails: [
      { name: 'Recraft', url: 'https://recraft.ai', category: 'Vector/Brand', description: 'Infinite canvas for Vector generation and Brand sets.', bestFor: 'SVG icons, consistent brand identity.', pros: 'Editable SVGs, Style consistency.', cons: 'Artifacts in raster mode.' },
      { name: 'Ideogram', url: 'https://ideogram.ai', category: 'Typography', description: 'Leader in rendering text inside images.', bestFor: 'T-shirt designs, posters with text.', pros: 'Best-in-class typography.', cons: 'Queue times, Strict moderation.' },
      { name: 'Visual Electric', url: 'https://visualelectric.com', category: 'Moodboarding', description: 'Infinite canvas for aesthetic exploration.', bestFor: 'Designers, Moodboards, Photorealism.', pros: 'Trained references for style consistency.', cons: 'Weaker at rotation/physics.' },
      { name: 'Krea.ai', url: 'https://www.krea.ai', category: 'Realtime Canvas', description: 'Realtime generation and upscaling.', bestFor: 'Interactive design, Upscaling.', pros: 'Realtime, Style consistency.', cons: 'Artifacts in group shots.' }
    ]
  },
  {
    id: 'design-3d',
    type: NodeType.DESIGN,
    title: '3D & Spatial',
    description: 'Text-to-3D and SVG conversion.',
    details: 'Generating assets for the spatial web and game design.',
    connections: [],
    tools: ['Spline', 'Formia', 'Rodin'],
    timeEstimate: 'Project Based',
    x: 2, y: 2,
    toolDetails: [
      { name: 'Spline', url: 'https://spline.design', category: '3D Design', description: 'Web-based 3D design with AI text-to-3D.', bestFor: 'Web 3D assets, simple models.', pros: 'Browser based, export to web.', cons: 'Limited modeling tools vs Blender.' },
      { name: 'Formia.so', url: 'https://formia.so', category: 'SVG to 3D', description: 'Instant conversion of 2D vectors to 3D meshes.', bestFor: 'Logos to 3D.', pros: 'Very fast specialized tool.', cons: 'Narrow use case.' }
    ]
  },
  {
    id: 'creative-video',
    type: NodeType.CREATIVE,
    title: 'Video Generation',
    description: 'Motion, Physics & World Building.',
    details: 'Moving from static pixels to temporal consistency. The "Hollywood in a box" stack.',
    connections: [],
    tools: ['Runway', 'Luma', 'Kling', 'Veo', 'Pika'],
    timeEstimate: '$$ Expensive',
    x: 3, y: 2,
    toolDetails: [
      { name: 'Sora', url: 'https://sora.chatgpt.com', category: 'Model', description: 'OpenAI\'s physics simulator.', bestFor: 'Realism, Complex camera moves.', pros: 'High realism.', cons: 'Physics glitches.' },
      { name: 'Veo 3', url: 'https://deepmind.google/models/veo', category: 'Model', description: 'Google\'s cinematic model with Audio Sync.', bestFor: 'Cinematic shots, Dialogue.', pros: 'Audio sync, 1080p.', cons: 'Availability.' },
      { name: 'Kling', url: 'https://klingai.com', category: 'Model', description: 'Long clips (2 mins), complex physics.', bestFor: 'Long scenes, Action.', pros: 'Duration, Realism.', cons: 'UI/UX can be clunky.' },
      { name: 'Runway Gen-3', url: 'https://runwayml.com', category: 'Platform', description: 'Full editor (tracking, inpaint) + Generation.', bestFor: 'Professional control, Motion Brush.', pros: 'Editing tools are best in class.', cons: 'Gen-2 is dated, Gen-3 is costly.' },
      { name: 'Luma Dream Machine', url: 'https://lumalabs.ai', category: 'Model', description: 'Fast, smooth motion, loops.', bestFor: 'Social clips, morphs.', pros: 'Speed, Morphing.', cons: 'Character consistency.' },
      { name: 'Pika', url: 'https://pika.art', category: 'Platform', description: 'Simple interface, fast short clips.', bestFor: 'Social media, Image animation.', pros: 'Speed, Simplicity.', cons: 'Quality lower than leaders.' },
      { name: 'Hailuo.ai', url: 'https://hailuo.ai', category: 'Model', description: 'TikTok ecosystem model.', bestFor: 'Fast gen, Start-to-End transitions.', pros: 'Follows prompts well.', cons: 'Strict moderation.' }
    ]
  },

  // --- Level 4 row: Building & Engineering ---
  {
    id: 'coding-generators',
    type: NodeType.CODING,
    title: 'App Generators',
    description: 'Prompt-to-App tools. Speed over control.',
    details: 'Tools for instant prototyping. Great for the "First 80%" of a product.',
    connections: ['coding-ide'],
    tools: ['Lovable', 'Replit', 'bolt.new', 'v0.dev'],
    timeEstimate: 'Weekend Project',
    x: 1, y: 3,
    toolDetails: [
      { name: 'Lovable', url: 'https://lovable.dev', category: 'Prompt-to-Application', description: 'Rapid full-stack prototyping with Supabase integration.', bestFor: 'Scaffolding full-stack foundations to export later.', pros: 'Fast scaffolding, GitHub integration.', cons: 'Expensive credit model, UI quality varies.' },
      { name: 'Replit', url: 'https://replit.com', category: 'Cloud IDE / Agent', description: 'All-in-one cloud environment. Zero setup deployment.', bestFor: 'Fast MVP/Demos, Non-technical founders.', pros: 'Zero setup, "0 to 1" speed.', cons: 'Harder for serious SaaS scaling, vendor lock-in.' },
      { name: 'bolt.new', url: 'https://bolt.new', category: 'Browser Container', description: 'Instant full-stack generation in the browser (WebContainers).', bestFor: 'One-off prototypes, browser demos.', pros: 'Zero install, fast entry.', cons: 'No native git, instability, credit model.' },
      { name: 'v0.dev', url: 'https://v0.dev', category: 'UI Generator', description: 'Vercel ecosystem tool for Next.js/Tailwind UI.', bestFor: 'High quality UI/Frontend prototypes.', pros: 'Excellent shadcn/ui integration.', cons: 'Context limits, credit model.' }
    ]
  },
  {
    id: 'coding-ide',
    type: NodeType.CODING,
    title: 'AI-Augmented IDEs',
    description: 'The "Last 20%". Logic, Refactoring, Scale.',
    details: 'Where the real work happens. Moving from "Generating" to "Engineering". These tools keep you in the flow.',
    connections: [],
    tools: ['Cursor', 'Windsurf', 'Google AI Studio'],
    timeEstimate: 'Career Skill',
    x: 2, y: 3,
    toolDetails: [
      { name: 'Cursor', url: 'https://cursor.com', category: 'AI-First IDE', description: 'Fork of VS Code. Deep context control.', bestFor: 'Pro dev, Refactoring, Scalable projects.', pros: 'Deep context, predictable subscription.', cons: 'Performance drops occasionally.' },
      { name: 'Windsurf', url: 'https://codeium.com/windsurf', category: 'Flow IDE', description: 'Focuses on "Flow" and deep agentic behavior (Cascade).', bestFor: 'Automating routine, mixed teams.', pros: 'Intuitive UX, live preview.', cons: 'Credit model for some actions.' },
      { name: 'Google AI Studio', url: 'https://aistudio.google.com', category: 'Model Interface', description: 'Sandbox for prompt engineering and API code generation.', bestFor: 'Embedding AI functions, testing prompts.', pros: 'Fast cycle, Export to code.', cons: 'Rate limits on free tier.' }
    ]
  },
  {
    id: 'infra',
    type: NodeType.INFRA,
    title: 'Local & Cloud Compute',
    description: 'Running open models (Flux, Wan).',
    details: 'When you need privacy, no censorship, or lower long-term costs. Renting H100s or running on your 4090.',
    connections: ['creative-image', 'creative-video', 'music-gen'],
    tools: ['RunPod', 'HuggingFace', 'CivitAI'],
    timeEstimate: 'Lifetime Mastery',
    x: 3, y: 3,
    toolDetails: [
      { name: 'CivitAI', url: 'https://civitai.com', category: 'Model Hub', description: 'The place for Loras, Checkpoints, and training.', bestFor: 'Finding specific styles/characters.', pros: 'Huge community, Easy simple training.', cons: 'NSFW content prevalence, SD-focused.' },
      { name: 'HuggingFace', url: 'https://huggingface.co', category: 'Repo', description: 'The GitHub of ML models.', bestFor: 'Finding weights, Spaces.', pros: 'Industry standard.', cons: 'Technical.' },
      { name: 'ComfyUI', url: 'https://github.com/comfyanonymous/ComfyUI', category: 'Framework', description: 'Node-based visual programming for GenAI. Image, video, and audio pipelines.', bestFor: 'Complex pipelines, mixing, offline work.', pros: 'Free, Infinite control, Multi-modal.', cons: 'High technical barrier, fragile pipelines.' }
    ]
  },
]
