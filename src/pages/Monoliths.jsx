import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const monoliths = [
  {
    id: 'trellick',
    titleId: 'monolith-trellick-title',
    subtitleId: 'monolith-trellick-subtitle',
    imgId: 'monolith-trellick-img-a1b2c3',
    title: 'Trellick Tower',
    subtitle: 'Ernő Goldfinger, 1972',
    location: '51.5214° N, 0.2049° W',
    material: 'Reinforced Concrete',
    note: 'Brutalist residential tower, London',
  },
  {
    id: 'barbican',
    titleId: 'monolith-barbican-title',
    subtitleId: 'monolith-barbican-subtitle',
    imgId: 'monolith-barbican-img-d4e5f6',
    title: 'Barbican Estate',
    subtitle: 'Chamberlin, Powell & Bon, 1976',
    location: '51.5200° N, 0.0960° W',
    material: 'Board-Formed Concrete',
    note: 'Urban fortress, City of London',
  },
  {
    id: 'habitat',
    titleId: 'monolith-habitat-title',
    subtitleId: 'monolith-habitat-subtitle',
    imgId: 'monolith-habitat-img-g7h8i9',
    title: 'Habitat 67',
    subtitle: 'Moshe Safdie, 1967',
    location: '45.4972° N, 73.5540° W',
    material: 'Precast Concrete Modules',
    note: 'Stacked modular housing, Montréal',
  },
  {
    id: 'unitehabitation',
    titleId: 'monolith-unitehabitation-title',
    subtitleId: 'monolith-unitehabitation-subtitle',
    imgId: 'monolith-unitehabitation-img-j1k2l3',
    title: 'Unité d\'Habitation',
    subtitle: 'Le Corbusier, 1952',
    location: '43.2630° N, 5.3960° E',
    material: 'Béton Brut',
    note: 'Vertical city, Marseille',
  },
  {
    id: 'nakagin',
    titleId: 'monolith-nakagin-title',
    subtitleId: 'monolith-nakagin-subtitle',
    imgId: 'monolith-nakagin-img-m4n5o6',
    title: 'Nakagin Capsule Tower',
    subtitle: 'Kisho Kurokawa, 1972',
    location: '35.6654° N, 139.7594° E',
    material: 'Steel & Concrete Capsules',
    note: 'Metabolist icon, Tokyo',
  },
];

const Monoliths = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const goTo = (index) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 400);
  };

  const goNext = () => goTo((activeIndex + 1) % monoliths.length);
  const goPrev = () => goTo((activeIndex - 1 + monoliths.length) % monoliths.length);

  const current = monoliths[activeIndex];

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-void">
      {/* Full-bleed image */}
      {monoliths.map((m, i) => (
        <div
          key={m.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === activeIndex ? (isTransitioning ? 0 : 1) : 0 }}
        >
          <img
            data-strk-img-id={m.imgId}
            data-strk-img={`[${m.subtitleId}] [${m.titleId}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={m.title}
            className="w-full h-full object-cover"
            style={{
              filter: 'contrast(1.2) brightness(0.45) saturate(0)',
              objectPosition: 'right center',
            }}
          />
          {/* Heavy edge-darkening — ensures corners stay dark for blend-mode text */}
          <div
            className="absolute inset-0"
            style={{
              background: [
                'linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 18%, rgba(0,0,0,0.3) 38%, transparent 55%, rgba(0,0,0,0.5) 100%)',
                'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 18%, transparent 72%, rgba(0,0,0,0.85) 100%)',
              ].join(', '),
            }}
          />
        </div>
      ))}

      {/* TOP-LEFT: Studio mark */}
      <div className="absolute top-20 left-6 z-20" style={{ mixBlendMode: 'difference' }}>
        <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-white opacity-60">
          TECTONIC / MONOLITHS
        </span>
      </div>

      {/* TOP-RIGHT: Coordinates */}
      <div className="absolute top-20 right-6 z-20 text-right" style={{ mixBlendMode: 'difference' }}>
        <span className="font-mono text-[9px] tracking-widest text-white opacity-50">
          {current.location}
        </span>
      </div>

      {/* BOTTOM-LEFT: Title block */}
      <div className="absolute bottom-8 left-6 z-20" style={{ mixBlendMode: 'difference' }}>
        <div className="mb-1">
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white opacity-40">
            {String(activeIndex + 1).padStart(2, '0')} / {String(monoliths.length).padStart(2, '0')}
          </span>
        </div>
        <h1
          id={current.titleId}
          className="font-sans text-white font-light tracking-[0.15em] uppercase mb-1"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
        >
          {current.title}
        </h1>
        <p
          id={current.subtitleId}
          className="font-mono text-[10px] tracking-[0.25em] text-white opacity-50 uppercase"
        >
          {current.subtitle}
        </p>
      </div>

      {/* BOTTOM-RIGHT: Material + note */}
      <div className="absolute bottom-8 right-6 z-20 text-right" style={{ mixBlendMode: 'difference' }}>
        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white opacity-40 mb-1">
          {current.material}
        </p>
        <p className="font-mono text-[9px] tracking-[0.2em] text-white opacity-30">
          {current.note}
        </p>
      </div>

      {/* Navigation dots — center bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {monoliths.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="w-1 h-1 p-0 border-0 transition-all duration-300"
            style={{
              background: i === activeIndex ? '#ffffff' : 'rgba(255,255,255,0.3)',
              width: i === activeIndex ? '20px' : '4px',
              height: '1px',
              mixBlendMode: 'difference',
            }}
            aria-label={`Go to ${monoliths[i].title}`}
          />
        ))}
      </div>

      {/* Keyboard / click navigation zones */}
      <div
        onClick={goPrev}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && goPrev()}
        className="absolute left-0 top-0 h-full w-1/4 z-10 cursor-w-resize"
        style={{ background: 'none' }}
        aria-label="Previous"
      />
      <div
        onClick={goNext}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && goNext()}
        className="absolute right-0 top-0 h-full w-1/4 z-10 cursor-e-resize"
        style={{ background: 'none' }}
        aria-label="Next"
      />

      {/* Thin vertical rule */}
      <div
        className="absolute top-0 bottom-0 left-1/2 w-px z-10 pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.04)', mixBlendMode: 'overlay' }}
      />
    </div>
  );
};

export default Monoliths;
