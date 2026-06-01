import { useEffect, useRef, useCallback } from 'react';
import { memories } from '@/data/memories';

const STAR_COUNT = 180;
const CONNECTION_DISTANCE = 120;
const MEMORY_NODE_COUNT = 20;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const starsRef = useRef([]);
  const nodesRef = useRef([]);
  const timeRef = useRef(0);

  const initStars = useCallback((w, h) => {
    starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
      x: randomBetween(0, w),
      y: randomBetween(0, h),
      r: randomBetween(0.5, 2.2),
      speed: randomBetween(0.0002, 0.001),
      phase: randomBetween(0, Math.PI * 2),
      color: Math.random() > 0.7 ? '#9aaaf0' : Math.random() > 0.5 ? '#c084fc' : '#f0f4ff',
    }));

    nodesRef.current = memories.slice(0, MEMORY_NODE_COUNT).map((mem, i) => ({
      id: mem.id,
      x: randomBetween(w * 0.05, w * 0.95),
      y: randomBetween(h * 0.05, h * 0.95),
      r: randomBetween(3, 6),
      vx: randomBetween(-0.15, 0.15),
      vy: randomBetween(-0.1, 0.1),
      color: mem.color,
      label: mem.title,
      phase: randomBetween(0, Math.PI * 2),
      speed: randomBetween(0.0005, 0.0015),
      index: i,
    }));
  }, []);

  const draw = useCallback((ctx, w, h, t) => {
    ctx.clearRect(0, 0, w, h);

    // Background gradient
    const bg = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.8);
    bg.addColorStop(0, '#0d1530');
    bg.addColorStop(0.5, '#070b18');
    bg.addColorStop(1, '#03040a');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Nebula glow
    const nebula = ctx.createRadialGradient(w * 0.3, h * 0.4, 0, w * 0.3, h * 0.4, w * 0.4);
    nebula.addColorStop(0, 'rgba(61,79,196,0.06)');
    nebula.addColorStop(1, 'rgba(61,79,196,0)');
    ctx.fillStyle = nebula;
    ctx.fillRect(0, 0, w, h);

    const nebula2 = ctx.createRadialGradient(w * 0.7, h * 0.6, 0, w * 0.7, h * 0.6, w * 0.35);
    nebula2.addColorStop(0, 'rgba(124,58,237,0.05)');
    nebula2.addColorStop(1, 'rgba(124,58,237,0)');
    ctx.fillStyle = nebula2;
    ctx.fillRect(0, 0, w, h);

    // Draw background stars
    starsRef.current.forEach(star => {
      const opacity = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * star.speed * 1000 + star.phase));
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = star.color.replace(')', `,${opacity})`).replace('rgb', 'rgba').replace('#', '');
      // Use hex with alpha approach
      const alpha = Math.floor(opacity * 255).toString(16).padStart(2, '0');
      ctx.fillStyle = star.color + alpha;
      ctx.fill();
    });

    // Update and draw memory nodes
    nodesRef.current.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 20 || node.x > w - 20) node.vx *= -1;
      if (node.y < 20 || node.y > h - 20) node.vy *= -1;
    });

    // Draw connections between nearby nodes
    for (let i = 0; i < nodesRef.current.length; i++) {
      for (let j = i + 1; j < nodesRef.current.length; j++) {
        const a = nodesRef.current[i];
        const b = nodesRef.current[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.35;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, a.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
          grad.addColorStop(1, b.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw memory nodes
    nodesRef.current.forEach(node => {
      const pulse = 0.6 + 0.4 * Math.sin(t * node.speed * 1000 + node.phase);
      const glowR = node.r * 4 * pulse;

      // Outer glow
      const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR);
      glow.addColorStop(0, node.color + '60');
      glow.addColorStop(1, node.color + '00');
      ctx.beginPath();
      ctx.arc(node.x, node.y, glowR, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r * pulse, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();

      // Inner bright center
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = (timestamp) => {
      timeRef.current = timestamp;
      draw(ctx, canvas.width, canvas.height, timestamp);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [initStars, draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  );
}
