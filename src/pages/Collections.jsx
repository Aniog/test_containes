import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const COLLECTIONS = [
  {
    id: 'drop-01',
    drop: 'DROP_01',
    year: '2026',
    season: 'SS_2026',
    title: 'VOID ARCHITECTURE',
    pieces: '14 PIECES',
    material: 'RECYCLED NYLON // STEEL MESH',
    titleId: 'col-drop-01-title',
    descId: 'col-drop-01-desc',
    imgId: 'col-img-drop01-a1b2c3',
    gridArea: 'col-span-12 md:[grid-area:1/1/3/6]',
    ratio: '2x3',
    width: '700',
  },
  {
    id: 'drop-02',
    drop: 'DROP_02',
    year: '2026',
    season: 'SS_2026',
    title: 'NEGATIVE SPACE',
    pieces: '9 PIECES',
    material: 'DECONSTRUCTED DENIM',
    titleId: 'col-drop-02-title',
    descId: 'col-drop-02-desc',
    imgId: 'col-img-drop02-d4e5f6',
    gridArea: 'col-span-12 md:[grid-area:1/6/2/10]',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'drop-03',
    drop: 'DROP_03',
    year: '2026',
    season: 'SS_2026',
    title: 'STRUCTURAL PROTEST',
    pieces: '11 PIECES',
    material: 'RAW CANVAS // WIRE',
    titleId: 'col-drop-03-title',
    descId: 'col-drop-03-desc',
    imgId: 'col-img-drop03-g7h8i9',
    gridArea: 'col-span-12 md:[grid-area:1/10/2/13]',
    ratio: '3x4',
    width: '400',
  },
  {
    id: 'drop-04',
    drop: 'DROP_04',
    year: '2026',
    season: 'SS_2026',
    title: 'BODY AS MONUMENT',
    pieces: '7 PIECES',
    material: 'LATEX // INDUSTRIAL FELT',
    titleId: 'col-drop-04-title',
    descId: 'col-drop-04-desc',
    imgId: 'col-img-drop04-j1k2l3',
    gridArea: 'col-span-12 md:[grid-area:2/6/4/9]',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'drop-05',
    drop: 'DROP_05',
    year: '2026',
    season: 'SS_2026',
    title: 'ANTI-SILHOUETTE',
    pieces: '12 PIECES',
    material: 'SHREDDED SILK // RESIN',
    titleId: 'col-drop-05-title',
    descId: 'col-drop-05-desc',
    imgId: 'col-img-drop05-m4n5o6',
    gridArea: 'col-span-12 md:[grid-area:2/9/4/13]',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'drop-06',
    drop: 'DROP_06',
    year: '2026',
    season: 'SS_2026',
    title: 'ZERO ORNAMENT',
    pieces: '16 PIECES',
    material: 'UNBLEACHED COTTON // CARBON',
    titleId: 'col-drop-06-title',
    descId: 'col-drop-06-desc',
    imgId: 'col-img-drop06-p7q8r9',
    gridArea: 'col-span-12 md:[grid-area:3/1/5/6]',
    ratio: '3x2',
    width: '700',
  },
];

