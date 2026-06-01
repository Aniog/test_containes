import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 140;
const MEMORY_FRAGMENTS = [
  'first snow', 'mother\'s voice', 'wedding day', 'last goodbye',
  'childhood home', 'first love', 'harvest moon', 'ocean crossing',
  'newborn cry', 'ancient song', 'burning city', 'quiet morning',
  'final letter', 'dancing alone', 'starlit road', 'forgotten name',
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        x: randomBetween(0, canvas.width),
        y: randomBetween(0, canvas.height),
        vx: randomBetween(-0.15, 0.15),
        vy: randomBetween(-0.15, 0.15),
        radius: randomBetween(1, 3),
        opacity: randomBetween(0.3, 1),
        opacityDir: Math.random() > 0.5 ? 1 : -1,
        opacitySpeed: randomBetween(0.003, 0.008),
        color: ['#4f8ef7', '#a78bfa', '#2dd4bf', '#f5c842', '#f472b6'][Math.floor(Math.random() * 5)],
        label: i < 20 ? MEMORY_FRAGMENTS[i % MEMORY_FRAGMENTS.length] : null,
        labelOpacity: 0,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79, 142, 247, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          p.labelOpacity = Math.min(1, p.labelOpacity + 0.05);
        } else {
          p.labelOpacity = Math.max(0, p.labelOpacity - 0.03);
        }
      }

      // Draw particles
      for (const p of particles) {
        // Twinkle
        p.opacity += p.opacityDir * p.opacitySpeed;
        if (p.opacity >= 1) { p.opacity = 1; p.opacityDir = -1; }
        if (p.opacity <= 0.2) { p.opacity = 0.2; p.opacityDir = 1; }

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        grd.addColorStop(0, p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0'));
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Label on hover
        if (p.label && p.labelOpacity > 0) {
          ctx.font = '10px Inter, sans-serif';
          ctx.fillStyle = `rgba(203, 213, 225, ${p.labelOpacity * 0.9})`;
          ctx.fillText(p.label, p.x + 8, p.y - 6);
        }

        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ cursor: 'crosshair' }}
    />
  );
}
