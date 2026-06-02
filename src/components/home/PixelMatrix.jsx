import { useEffect, useRef, useCallback } from 'react';

const COLS = 40;
const ROWS = 22;
const COLORS = ['#00FFFF', '#FF00FF', '#00FF41', '#FFB300', '#0080FF', '#FF4400'];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export default function PixelMatrix() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const frameRef = useRef(null);
  const pixelsRef = useRef([]);
  const timeRef = useRef(0);

  const initPixels = useCallback((w, h) => {
    const cellW = w / COLS;
    const cellH = h / ROWS;
    const pixels = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const baseColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        pixels.push({
          col,
          row,
          x: col * cellW + cellW / 2,
          y: row * cellH + cellH / 2,
          cellW,
          cellH,
          baseColor,
          brightness: Math.random() * 0.3 + 0.05,
          targetBrightness: Math.random() * 0.3 + 0.05,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.02 + 0.005,
          z: Math.random() * 0.5 + 0.5,
        });
      }
    }
    pixelsRef.current = pixels;
  }, []);

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    timeRef.current += 0.016;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, w, h);

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    pixelsRef.current.forEach((px) => {
      const d = dist(mx, my, px.x, px.y);
      const influence = Math.max(0, 1 - d / 200);
      const wave = Math.sin(timeRef.current * px.speed * 60 + px.phase) * 0.5 + 0.5;
      const baseBright = lerp(px.brightness, px.targetBrightness, 0.02);
      px.brightness = baseBright;

      const finalBright = Math.min(1, baseBright + influence * 0.9 + wave * 0.15);

      const { r, g, b } = hexToRgb(px.baseColor);
      const alpha = finalBright;

      // 3D perspective offset based on mouse
      const perspX = (mx / w - 0.5) * influence * 8 * px.z;
      const perspY = (my / h - 0.5) * influence * 8 * px.z;

      const drawX = px.x + perspX - px.cellW * 0.4;
      const drawY = px.y + perspY - px.cellH * 0.4;
      const size = px.cellW * 0.8 * (0.6 + influence * 0.4 + wave * 0.1);

      // Glow
      if (finalBright > 0.3) {
        const glowSize = size * (1 + influence * 2);
        const grad = ctx.createRadialGradient(
          px.x + perspX, px.y + perspY, 0,
          px.x + perspX, px.y + perspY, glowSize
        );
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.4})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(
          px.x + perspX - glowSize,
          px.y + perspY - glowSize,
          glowSize * 2,
          glowSize * 2
        );
      }

      // LED pixel
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
      ctx.fillRect(drawX, drawY, size, size);

      // Bright center dot
      if (finalBright > 0.5) {
        ctx.fillStyle = `rgba(255,255,255,${(finalBright - 0.5) * 0.8})`;
        const dotSize = size * 0.25;
        ctx.fillRect(
          px.x + perspX - dotSize / 2,
          px.y + perspY - dotSize / 2,
          dotSize,
          dotSize
        );
      }

      // Slowly drift target brightness
      if (Math.random() < 0.002) {
        px.targetBrightness = Math.random() * 0.3 + 0.05;
      }
    });

    frameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initPixels(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);
    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [draw, initPixels]);

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -999, y: -999 };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'crosshair', imageRendering: 'pixelated' }}
    />
  );
}
