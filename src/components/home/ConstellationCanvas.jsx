import { useEffect, useRef, useState, useCallback } from 'react';

const MEMORY_SNIPPETS = [
  "My grandmother's hands in the wheat fields...",
  "The night the stars fell over the valley...",
  "First day of school, shoes too tight...",
  "The smell of rain on hot pavement...",
  "Dancing until the sun came up...",
  "The last time I heard her laugh...",
  "A letter that changed everything...",
  "Watching the city lights from the hill...",
  "The day my son was born...",
  "Learning to swim in the cold lake...",
  "The harvest moon over the rice fields...",
  "My father's voice reading stories...",
  "The train station farewell...",
  "First snow, first wonder...",
  "The market at dawn, colors everywhere...",
];

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [tooltip, setTooltip] = useState(null);

  const initStars = useCallback((width, height) => {
    const count = Math.min(Math.floor((width * height) / 8000), 180);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: pickStarColor(),
      snippet: MEMORY_SNIPPETS[i % MEMORY_SNIPPETS.length],
      pulsePhase: Math.random() * Math.PI * 2,
    }));
  }, []);

  function pickStarColor() {
    const colors = [
      'rgba(79,142,247,',
      'rgba(167,139,250,',
      'rgba(45,212,191,',
      'rgba(245,200,66,',
      'rgba(232,121,160,',
      'rgba(255,255,255,',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      starsRef.current = initStars(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    let t = 0;

    const draw = () => {
      t += 1;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const stars = starsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw connection lines
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
            ctx.strokeStyle = `rgba(79,142,247,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw mouse proximity lines
      for (const star of stars) {
        const dx = star.x - mx;
        const dy = star.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(167,139,250,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw stars
      for (const star of stars) {
        const twinkle = Math.sin(t * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        const opacity = star.opacity * twinkle;

        // Glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 4);
        gradient.addColorStop(0, `${star.color}${opacity})`);
        gradient.addColorStop(1, `${star.color}0)`);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${Math.min(opacity + 0.3, 1)})`;
        ctx.fill();

        // Move
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [initStars]);

  const handleMouseMove = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleClick = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    for (const star of starsRef.current) {
      const dx = star.x - cx;
      const dy = star.y - cy;
      if (Math.sqrt(dx * dx + dy * dy) < 12) {
        setTooltip({ x: e.clientX, y: e.clientY, text: star.snippet });
        setTimeout(() => setTooltip(null), 3000);
        return;
      }
    }
    setTooltip(null);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        style={{ cursor: 'crosshair' }}
      />
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{ left: tooltip.x + 16, top: tooltip.y - 20 }}
        >
          <div className="bg-space-indigo/90 backdrop-blur-sm border border-nebula-blue/40 rounded-lg px-4 py-3 max-w-xs shadow-lg shadow-black/50">
            <p className="text-xs text-slate-300 italic leading-relaxed">"{tooltip.text}"</p>
            <p className="text-xs text-nebula-blue mt-1">— Memory Fragment</p>
          </div>
        </div>
      )}
    </div>
  );
}
