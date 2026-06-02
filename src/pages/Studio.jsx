import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const studioItems = [
  {
    id: 'st-01',
    caption: 'PATTERN CUTTING // ATELIER TOKYO',
    tag: 'PROCESS',
    titleId: 'st-01-title',
    descId: 'st-01-desc',
    imgId: 'st-img-01-a1b2c3',
    ratio: '3x4',
    width: '500',
    span: 1,
  },
  {
    id: 'st-02',
    caption: 'FABRIC SOURCING // NISHIKI MARKET',
    tag: 'MATERIAL',
    titleId: 'st-02-title',
    descId: 'st-02-desc',
    imgId: 'st-img-02-d4e5f6',
    ratio: '1x1',
    width: '400',
    span: 1,
  },
  {
    id: 'st-03',
    caption: 'DRAPING SESSION // DROP_04',
    tag: 'CONSTRUCTION',
    titleId: 'st-03-title',
    descId: 'st-03-desc',
    imgId: 'st-img-03-g7h8i9',
    ratio: '2x3',
    width: '500',
    span: 1,
  },
  {
    id: 'st-04',
    caption: 'DETAIL WORK // SEAM DECONSTRUCTION',
    tag: 'DETAIL',
    titleId: 'st-04-title',
    descId: 'st-04-desc',
    imgId: 'st-img-04-j0k1l2',
    ratio: '4x3',
    width: '600',
    span: 1,
  },
  {
    id: 'st-05',
    caption: 'FITTING // MODEL YUKI',
    tag: 'FITTING',
    titleId: 'st-05-title',
    descId: 'st-05-desc',
    imgId: 'st-img-05-m3n4o5',
    ratio: '3x4',
    width: '500',
    span: 1,
  },
  {
    id: 'st-06',
    caption: 'HARDWARE SOURCING // INDUSTRIAL',
    tag: 'MATERIAL',
    titleId: 'st-06-title',
    descId: 'st-06-desc',
    imgId: 'st-img-06-p6q7r8',
    ratio: '1x1',
    width: '400',
    span: 1,
  },
  {
    id: 'st-07',
    caption: 'ATELIER OVERVIEW // BERLIN STUDIO',
    tag: 'SPACE',
    titleId: 'st-07-title',
    descId: 'st-07-desc',
    imgId: 'st-img-07-s9t0u1',
    ratio: '16x9',
    width: '800',
    span: 1,
  },
  {
    id: 'st-08',
    caption: 'HAND STITCHING // WASHI WEAVE',
    tag: 'CRAFT',
    titleId: 'st-08-title',
    descId: 'st-08-desc',
    imgId: 'st-img-08-v2w3x4',
    ratio: '3x4',
    width: '500',
    span: 1,
  },
  {
    id: 'st-09',
    caption: 'MOOD BOARD // DROP_04 CONCEPT',
    tag: 'CONCEPT',
    titleId: 'st-09-title',
    descId: 'st-09-desc',
    imgId: 'st-img-09-y5z6a7',
    ratio: '4x3',
    width: '600',
    span: 1,
  },
  {
    id: 'st-10',
    caption: 'FINAL PRESS // PRE-SHOOT',
    tag: 'PRODUCTION',
    titleId: 'st-10-title',
    descId: 'st-10-desc',
    imgId: 'st-img-10-b8c9d0',
    ratio: '2x3',
    width: '500',
    span: 1,
  },
  {
    id: 'st-11',
    caption: 'TEXTILE TESTING // TENSION',
    tag: 'MATERIAL',
    titleId: 'st-11-title',
    descId: 'st-11-desc',
    imgId: 'st-img-11-e1f2g3',
    ratio: '1x1',
    width: '400',
    span: 1,
  },
  {
    id: 'st-12',
    caption: 'COLLECTIVE MEETING // TOKYO HQ',
    tag: 'TEAM',
    titleId: 'st-12-title',
    descId: 'st-12-desc',
    imgId: 'st-img-12-h4i5j6',
    ratio: '3x4',
    width: '500',
    span: 1,
  },
];

function StudioCard({ item }) {
  return (
    <div className="masonry-item group relative overflow-hidden" style={{ border: '1px solid #0A0A0A' }}>
      {/* Image with B&W + grain effect */}
      <div className="relative grain-overlay overflow-hidden">
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}] fashion studio behind the scenes black and white`}
          data-strk-img-ratio={item.ratio}
          data-strk-img-width={item.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
          className="w-full block"
          style={{
            filter: 'grayscale(100%) contrast(1.2) brightness(0.9)',
            display: 'block',
          }}
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(10,10,10,0.75)' }}
        >
          <span className="font-mono text-xs tracking-widest-xl uppercase text-nf-red mb-1">
            {item.tag}
          </span>
          <p
            id={item.titleId}
            className="font-mono text-xs text-white uppercase tracking-widest-md leading-tight"
          >
            {item.caption}
          </p>
        </div>
      </div>

      {/* Caption below */}
      <div className="px-2 py-2 border-t border-nf-black bg-white">
        <p
          id={item.descId}
          className="font-mono text-xs text-nf-muted uppercase tracking-widest-md leading-tight"
        >
          {item.caption}
        </p>
      </div>
    </div>
  );
}

export default function Studio() {
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
              BEHIND THE FORM // 2026
            </p>
            <h1
              className="font-mono font-bold uppercase text-nf-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              The Studio
            </h1>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-xs text-nf-muted uppercase tracking-widest-md max-w-xs md:max-w-sm leading-relaxed">
              Raw process. Unfiltered craft. The atelier between Tokyo and Berlin where NEO-FORM takes shape.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-b border-nf-black grid grid-cols-2 md:grid-cols-4">
        {[
          { label: 'Atelier', value: 'TOKYO × BERLIN' },
          { label: 'Founded', value: '2021' },
          { label: 'Members', value: '07' },
          { label: 'Drops', value: '04' },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`px-6 py-6 ${i < 3 ? 'border-r border-nf-black' : ''}`}
          >
            <p className="font-mono text-xs text-nf-muted uppercase tracking-widest-md mb-1">
              {stat.label}
            </p>
            <p className="font-mono font-bold text-nf-black text-lg uppercase tracking-widest-md">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="px-4 md:px-8 py-8 md:py-12">
        <div className="masonry-grid">
          {studioItems.map((item) => (
            <StudioCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Process note */}
      <div className="border-t border-nf-black px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest-xl uppercase text-nf-red mb-6">
            PROCESS NOTE
          </p>
          <p className="font-mono text-sm text-nf-black leading-relaxed mb-4">
            Every piece in the NEO-FORM archive begins as a question: what happens when structure fails? We work from collapse outward — starting with the broken form and building toward something intentional.
          </p>
          <p className="font-mono text-sm text-nf-muted leading-relaxed">
            All photography captured on 35mm film. No digital retouching. No color correction. The grain is the point.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-nf-black px-6 md:px-12 py-8 flex items-center justify-between">
        <span className="font-mono text-xs text-nf-muted uppercase tracking-widest-md">
          NEO-FORM // THE STUDIO
        </span>
        <span className="font-mono text-xs text-nf-muted uppercase tracking-widest-md">
          35MM // UNRETOUCHED
        </span>
      </div>
    </div>
  );
}
