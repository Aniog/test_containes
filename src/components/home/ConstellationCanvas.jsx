import { useEffect, useRef } from 'react';

const MEMORY_FRAGMENTS = [
  "grandmother's hands", "first snow", "wedding bells", "the last letter",
  "a child's laugh", "burning fields", "ocean crossing", "midnight prayer",
  "first heartbreak", "harvest moon", "the old house", "a soldier's return",
  "birth of a star", "desert silence", "river at dawn", "the final goodbye",
  "a mother's song", "city lights", "ancient stones", "the long journey",
];

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

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
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      starsRef.current = Array.from({ length: Math.min(count, 120) }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.6 + 0.3,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.008 + 0.004,
        label: i < MEMORY_FRAGMENTS.length ? MEMORY_FRAGMENTS[i] : null,
        labelOpacity: 0,
        color: pickColor(),
        isMemory: Math.random() > 0.6,
      }));
    };

    const pickColor = () => {
      const colors = [
        'rgba(232,201,122,', // gold
        'rgba(125,211,252,', // cyan
        'rgba(192,132,252,', // violet
        'rgba(249,168,212,', // rose
        'rgba(255,255,255,', // white
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const draw = (t) => {
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
            const alpha = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(232,201,122,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections
      for (const star of stars) {
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(125,211,252,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          star.labelOpacity = Math.min(1, star.labelOpacity + 0.05);
        } else {
          star.labelOpacity = Math.max(0, star.labelOpacity - 0.03);
        }
      }

      // Draw stars
      for (const star of stars) {
        const pulse = Math.sin(t * star.pulseSpeed + star.pulseOffset) * 0.3 + 0.7;
        const r = star.radius * pulse;
        const op = star.opacity * pulse;

        // Glow
        if (star.isMemory) {
          const grd = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, r * 6);
          grd.addColorStop(0, `${star.color}${op * 0.6})`);
          grd.addColorStop(1, `${star.color}0)`);
          ctx.beginPath();
          ctx.arc(star.x, star.y, r * 6, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        // Core
        ctx.beginPath();
        ctx.arc(star.x, star.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${op})`;
        ctx.fill();

        // Label
        if (star.label && star.labelOpacity > 0.01) {
          ctx.font = '10px Inter, sans-serif';
          ctx.fillStyle = `rgba(232,201,122,${star.labelOpacity * 0.9})`;
          ctx.fillText(star.label, star.x + r + 5, star.y + 3);
        }

        // Move
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
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

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    resize();
    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      if (animRef.current) cancelAnimationFrame(animRef.current);
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
