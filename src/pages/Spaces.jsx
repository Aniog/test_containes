import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const bentoItems = [
  {
    id: 'brushed-steel',
    titleId: 'spaces-brushed-steel-title',
    descId: 'spaces-brushed-steel-desc',
    imgId: 'spaces-brushed-steel-img-a1b2c3',
    title: 'Brushed Steel',
    desc: 'Cold-rolled surface, directional grain, industrial finish',
    spec: 'SS 316L / 2B Finish',
    col: 'col-span-2 row-span-2',
    ratio: '1x1',
    width: '800',
  },
  {
    id: 'poured-concrete',
    titleId: 'spaces-poured-concrete-title',
    descId: 'spaces-poured-concrete-desc',
    imgId: 'spaces-poured-concrete-img-d4e5f6',
    title: 'Poured Concrete',
    desc: 'Board-formed béton brut, raw aggregate exposed',
    spec: 'C40/50 / Exposed Aggregate',
    col: 'col-span-1 row-span-1',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'cast-shadow',
    titleId: 'spaces-cast-shadow-title',
    descId: 'spaces-cast-shadow-desc',
    imgId: 'spaces-cast-shadow-img-g7h8i9',
    title: 'Cast Shadow',
    desc: 'Geometry of light and void, structural cantilever',
    spec: 'Solar Angle 34° / Depth 2.4m',
    col: 'col-span-1 row-span-2',
    ratio: '2x3',
    width: '400',
  },
  {
    id: 'oxidized-iron',
    titleId: 'spaces-oxidized-iron-title',
    descId: 'spaces-oxidized-iron-desc',
    imgId: 'spaces-oxidized-iron-img-j1k2l3',
    title: 'Oxidized Iron',
    desc: 'Weathering steel patina, controlled corrosion layer',
    spec: 'COR-TEN A588 / Natural Patina',
    col: 'col-span-1 row-span-1',
    ratio: '3x2',
    width: '400',
  },
  {
    id: 'raw-timber',
    titleId: 'spaces-raw-timber-title',
    descId: 'spaces-raw-timber-desc',
    imgId: 'spaces-raw-timber-img-m4n5o6',
    title: 'Raw Timber',
    desc: 'Cross-laminated grain, structural mass timber panel',
    spec: 'CLT / Douglas Fir / Unfinished',
    col: 'col-span-2 row-span-1',
    ratio: '16x9',
    width: '800',
  },
  {
    id: 'glass-void',
    titleId: 'spaces-glass-void-title',
    descId: 'spaces-glass-void-desc',
    imgId: 'spaces-glass-void-img-p7q8r9',
    title: 'Glass & Void',
    desc: 'Structural glazing, frameless curtain wall system',
    spec: 'Triple IGU / Low-E Coating',
    col: 'col-span-1 row-span-1',
    ratio: '1x1',
    width: '400',
  },
];

const Spaces = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-void pt-16">
      {/* Page header */}
      <div className="px-6 py-8 border-b border-iron flex items-end justify-between">
        <div>
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-ash mb-2">
            02 / SPACES
          </p>
          <h2 className="font-sans text-light-grey font-light tracking-[0.2em] uppercase text-2xl">
            Material Studies
          </h2>
        </div>
        <p className="font-mono text-[9px] tracking-[0.2em] text-mid uppercase hidden md:block">
          Close-up textures / Structural surfaces
        </p>
      </div>

      {/* Bento Grid */}
      <div
        ref={containerRef}
        className="grid gap-px bg-iron"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto',
          minHeight: 'calc(100vh - 120px)',
        }}
      >
        {bentoItems.map((item) => (
          <BentoCell key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const BentoCell = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-deep group cursor-crosshair ${item.col}`}
      style={{ minHeight: '280px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio={item.ratio}
        data-strk-img-width={item.width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ filter: 'contrast(1.15) brightness(0.7) saturate(0)' }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
          opacity: hovered ? 1 : 0.7,
        }}
      />

      {/* Content — blend-mode difference for auto-inversion */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4"
        style={{ mixBlendMode: 'difference' }}
      >
        <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-white opacity-50 mb-1">
          {item.spec}
        </p>
        <h3
          id={item.titleId}
          className="font-sans text-white font-light tracking-[0.15em] uppercase text-sm mb-1"
        >
          {item.title}
        </h3>
        <p
          id={item.descId}
          className="font-mono text-[9px] tracking-wide text-white opacity-0 group-hover:opacity-60 transition-opacity duration-500 leading-relaxed"
        >
          {item.desc}
        </p>
      </div>

      {/* Corner index */}
      <div
        className="absolute top-3 right-3"
        style={{ mixBlendMode: 'difference' }}
      >
        <span className="font-mono text-[8px] text-white opacity-30">
          {String(bentoItems.findIndex(b => b.id === item.id) + 1).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default Spaces;
