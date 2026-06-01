import { useEffect, useRef, useMemo } from 'react';

const STAR_COUNT = 180;
const NODE_COUNT = 40;
const CONNECTION_DISTANCE = 120;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const starsRef = useRef([]);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  const nodeColors = useMemo(() => [
    '#4f8ef7', '#2dd4bf', '#f5c842', '#a78bfa', '#f472b6', '#34d399',
  ], []);

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
      const w = canvas.width;
      const h = canvas.height;

      starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: randomBetween(0.3, 1.5),
        opacity: randomBetween(0.2, 0.9),
        twinkleSpeed: randomBetween(0.005, 0.02),
        twinklePhase: Math.random() * Math.PI * 2,
      }));

      nodesRef.current = Array.from({ length: NODE_COUNT }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: randomBetween(-0.3, 0.3),
        vy: randomBetween(-0.3, 0.3),
        r: randomBetween(2, 5),
        color: nodeColors[i % nodeColors.length],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: randomBetween(0.01, 0.03),
        label: ['joy', 'love', 'grief', 'wonder', 'courage', 'peace', 'longing', 'pride'][i % 8],
      }));
    };

    let frame = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Draw background gradient
      const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) / 1.5);
      grad.addColorStop(0, 'rgba(13, 21, 48, 0.4)');
      grad.addColorStop(1, 'rgba(5, 8, 16, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw background stars
      starsRef.current.forEach(star => {
        star.twinklePhase += star.twinkleSpeed;
        const opacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinklePhase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      // Update and draw memory nodes
      const nodes = nodesRef.current;
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
        node.pulsePhase += node.pulseSpeed;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.35;
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            gradient.addColorStop(0, nodes[i].color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
            gradient.addColorStop(1, nodes[j].color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Mouse interaction — draw connections to nearby nodes
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      nodes.forEach(node => {
        const dx = node.x - mx;
        const dy = node.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.6;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = node.color + Math.round(alpha * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulse = 0.7 + 0.3 * Math.sin(node.pulsePhase);
        const glowRadius = node.r * 4 * pulse;

        // Glow
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius);
        glow.addColorStop(0, node.color + '80');
        glow.addColorStop(1, node.color + '00');
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      frame++;
      animRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    draw();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, [nodeColors]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
