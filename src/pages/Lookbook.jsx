import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const RUNWAY_FRAMES = [
  {
    id: 'lk-01',
    index: '01',
    drop: 'DROP_01',
    look: 'LOOK_01',
    title: 'VOID ARCHITECTURE',
    desc: 'Opening look. Oversized structural coat in recycled nylon. Steel mesh underlayer.',
    season: 'SS_2026',
    titleId: 'lk-01-title',
    descId: 'lk-01-desc',
    imgId: 'lookbook-frame-01-a1b2',
  },
  {
    id: 'lk-02',
    index: '02',
    drop: 'DROP_01',
    look: 'LOOK_02',
    title: 'NEGATIVE SPACE',
    desc: 'Deconstructed denim silhouette. Exposed seams. Raw hem.',
    season: 'SS_2026',
    titleId: 'lk-02-title',
    descId: 'lk-02-desc',
    imgId: 'lookbook-frame-02-c3d4',
  },
  {
    id: 'lk-03',
    index: '03',
    drop: 'DROP_02',
    look: 'LOOK_03',
    title: 'STRUCTURAL PROTEST',
    desc: 'Raw canvas jacket with wire armature. Protest as silhouette.',
    season: 'SS_2026',
    titleId: 'lk-03-title',
    descId: 'lk-03-desc',
    imgId: 'lookbook-frame-03-e5f6',
  },
  {
    id: 'lk-04',
    index: '04',
    drop: 'DROP_03',
    look: 'LOOK_04',
    title: 'BODY AS MONUMENT',
    desc: 'Latex and industrial felt. The body becomes architecture.',
    season: 'SS_2026',
    titleId: 'lk-04-title',
    descId: 'lk-04-desc',
    imgId: 'lookbook-frame-04-g7h8',
  },
  {
    id: 'lk-05',
    index: '05',
    drop: 'DROP_04',
    look: 'LOOK_05',
    title: 'ANTI-SILHOUETTE',
    desc: 'Shredded silk with resin coating. Form that refuses form.',
    season: 'SS_2026',
    titleId: 'lk-05-title',
    descId: 'lk-05-desc',
    imgId: 'lookbook-frame-05-i9j0',
  },
  {
    id: 'lk-06',
    index: '06',
    drop: 'DROP_05',
    look: 'LOOK_06',
    title: 'ZERO ORNAMENT',
    desc: 'Unbleached cotton. Carbon fiber detail. Nothing added. Nothing removed.',
    season: 'SS_2026',
    titleId: 'lk-06-title',
    descId: 'lk-06-desc',
    imgId: 'lookbook-frame-06-k1l2',
  },
  {
    id: 'lk-07',
    index: '07',
    drop: 'DROP_05',
    look: 'LOOK_07',
    title: 'COLLAPSE GEOMETRY',
    desc: 'Folded industrial mesh. Geometry in motion.',
    season: 'SS_2026',
    titleId: 'lk-07-title',
    descId: 'lk-07-desc',
    imgId: 'lookbook-frame-07-m3n4',
  },
  {
    id: 'lk-08',
    index: '08',
    drop: 'DROP_06',
    look: 'LOOK_08',
    title: 'FINAL FORM',
    desc: 'Closing look. Full ensemble. The collective statement.',
    season: 'SS_2026',
    titleId: 'lk-08-title',
    descId: 'lk-08-desc',
    imgId: 'lookbook-frame-08-o5p6',
  },
];

