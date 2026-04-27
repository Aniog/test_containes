import { useRef, useState } from 'react';

/**
 * Windows 11 磁贴光晕效果组件
 * 鼠标移入时，卡片表面出现跟随光标的白色聚光灯，
 * 同时边框在光标附近变亮，模拟 Windows 11 磁贴悬停效果。
 */
export default function SpotlightCard({ children, className = '', style = {}, borderRadius = '1rem' }) {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Border glow layer — sits outside content, highlights border near cursor */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 2,
          background: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.25), transparent 70%)`,
          // Mask to only show on the border edge (1px wide)
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Surface spotlight glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.25s ease',
          pointerEvents: 'none',
          zIndex: 1,
          background: `radial-gradient(circle 180px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.07), transparent 70%)`,
        }}
      />

      {/* Actual content */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        {children}
      </div>
    </div>
  );
}
