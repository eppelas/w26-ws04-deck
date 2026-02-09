import { ArrowLeft, ExternalLink, Code, Palette, Music, PenTool, Server, Brain } from 'lucide-react'

const TRACKS = [
  {
    id: 'mindset',
    title: 'Mindset & Foundation',
    icon: Brain,
    color: '#6C5CE7',
    nodes: [
      { title: 'Lvl 0: The Barrier', desc: 'The hardest part isn\'t the tools — it\'s believing what is possible.', tools: ['Brain', 'Notion'] },
      { title: 'Life Engineering', desc: 'Design Thinking applied to AI adoption.', tools: ['Community Chat', 'Design Thinking'] },
      { title: 'Lvl 1: Awareness', desc: 'Knowing it exists. Agents & Regulations.', tools: ['Newsletters', 'Reports', 'YouTube'] },
      { title: 'Lvl 2: Usage & Diversity', desc: 'Probing the filters. DeepSeek vs GPT.', tools: ['ChatGPT', 'DeepSeek', 'Gemini', 'Perplexity'] },
      { title: 'Lvl 3: Context & RAG', desc: 'Knowledge Bases, Second Brains.', tools: ['Custom GPTs', 'NotebookLM', 'Obsidian'] },
    ]
  },
  {
    id: 'coding',
    title: 'Vibe Coding',
    icon: Code,
    color: '#DC2626',
    nodes: [
      {
        title: 'App Generators', desc: 'Prompt-to-App tools. Speed over control.',
        tools: [
          { name: 'Lovable', url: 'https://lovable.dev', cat: 'Prompt-to-App', best: 'Scaffolding full-stack foundations' },
          { name: 'Replit', url: 'https://replit.com', cat: 'Cloud IDE', best: 'Fast MVP, Non-technical founders' },
          { name: 'bolt.new', url: 'https://bolt.new', cat: 'Browser Container', best: 'One-off prototypes' },
          { name: 'v0.dev', url: 'https://v0.dev', cat: 'UI Generator', best: 'High quality UI prototypes' },
        ]
      },
      {
        title: 'AI-Augmented IDEs', desc: 'The "Last 20%". Logic, Refactoring, Scale.',
        tools: [
          { name: 'Cursor', url: 'https://cursor.com', cat: 'AI-First IDE', best: 'Pro dev, Refactoring' },
          { name: 'Windsurf', url: 'https://codeium.com/windsurf', cat: 'Flow IDE', best: 'Automating routine' },
          { name: 'Google AI Studio', url: 'https://aistudio.google.com', cat: 'Model Interface', best: 'Embedding AI functions' },
        ]
      },
    ]
  },
  {
    id: 'design',
    title: 'Design & 3D',
    icon: PenTool,
    color: '#2563EB',
    nodes: [
      {
        title: 'Design & Vector', desc: 'Clean logos, icons, and consistent assets.',
        tools: [
          { name: 'Recraft', url: 'https://recraft.ai', cat: 'Vector/Brand', best: 'SVG icons, brand identity' },
          { name: 'Ideogram', url: 'https://ideogram.ai', cat: 'Typography', best: 'Text inside images' },
          { name: 'Visual Electric', url: 'https://visualelectric.com', cat: 'Moodboarding', best: 'Designers, Photorealism' },
          { name: 'Krea.ai', url: 'https://www.krea.ai', cat: 'Realtime Canvas', best: 'Interactive design, Upscaling' },
        ]
      },
      {
        title: '3D & Spatial', desc: 'Text-to-3D and SVG conversion.',
        tools: [
          { name: 'Spline', url: 'https://spline.design', cat: '3D Design', best: 'Web 3D assets' },
          { name: 'Formia.so', url: 'https://formia.so', cat: 'SVG to 3D', best: 'Logos to 3D' },
        ]
      },
    ]
  },
  {
    id: 'creative',
    title: 'Creative (Image & Video)',
    icon: Palette,
    color: '#F59E0B',
    nodes: [
      {
        title: 'Image Generation', desc: 'The vast ecosystem of Image Models.',
        tools: [
          { name: 'Midjourney v7', url: 'https://midjourney.com', cat: 'Art Model', best: 'High-end art, advertising' },
          { name: 'Flux.1', url: 'https://blackforestlabs.ai', cat: 'Open Model', best: 'Complex scenes, realistic text' },
          { name: 'Seedream', url: 'https://dreamina.capcut.com', cat: 'Gen & Edit', best: 'Realism, Editing' },
          { name: 'Fusara', url: 'https://fusara.ai', cat: 'Aggregator', best: 'Comparing 10+ models' },
          { name: 'Imagen 4', url: 'https://labs.google/fx/tools/image-fx', cat: 'Model', best: 'Photorealism' },
          { name: 'Fooocus', url: 'https://github.com/lllyasviel/Fooocus', cat: 'Local', best: 'Offline privacy' },
        ]
      },
      {
        title: 'Video Generation', desc: 'Motion, Physics & World Building.',
        tools: [
          { name: 'Sora', url: 'https://sora.chatgpt.com', cat: 'Model', best: 'Realism, Complex camera' },
          { name: 'Veo 3', url: 'https://deepmind.google/models/veo', cat: 'Model', best: 'Cinematic, Audio Sync' },
          { name: 'Kling', url: 'https://klingai.com', cat: 'Model', best: 'Long scenes (2 min)' },
          { name: 'Runway Gen-3', url: 'https://runwayml.com', cat: 'Platform', best: 'Professional control' },
          { name: 'Luma', url: 'https://lumalabs.ai', cat: 'Model', best: 'Social clips, morphs' },
          { name: 'Pika', url: 'https://pika.art', cat: 'Platform', best: 'Social media' },
          { name: 'Hailuo.ai', url: 'https://hailuo.ai', cat: 'Model', best: 'Fast gen, transitions' },
        ]
      },
    ]
  },
  {
    id: 'music',
    title: 'Music & Audio',
    icon: Music,
    color: '#10B981',
    nodes: [
      {
        title: 'Music & Audio', desc: 'Suno, Udio & Voice Cloning.',
        tools: [
          { name: 'Suno', url: 'https://suno.com', cat: 'Song Generator', best: 'Catchy hooks, Full songs' },
          { name: 'Udio', url: 'https://udio.com', cat: 'Song Generator', best: 'Realistic vocals, complex genres' },
          { name: 'ElevenLabs', url: 'https://elevenlabs.io', cat: 'Speech (TTS)', best: 'Dubbing, Voice Cloning' },
        ]
      },
    ]
  },
  {
    id: 'infra',
    title: 'Infrastructure',
    icon: Server,
    color: '#737373',
    nodes: [
      {
        title: 'Local & Cloud Compute', desc: 'Running open models (Flux, Wan).',
        tools: [
          { name: 'ComfyUI', url: 'https://github.com/comfyanonymous/ComfyUI', cat: 'Framework', best: 'Complex pipelines, offline' },
          { name: 'CivitAI', url: 'https://civitai.com', cat: 'Model Hub', best: 'LoRAs, Checkpoints' },
          { name: 'HuggingFace', url: 'https://huggingface.co', cat: 'Repo', best: 'Finding weights, Spaces' },
        ]
      },
    ]
  },
]

