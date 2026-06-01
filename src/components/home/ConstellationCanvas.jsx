import { useEffect, useRef, useCallback } from 'react';

const EMOTION_COLORS = {
  joy: '#ffd166',
  love: '#ff6b9d',
  wonder: '#7c83fd',
  grief: '#8892b0',
  nostalgia: '#ff8c42',
  peace: '#4ecdc4',
  fear: '#c45e1a',
  hope: '#a5aaff',
};

const STAR_COUNT = 180;
const FRAGMENT_COUNT = 60;
const CONNECTION_DISTANCE = 120;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function ConstellationCanvas({ memories = [] }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const starsRef = useRef([]);
  const fragmentsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const timeRef = useRef(0);

  const initParticles = useCallback((width, height) => {
    // Background stars
    starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: randomBetween(0.3, 1.8),
      opacity: randomBetween(0.2, 1),
      twinkleSpeed: randomBetween(0.005, 0.02),
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Memory fragments (larger, colored, connected)
    const emotions = Object.keys(EMOTION_COLORS);
    fragmentsRef.current = Array.from({ length: FRAGMENT_COUNT }, (_, i) => {
      const memory = memories[i % memories.length];
      const emotion = memory ? memory.emotion : emotions[i % emotions.length];
      return {
        x: randomBetween(0.05 * width, 0.95 * width),
        y: randomBetween(0.05 * height, 0.95 * height),
        vx: randomBetween(-0.15, 0.15),
        vy: randomBetween(-0.15, 0.15),
        r: randomBetween(2, 5),
        color: EMOTION_COLORS[emotion] || '#7c83fd',
        opacity: randomBetween(0.5, 1),
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: randomBetween(0.01, 0.03),
        memory: memory || null,
        hovered: false,
      };
    });
  }, [memories]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', () => {
      mouseRef.current = { x: -9999, y: -9999 };
    });

    const draw = () => {
      const { width, height } = canvas;
      timeRef.current += 1;
      ctx.clearRect(0, 0, width, height);

      // Draw background stars
      starsRef.current.forEach((star) => {
        const twinkle = Math.sin(timeRef.current * star.twinkleSpeed + star.twinkleOffset);
        const opacity = star.opacity * (0.6 + 0.4 * twinkle);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 234, 246, ${opacity})`;
        ctx.fill();
      });

      const fragments = fragmentsRef.current;
      const mouse = mouseRef.current;

      // Update fragment positions
      fragments.forEach((f) => {
        f.x += f.vx;
        f.y += f.vy;
        if (f.x < 0 || f.x > width) f.vx *= -1;
        if (f.y < 0 || f.y > height) f.vy *= -1;

        const dx = mouse.x - f.x;
        const dy = mouse.y - f.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        f.hovered = dist < 40;
      });

      // Draw connections between nearby fragments
      for (let i = 0; i < fragments.length; i++) {
        for (let j = i + 1; j < fragments.length; j++) {
          const a = fragments[i];
          const b = fragments[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, a.color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
            gradient.addColorStop(1, b.color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw mouse-proximity connections
      fragments.forEach((f) => {
        const dx = mouse.x - f.x;
        const dy = mouse.y - f.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const alpha = (1 - dist / 150) * 0.5;
          ctx.beginPath();
          ctx.moveTo(f.x, f.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = f.color + Math.round(alpha * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw fragments
      fragments.forEach((f) => {
        const pulse = Math.sin(timeRef.current * f.pulseSpeed + f.pulseOffset);
        const radius = f.hovered ? f.r * 2.5 : f.r * (1 + 0.3 * pulse);
        const opacity = f.hovered ? 1 : f.opacity * (0.7 + 0.3 * pulse);

        // Glow
        if (f.hovered || pulse > 0.5) {
          const glowRadius = radius * 4;
          const glow = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, glowRadius);
          glow.addColorStop(0, f.color + '66');
          glow.addColorStop(1, f.color + '00');
          ctx.beginPath();
          ctx.arc(f.x, f.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(f.x, f.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = f.color + Math.round(opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Inner bright core
        ctx.beginPath();
        ctx.arc(f.x, f.y, radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff' + Math.round(opacity * 0.8 * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="constellation-canvas"
      style={{ cursor: 'crosshair' }}
    />
  );
}
