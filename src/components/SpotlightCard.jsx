import { useRef, useState } from 'react';

/**
 * Windows 11 磁贴光晕效果组件
 * - 边框高亮：跟随鼠标，在光标附近的边框变亮（裁剪在卡片内，符合预期）
 * - 表面光晕：由父级 SpotlightFeed 统一提供，可通过 showSurfaceGlow=false 关闭
 */
export default function SpotlightCard({
  children,
  className = '',
  style = {},
  borderRadius = '1rem',
  showSurfaceGlow = true,
}) {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ position: 'relative', overflow: 'visible', borderRadius, ...style }}
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => {
        const rect = cardRef.current.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Border glow — highlights the 1px border edge near cursor */}
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
          background: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.28), transparent 70%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Surface glow — subtle inner highlight */}
      {showSurfaceGlow && (
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
      )}

      {/* Content wrapper — clips images/content to rounded corners without clipping glow layers */}
      <div style={{ position: 'relative', zIndex: 3, borderRadius, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}