export default function DMapPage({ onBack }) {
  return (
    <div className="h-screen w-screen bg-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-swiss-gray">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-mono text-swiss-muted hover:text-swiss-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Slides
          </button>
          <h1 className="text-sm font-mono font-bold text-swiss-black tracking-wider uppercase">
            AI Mindset Lab — D-Map
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-12">
        {TRACKS.map(track => {
          const Icon = track.icon
          return (
            <section key={track.id}>
              {/* Track header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: track.color + '15' }}
                >
                  <Icon className="w-4 h-4" style={{ color: track.color }} />
                </div>
                <h2 className="text-lg font-bold text-swiss-black">{track.title}</h2>
                <div className="flex-1 h-px" style={{ backgroundColor: track.color + '30' }} />
              </div>

              {/* Nodes */}
              <div className="space-y-6 ml-4">
                {track.nodes.map((node, ni) => (
                  <div key={ni} className="border-l-2 pl-5 pb-2" style={{ borderColor: track.color + '40' }}>
                    <h3 className="font-bold text-swiss-black text-sm mb-1">{node.title}</h3>
                    <p className="text-swiss-muted text-xs mb-3">{node.desc}</p>

                    {/* Tools */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {node.tools.map((tool, ti) => {
                        const isObj = typeof tool === 'object'
                        return (
                          <div
                            key={ti}
                            className="flex items-start gap-2 p-2.5 rounded-lg border border-swiss-gray/40 hover:border-swiss-gray transition-colors bg-white"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: track.color }}
                            />
                            <div className="min-w-0 flex-1">
                              {isObj ? (
                                <>
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-bold text-swiss-black text-xs">{tool.name}</span>
                                    {tool.url && (
                                      <a
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-swiss-muted hover:text-swiss-red transition-colors"
                                        onClick={e => e.stopPropagation()}
                                      >
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    )}
                                  </div>
                                  <div className="text-[10px] text-swiss-muted">{tool.cat}</div>
                                  {tool.best && (
                                    <div className="text-[10px] text-swiss-muted/70 mt-0.5">Best for: {tool.best}</div>
                                  )}
                                </>
                              ) : (
                                <span className="text-xs text-swiss-black">{tool}</span>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* Bottom back button */}
      <div className="max-w-4xl mx-auto px-6 py-8 border-t border-swiss-gray">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-mono text-swiss-muted hover:text-swiss-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Slides
        </button>
      </div>
    </div>
  )
}
