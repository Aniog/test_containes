import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 130;
const COLORS = ['#4a9eff', '#f5c842', '#2dd4bf', '#a78bfa', '#f472b6', '#e8edf5'];

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

    // Initialize particles
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, canvas.width),
      y: randomBetween(0, canvas.height),
      vx: randomBetween(-0.18, 0.18),
      vy: randomBetween(-0.12, 0.12),
      radius: randomBetween(0.8, 2.8),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: randomBetween(0.4, 1.0),
      pulseSpeed: randomBetween(0.005, 0.02),
      pulseOffset: randomBetween(0, Math.PI * 2),
    }));

    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(74, 158, 255, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        const pulse = Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.3 + 0.7;
        const alpha = p.alpha * pulse;

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        grd.addColorStop(0, p.color.replace(')', `, ${alpha * 0.6})`).replace('rgb', 'rgba').replace('#', 'rgba(').replace('rgba(', 'rgba('));
        grd.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="constellation-canvas"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  );
}
