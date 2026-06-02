import { useRef, useState, useCallback } from 'react';

export default function ArchiveCard({ item }) {
  const cardRef = useRef(null);
  const [shadow, setShadow] = useState('6px 6px 12px #D1D1D5, -6px -6px 12px #FFFFFF');
  const [grainOpacity] = useState(0.06 + Math.random() * 0.04);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Vector from card center to mouse
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    // Normalize to -1..1
    const nx = dx / (rect.width / 2);
    const ny = dy / (rect.height / 2);

    // Light source offset: shadow goes opposite to light
    const dist = 14;
    const sx = -nx * dist;
    const sy = -ny * dist;

    // Blur based on distance from center
    const blur = 16 + Math.abs(nx * ny) * 8;

    setShadow(
      `${sx}px ${sy}px ${blur}px #C8C8CC, ${-sx * 0.6}px ${-sy * 0.6}px ${blur * 0.8}px #FFFFFF`
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShadow('6px 6px 12px #D1D1D5, -6px -6px 12px #FFFFFF');
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl bg-paper overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      style={{ boxShadow: shadow, transition: 'box-shadow 0.15s ease, transform 0.3s ease' }}
    >
      {/* Paper grain overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px',
          opacity: grainOpacity,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          alt={item.title}
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}] [archive-section-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-5 relative z-20">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            id={item.titleId}
            className="font-display text-xl font-light text-ink leading-tight"
          >
            {item.title}
          </h3>
          <span className="flex-shrink-0 font-mono text-xs text-gold tracking-widest mt-1">
            {item.year}
          </span>
        </div>
        <p
          id={item.descId}
          className="text-xs font-mono text-ink-faint tracking-widest uppercase"
        >
          {item.category}
        </p>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-2">
          {item.desc}
        </p>
      </div>
    </article>
  );
}
