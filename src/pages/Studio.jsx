import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const STUDIO_ITEMS = [
  {
    id: 'st-01',
    label: 'PATTERN_DRAFT_01',
    caption: 'Initial draping session. Raw canvas on form.',
    date: '2026.01.14',
    titleId: 'st-01-title',
    descId: 'st-01-desc',
    imgId: 'studio-img-01-a1b2c3',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'st-02',
    label: 'MATERIAL_TEST_07',
    caption: 'Steel mesh integration. Structural prototype.',
    date: '2026.01.22',
    titleId: 'st-02-title',
    descId: 'st-02-desc',
    imgId: 'studio-img-02-d4e5f6',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'st-03',
    label: 'FITTING_SESSION_03',
    caption: 'First fitting. Adjusting the wire armature.',
    date: '2026.02.03',
    titleId: 'st-03-title',
    descId: 'st-03-desc',
    imgId: 'studio-img-03-g7h8i9',
    ratio: '1x1',
    width: '500',
  },
  {
    id: 'st-04',
    label: 'ATELIER_WIDE_01',
    caption: 'Studio overview. The collective at work.',
    date: '2026.02.11',
    titleId: 'st-04-title',
    descId: 'st-04-desc',
    imgId: 'studio-img-04-j1k2l3',
    ratio: '16x9',
    width: '800',
  },
  {
    id: 'st-05',
    label: 'DETAIL_SEAM_12',
    caption: 'Exposed seam detail. Intentional rawness.',
    date: '2026.02.18',
    titleId: 'st-05-title',
    descId: 'st-05-desc',
    imgId: 'studio-img-05-m4n5o6',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'st-06',
    label: 'SKETCH_SERIES_04',
    caption: 'Concept sketches for DROP_04.',
    date: '2026.02.25',
    titleId: 'st-06-title',
    descId: 'st-06-desc',
    imgId: 'studio-img-06-p7q8r9',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'st-07',
    label: 'CUTTING_TABLE_02',
    caption: 'Precision cutting. Industrial shears on raw canvas.',
    date: '2026.03.04',
    titleId: 'st-07-title',
    descId: 'st-07-desc',
    imgId: 'studio-img-07-s1t2u3',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'st-08',
    label: 'COLLECTIVE_PORTRAIT',
    caption: 'The NEO-FORM collective. Berlin studio.',
    date: '2026.03.12',
    titleId: 'st-08-title',
    descId: 'st-08-desc',
    imgId: 'studio-img-08-v4w5x6',
    ratio: '3x2',
    width: '700',
  },
  {
    id: 'st-09',
    label: 'RESIN_PROCESS_01',
    caption: 'Resin coating application. Chemical process.',
    date: '2026.03.19',
    titleId: 'st-09-title',
    descId: 'st-09-desc',
    imgId: 'studio-img-09-y7z8a9',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'st-10',
    label: 'FINAL_PRESS_01',
    caption: 'Final press before runway. Last adjustments.',
    date: '2026.04.01',
    titleId: 'st-10-title',
    descId: 'st-10-desc',
    imgId: 'studio-img-10-b1c2d3',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'st-11',
    label: 'BACKSTAGE_CHAOS',
    caption: 'Pre-show backstage. Controlled chaos.',
    date: '2026.04.08',
    titleId: 'st-11-title',
    descId: 'st-11-desc',
    imgId: 'studio-img-11-e4f5g6',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'st-12',
    label: 'ARCHIVE_WALL_01',
    caption: 'The archive wall. Every drop documented.',
    date: '2026.04.15',
    titleId: 'st-12-title',
    descId: 'st-12-desc',
    imgId: 'studio-img-12-h7i8j9',
    ratio: '16x9',
    width: '800',
  },
];

