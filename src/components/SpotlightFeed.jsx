import { useRef, useState } from 'react';

/**
 * 统一光晕容器 — Windows 11 磁贴跨卡片光晕效果
 *
 * 将表面光晕提升到整个列表层级，使光晕成为一个整体，
 * 不被单个卡片的边界裁剪。鼠标在卡片底部时，光晕自然
 * 延伸到下方卡片的顶部，完全还原 Windows 11 磁贴行为。
 *
 * 子卡片（PostCard / SpotlightCard）应传入 showSurfaceGlow={false}，
 * 只保留各自的边框高亮，表面光晕由本组件统一渲染。
 */
export default function SpotlightFeed({ children, className = '' }) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (!active) setActive(true);
  };

  const handleMouseLeave = () => setActive(false);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Single unified glow that spans the entire feed — not clipped per card */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 10,
          opacity: active ? 1 : 0,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(circle 260px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.075), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
