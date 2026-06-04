import { useEffect, useRef } from 'react';

const BubbleCanvas = ({ scrollProgress = 0 }) => {
  const canvasRef = useRef(null);
  const bubblesRef = useRef([]);
  const animFrameRef = useRef(null);
  const scrollRef = useRef(scrollProgress);

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize bubbles
    const createBubble = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 200,
      radius: Math.random() * 6 + 2,
      speedY: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.02 + 0.005,
    });

    bubblesRef.current = Array.from({ length: 80 }, createBubble);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scroll = scrollRef.current;
      // Bubble count and speed increase with depth
      const speedMultiplier = 1 + scroll * 0.5;
      const opacityMultiplier = 0.4 + scroll * 0.6;

      bubblesRef.current.forEach((b, i) => {
        b.wobble += b.wobbleSpeed;
        b.y -= b.speedY * speedMultiplier;
        b.x += b.speedX + Math.sin(b.wobble) * 0.3;

        if (b.y < -20) {
          bubblesRef.current[i] = createBubble();
          return;
        }

        const gradient = ctx.createRadialGradient(
          b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.1,
          b.x, b.y, b.radius
        );
        gradient.addColorStop(0, `rgba(0, 255, 255, ${b.opacity * opacityMultiplier * 0.8})`);
        gradient.addColorStop(0.5, `rgba(0, 128, 255, ${b.opacity * opacityMultiplier * 0.3})`);
        gradient.addColorStop(1, `rgba(0, 0, 128, 0)`);

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bubble rim highlight
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 255, ${b.opacity * opacityMultiplier * 0.4})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Floating particles (smaller, faster)
      bubblesRef.current.slice(0, 20).forEach((b) => {
        const px = b.x + 50;
        const py = b.y - 30;
        ctx.beginPath();
        ctx.arc(px % canvas.width, py, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${b.opacity * 0.3})`;
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="canvas-bg"
      style={{ opacity: 0.7 }}
    />
  );
};

export default BubbleCanvas;
