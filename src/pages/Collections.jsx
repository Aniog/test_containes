import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const drops = [
  {
    id: 'drop-04-a',
    drop: 'DROP_04',
    year: '2026',
    title: 'VOID STRUCTURE',
    material: 'RECYCLED NYLON // DECONSTRUCTED',
    pieces: '12 PIECES',
    titleId: 'col-drop04a-title',
    descId: 'col-drop04a-desc',
    imgId: 'col-img-drop04a-a1b2',
    area: 'a',
    ratio: '3x4',
    width: '800',
    offset: '-mt-8 md:-mt-16',
    zIndex: 'z-10',
  },
  {
    id: 'drop-04-b',
    drop: 'DROP_04',
    year: '2026',
    title: 'NEGATIVE SPACE',
    material: 'WASHI PAPER WEAVE // SILK',
    pieces: '8 PIECES',
    titleId: 'col-drop04b-title',
    descId: 'col-drop04b-desc',
    imgId: 'col-img-drop04b-c3d4',
    area: 'b',
    ratio: '2x3',
    width: '600',
    offset: 'mt-12 md:mt-24',
    zIndex: 'z-20',
  },
  {
    id: 'drop-03-a',
    drop: 'DROP_03',
    year: '2025',
    title: 'FORM COLLAPSE',
    material: 'HEAVY CANVAS // UNFINISHED',
    pieces: '15 PIECES',
    titleId: 'col-drop03a-title',
    descId: 'col-drop03a-desc',
    imgId: 'col-img-drop03a-e5f6',
    area: 'c',
    ratio: '16x9',
    width: '1000',
    offset: '-mt-6',
    zIndex: 'z-10',
  },
  {
    id: 'drop-03-b',
    drop: 'DROP_03',
    year: '2025',
    title: 'RAW GEOMETRY',
    material: 'INDUSTRIAL FELT // METAL',
    pieces: '6 PIECES',
    titleId: 'col-drop03b-title',
    descId: 'col-drop03b-desc',
    imgId: 'col-img-drop03b-g7h8',
    area: 'd',
    ratio: '3x4',
    width: '700',
    offset: 'mt-8 md:mt-20',
    zIndex: 'z-30',
  },
  {
    id: 'drop-02-a',
    drop: 'DROP_02',
    year: '2025',
    title: 'ANTI-SILHOUETTE',
    material: 'DISTRESSED DENIM // LATEX',
    pieces: '10 PIECES',
    titleId: 'col-drop02a-title',
    descId: 'col-drop02a-desc',
    imgId: 'col-img-drop02a-i9j0',
    area: 'e',
    ratio: '3x4',
    width: '700',
    offset: '-mt-10',
    zIndex: 'z-20',
  },
  {
    id: 'drop-02-b',
    drop: 'DROP_02',
    year: '2025',
    title: 'TENSION FIELD',
    material: 'STRETCH MESH // RESIN',
    pieces: '9 PIECES',
    titleId: 'col-drop02b-title',
    descId: 'col-drop02b-desc',
    imgId: 'col-img-drop02b-k1l2',
    area: 'f',
    ratio: '2x3',
    width: '600',
    offset: 'mt-16 md:mt-32',
    zIndex: 'z-10',
  },
];

function CollectionCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative cursor-pointer group ${item.offset} ${item.zIndex}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ border: '1px solid #0A0A0A' }}>
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}] avant-garde fashion editorial portrait`}
          data-strk-img-ratio={item.ratio}
          data-strk-img-width={item.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.title}
          className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
          style={{
            display: 'block',
            filter: 'contrast(1.08)',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.7s ease',
          }}
        />

        {/* Metadata overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 md:p-6"
          style={{
            background: 'rgba(10,10,10,0.88)',
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <p className="font-mono text-xs tracking-widest-xl uppercase text-nf-red mb-1">
            {item.drop} // {item.year}
          </p>
          <h3
            id={item.titleId}
            className="font-mono font-bold uppercase text-white text-lg md:text-2xl mb-2"
          >
            {item.title}
          </h3>
          <p id={item.descId} className="font-mono text-xs text-white/60 uppercase tracking-widest-md mb-3">
            {item.material}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest-md">
              {item.pieces}
            </span>
            <span className="font-mono text-xs text-nf-red uppercase tracking-widest-md">
              VIEW →
            </span>
          </div>
        </div>
      </div>

      {/* Drop label below image */}
      <div className="flex items-center justify-between mt-2 px-1">
        <span className="font-mono text-xs text-nf-muted uppercase tracking-widest-md">
          {item.drop}
        </span>
        <span className="font-mono text-xs text-nf-muted uppercase tracking-widest-md">
          {item.year}
        </span>
      </div>
    </div>
  );
}

export default function Collections() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-16" ref={containerRef}>
      {/* Page header */}
      <div className="border-b border-nf-black px-6 md:px-12 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-widest-xl uppercase text-nf-red mb-3">
              ARCHIVE // 2024–2026
            </p>
            <h1
              className="font-mono font-bold uppercase text-nf-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              Collections
            </h1>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-xs text-nf-muted uppercase tracking-widest-md max-w-xs md:max-w-sm leading-relaxed">
              Six drops. Forty-two pieces. Each collection a deliberate act of formal disruption.
            </p>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="border-b border-nf-black px-6 md:px-12 py-4 flex items-center gap-6 overflow-x-auto">
        {['ALL', 'DROP_04', 'DROP_03', 'DROP_02'].map((f) => (
          <button
            key={f}
            className="font-mono text-xs tracking-widest-md uppercase whitespace-nowrap"
            style={{
              background: f === 'ALL' ? '#0A0A0A' : 'transparent',
              color: f === 'ALL' ? '#FFFFFF' : '#6B6B6B',
              border: '1px solid #0A0A0A',
              padding: '0.4rem 1rem',
            }}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto font-mono text-xs text-nf-muted uppercase tracking-widest-md whitespace-nowrap">
          {drops.length} WORKS
        </span>
      </div>

      {/* Asymmetric grid using CSS grid-template-areas */}
      <div className="px-4 md:px-8 py-8 md:py-16">
        {/* Desktop: intentional asymmetric layout */}
        <div
          className="hidden md:grid gap-x-4 gap-y-0"
          style={{
            gridTemplateColumns: '1.4fr 1fr 1.2fr',
            gridTemplateAreas: `
              "a a b"
              "c d d"
              "e e f"
            `,
            alignItems: 'start',
          }}
        >
          {drops.map((item) => (
            <div key={item.id} style={{ gridArea: item.area }}>
              <CollectionCard item={item} />
            </div>
          ))}
        </div>

        {/* Mobile: single column */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {drops.map((item) => (
            <CollectionCard key={item.id} item={{ ...item, offset: '', zIndex: '' }} />
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-nf-black px-6 md:px-12 py-8 flex items-center justify-between">
        <span className="font-mono text-xs text-nf-muted uppercase tracking-widest-md">
          NEO-FORM // COLLECTIONS
        </span>
        <span className="font-mono text-xs text-nf-muted uppercase tracking-widest-md">
          2024–2026
        </span>
      </div>
    </div>
  );
}
