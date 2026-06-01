import { useEffect, useRef, useCallback } from 'react';

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 140;
const EMOTION_COLORS = [
  '#a78bfa', '#67e8f9', '#fcd34d', '#fb7185',
  '#6ee7b7', '#fdba74', '#c4b5fd', '#818cf8',
];

function createParticle(width, height, index) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: Math.random() * 2.5 + 0.5,
    color: EMOTION_COLORS[index % EMOTION_COLORS.length],
    opacity: Math.random() * 0.6 + 0.3,
    twinkleSpeed: Math.random() * 0.02 + 0.005,
    twinkleOffset: Math.random() * Math.PI * 2,
    pulse: 0,
  };
}

export default function ConstellationCanvas({ className = '' }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  const init = useCallback((canvas) => {
    const { width, height } = canvas;
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, (_, i) =>
      createParticle(width, height, i)
    );
  }, []);

  const draw = useCallback((canvas, ctx) => {
    const { width, height } = canvas;
    timeRef.current += 0.016;
    const t = timeRef.current;

    ctx.clearRect(0, 0, width, height);

    // Deep space background gradient
    const bg = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.8);
    bg.addColorStop(0, 'rgba(13, 27, 53, 0.15)');
    bg.addColorStop(1, 'rgba(3, 4, 10, 0)');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    // Update positions
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      // Mouse repulsion
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100;
        p.vx += (dx / dist) * force * 0.05;
        p.vy += (dy / dist) * force * 0.05;
      }

      // Dampen velocity
      p.vx *= 0.99;
      p.vy *= 0.99;
      if (Math.abs(p.vx) < 0.05) p.vx += (Math.random() - 0.5) * 0.1;
      if (Math.abs(p.vy) < 0.05) p.vy += (Math.random() - 0.5) * 0.1;
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25;
          const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          gradient.addColorStop(0, `${a.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(1, `${b.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach((p) => {
      const twinkle = Math.sin(t * p.twinkleSpeed * 60 + p.twinkleOffset) * 0.3 + 0.7;
      const currentOpacity = p.opacity * twinkle;
      const currentRadius = p.radius * (0.8 + twinkle * 0.4);

      // Outer glow
      const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentRadius * 4);
      glow.addColorStop(0, `${p.color}${Math.floor(currentOpacity * 0.8 * 255).toString(16).padStart(2, '0')}`);
      glow.addColorStop(1, `${p.color}00`);
      ctx.beginPath();
      ctx.arc(p.x, p.y, currentRadius * 4, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${Math.floor(currentOpacity * 255).toString(16).padStart(2, '0')}`;
      ctx.fill();
    });

    // Nebula wisps
    const nebulaX = width * 0.3 + Math.sin(t * 0.1) * 50;
    const nebulaY = height * 0.4 + Math.cos(t * 0.08) * 30;
    const nebula = ctx.createRadialGradient(nebulaX, nebulaY, 0, nebulaX, nebulaY, 200);
    nebula.addColorStop(0, 'rgba(124, 58, 237, 0.04)');
    nebula.addColorStop(0.5, 'rgba(6, 182, 212, 0.02)');
    nebula.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = nebula;
    ctx.fillRect(0, 0, width, height);

    animFrameRef.current = requestAnimationFrame(() => draw(canvas, ctx));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init(canvas);
    };

    resize();
    draw(canvas, ctx);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [init, draw]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}
