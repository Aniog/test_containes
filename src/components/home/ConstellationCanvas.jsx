import { useEffect, useRef } from 'react';

const MEMORY_FRAGMENTS = [
  'the last harvest', 'her hands', 'the bells rang', 'first light',
  'we danced', 'the river', 'his letter', 'she sang', 'the stars',
  'we planted', 'the ships rose', 'I remember', 'the bread', 'his laugh',
  'the monsoon', 'she waved', 'the mountain', 'we wept', 'the fire',
  'goodbye', 'the sea', 'her voice', 'we stayed', 'the pattern',
  'he said', 'the moon', 'we carried', 'the signal', 'she smiled',
];

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const starsRef = useRef([]);
  const fragmentsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
      initFragments();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        color: Math.random() > 0.85
          ? `hsl(${260 + Math.random() * 40}, 80%, 80%)`
          : Math.random() > 0.7
            ? `hsl(${200 + Math.random() * 30}, 90%, 85%)`
            : '#ffffff',
      }));
    };

    const initFragments = () => {
      fragmentsRef.current = Array.from({ length: 12 }, (_, i) => ({
        text: MEMORY_FRAGMENTS[i % MEMORY_FRAGMENTS.length],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: Math.random() * 0.25 + 0.05,
        size: Math.random() * 4 + 9,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.1,
        fadeDir: Math.random() > 0.5 ? 1 : -1,
        fadeSpeed: Math.random() * 0.003 + 0.001,
      }));
    };

    const drawConnections = (stars, t) => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const maxDist = 120;
      const mouseInfluence = 180;

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > maxDist) continue;

          const alpha = (1 - dist / maxDist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Mouse connections
        const mdx = stars[i].x - mx;
        const mdy = stars[i].y - my;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouseInfluence) {
          const alpha = (1 - mdist / mouseInfluence) * 0.5;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    };

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      const fragments = fragmentsRef.current;

      // Update and draw stars
      for (const star of stars) {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        const twinkle = Math.sin(t * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.3 + 0.7;
        const opacity = star.opacity * twinkle;

        // Mouse repulsion
        const dx = star.x - mouseRef.current.x;
        const dy = star.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          const force = (80 - dist) / 80;
          star.x += (dx / dist) * force * 1.5;
          star.y += (dy / dist) * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba').replace('#ffffff', `rgba(255,255,255,${opacity})`);

        if (star.color === '#ffffff') {
          ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        } else {
          ctx.globalAlpha = opacity;
          ctx.fillStyle = star.color;
        }
        ctx.fill();
        ctx.globalAlpha = 1;

        // Glow for larger stars
        if (star.r > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r * 3, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r * 3);
          grad.addColorStop(0, `rgba(167,139,250,${opacity * 0.3})`);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }

      drawConnections(stars, t);

      // Draw memory fragments
      for (const frag of fragments) {
        frag.x += frag.vx;
        frag.y += frag.vy;
        frag.opacity += frag.fadeDir * frag.fadeSpeed;
        if (frag.opacity > 0.3) frag.fadeDir = -1;
        if (frag.opacity < 0.03) frag.fadeDir = 1;
        if (frag.x < -200) frag.x = canvas.width + 100;
        if (frag.x > canvas.width + 200) frag.x = -100;
        if (frag.y < -50) frag.y = canvas.height + 50;
        if (frag.y > canvas.height + 50) frag.y = -50;

        ctx.font = `italic ${frag.size}px 'Cinzel', serif`;
        ctx.fillStyle = `rgba(167, 139, 250, ${frag.opacity})`;
        ctx.fillText(frag.text, frag.x, frag.y);
      }

      // Mouse cursor glow
      if (mouseRef.current.x > 0) {
        const grad = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 80
        );
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 80, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -1000, y: -1000 }; };

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
      id="constellation-canvas"
      className="absolute inset-0 w-full h-full"
      style={{ cursor: 'crosshair' }}
    />
  );
}
