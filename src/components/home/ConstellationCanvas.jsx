import { useEffect, useRef, useCallback } from 'react';

const MEMORY_FRAGMENTS = [
  'first snow', 'grandmother\'s hands', 'the crossing', 'harvest moon',
  'wedding bells', 'last goodbye', 'child\'s laughter', 'ocean voyage',
  'mountain dawn', 'city lights', 'monsoon rain', 'desert stars',
  'library smell', 'orbital sunrise', 'market smoke', 'bell tower',
  'silk road dust', 'river song', 'forest path', 'final harvest',
];

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const initNodes = useCallback((width, height) => {
    const count = Math.min(80, Math.floor((width * height) / 12000));
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2.5 + 0.8,
      opacity: Math.random() * 0.6 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
      label: i % 5 === 0 ? MEMORY_FRAGMENTS[i % MEMORY_FRAGMENTS.length] : null,
      color: ['#4a9eff', '#9b6dff', '#2dd4bf', '#ffb347', '#ff6b9d'][Math.floor(Math.random() * 5)],
      pulse: Math.random() > 0.85,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      nodesRef.current = initNodes(width, height);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    let t = 0;

    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;

      // Update positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        // Mouse repulsion
        const dx = node.x - mouseRef.current.x;
        const dy = node.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120 * 0.8;
          node.x += (dx / dist) * force;
          node.y += (dy / dist) * force;
        }
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(74, 158, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        const twinkle = Math.sin(t * node.twinkleSpeed * 60 + node.twinkleOffset) * 0.3 + 0.7;
        const opacity = node.opacity * twinkle;

        if (node.pulse) {
          // Pulsing glow ring
          const pulseSize = node.radius * (2 + Math.sin(t * 1.5 + node.twinkleOffset) * 1.5);
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 3);
          gradient.addColorStop(0, `${node.color}44`);
          gradient.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseSize * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Star glow
        const glowGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);
        glowGrad.addColorStop(0, `${node.color}${Math.floor(opacity * 180).toString(16).padStart(2, '0')}`);
        glowGrad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Star core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 240, 255, ${opacity})`;
        ctx.fill();

        // Memory fragment label
        if (node.label) {
          const labelOpacity = opacity * 0.6;
          ctx.font = '9px "Space Mono", monospace';
          ctx.fillStyle = `rgba(136, 153, 187, ${labelOpacity})`;
          ctx.fillText(node.label, node.x + node.radius + 4, node.y + 3);
        }
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ cursor: 'crosshair' }}
    />
  );
}
