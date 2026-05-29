import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Map, ZoomIn, ZoomOut, RotateCcw, Info, ChevronRight } from 'lucide-react'

const TIMELINE_NODES = [
  { id: 'origin', x: 50, y: 50, year: 'Big Bang', label: 'Origin Point', type: 'origin', dim: 'All', stability: 'stable' },
  { id: 'ancient', x: 50, y: 38, year: '3200 BCE', label: 'First Rift', type: 'event', dim: 'Prime-Alpha', stability: 'stable' },
  { id: 'rome', x: 42, y: 28, year: '44 BCE', label: 'Caesar Paradox', type: 'paradox', dim: 'Prime-Alpha', stability: 'moderate' },
  { id: 'rome2', x: 58, y: 26, year: '44 BCE', label: 'Alt. Rome Survives', type: 'branch', dim: 'Theta-3', stability: 'stable' },
  { id: 'medieval', x: 38, y: 18, year: '1347', label: 'Black Death Anomaly', type: 'event', dim: 'Prime-Alpha', stability: 'moderate' },
  { id: 'medieval2', x: 55, y: 17, year: '1350', label: 'Plague Averted', type: 'branch', dim: 'Sigma-7', stability: 'stable' },
  { id: 'renaissance', x: 35, y: 10, year: '1490', label: "Da Vinci's Codex", type: 'artifact', dim: 'Prime-Alpha', stability: 'stable' },
  { id: 'revolution', x: 42, y: 6, year: '1776', label: 'Jefferson Contact', type: 'artifact', dim: 'Prime-Alpha', stability: 'stable' },
  { id: 'victorian', x: 48, y: 3, year: '1847', label: 'Meridian Compass', type: 'artifact', dim: 'Prime-Alpha', stability: 'stable' },
  { id: 'wwi', x: 44, y: 1.5, year: '1914', label: 'Cassandra Warning', type: 'event', dim: 'Prime-Alpha', stability: 'stable' },
  { id: 'space', x: 50, y: 0.5, year: '1969', label: 'Apollo Incident', type: 'artifact', dim: 'Prime-Alpha', stability: 'moderate' },
  { id: 'present', x: 50, y: -1, year: '2024', label: 'Present Day', type: 'present', dim: 'Prime-Alpha', stability: 'critical' },
  { id: 'future1', x: 45, y: -4, year: '2089', label: "Cartographer's Map", type: 'artifact', dim: 'Sigma-7', stability: 'critical' },
  { id: 'future2', x: 55, y: -5, year: '2650', label: 'Meridian Station', type: 'event', dim: 'Epsilon-9', stability: 'moderate' },
  { id: 'future3', x: 50, y: -8, year: '3147', label: 'Rift Stabilizer', type: 'artifact', dim: 'Delta-Prime', stability: 'critical' },
  { id: 'collapse', x: 38, y: -6, year: '2200', label: 'Timeline Collapse', type: 'collapse', dim: 'Omega-Null', stability: 'unknown' },
]

const CONNECTIONS = [
  ['origin', 'ancient'], ['ancient', 'rome'], ['ancient', 'rome2'],
  ['rome', 'medieval'], ['rome2', 'medieval2'],
  ['medieval', 'renaissance'], ['medieval2', 'future2'],
  ['renaissance', 'revolution'], ['revolution', 'victorian'],
  ['victorian', 'wwi'], ['wwi', 'space'], ['space', 'present'],
  ['present', 'future1'], ['present', 'future2'], ['present', 'collapse'],
  ['future1', 'future3'], ['future2', 'future3'],
]

const NODE_STYLES = {
  origin: { color: '#f59e0b', size: 14, glow: '#f59e0b' },
  event: { color: '#00d4ff', size: 10, glow: '#00d4ff' },
  artifact: { color: '#7c3aed', size: 10, glow: '#7c3aed' },
  paradox: { color: '#ef4444', size: 12, glow: '#ef4444' },
  branch: { color: '#10b981', size: 8, glow: '#10b981' },
  present: { color: '#00d4ff', size: 14, glow: '#00d4ff' },
  collapse: { color: '#6b7280', size: 10, glow: '#6b7280' },
}