const Lookbook = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);

      // Determine active frame
      const frameWidth = clientWidth;
      const index = Math.round(scrollLeft / frameWidth);
      setActiveIndex(Math.min(index, RUNWAY_FRAMES.length - 1));
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFrame = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-neo-black flex flex-col pt-16">
      {/* Header bar */}
      <header className="border-b border-[#333] flex-shrink-0">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#555] mb-1">RUNWAY // SS_2026</p>
            <h1 className="font-mono font-bold text-neo-white text-2xl md:text-4xl tracking-tight">
              LOOKBOOK
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="font-mono text-xs tracking-[0.2em] text-[#555]">LOOK</p>
              <p className="font-mono font-bold text-neo-white text-2xl">
                {String(activeIndex + 1).padStart(2, '0')} / {String(RUNWAY_FRAMES.length).padStart(2, '0')}
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scrollToFrame(Math.max(0, activeIndex - 1))}
                className="font-mono text-xs border border-[#333] text-[#888] px-3 py-2 hover:border-neo-white hover:text-neo-white transition-colors"
              >
                ← PREV
              </button>
              <button
                onClick={() => scrollToFrame(Math.min(RUNWAY_FRAMES.length - 1, activeIndex + 1))}
                className="font-mono text-xs border border-[#333] text-[#888] px-3 py-2 hover:border-neo-white hover:text-neo-white transition-colors"
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-px bg-[#222]">
          <div
            className="h-full bg-neo-white transition-all duration-100"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </header>

      {/* Horizontal scroll runway */}
      <div
        ref={scrollRef}
        className="horizontal-scroll flex-1 flex"
        style={{ height: 'calc(100vh - 120px)' }}
      >
        {RUNWAY_FRAMES.map((frame, i) => (
          <div
            key={frame.id}
            className="flex-shrink-0 relative border-r border-[#222]"
            style={{
              width: '100vw',
              height: '100%',
              scrollSnapAlign: 'start',
            }}
          >
            {/* Full-height image — 90% of viewport height */}
            <div className="relative w-full" style={{ height: '90vh' }}>
              <img
                data-strk-img-id={frame.imgId}
                data-strk-img={`[${frame.descId}] [${frame.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={frame.title}
                className="w-full h-full object-cover"
              />

              {/* Frame number — large background text */}
              <div className="absolute top-4 right-4 md:top-8 md:right-8">
                <span
                  className="font-mono font-bold text-neo-white opacity-10 select-none"
                  style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 1 }}
                >
                  {frame.index}
                </span>
              </div>

              {/* Drop label */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-neo-white px-3 py-1">
                <span className="font-mono text-xs tracking-[0.2em] text-neo-black">{frame.drop}</span>
              </div>

              {/* Bottom metadata */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neo-black via-neo-black/60 to-transparent pt-16 pb-6 px-6 md:px-10">
                <p className="font-mono text-xs tracking-[0.25em] text-[#888] mb-2">
                  {frame.look} // {frame.season}
                </p>
                <h2
                  className="font-mono font-bold text-neo-white leading-none tracking-tighter mb-3"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
                  id={frame.titleId}
                >
                  {frame.title}
                </h2>
                <p className="font-mono text-xs text-[#888] max-w-md leading-relaxed" id={frame.descId}>
                  {frame.desc}
                </p>
              </div>
            </div>

            {/* Bottom strip */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-neo-black border-t border-[#222] px-6 py-3 flex items-center justify-between"
              style={{ height: '10vh' }}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.2em] text-[#555]">
                  {String(i + 1).padStart(2, '0')} / {String(RUNWAY_FRAMES.length).padStart(2, '0')}
                </span>
                <span className="font-mono text-xs text-[#333]">—</span>
                <span className="font-mono text-xs tracking-[0.15em] text-[#555]">
                  {frame.drop}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {i > 0 && (
                  <button
                    onClick={() => scrollToFrame(i - 1)}
                    className="font-mono text-xs text-[#555] hover:text-neo-white transition-colors"
                  >
                    ←
                  </button>
                )}
                {i < RUNWAY_FRAMES.length - 1 && (
                  <button
                    onClick={() => scrollToFrame(i + 1)}
                    className="font-mono text-xs text-[#555] hover:text-neo-white transition-colors"
                  >
                    SCROLL → NEXT
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="flex-shrink-0 border-t border-[#222] py-3 px-6 flex items-center justify-center gap-2">
        {RUNWAY_FRAMES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToFrame(i)}
            className={`transition-all duration-200 ${
              i === activeIndex
                ? 'w-6 h-1 bg-neo-white'
                : 'w-1 h-1 bg-[#444] hover:bg-[#888]'
            }`}
            aria-label={`Go to look ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Lookbook;
