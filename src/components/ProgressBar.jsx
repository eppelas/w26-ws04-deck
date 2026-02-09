export default function ProgressBar({ current, total, slide, onLayersClick }) {
  const pct = ((current + 1) / total) * 100

  return (
    <header className="flex-shrink-0 border-b border-swiss-gray">
      <div className="px-6 py-2 flex items-center justify-between text-xs font-mono">
        <span className="text-swiss-red font-bold tracking-wider">
          W26-WS04
        </span>
        <div className="flex items-center gap-4">
          {slide.blockTitle && (
            <span className="text-swiss-muted">{String(slide.block).padStart(2, '0')} — {slide.blockTitle}</span>
          )}
          {onLayersClick && (
            <button onClick={onLayersClick} className="px-2.5 py-0.5 text-swiss-muted hover:text-swiss-red border border-swiss-gray/40 rounded hover:border-swiss-red/40 transition-colors">Layers</button>
          )}
        </div>
      </div>
      <div className="h-1 bg-swiss-gray/30">
        <div
          className="h-full bg-swiss-red transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </header>
  )
}
