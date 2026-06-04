import { useEffect, useRef, useCallback } from 'react';

const BUBBLE_COUNT = 80;
const MIN_RADIUS = 2;
const MAX_RADIUS = 6;

export default function BubbleCanvas() {
  const canvasRef = useRef(null);
  const bubblesRef = useRef([]);
  const scrollRef = useRef(0);
  const rafRef = useRef(null);

  const initBubbles = useCallback((width, height) => {
    const bubbles = [];
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS),
        speed: 0.2 + Math.random() * 0.8,
        drift: (Math.random() - 0.5) * 0.5,
        opacity: 0.1 + Math.random() * 0.3,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.03,
      });
    }
    bubblesRef.current = bubbles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (bubblesRef.current.length === 0) {
        initBubbles(canvas.width, canvas.height);
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scrollY = scrollRef.current;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const scrollFraction = Math.min(scrollY / maxScroll, 1);

      for (const b of bubblesRef.current) {
        b.pulse += b.pulseSpeed;
        const pulseFactor = 1 + Math.sin(b.pulse) * 0.3;

        const depthSpeed = 1 + scrollFraction * 2;
        b.y -= b.speed * depthSpeed;
        b.x += b.drift * depthSpeed;

        if (b.y < -20) {
          b.y = canvas.height + 20;
          b.x = Math.random() * canvas.width;
        }
        if (b.x < -20) b.x = canvas.width + 20;
        if (b.x > canvas.width + 20) b.x = -20;

        const r = b.r * pulseFactor;
        const alpha = b.opacity * (0.7 + scrollFraction * 0.3);

        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r * 2);
        gradient.addColorStop(0, `rgba(0, 255, 255, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(0, 0, 128, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 32, 0)');

        ctx.beginPath();
        ctx.arc(b.x, b.y, r * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha * 1.5})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [initBubbles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}