const StudioItem = ({ item }) => (
  <div className="masonry-item relative group border border-neo-black -mt-px -ml-px grain-overlay">
    <div className="relative overflow-hidden">
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio={item.ratio}
        data-strk-img-width={item.width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.label}
        className="w-full h-auto block"
        style={{ filter: 'grayscale(100%) contrast(1.1)' }}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-neo-black opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
      <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <p className="font-mono text-xs tracking-[0.15em] text-neo-white">{item.caption}</p>
      </div>
    </div>
    {/* Metadata strip */}
    <div className="bg-neo-white border-t border-neo-black px-3 py-2 flex justify-between items-start">
      <div>
        <p className="font-mono text-xs tracking-[0.1em] text-neo-black font-bold" id={item.titleId}>
          {item.label}
        </p>
        <p className="font-mono text-xs text-neo-dim mt-0.5" id={item.descId}>
          {item.caption}
        </p>
      </div>
      <p className="font-mono text-xs text-[#999] whitespace-nowrap ml-2 mt-0.5">{item.date}</p>
    </div>
  </div>
);

const Studio = () => {
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
            <div className="col-span-12 md:col-span-7 px-4 md:px-6 py-10 border-b md:border-b-0 md:border-r border-neo-black">
              <p className="font-mono text-xs tracking-[0.3em] text-neo-dim mb-3">
                PROCESS // ARCHIVE // BEHIND_THE_FORM
              </p>
              <h1
                className="font-mono font-bold text-neo-black leading-none tracking-tighter"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
              >
                THE_STUDIO
              </h1>
            </div>
            <div className="col-span-12 md:col-span-5 px-4 md:px-6 py-10">
              <p className="font-mono text-sm text-neo-dim leading-relaxed">
                Raw documentation of the collective's process. Unfiltered, unretouched.
                High-grain black and white. The work before the work.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-neo-dim">DOCUMENTS</p>
                  <p className="font-mono font-bold text-neo-black text-2xl">{STUDIO_ITEMS.length}</p>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-neo-dim">PERIOD</p>
                  <p className="font-mono font-bold text-neo-black text-2xl">2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info bar */}
          <div className="px-4 md:px-6 py-3 flex items-center gap-4 border-b border-neo-black">
            <span className="font-mono text-xs tracking-[0.2em] text-neo-dim">
              ALL IMAGES: GRAYSCALE // HIGH-GRAIN // UNRETOUCHED
            </span>
            <span className="ml-auto font-mono text-xs text-neo-dim">
              HOVER_FOR_CAPTION
            </span>
          </div>
        </div>
      </header>

      {/* Masonry grid */}
      <main className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8">
        <div className="masonry-grid border border-neo-black">
          {STUDIO_ITEMS.map((item) => (
            <StudioItem key={item.id} item={item} />
          ))}
        </div>
      </main>

      {/* Statement section */}
      <section className="border-t border-neo-black bg-neo-black mt-8">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="border-b md:border-b-0 md:border-r border-[#333] pb-8 md:pb-0 md:pr-12">
              <p className="font-mono text-xs tracking-[0.3em] text-[#555] mb-6">
                COLLECTIVE_STATEMENT
              </p>
              <p
                className="font-mono font-bold text-neo-white leading-tight tracking-tighter"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              >
                "WE BUILD IN THE DARK.
                THE LIGHT IS THE RUNWAY."
              </p>
            </div>
            <div className="pt-8 md:pt-0 md:pl-12">
              <p className="font-mono text-xs tracking-[0.3em] text-[#555] mb-6">
                ABOUT_THE_PROCESS
              </p>
              <p className="font-mono text-sm text-[#888] leading-relaxed">
                NEO-FORM operates from a 400m² atelier in Berlin-Mitte. Every
                collection begins with material research — sourcing industrial
                textiles, architectural components, and reclaimed fabrics.
              </p>
              <p className="font-mono text-sm text-[#888] leading-relaxed mt-4">
                The studio documentation is intentionally raw. No retouching.
                No staging. The process is the product.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ['FOUNDED', '2021'],
                  ['LOCATION', 'BERLIN'],
                  ['MEMBERS', '07'],
                  ['SEASONS', '10'],
                ].map(([label, value]) => (
                  <div key={label} className="border border-[#333] p-4">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#555]">{label}</p>
                    <p className="font-mono font-bold text-neo-white text-xl mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neo-black">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-6 flex justify-between items-center">
          <p className="font-mono text-xs tracking-[0.2em] text-neo-dim">NEO-FORM © 2026</p>
          <p className="font-mono text-xs tracking-[0.2em] text-neo-dim">THE_STUDIO // BERLIN</p>
        </div>
      </footer>
    </div>
  );
};

export default Studio;
