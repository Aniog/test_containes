import { useEffect, useRef } from 'react';

const MEMORY_FRAGMENTS = [
  'first breath', 'grandmother\'s hands', 'the last harvest', 'wedding bells',
  'a child\'s laugh', 'the burning library', 'silk road dust', 'morning prayers',
  'the wall fell', 'radio silence', 'last wave', 'candlelight reading',
  'iron rails', 'plague fresco', 'lunar steps', 'river mist',
  'three-day wedding', 'desert caravan', 'Antarctic ice', 'ancient song',
];

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      starsRef.current = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        isMemory: i < MEMORY_FRAGMENTS.length,
        label: i < MEMORY_FRAGMENTS.length ? MEMORY_FRAGMENTS[i] : null,
        color: pickColor(i),
        pulse: 0,
      }));
    };

    const pickColor = (i) => {
      const colors = ['#4f8ef7', '#2dd4bf', '#f5c842', '#e879a0', '#8b5cf6', '#ffffff'];
      return colors[i % colors.length];
    };

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      const mouse = mouseRef.current;

      // Draw connections
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(79, 142, 247, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw mouse proximity connections
      for (const star of stars) {
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.4;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(245, 200, 66, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw stars
      for (const star of stars) {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        const twinkle = Math.sin(t * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.3 + 0.7;
        const opacity = star.opacity * twinkle;

        // Glow for memory stars
        if (star.isMemory) {
          const grd = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 6);
          grd.addColorStop(0, star.color + 'aa');
          grd.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 6, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.isMemory
          ? star.color + Math.floor(opacity * 255).toString(16).padStart(2, '0')
          : `rgba(255,255,255,${opacity * 0.7})`;
        ctx.fill();

        // Label for memory stars on hover
        if (star.isMemory && star.label) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.font = '10px Inter, sans-serif';
            ctx.fillStyle = `rgba(255,255,255,${Math.max(0, 1 - dist / 80)})`;
            ctx.fillText(star.label, star.x + 8, star.y - 4);
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    draw();

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
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
