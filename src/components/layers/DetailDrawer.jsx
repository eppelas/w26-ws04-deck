import { X, ExternalLink } from 'lucide-react'

export function DetailDrawer({ node, onClose }) {
  if (!node) return null

  return (
    <div className="fixed inset-y-0 right-0 w-[420px] max-w-[90vw] bg-white/95 backdrop-blur-xl shadow-2xl z-[100] flex flex-col border-l border-purple-100 animate-slide-in">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-purple-50">
        <div>
          <h2 className="text-lg font-bold text-slate-800">{node.title}</h2>
          <div className="text-[10px] uppercase tracking-wider text-purple-500 font-bold mt-1">{node.type} &middot; {node.timeEstimate}</div>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-purple-50 text-slate-400 hover:text-slate-600 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Description */}
        <div>
          <p className="text-sm text-slate-600 leading-relaxed">{node.description}</p>
        </div>

        {/* Details */}
        {node.details && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Details</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{node.details}</p>
          </div>
        )}

        {/* Tools list */}
        {node.tools && node.tools.length > 0 && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {node.tools.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-medium">{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Tool Details */}
        {node.toolDetails && node.toolDetails.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Tool Details</h3>
            {node.toolDetails.map((tool, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-sm text-slate-800">{tool.name}</span>
                  {tool.url && (
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-600 transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {tool.category && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-600 font-medium">{tool.category}</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-2">{tool.description}</p>
                {tool.bestFor && <div className="text-xs text-slate-400"><span className="font-semibold text-slate-500">Best for:</span> {tool.bestFor}</div>}
                <div className="flex gap-4 mt-2">
                  {tool.pros && <div className="text-xs text-green-600"><span className="font-semibold">+</span> {tool.pros}</div>}
                  {tool.cons && <div className="text-xs text-red-500"><span className="font-semibold">-</span> {tool.cons}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Connections */}
        {node.connections && node.connections.length > 0 && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Connections</h3>
            <div className="flex flex-wrap gap-2">
              {node.connections.map((c, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium">{c}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
