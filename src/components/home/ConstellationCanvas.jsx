import { useEffect, useRef } from 'react';

const ConstellationCanvas = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const STAR_COUNT = 180;
    const CONNECTION_DISTANCE = 120;
    const MOUSE_INFLUENCE = 150;

    const COLORS = [
      'rgba(122, 179, 255,',
      'rgba(200, 168, 240,',
      'rgba(240, 200, 122,',
      'rgba(232, 240, 255,',
      'rgba(122, 240, 200,',
    ];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: Math.random() * 0.6 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
      pulse: Math.random() > 0.85,
    });

    const initStars = () => {
      starsRef.current = Array.from({ length: STAR_COUNT }, createStar);
    };

    const drawStar = (star, time) => {
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
      const opacity = star.opacity + twinkle * 0.2;

      if (star.pulse) {
        const pulseSize = star.radius * (1.5 + Math.sin(time * 0.03 + star.twinkleOffset) * 0.5);
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, pulseSize * 4);
        gradient.addColorStop(0, `${star.color}${Math.min(opacity, 1)})`);
        gradient.addColorStop(1, `${star.color}0)`);
        ctx.beginPath();
        ctx.arc(star.x, star.y, pulseSize * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${star.color}${Math.min(opacity, 1)})`;
      ctx.fill();
    };

    const drawConnections = (stars) => {
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(122, 179, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const mdx = stars[i].x - mx;
        const mdy = stars[i].y - my;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < MOUSE_INFLUENCE) {
          const opacity = (1 - mdist / MOUSE_INFLUENCE) * 0.5;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(200, 168, 240, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    };

    const updateStar = (star) => {
      star.x += star.vx;
      star.y += star.vy;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const dx = star.x - mx;
      const dy = star.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MOUSE_INFLUENCE) {
        const force = (MOUSE_INFLUENCE - dist) / MOUSE_INFLUENCE * 0.02;
        star.vx += (dx / dist) * force;
        star.vy += (dy / dist) * force;
      }

      const maxSpeed = 0.8;
      const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
      if (speed > maxSpeed) {
        star.vx = (star.vx / speed) * maxSpeed;
        star.vy = (star.vy / speed) * maxSpeed;
      }

      star.vx *= 0.99;
      star.vy *= 0.99;

      if (star.x < 0) star.x = canvas.width;
      if (star.x > canvas.width) star.x = 0;
      if (star.y < 0) star.y = canvas.height;
      if (star.y > canvas.height) star.y = 0;
    };

    let time = 0;
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      stars.forEach(star => updateStar(star));
      drawConnections(stars);
      stars.forEach(star => drawStar(star, time));

      animRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    initStars();
    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', () => {
      resize();
      initStars();
    });

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="constellation-canvas"
      style={{ display: 'block' }}
    />
  );
};

export default ConstellationCanvas;
