import { useEffect, useRef } from 'react';

const BUBBLE_COUNT = 60;

function createBubble(canvasWidth, canvasHeight) {
  return {
    x: Math.random() * canvasWidth,
    y: canvasHeight + Math.random() * canvasHeight,
    radius: Math.random() * 4 + 1,
    speedY: Math.random() * 0.6 + 0.2,
    speedX: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.5 + 0.1,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: Math.random() * 0.02 + 0.005,
  };
}

export default function ParticleCanvas({ scrollProgress = 0 }) {
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
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize bubbles
    bubblesRef.current = Array.from({ length: BUBBLE_COUNT }, () =>
      createBubble(width, height)
    );

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const scroll = scrollRef.current;
      // Speed multiplier based on scroll — faster as you go deeper
      const speedMult = 1 + scroll * 2;

      bubblesRef.current.forEach((b) => {
        b.wobble += b.wobbleSpeed;
        b.y -= b.speedY * speedMult;
        b.x += b.speedX + Math.sin(b.wobble) * 0.4;

        // Reset when off screen
        if (b.y < -b.radius * 2) {
          Object.assign(b, createBubble(width, height));
          b.y = height + b.radius;
        }
        if (b.x < -b.radius) b.x = width + b.radius;
        if (b.x > width + b.radius) b.x = -b.radius;

        // Cyan-to-blue gradient based on depth
        const depthColor = scroll > 0.5
          ? `rgba(0, ${Math.floor(150 + (1 - scroll) * 105)}, ${Math.floor(200 + scroll * 55)}, ${b.opacity})`
          : `rgba(0, 255, 255, ${b.opacity})`;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);

        // Bubble gradient
        const grad = ctx.createRadialGradient(
          b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.1,
          b.x, b.y, b.radius
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${b.opacity * 0.8})`);
        grad.addColorStop(0.5, depthColor);
        grad.addColorStop(1, `rgba(0, 0, 128, ${b.opacity * 0.3})`);

        ctx.fillStyle = grad;
        ctx.fill();

        // Bubble rim
        ctx.strokeStyle = `rgba(0, 255, 255, ${b.opacity * 0.6})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
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
      className="particle-canvas"
      aria-hidden="true"
    />
  );
}
