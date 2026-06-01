import { useEffect, useRef, useCallback } from 'react'
import { memories, EMOTIONS } from '../../data/memories'

const EMOTION_COLORS = {
  joy: '#fbbf24',
  sorrow: '#818cf8',
  love: '#f472b6',
  wonder: '#34d399',
  fear: '#f87171',
  nostalgia: '#a78bfa',
  peace: '#67e8f9',
  longing: '#c084fc',
}

export default function ConstellationCanvas({ onMemoryHover, onMemoryClick }) {
  const canvasRef = useRef(null)
  const animFrameRef = useRef(null)
  const starsRef = useRef([])
  const memoryNodesRef = useRef([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const timeRef = useRef(0)
  const hoveredRef = useRef(null)

  const initStars = useCallback((width, height) => {
    const stars = []
    const count = Math.floor((width * height) / 3000)
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.7 + 0.1,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      })
    }
    return stars
  }, [])

  const initMemoryNodes = useCallback((width, height) => {
    return memories.map((mem, i) => {
      const angle = (i / memories.length) * Math.PI * 2
      const radiusX = width * 0.35
      const radiusY = height * 0.32
      const cx = width / 2
      const cy = height / 2
      const scatter = 0.6 + Math.random() * 0.8
      return {
        id: mem.id,
        x: cx + Math.cos(angle) * radiusX * scatter + (Math.random() - 0.5) * width * 0.15,
        y: cy + Math.sin(angle) * radiusY * scatter + (Math.random() - 0.5) * height * 0.15,
        baseX: 0,
        baseY: 0,
        r: mem.brightness * 3.5 + 1.5,
        color: EMOTION_COLORS[mem.emotion] || '#818cf8',
        memory: mem,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.01,
        driftX: (Math.random() - 0.5) * 0.3,
        driftY: (Math.random() - 0.5) * 0.3,
        connections: mem.connections || [],
      }
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      starsRef.current = initStars(canvas.width, canvas.height)
      memoryNodesRef.current = initMemoryNodes(canvas.width, canvas.height)
      memoryNodesRef.current.forEach(node => {
        node.baseX = node.x
        node.baseY = node.y
      })
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const hit = memoryNodesRef.current.find(node => {
        const dx = node.x - mx
        const dy = node.y - my
        return Math.sqrt(dx * dx + dy * dy) < node.r + 8
      })
      if (hit && onMemoryClick) onMemoryClick(hit.memory)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('click', handleClick)

    const draw = () => {
      timeRef.current += 1
      const t = timeRef.current
      const { width, height } = canvas

      ctx.clearRect(0, 0, width, height)

      // Draw background stars
      starsRef.current.forEach(star => {
        const twinkle = Math.sin(t * star.twinkleSpeed + star.twinkleOffset)
        const opacity = star.opacity * (0.6 + 0.4 * twinkle)
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fill()
      })

      // Update node positions with gentle drift
      memoryNodesRef.current.forEach(node => {
        node.x = node.baseX + Math.sin(t * 0.008 + node.pulseOffset) * 4 * node.driftX * 10
        node.y = node.baseY + Math.cos(t * 0.006 + node.pulseOffset) * 4 * node.driftY * 10
      })

      // Draw connections
      memoryNodesRef.current.forEach(node => {
        node.connections.forEach(connId => {
          const target = memoryNodesRef.current.find(n => n.id === connId)
          if (!target) return
          const dx = target.x - node.x
          const dy = target.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > 400) return

          const opacity = (1 - dist / 400) * 0.15
          const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y)
          gradient.addColorStop(0, node.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba').replace('#', 'rgba(').replace(/rgba\(([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/, (_, r, g, b) => `rgba(${parseInt(r,16)}, ${parseInt(g,16)}, ${parseInt(b,16)}`))
          
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(target.x, target.y)
          ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        })
      })

      // Check hover
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      let newHovered = null

      // Draw memory nodes
      memoryNodesRef.current.forEach(node => {
        const dx = node.x - mx
        const dy = node.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const isHovered = dist < node.r + 12
        if (isHovered) newHovered = node

        const pulse = Math.sin(t * node.pulseSpeed + node.pulseOffset)
        const currentR = node.r + pulse * 0.8

        // Outer glow
        const glowR = isHovered ? currentR * 4 : currentR * 2.5
        const glowGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR)
        const alpha = isHovered ? 0.4 : 0.15
        glowGrad.addColorStop(0, hexToRgba(node.color, alpha))
        glowGrad.addColorStop(1, hexToRgba(node.color, 0))
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowR, 0, Math.PI * 2)
        ctx.fillStyle = glowGrad
        ctx.fill()

        // Core star
        ctx.beginPath()
        ctx.arc(node.x, node.y, currentR, 0, Math.PI * 2)
        ctx.fillStyle = isHovered ? node.color : hexToRgba(node.color, 0.85)
        ctx.fill()

        // Sparkle cross for bright memories
        if (node.memory.brightness > 0.85 || isHovered) {
          const sparkLen = isHovered ? currentR * 3 : currentR * 2
          ctx.strokeStyle = hexToRgba(node.color, isHovered ? 0.6 : 0.3)
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(node.x - sparkLen, node.y)
          ctx.lineTo(node.x + sparkLen, node.y)
          ctx.moveTo(node.x, node.y - sparkLen)
          ctx.lineTo(node.x, node.y + sparkLen)
          ctx.stroke()
        }

        // Label on hover
        if (isHovered) {
          const label = node.memory.title
          const maxWidth = 180
          ctx.font = '500 12px Inter, sans-serif'
          const textWidth = Math.min(ctx.measureText(label).width, maxWidth)
          const padding = 8
          const boxW = textWidth + padding * 2
          const boxH = 28
          let bx = node.x + 14
          let by = node.y - boxH / 2

          if (bx + boxW > width - 10) bx = node.x - boxW - 14
          if (by < 5) by = 5
          if (by + boxH > height - 5) by = height - boxH - 5

          ctx.fillStyle = 'rgba(7, 11, 24, 0.92)'
          ctx.strokeStyle = hexToRgba(node.color, 0.5)
          ctx.lineWidth = 1
          roundRect(ctx, bx, by, boxW, boxH, 6)
          ctx.fill()
          ctx.stroke()

          ctx.fillStyle = '#e2e8f0'
          ctx.font = '500 11px Inter, sans-serif'
          ctx.textBaseline = 'middle'
          ctx.fillText(label.length > 22 ? label.slice(0, 22) + '…' : label, bx + padding, by + boxH / 2)
        }
      })

      if (newHovered !== hoveredRef.current) {
        hoveredRef.current = newHovered
        canvas.style.cursor = newHovered ? 'pointer' : 'default'
        if (onMemoryHover) onMemoryHover(newHovered?.memory || null)
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    animFrameRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('click', handleClick)
    }
  }, [initStars, initMemoryNodes, onMemoryHover, onMemoryClick])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}
