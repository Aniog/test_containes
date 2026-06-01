import { useEffect, useRef } from 'react';

const ConstellationCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let width, height;
    let particles = [];
    let mouse = { x: null, y: null };

    const PARTICLE_COUNT = 120;
    const CONNECTION_DISTANCE = 140;
    const MOUSE_INFLUENCE = 180;

    const MEMORY_COLORS = [
      'rgba(6, 182, 212,',   // cyan
      'rgba(124, 58, 237,',  // violet
      'rgba(245, 158, 11,',  // amber
      'rgba(244, 63, 94,',   // rose
      'rgba(52, 211, 153,',  // emerald
      'rgba(248, 113, 113,', // red
      'rgba(167, 139, 250,', // purple
    ];

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const createParticle = () => {
      const color = MEMORY_COLORS[Math.floor(Math.random() * MEMORY_COLORS.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.5 + 0.5,
        color,
        opacity: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        pulse: 0,
        isMemory: Math.random() > 0.7,
      };
    };

    const init = () => {
      resize();
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
    };

    const drawParticle = (p, t) => {
      const twinkle = Math.sin(t * p.twinkleSpeed * 60 + p.twinkleOffset);
      const opacity = p.opacity + twinkle * 0.2;
      const r = p.radius + (p.isMemory ? Math.abs(twinkle) * 1.5 : 0);

      if (p.isMemory) {
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        grd.addColorStop(0, `${p.color}${Math.min(opacity, 1)})`);
        grd.addColorStop(1, `${p.color}0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${Math.min(opacity, 1)})`;
      ctx.fill();
    };

    const drawConnections = (p1, p2, dist) => {
      const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.25;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const drawMouseConnections = (p, dist) => {
      const opacity = (1 - dist / MOUSE_INFLUENCE) * 0.4;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    let t = 0;
    const animate = () => {
      t++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        if (mouse.x !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_INFLUENCE) {
            drawMouseConnections(p, dist);
            p.vx += dx * 0.00005;
            p.vy += dy * 0.00005;
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            drawConnections(p, p2, dist);
          }
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.6) {
          p.vx *= 0.99;
          p.vy *= 0.99;
        }

        drawParticle(p, t);
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      resize();
    };

    init();
    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
};

export default ConstellationCanvas;