const CollectionCard = ({ item }) => {
  return (
    <div
      className={`${item.gridArea} relative img-wrapper group border border-neo-black -mt-px -ml-px`}
      style={{ minHeight: '320px' }}
    >
      <div className="relative w-full h-full" style={{ minHeight: '320px' }}>
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}]`}
          data-strk-img-ratio={item.ratio}
          data-strk-img-width={item.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.title}
          className="w-full h-full object-cover absolute inset-0"
          style={{ minHeight: '320px' }}
        />

        {/* Metadata overlay on hover */}
        <div className="img-meta-overlay">
          <div className="space-y-1">
            <p className="font-mono text-xs tracking-[0.25em] text-[#888]">
              {item.drop} // {item.year}
            </p>
            <p className="font-mono font-bold text-neo-white text-xl tracking-tight">
              {item.title}
            </p>
            <p className="font-mono text-xs text-[#aaa] tracking-[0.15em] mt-2">
              {item.pieces}
            </p>
            <p className="font-mono text-xs text-[#666] tracking-[0.1em]">
              {item.material}
            </p>
          </div>
        </div>

        {/* Always-visible drop label */}
        <div className="absolute top-0 left-0 bg-neo-black text-neo-white px-3 py-1">
          <span className="font-mono text-xs tracking-[0.2em]">{item.drop}</span>
        </div>
      </div>

      {/* Hidden text for image query */}
      <span id={item.titleId} className="sr-only">{item.title} fashion editorial avant-garde</span>
      <span id={item.descId} className="sr-only">{item.season} {item.material} NEO-FORM collection</span>
    </div>
  );
};

const Collections = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-neo-white pt-16">
      {/* Page header */}
      <header className="border-b border-neo-black">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-12 border-b border-neo-black">
            <div className="col-span-12 md:col-span-8 px-4 md:px-6 py-10 border-b md:border-b-0 md:border-r border-neo-black">
              <p className="font-mono text-xs tracking-[0.3em] text-neo-dim mb-3">
                ARCHIVE // SS_2026
              </p>
              <h1
                className="font-mono font-bold text-neo-black leading-none tracking-tighter"
                style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
              >
                COLLECTIONS
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 px-4 md:px-6 py-10 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-neo-dim mb-1">TOTAL_DROPS</p>
                <p className="font-mono font-bold text-neo-black text-4xl">06</p>
              </div>
              <p className="font-mono text-xs text-neo-dim leading-relaxed mt-4">
                Hover any image to reveal raw metadata. Each drop is a complete
                structural statement.
              </p>
            </div>
          </div>

          {/* Filter bar */}
          <div className="px-4 md:px-6 py-3 flex items-center gap-6 overflow-x-auto">
            {['ALL', 'SS_2026', 'FW_2025', 'SS_2025'].map((filter, i) => (
              <button
                key={filter}
                className={`font-mono text-xs tracking-[0.2em] whitespace-nowrap border px-3 py-1 transition-colors ${
                  i === 0
                    ? 'bg-neo-black text-neo-white border-neo-black'
                    : 'bg-neo-white text-neo-dim border-neo-border hover:border-neo-black hover:text-neo-black'
                }`}
              >
                {filter}
              </button>
            ))}
            <span className="font-mono text-xs text-neo-dim ml-auto whitespace-nowrap">
              HOVER_FOR_META
            </span>
          </div>
        </div>
      </header>

      {/* Asymmetric collections grid */}
      <main className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8">
        {/* Desktop: CSS Grid with intentional asymmetry */}
        <div
          className="hidden md:grid border border-neo-black"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'repeat(4, 280px)',
          }}
        >
          {/* DROP_01 — large left, spans 2 rows */}
          <div
            className="relative img-wrapper group border-r border-b border-neo-black"
            style={{ gridArea: '1 / 1 / 3 / 6' }}
          >
            <img
              data-strk-img-id={COLLECTIONS[0].imgId}
              data-strk-img={`[${COLLECTIONS[0].descId}] [${COLLECTIONS[0].titleId}]`}
              data-strk-img-ratio="2x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={COLLECTIONS[0].title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="img-meta-overlay">
              <p className="font-mono text-xs tracking-[0.25em] text-[#888]">{COLLECTIONS[0].drop} // {COLLECTIONS[0].year}</p>
              <p className="font-mono font-bold text-neo-white text-2xl tracking-tight">{COLLECTIONS[0].title}</p>
              <p className="font-mono text-xs text-[#aaa] mt-2 tracking-[0.15em]">{COLLECTIONS[0].pieces}</p>
              <p className="font-mono text-xs text-[#666] tracking-[0.1em]">{COLLECTIONS[0].material}</p>
            </div>
            <div className="absolute top-0 left-0 bg-neo-black text-neo-white px-3 py-1">
              <span className="font-mono text-xs tracking-[0.2em]">{COLLECTIONS[0].drop}</span>
            </div>
            <span id={COLLECTIONS[0].titleId} className="sr-only">{COLLECTIONS[0].title} fashion editorial</span>
            <span id={COLLECTIONS[0].descId} className="sr-only">{COLLECTIONS[0].season} {COLLECTIONS[0].material} NEO-FORM</span>
          </div>

          {/* DROP_02 — top right area */}
          <div
            className="relative img-wrapper group border-r border-b border-neo-black"
            style={{ gridArea: '1 / 6 / 2 / 10' }}
          >
            <img
              data-strk-img-id={COLLECTIONS[1].imgId}
              data-strk-img={`[${COLLECTIONS[1].descId}] [${COLLECTIONS[1].titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={COLLECTIONS[1].title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="img-meta-overlay">
              <p className="font-mono text-xs tracking-[0.25em] text-[#888]">{COLLECTIONS[1].drop} // {COLLECTIONS[1].year}</p>
              <p className="font-mono font-bold text-neo-white text-xl tracking-tight">{COLLECTIONS[1].title}</p>
              <p className="font-mono text-xs text-[#aaa] mt-2 tracking-[0.15em]">{COLLECTIONS[1].pieces}</p>
              <p className="font-mono text-xs text-[#666] tracking-[0.1em]">{COLLECTIONS[1].material}</p>
            </div>
            <div className="absolute top-0 left-0 bg-neo-black text-neo-white px-3 py-1">
              <span className="font-mono text-xs tracking-[0.2em]">{COLLECTIONS[1].drop}</span>
            </div>
            <span id={COLLECTIONS[1].titleId} className="sr-only">{COLLECTIONS[1].title} fashion editorial</span>
            <span id={COLLECTIONS[1].descId} className="sr-only">{COLLECTIONS[1].season} {COLLECTIONS[1].material} NEO-FORM</span>
          </div>

          {/* DROP_03 — top far right */}
          <div
            className="relative img-wrapper group border-b border-neo-black"
            style={{ gridArea: '1 / 10 / 2 / 13' }}
          >
            <img
              data-strk-img-id={COLLECTIONS[2].imgId}
              data-strk-img={`[${COLLECTIONS[2].descId}] [${COLLECTIONS[2].titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={COLLECTIONS[2].title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="img-meta-overlay">
              <p className="font-mono text-xs tracking-[0.25em] text-[#888]">{COLLECTIONS[2].drop} // {COLLECTIONS[2].year}</p>
              <p className="font-mono font-bold text-neo-white text-xl tracking-tight">{COLLECTIONS[2].title}</p>
              <p className="font-mono text-xs text-[#aaa] mt-2 tracking-[0.15em]">{COLLECTIONS[2].pieces}</p>
              <p className="font-mono text-xs text-[#666] tracking-[0.1em]">{COLLECTIONS[2].material}</p>
            </div>
            <div className="absolute top-0 left-0 bg-neo-black text-neo-white px-3 py-1">
              <span className="font-mono text-xs tracking-[0.2em]">{COLLECTIONS[2].drop}</span>
            </div>
            <span id={COLLECTIONS[2].titleId} className="sr-only">{COLLECTIONS[2].title} fashion editorial</span>
            <span id={COLLECTIONS[2].descId} className="sr-only">{COLLECTIONS[2].season} {COLLECTIONS[2].material} NEO-FORM</span>
          </div>

          {/* DROP_04 — middle right */}
          <div
            className="relative img-wrapper group border-r border-b border-neo-black"
            style={{ gridArea: '2 / 6 / 4 / 9' }}
          >
            <img
              data-strk-img-id={COLLECTIONS[3].imgId}
              data-strk-img={`[${COLLECTIONS[3].descId}] [${COLLECTIONS[3].titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={COLLECTIONS[3].title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="img-meta-overlay">
              <p className="font-mono text-xs tracking-[0.25em] text-[#888]">{COLLECTIONS[3].drop} // {COLLECTIONS[3].year}</p>
              <p className="font-mono font-bold text-neo-white text-xl tracking-tight">{COLLECTIONS[3].title}</p>
              <p className="font-mono text-xs text-[#aaa] mt-2 tracking-[0.15em]">{COLLECTIONS[3].pieces}</p>
              <p className="font-mono text-xs text-[#666] tracking-[0.1em]">{COLLECTIONS[3].material}</p>
            </div>
            <div className="absolute top-0 left-0 bg-neo-black text-neo-white px-3 py-1">
              <span className="font-mono text-xs tracking-[0.2em]">{COLLECTIONS[3].drop}</span>
            </div>
            <span id={COLLECTIONS[3].titleId} className="sr-only">{COLLECTIONS[3].title} fashion editorial</span>
            <span id={COLLECTIONS[3].descId} className="sr-only">{COLLECTIONS[3].season} {COLLECTIONS[3].material} NEO-FORM</span>
          </div>

          {/* DROP_05 — middle far right */}
          <div
            className="relative img-wrapper group border-b border-neo-black"
            style={{ gridArea: '2 / 9 / 4 / 13' }}
          >
            <img
              data-strk-img-id={COLLECTIONS[4].imgId}
              data-strk-img={`[${COLLECTIONS[4].descId}] [${COLLECTIONS[4].titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={COLLECTIONS[4].title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="img-meta-overlay">
              <p className="font-mono text-xs tracking-[0.25em] text-[#888]">{COLLECTIONS[4].drop} // {COLLECTIONS[4].year}</p>
              <p className="font-mono font-bold text-neo-white text-xl tracking-tight">{COLLECTIONS[4].title}</p>
              <p className="font-mono text-xs text-[#aaa] mt-2 tracking-[0.15em]">{COLLECTIONS[4].pieces}</p>
              <p className="font-mono text-xs text-[#666] tracking-[0.1em]">{COLLECTIONS[4].material}</p>
            </div>
            <div className="absolute top-0 left-0 bg-neo-black text-neo-white px-3 py-1">
              <span className="font-mono text-xs tracking-[0.2em]">{COLLECTIONS[4].drop}</span>
            </div>
            <span id={COLLECTIONS[4].titleId} className="sr-only">{COLLECTIONS[4].title} fashion editorial</span>
            <span id={COLLECTIONS[4].descId} className="sr-only">{COLLECTIONS[4].season} {COLLECTIONS[4].material} NEO-FORM</span>
          </div>

          {/* DROP_06 — bottom left wide */}
          <div
            className="relative img-wrapper group border-r border-neo-black"
            style={{ gridArea: '3 / 1 / 5 / 6' }}
          >
            <img
              data-strk-img-id={COLLECTIONS[5].imgId}
              data-strk-img={`[${COLLECTIONS[5].descId}] [${COLLECTIONS[5].titleId}]`}
              data-strk-img-ratio="3x2"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={COLLECTIONS[5].title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="img-meta-overlay">
              <p className="font-mono text-xs tracking-[0.25em] text-[#888]">{COLLECTIONS[5].drop} // {COLLECTIONS[5].year}</p>
              <p className="font-mono font-bold text-neo-white text-2xl tracking-tight">{COLLECTIONS[5].title}</p>
              <p className="font-mono text-xs text-[#aaa] mt-2 tracking-[0.15em]">{COLLECTIONS[5].pieces}</p>
              <p className="font-mono text-xs text-[#666] tracking-[0.1em]">{COLLECTIONS[5].material}</p>
            </div>
            <div className="absolute top-0 left-0 bg-neo-black text-neo-white px-3 py-1">
              <span className="font-mono text-xs tracking-[0.2em]">{COLLECTIONS[5].drop}</span>
            </div>
            <span id={COLLECTIONS[5].titleId} className="sr-only">{COLLECTIONS[5].title} fashion editorial</span>
            <span id={COLLECTIONS[5].descId} className="sr-only">{COLLECTIONS[5].season} {COLLECTIONS[5].material} NEO-FORM</span>
          </div>

          {/* Text block — bottom right */}
          <div
            className="bg-neo-black flex flex-col justify-between p-6"
            style={{ gridArea: '4 / 6 / 5 / 13' }}
          >
            <p className="font-mono text-xs tracking-[0.3em] text-[#555]">NEO-FORM // SS_2026</p>
            <div>
              <p
                className="font-mono font-bold text-neo-white leading-none tracking-tighter"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
              >
                FORM IS
              </p>
              <p
                className="font-mono font-bold text-neo-white leading-none tracking-tighter"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
              >
                RESISTANCE.
              </p>
            </div>
            <p className="font-mono text-xs text-[#444] tracking-[0.15em]">
              06 DROPS — 69 PIECES — 2026
            </p>
          </div>
        </div>

        {/* Mobile: stacked grid */}
        <div className="md:hidden grid grid-cols-1 gap-0 border border-neo-black">
          {COLLECTIONS.map((item) => (
            <div key={item.id} className="relative img-wrapper group border-b border-neo-black" style={{ height: '60vw', minHeight: '240px' }}>
              <img
                data-strk-img-id={`${item.imgId}-mob`}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="img-meta-overlay">
                <p className="font-mono text-xs tracking-[0.25em] text-[#888]">{item.drop} // {item.year}</p>
                <p className="font-mono font-bold text-neo-white text-lg tracking-tight">{item.title}</p>
                <p className="font-mono text-xs text-[#aaa] mt-1 tracking-[0.15em]">{item.pieces}</p>
              </div>
              <div className="absolute top-0 left-0 bg-neo-black text-neo-white px-3 py-1">
                <span className="font-mono text-xs tracking-[0.2em]">{item.drop}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neo-black mt-8">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-6 flex justify-between items-center">
          <p className="font-mono text-xs tracking-[0.2em] text-neo-dim">NEO-FORM © 2026</p>
          <p className="font-mono text-xs tracking-[0.2em] text-neo-dim">06 DROPS // SS_2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Collections;
