import { useEffect, useRef } from 'react';

const MEMORY_SNIPPETS = [
  'first snow', 'grandmother\'s hands', 'ocean horizon', 'wedding dance',
  'last harvest', 'meteor shower', 'child\'s laughter', 'farewell kiss',
  'mountain summit', 'midnight garden', 'old letters', 'first word',
  'victory garden', 'silk road', 'orbital sunrise', 'blue marble',
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
        radius: Math.random() * 2.2 + 0.4,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        isMemory: i < 18,
        label: MEMORY_SNIPPETS[i % MEMORY_SNIPPETS.length],
        labelOpacity: 0,
        color: pickColor(i),
        pulse: 0,
      }));
    };

    const pickColor = (i) => {
      const colors = [
        'rgba(124,58,237,', // violet
        'rgba(6,182,212,',  // cyan
        'rgba(245,158,11,', // gold
        'rgba(192,38,211,', // pink
        'rgba(16,185,129,', // green
      ];
      return colors[i % colors.length];
    };

    const drawStar = (star, t) => {
      const twinkle = Math.sin(t * star.twinkleSpeed * 60 + star.twinkleOffset);
      const opacity = star.opacity + twinkle * 0.2;

      if (star.isMemory) {
        // Memory fragment — glowing dot
        const grd = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 4);
        grd.addColorStop(0, `${star.color}${Math.min(opacity, 1)})`);
        grd.addColorStop(0.4, `${star.color}${Math.min(opacity * 0.5, 1)})`);
        grd.addColorStop(1, `${star.color}0)`);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${Math.min(opacity, 1)})`;
        ctx.fill();

        // Label on hover proximity
        if (star.labelOpacity > 0) {
          ctx.font = '10px Inter, sans-serif';
          ctx.fillStyle = `rgba(226,232,240,${star.labelOpacity})`;
          ctx.fillText(star.label, star.x + star.radius + 6, star.y + 4);
        }
      } else {
        // Background star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226,232,240,${Math.min(opacity * 0.5, 0.6)})`;
        ctx.fill();
      }
    };

    const drawConnections = (stars) => {
      const memoryStars = stars.filter(s => s.isMemory);
      for (let i = 0; i < memoryStars.length; i++) {
        for (let j = i + 1; j < memoryStars.length; j++) {
          const a = memoryStars[i];
          const b = memoryStars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    let t = 0;
    const animate = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      const mouse = mouseRef.current;

      stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        if (star.isMemory) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const targetOpacity = dist < 120 ? Math.max(0, (120 - dist) / 120) : 0;
          star.labelOpacity += (targetOpacity - star.labelOpacity) * 0.1;
        }
      });

      drawConnections(stars);
      stars.forEach(star => drawStar(star, t));

      animRef.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    animate();

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
