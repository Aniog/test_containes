import { useEffect, useRef, useMemo } from 'react'

const EMOTION_COLORS = {
  Joy: '#f59e0b',
  Love: '#ec4899',
  Nostalgia: '#a78bfa',
  Wonder: '#06b6d4',
  Grief: '#9ca3af',
  Hope: '#10b981',
  Fear: '#ef4444',
  Peace: '#a3e635',
}

function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    opacity: Math.random() * 0.7 + 0.2,
    twinkleDuration: Math.random() * 4 + 2,
    twinkleDelay: Math.random() * 5,
    driftX: (Math.random() - 0.5) * 8,
    driftY: (Math.random() - 0.5) * 8,
    driftDuration: Math.random() * 15 + 10,
  }))
}

function generateMemoryFragments(memories) {
  return memories.map((m, i) => {
    const angle = (i / memories.length) * Math.PI * 2
    const radius = 20 + Math.random() * 30
    const cx = 50 + Math.cos(angle) * radius
    const cy = 50 + Math.sin(angle) * radius
    return {
      id: m.id,
      x: Math.max(5, Math.min(95, cx)),
      y: Math.max(5, Math.min(95, cy)),
      emotion: m.data?.emotion || 'Wonder',
      title: m.data?.title || '',
      size: 3 + Math.random() * 4,
      pulseDelay: Math.random() * 3,
    }
  })
}

function generateConnections(fragments) {
  const connections = []
  fragments.forEach((a, i) => {
    fragments.forEach((b, j) => {
      if (j <= i) return
      const dx = a.x - b.x
      const dy = a.y - b.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 22) {
        connections.push({ from: a, to: b, dist })
      }
    })
  })
  return connections
}

export default function ConstellationCanvas({ memories = [] }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const timeRef = useRef(0)

  const stars = useMemo(() => generateStars(180), [])
  const fragments = useMemo(() => generateMemoryFragments(memories), [memories])
  const connections = useMemo(() => generateConnections(fragments), [fragments])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = (timestamp) => {
      const t = timestamp / 1000
      timeRef.current = t
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight

      ctx.clearRect(0, 0, W, H)

      // Background nebula glow
      const grad = ctx.createRadialGradient(W * 0.5, H * 0.45, 0, W * 0.5, H * 0.45, W * 0.6)
      grad.addColorStop(0, 'rgba(124,58,237,0.06)')
      grad.addColorStop(0.5, 'rgba(6,182,212,0.03)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)

      // Background stars
      stars.forEach(star => {
        const twinkle = 0.5 + 0.5 * Math.sin((t + star.twinkleDelay) * (Math.PI * 2 / star.twinkleDuration))
        const driftX = star.driftX * Math.sin(t / star.driftDuration * Math.PI * 2)
        const driftY = star.driftY * Math.cos(t / star.driftDuration * Math.PI * 2)
        const sx = (star.x / 100) * W + driftX
        const sy = (star.y / 100) * H + driftY

        ctx.beginPath()
        ctx.arc(sx, sy, star.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226,232,240,${star.opacity * twinkle})`
        ctx.fill()
      })

      // Connection lines
      connections.forEach(({ from, to, dist }) => {
        const fx = (from.x / 100) * W
        const fy = (from.y / 100) * H
        const tx = (to.x / 100) * W
        const ty = (to.y / 100) * H
        const alpha = (1 - dist / 22) * 0.25 * (0.6 + 0.4 * Math.sin(t * 0.5))
        const fromColor = EMOTION_COLORS[from.emotion] || '#a78bfa'
        const toColor = EMOTION_COLORS[to.emotion] || '#06b6d4'

        const lineGrad = ctx.createLinearGradient(fx, fy, tx, ty)
        lineGrad.addColorStop(0, fromColor + Math.round(alpha * 255).toString(16).padStart(2, '0'))
        lineGrad.addColorStop(1, toColor + Math.round(alpha * 255).toString(16).padStart(2, '0'))

        ctx.beginPath()
        ctx.moveTo(fx, fy)
        ctx.lineTo(tx, ty)
        ctx.strokeStyle = lineGrad
        ctx.lineWidth = 0.8
        ctx.stroke()
      })

      // Memory fragment nodes
      fragments.forEach(frag => {
        const fx = (frag.x / 100) * W
        const fy = (frag.y / 100) * H
        const color = EMOTION_COLORS[frag.emotion] || '#a78bfa'
        const pulse = 0.7 + 0.3 * Math.sin((t + frag.pulseDelay) * 1.5)
        const r = frag.size * pulse

        // Outer glow
        const glowGrad = ctx.createRadialGradient(fx, fy, 0, fx, fy, r * 4)
        glowGrad.addColorStop(0, color + '40')
        glowGrad.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(fx, fy, r * 4, 0, Math.PI * 2)
        ctx.fillStyle = glowGrad
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(fx, fy, r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.shadowColor = color
        ctx.shadowBlur = 12
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [stars, fragments, connections])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
