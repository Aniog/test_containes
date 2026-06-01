import { useEffect, useRef, useState, useCallback } from 'react';
import { MEMORIES } from '@/data/memories';

const STAR_COUNT = 180;
const CONNECTION_DISTANCE = 120;

function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.2,
    twinkleDelay: Math.random() * 4,
    twinkleDuration: Math.random() * 3 + 2,
  }));
}

const EMOTION_COLORS = {
  joy: '#f5c842',
  grief: '#8b5cf6',
  wonder: '#4f8ef7',
  love: '#e879a0',
  fear: '#ef4444',
  hope: '#2dd4bf',
  nostalgia: '#fb923c',
  peace: '#86efac',
};

export default function ConstellationHero({ onMemoryClick }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const starsRef = useRef(generateStars(STAR_COUNT));
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [hoveredMemory, setHoveredMemory] = useState(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  const memoryNodes = MEMORIES.map((m) => ({
    ...m,
    color: EMOTION_COLORS[m.emotion] || '#4f8ef7',
  }));

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    setDimensions({ w: rect.width, h: rect.height });
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.w === 0) return;
    const ctx = canvas.getContext('2d');
    let time = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      // Draw background stars
      starsRef.current.forEach((star) => {
        const twinkle = Math.sin(time * (1 / star.twinkleDuration) * Math.PI * 2 + star.twinkleDelay) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(
          (star.x / 100) * canvas.width,
          (star.y / 100) * canvas.height,
          star.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      });

      // Compute memory node positions
      const nodes = memoryNodes.map((m) => ({
        ...m,
        px: (m.constellation.x / 100) * canvas.width,
        py: (m.constellation.y / 100) * canvas.height,
      }));

      // Draw connections between nearby memory nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].px - nodes[j].px;
          const dy = nodes[i].py - nodes[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            const gradient = ctx.createLinearGradient(nodes[i].px, nodes[i].py, nodes[j].px, nodes[j].py);
            gradient.addColorStop(0, `${nodes[i].color}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, `${nodes[j].color}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].px, nodes[i].py);
            ctx.lineTo(nodes[j].px, nodes[j].py);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Mouse proximity glow connections
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      nodes.forEach((node) => {
        const dx = node.px - mx;
        const dy = node.py - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const alpha = (1 - dist / 200) * 0.5;
          ctx.beginPath();
          ctx.moveTo(mx, my);
          ctx.lineTo(node.px, node.py);
          ctx.strokeStyle = `${node.color}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw memory nodes
      nodes.forEach((node) => {
        const isHovered = hoveredMemory?.id === node.id;
        const pulse = Math.sin(time * 2 + node.constellation.x) * 0.3 + 0.7;
        const baseRadius = node.featured ? 7 : 5;
        const radius = isHovered ? baseRadius + 4 : baseRadius;

        // Outer glow
        const glowRadius = radius * (isHovered ? 4 : 3);
        const glow = ctx.createRadialGradient(node.px, node.py, 0, node.px, node.py, glowRadius);
        glow.addColorStop(0, `${node.color}${Math.round(0.4 * pulse * 255).toString(16).padStart(2, '0')}`);
        glow.addColorStop(1, `${node.color}00`);
        ctx.beginPath();
        ctx.arc(node.px, node.py, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? node.color : `${node.color}cc`;
        ctx.fill();

        // White center for featured
        if (node.featured) {
          ctx.beginPath();
          ctx.arc(node.px, node.py, radius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,0.8)';
          ctx.fill();
        }
      });

      animFrameRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [dimensions, hoveredMemory]);

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    mouseRef.current = { x: mx, y: my };

    // Check hover on memory nodes
    const found = memoryNodes.find((m) => {
      const px = (m.constellation.x / 100) * canvas.width;
      const py = (m.constellation.y / 100) * canvas.height;
      const dx = px - mx;
      const dy = py - my;
      return Math.sqrt(dx * dx + dy * dy) < 16;
    });
    setHoveredMemory(found || null);
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
    setHoveredMemory(null);
  }, []);

  const handleClick = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const found = memoryNodes.find((m) => {
      const px = (m.constellation.x / 100) * canvas.width;
      const py = (m.constellation.y / 100) * canvas.height;
      const dx = px - mx;
      const dy = py - my;
      return Math.sqrt(dx * dx + dy * dy) < 16;
    });
    if (found && onMemoryClick) onMemoryClick(found);
  }, [onMemoryClick]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ cursor: hoveredMemory ? 'pointer' : 'default' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />

      {/* Tooltip for hovered memory */}
      {hoveredMemory && (
        <div
          className="absolute pointer-events-none z-10 max-w-xs"
          style={{
            left: `${hoveredMemory.constellation.x}%`,
            top: `${hoveredMemory.constellation.y}%`,
            transform: 'translate(-50%, -130%)',
          }}
        >
          <div className="bg-space-midnight border border-slate-700 rounded-xl p-4 shadow-2xl backdrop-blur-sm"
            style={{ boxShadow: `0 0 30px ${EMOTION_COLORS[hoveredMemory.emotion]}33` }}>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: EMOTION_COLORS[hoveredMemory.emotion] }} />
              <span className="text-xs text-slate-400 font-sans">{hoveredMemory.year} · {hoveredMemory.location}</span>
            </div>
            <p className="text-white font-serif text-sm font-semibold leading-tight">{hoveredMemory.title}</p>
            <p className="text-slate-400 text-xs mt-1 font-sans line-clamp-2">{hoveredMemory.excerpt}</p>
            <p className="text-xs mt-2 font-sans" style={{ color: EMOTION_COLORS[hoveredMemory.emotion] }}>
              Click to explore →
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
