import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 130;
const COLORS = ['#4f8ef7', '#2dd4bf', '#a78bfa', '#e879a0', '#f5c842', '#ffffff'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, canvas.width),
      y: randomBetween(0, canvas.height),
      vx: randomBetween(-0.25, 0.25),
      vy: randomBetween(-0.25, 0.25),
      radius: randomBetween(1, 3.5),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: randomBetween(0.4, 1),
      twinkleSpeed: randomBetween(0.005, 0.02),
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
      pulse: randomBetween(0, Math.PI * 2),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

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
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.pulse += p.twinkleSpeed;
        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        gradient.addColorStop(0, p.color.replace(')', `, ${currentOpacity})`).replace('rgb', 'rgba').replace('#', 'rgba(').replace('rgba(', 'rgba('));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(p.color, currentOpacity * 0.15);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(p.color, currentOpacity);
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
