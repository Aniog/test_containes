import { useEffect, useRef, useState, useCallback } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const frames = [
  {
    id: 'lb-01',
    index: '01',
    drop: 'DROP_04',
    title: 'OPENING LOOK',
    desc: 'Oversized deconstructed blazer, raw hem trousers, architectural silhouette',
    titleId: 'lb-01-title',
    descId: 'lb-01-desc',
    imgId: 'lb-img-01-a1b2c3',
    width: '85vw',
    ratio: '2x3',
    imgWidth: '900',
  },
  {
    id: 'lb-02',
    index: '02',
    drop: 'DROP_04',
    title: 'VOID COAT',
    desc: 'Washi paper weave overcoat, negative space construction, zero-waste pattern',
    titleId: 'lb-02-title',
    descId: 'lb-02-desc',
    imgId: 'lb-img-02-d4e5f6',
    width: '60vw',
    ratio: '3x4',
    imgWidth: '700',
  },
  {
    id: 'lb-03',
    index: '03',
    drop: 'DROP_04',
    title: 'TENSION DRESS',
    desc: 'Stretch mesh body, resin structural inserts, asymmetric hem',
    titleId: 'lb-03-title',
    descId: 'lb-03-desc',
    imgId: 'lb-img-03-g7h8i9',
    width: '75vw',
    ratio: '9x16',
    imgWidth: '600',
  },
  {
    id: 'lb-04',
    index: '04',
    drop: 'DROP_04',
    title: 'COLLAPSE SUIT',
    desc: 'Heavy canvas two-piece, unfinished seams, intentional deconstruction',
    titleId: 'lb-04-title',
    descId: 'lb-04-desc',
    imgId: 'lb-img-04-j0k1l2',
    width: '90vw',
    ratio: '16x9',
    imgWidth: '1200',
  },
  {
    id: 'lb-05',
    index: '05',
    drop: 'DROP_04',
    title: 'ANTI-FORM JACKET',
    desc: 'Industrial felt exterior, metal hardware, sculptural shoulder construction',
    titleId: 'lb-05-title',
    descId: 'lb-05-desc',
    imgId: 'lb-img-05-m3n4o5',
    width: '65vw',
    ratio: '3x4',
    imgWidth: '700',
  },
  {
    id: 'lb-06',
    index: '06',
    drop: 'DROP_04',
    title: 'CLOSING LOOK',
    desc: 'Full ensemble: layered silhouettes, raw edges, monochrome palette',
    titleId: 'lb-06-title',
    descId: 'lb-06-desc',
    imgId: 'lb-img-06-p6q7r8',
    width: '80vw',
    ratio: '2x3',
    imgWidth: '900',
  },
];

export default function Lookbook() {
  const stripRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = useCallback((index) => {
    const strip = stripRef.current;
    if (!strip) return;
    const frames = strip.querySelectorAll('.lookbook-frame');
    if (frames[index]) {
      frames[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setCurrentIndex(index);
    }
  }, []);

  const handlePrev = () => scrollTo(Math.max(0, currentIndex - 1));
  const handleNext = () => scrollTo(Math.min(frames.length - 1, currentIndex + 1));

  // Track scroll position to update current index
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const handleScroll = () => {
      const frameEls = strip.querySelectorAll('.lookbook-frame');
      let closest = 0;
      let minDist = Infinity;
      frameEls.forEach((el, i) => {
        const dist = Math.abs(el.getBoundingClientRect().left);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setCurrentIndex(closest);
    };

    strip.addEventListener('scroll', handleScroll, { passive: true });
    return () => strip.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex]);

  return (
    <div className="bg-nf-black min-h-screen overflow-hidden" ref={containerRef}>
      {/* Top bar */}
      <div
        className="fixed top-16 left-0 right-0 z-40 flex items-center justify-between px-6 py-3"
        style={{ background: 'rgba(10,10,10,0.9)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div>
          <p className="font-mono text-xs tracking-widest-xl uppercase text-nf-red">
            LOOKBOOK // DROP_04
          </p>
          <p className="font-mono text-xs text-white/40 tracking-widest-md uppercase mt-0.5">
            SS_2026 RUNWAY
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-white/40 tracking-widest-md uppercase">
            {String(currentIndex + 1).padStart(2, '0')} / {String(frames.length).padStart(2, '0')}
          </span>
          {/* Dot indicators */}
          <div className="flex gap-2">
            {frames.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '0',
                  background: i === currentIndex ? '#FF2D00' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                aria-label={`Go to frame ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal strip */}
      <div
        ref={stripRef}
        className="lookbook-strip"
        style={{ paddingTop: '0', background: '#0A0A0A' }}
      >
        {frames.map((frame, i) => (
          <div
            key={frame.id}
            className="lookbook-frame"
            style={{
              width: frame.width,
              minWidth: '280px',
              borderRight: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Image fills 90% of viewport height */}
            <div
              className="relative overflow-hidden"
              style={{ height: '90vh', marginTop: '10vh' }}
            >
              <img
                data-strk-img-id={frame.imgId}
                data-strk-img={`[${frame.descId}] [${frame.titleId}] avant-garde fashion runway editorial portrait`}
                data-strk-img-ratio={frame.ratio}
                data-strk-img-width={frame.imgWidth}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={frame.title}
                className="w-full h-full object-cover object-top"
                style={{ filter: 'contrast(1.1) brightness(0.95)' }}
              />

              {/* Frame number — large background text */}
              <div
                className="absolute top-4 left-4 font-mono font-bold text-white/5 select-none pointer-events-none"
                style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 1 }}
              >
                {frame.index}
              </div>

              {/* Bottom metadata */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 100%)' }}
              >
                <p className="font-mono text-xs tracking-widest-xl uppercase text-nf-red mb-2">
                  {frame.drop} // LOOK_{frame.index}
                </p>
                <h2
                  id={frame.titleId}
                  className="font-mono font-bold uppercase text-white mb-2"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
                >
                  {frame.title}
                </h2>
                <p
                  id={frame.descId}
                  className="font-mono text-xs text-white/50 uppercase tracking-widest-md leading-relaxed max-w-xs"
                >
                  {frame.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* End card */}
        <div
          className="lookbook-frame flex items-center justify-center"
          style={{ width: '50vw', minWidth: '280px', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="text-center px-8">
            <p className="font-mono text-xs tracking-widest-xl uppercase text-nf-red mb-6">
              END OF RUNWAY
            </p>
            <h2
              className="font-mono font-bold uppercase text-white mb-6"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              DROP_04<br />COMPLETE
            </h2>
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest-md mb-8">
              SS_2026 // 6 LOOKS
            </p>
            <button
              onClick={() => scrollTo(0)}
              className="font-mono text-xs tracking-widest-md uppercase"
            >
              ← RESTART
            </button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="lookbook-nav-btn"
        style={{ left: '1rem', opacity: currentIndex === 0 ? 0.3 : 1 }}
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        disabled={currentIndex >= frames.length - 1}
        className="lookbook-nav-btn"
        style={{ right: '1rem', opacity: currentIndex >= frames.length - 1 ? 0.3 : 1 }}
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scroll hint */}
      {showHint && (
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 font-mono text-xs tracking-widest-lg uppercase text-white/50 flex items-center gap-3 transition-opacity duration-500"
          style={{ opacity: showHint ? 1 : 0 }}
        >
          <span>←</span>
          <span>SCROLL OR USE ARROWS</span>
          <span>→</span>
        </div>
      )}
    </div>
  );
}
