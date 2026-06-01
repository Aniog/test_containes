import { useEffect, useRef, useState, useCallback } from 'react'
import { EMOTION_COLORS } from '../../api/memories.js'

const STAR_COUNT = 180
const NODE_COUNT = 12

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: randomBetween(0.5, 2.5),
    opacity: randomBetween(0.2, 0.9),
    twinkleDuration: randomBetween(2, 6),
    twinkleDelay: randomBetween(0, 4),
  }))
}

function generateNodes(memories) {
  if (memories && memories.length > 0) {
    return memories.slice(0, NODE_COUNT).map((m, i) => ({
      id: m.id,
      x: m.data?.constellation_x ?? randomBetween(10, 90),
      y: m.data?.constellation_y ?? randomBetween(10, 90),
      emotion: m.data?.emotion ?? 'Wonder',
      title: m.data?.title ?? '',
      contributor: m.data?.contributor_name ?? '',
      size: randomBetween(4, 8),
      pulseDelay: i * 0.4,
    }))
  }
  return Array.from({ length: NODE_COUNT }, (_, i) => ({
    id: i,
    x: randomBetween(10, 90),
    y: randomBetween(10, 90),
    emotion: Object.keys(EMOTION_COLORS)[i % Object.keys(EMOTION_COLORS).length],
    title: '',
    contributor: '',
    size: randomBetween(4, 8),
    pulseDelay: i * 0.4,
  }))
}

function getEdges(nodes) {
  const edges = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 35) {
        edges.push({ from: nodes[i], to: nodes[j], dist })
      }
    }
  }
  return edges
}

export default function ConstellationHero({ memories = [], onNodeClick }) {
  const [stars] = useState(() => generateStars(STAR_COUNT))
  const [nodes, setNodes] = useState(() => generateNodes(memories))
  const [hoveredNode, setHoveredNode] = useState(null)
  const [tick, setTick] = useState(0)
  const animRef = useRef(null)
  const lastTickRef = useRef(0)

  useEffect(() => {
    if (memories.length > 0) {
      setNodes(generateNodes(memories))
    }
  }, [memories])

  useEffect(() => {
    let frame
    const animate = (ts) => {
      if (ts - lastTickRef.current > 50) {
        setTick((t) => t + 1)
        lastTickRef.current = ts
      }
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const edges = getEdges(nodes)

  return (
    <div className="relative w-full h-full overflow-hidden select-none" style={{ background: 'transparent' }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ pointerEvents: 'none' }}
      >
        {/* Background stars */}
        {stars.map((star) => (
          <circle
            key={star.id}
            cx={star.x}
            cy={star.y}
            r={star.size * 0.15}
            fill="white"
            style={{
              opacity: star.opacity * (0.6 + 0.4 * Math.sin((tick * 0.05 + star.twinkleDelay) / star.twinkleDuration)),
            }}
          />
        ))}

        {/* Constellation edges */}
        {edges.map((edge, i) => (
          <line
            key={i}
            x1={edge.from.x}
            y1={edge.from.y}
            x2={edge.to.x}
            y2={edge.to.y}
            stroke="rgba(79,142,247,0.18)"
            strokeWidth="0.15"
            strokeDasharray="0.5 0.8"
          />
        ))}

        {/* Memory nodes */}
        {nodes.map((node) => {
          const color = EMOTION_COLORS[node.emotion] || '#4f8ef7'
          const isHovered = hoveredNode?.id === node.id
          const pulse = 0.7 + 0.3 * Math.sin((tick * 0.06 + node.pulseDelay))
          return (
            <g key={node.id}>
              {/* Outer glow ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.6 * (isHovered ? 1.6 : 1) * pulse}
                fill={color}
                opacity={0.08 * (isHovered ? 2 : 1)}
              />
              {/* Mid glow */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.35 * (isHovered ? 1.3 : 1)}
                fill={color}
                opacity={0.18 * (isHovered ? 1.5 : 1)}
              />
              {/* Core */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.18}
                fill={color}
                opacity={isHovered ? 1 : 0.85}
              />
            </g>
          )
        })}
      </svg>

      {/* Interactive overlay for hover/click */}
      <div className="absolute inset-0">
        {nodes.map((node) => {
          const color = EMOTION_COLORS[node.emotion] || '#4f8ef7'
          const isHovered = hoveredNode?.id === node.id
          return (
            <div
              key={node.id}
              className="absolute cursor-pointer"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '32px',
                height: '32px',
                zIndex: 10,
              }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => onNodeClick && onNodeClick(node)}
            >
              {isHovered && node.title && (
                <div
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap z-20 pointer-events-none"
                  style={{ filter: `drop-shadow(0 0 8px ${color}60)` }}
                >
                  <div
                    className="rounded-lg px-3 py-2 text-xs font-medium text-white border"
                    style={{
                      background: 'rgba(8,13,26,0.95)',
                      borderColor: `${color}40`,
                      maxWidth: '200px',
                      whiteSpace: 'normal',
                    }}
                  >
                    <div className="font-semibold text-white leading-tight">{node.title}</div>
                    {node.contributor && (
                      <div className="text-slate-400 text-xs mt-0.5">{node.contributor}</div>
                    )}
                    <div className="mt-1 text-xs" style={{ color }}>
                      {node.emotion}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