const STABILITY_LINE = {
  stable: 'rgba(0,212,255,0.3)',
  moderate: 'rgba(245,158,11,0.4)',
  critical: 'rgba(239,68,68,0.5)',
  unknown: 'rgba(107,114,128,0.3)',
}

export default function TimelineMapPage() {
  const [selected, setSelected] = useState(null)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const W = 800, H = 600
  const toSVG = (node) => ({
    x: (node.x / 100) * W,
    y: ((100 - node.y) / 100) * H,
  })

  const nodeMap = Object.fromEntries(TIMELINE_NODES.map(n => [n.id, n]))

  const handleMouseDown = (e) => {
    if (e.target.tagName === 'svg' || e.target.tagName === 'rect') {
      setDragging(true)
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    }
  }
  const handleMouseMove = (e) => {
    if (dragging) setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
  }
  const handleMouseUp = () => setDragging(false)

  const selectedNode = selected ? nodeMap[selected] : null

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-12 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08), transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Map className="w-4 h-4 text-violet-400" />
            <span className="font-mono-archive text-xs text-violet-400 tracking-widest">INTERACTIVE VISUALIZATION</span>
          </div>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-slate-100 mb-3">Timeline Map</h1>
          <p className="text-slate-400 max-w-2xl">
            Navigate the branching structure of known timelines. Click nodes to explore events, artifacts, and dimensional divergence points.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="glass border border-violet-500/20 rounded-2xl overflow-hidden">
              {/* Controls */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-violet-500/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono-archive text-xs text-slate-500">TEMPORAL CARTOGRAPHY SYSTEM v3.2</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setZoom(z => Math.min(z + 0.2, 2.5))} className="p-1.5 rounded glass border border-violet-500/20 text-slate-400 hover:text-slate-200 transition-colors">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))} className="p-1.5 rounded glass border border-violet-500/20 text-slate-400 hover:text-slate-200 transition-colors">
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }) }} className="p-1.5 rounded glass border border-violet-500/20 text-slate-400 hover:text-slate-200 transition-colors">
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* SVG Map */}
              <div
                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                style={{ height: '520px', background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.05), rgba(5,8,16,0.9))' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {/* Grid */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />

                <svg
                  width="100%"
                  height="100%"
                  viewBox={`0 0 ${W} ${H}`}
                  style={{ transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`, transformOrigin: 'center', transition: dragging ? 'none' : 'transform 0.1s' }}
                >
                  {/* Connections */}
                  {CONNECTIONS.map(([fromId, toId]) => {
                    const from = nodeMap[fromId]
                    const to = nodeMap[toId]
                    if (!from || !to) return null
                    const fp = toSVG(from)
                    const tp = toSVG(to)
                    const stability = from.stability || 'stable'
                    return (
                      <line
                        key={`${fromId}-${toId}`}
                        x1={fp.x} y1={fp.y} x2={tp.x} y2={tp.y}
                        stroke={STABILITY_LINE[stability]}
                        strokeWidth={stability === 'critical' ? 1.5 : 1}
                        strokeDasharray={stability === 'unknown' ? '4,4' : stability === 'moderate' ? '8,3' : 'none'}
                      />
                    )
                  })}

                  {/* Nodes */}
                  {TIMELINE_NODES.map(node => {
                    const pos = toSVG(node)
                    const style = NODE_STYLES[node.type] || NODE_STYLES.event
                    const isSelected = selected === node.id
                    return (
                      <g
                        key={node.id}
                        transform={`translate(${pos.x}, ${pos.y})`}
                        onClick={() => setSelected(isSelected ? null : node.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        {/* Glow ring */}
                        <circle r={style.size + 6} fill="none" stroke={style.glow} strokeWidth={isSelected ? 2 : 0.5} opacity={isSelected ? 0.8 : 0.3} />
                        {/* Node */}
                        <circle r={style.size} fill={style.color} opacity={0.9} />
                        {/* Inner dot */}
                        <circle r={style.size * 0.4} fill="white" opacity={0.6} />
                        {/* Label */}
                        <text
                          x={0} y={style.size + 14}
                          textAnchor="middle"
                          fill={isSelected ? style.color : '#94a3b8'}
                          fontSize={9}
                          fontFamily="JetBrains Mono, monospace"
                        >
                          {node.year}
                        </text>
                        <text
                          x={0} y={style.size + 24}
                          textAnchor="middle"
                          fill={isSelected ? '#e2e8f0' : '#64748b'}
                          fontSize={8}
                          fontFamily="JetBrains Mono, monospace"
                        >
                          {node.label}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </div>

              {/* Legend */}
              <div className="px-4 py-3 border-t border-violet-500/10 flex flex-wrap gap-4">
                {[
                  { color: '#f59e0b', label: 'Origin' },
                  { color: '#00d4ff', label: 'Event' },
                  { color: '#7c3aed', label: 'Artifact' },
                  { color: '#ef4444', label: 'Paradox' },
                  { color: '#10b981', label: 'Branch' },
                  { color: '#6b7280', label: 'Collapsed' },
                ].map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
                    <span className="font-mono-archive text-xs text-slate-500">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {selectedNode ? (
              <div className="glass border border-violet-500/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ background: NODE_STYLES[selectedNode.type]?.color || '#00d4ff' }} />
                  <span className="font-mono-archive text-xs text-violet-400 tracking-wide">NODE SELECTED</span>
                </div>
                <h3 className="font-cinzel text-lg font-bold text-slate-100 mb-1">{selectedNode.label}</h3>
                <div className="font-mono-archive text-sm text-cyan-400 mb-4">{selectedNode.year}</div>
                <div className="space-y-3">
                  <div>
                    <div className="font-mono-archive text-xs text-slate-600 mb-1">DIMENSION</div>
                    <div className="text-sm text-violet-400">{selectedNode.dim}</div>
                  </div>
                  <div>
                    <div className="font-mono-archive text-xs text-slate-600 mb-1">TYPE</div>
                    <div className="text-sm text-slate-300 capitalize">{selectedNode.type}</div>
                  </div>
                  <div>
                    <div className="font-mono-archive text-xs text-slate-600 mb-1">STABILITY</div>
                    <div className={`text-sm capitalize ${selectedNode.stability === 'stable' ? 'text-green-400' : selectedNode.stability === 'moderate' ? 'text-amber-400' : selectedNode.stability === 'critical' ? 'text-red-400' : 'text-slate-400'}`}>
                      {selectedNode.stability}
                    </div>
                  </div>
                </div>
                {selectedNode.type === 'artifact' && (
                  <Link to="/archive" className="mt-4 flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                    View in Archive <ChevronRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ) : (
              <div className="glass border border-violet-500/15 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4 text-slate-500" />
                  <span className="font-mono-archive text-xs text-slate-500">HOW TO USE</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-500 leading-relaxed">
                  <li>• Click any node to view details</li>
                  <li>• Drag to pan the map</li>
                  <li>• Use zoom controls to navigate</li>
                  <li>• Dashed lines = unstable connections</li>
                  <li>• Red nodes = paradox events</li>
                </ul>
              </div>
            )}

            {/* Dimension index */}
            <div className="glass border border-cyan-400/15 rounded-xl p-5">
              <h3 className="font-cinzel text-xs text-slate-400 tracking-widest uppercase mb-4">Known Dimensions</h3>
              <div className="space-y-2">
                {[
                  { id: 'Prime-Alpha', status: 'Active', color: 'text-green-400' },
                  { id: 'Theta-3', status: 'Stable', color: 'text-cyan-400' },
                  { id: 'Sigma-7', status: 'Monitored', color: 'text-amber-400' },
                  { id: 'Delta-Prime', status: 'Restricted', color: 'text-red-400' },
                  { id: 'Epsilon-9', status: 'Active', color: 'text-green-400' },
                  { id: 'Omega-Null', status: 'Collapsed', color: 'text-slate-500' },
                ].map(({ id, status, color }) => (
                  <div key={id} className="flex items-center justify-between">
                    <span className="font-mono-archive text-xs text-slate-400">{id}</span>
                    <span className={`font-mono-archive text-xs ${color}`}>{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
