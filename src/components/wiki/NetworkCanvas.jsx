import { useEffect, useRef } from 'react';

const NODE_COUNT = 90;
const CONNECTION_DISTANCE = 180;
const NODE_SPEED = 0.35;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function NetworkCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // Re-scatter nodes on resize so they fill the new dimensions
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: randomBetween(0, canvas.width),
        y: randomBetween(0, canvas.height),
        vx: randomBetween(-NODE_SPEED, NODE_SPEED),
        vy: randomBetween(-NODE_SPEED, NODE_SPEED),
        radius: randomBetween(2, 3.5),
        pulse: randomBetween(0, Math.PI * 2),
      }));
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const t = Date.now() * 0.001;

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.5;
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y
            );
            gradient.addColorStop(0, `rgba(5, 150, 105, ${alpha * 0.5})`);
            gradient.addColorStop(1, `rgba(20, 184, 166, ${alpha * 0.5})`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes with pulsing glow
      for (const node of nodes) {
        const glow = 0.6 + 0.4 * Math.sin(t * 1.5 + node.pulse);

        // Outer glow
        const glowGrad = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        );
        glowGrad.addColorStop(0, `rgba(5, 150, 105, ${0.18 * glow})`);
        glowGrad.addColorStop(1, 'rgba(5, 150, 105, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(5, 150, 105, ${0.5 + 0.3 * glow})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
