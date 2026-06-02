import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const WORKS = [
  {
    id: 'w1', titleId: 'work-w1-title', descId: 'work-w1-desc',
    imgId: 'work-img-w1-a3f9b2',
    title: 'NEURAL DECAY', desc: 'Generative AI hallucinations rendered as physical artifacts',
    year: '2024', medium: 'Generative AI / Print', category: 'DIGITAL',
  },
  {
    id: 'w2', titleId: 'work-w2-title', descId: 'work-w2-desc',
    imgId: 'work-img-w2-c7d1e4',
    title: 'VOID PROTOCOL', desc: 'Real-time shader art exploring digital consciousness and entropy',
    year: '2024', medium: 'WebGL / Live Performance', category: 'SHADER',
  },
  {
    id: 'w3', titleId: 'work-w3-title', descId: 'work-w3-desc',
    imgId: 'work-img-w3-f2a8c5',
    title: 'ACID DREAMS', desc: 'Psychedelic data visualization of collective unconscious patterns',
    year: '2023', medium: 'Data Art / Installation', category: 'INSTALLATION',
  },
  {
    id: 'w4', titleId: 'work-w4-title', descId: 'work-w4-desc',
    imgId: 'work-img-w4-b9e3d7',
    title: 'SIGNAL GHOST', desc: 'Corrupted broadcast signals transformed into visual poetry',
    year: '2023', medium: 'Video / Mixed Media', category: 'VIDEO',
  },
  {
    id: 'w5', titleId: 'work-w5-title', descId: 'work-w5-desc',
    imgId: 'work-img-w5-e6f1a9',
    title: 'MEMBRANE', desc: 'Interactive installation responding to biometric data streams',
    year: '2024', medium: 'Interactive / Biometric', category: 'INTERACTIVE',
  },
  {
    id: 'w6', titleId: 'work-w6-title', descId: 'work-w6-desc',
    imgId: 'work-img-w6-d4c2b8',
    title: 'FREQUENCY ZERO', desc: 'Sound-reactive visuals at the threshold of human perception',
    year: '2023', medium: 'AV Performance', category: 'AV',
  },
];

export default function Works() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const itemWidth = el.scrollWidth / (WORKS.length + 2);
      const idx = Math.round(el.scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(idx, 0), WORKS.length - 1));
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const onMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: scrollRef.current.scrollLeft };
  };
  const onMouseMove = (e) => {
    if (!isDragging || !dragStart.current) return;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - (e.clientX - dragStart.current.x);
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden" style={{ background: '#0A0010' }}>
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(123,0,255,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Page header */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-end justify-between px-8 md:px-16 pt-8 pb-4">
        <div>
          <div className="font-mono text-xs mb-1" style={{ color: 'rgba(204,255,0,0.45)', letterSpacing: '0.3em' }}>
            02 / WORKS
          </div>
          <h1
            className="font-display font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              color: '#F0F0F0',
              letterSpacing: '-0.03em',
              transform: 'scaleX(1.06)',
              transformOrigin: 'left center',
            }}
          >
            SELECTED{' '}
            <span style={{ color: '#CCFF00', textShadow: '0 0 20px rgba(204,255,0,0.4)' }}>WORKS</span>
          </h1>
        </div>

        {/* Scroll indicator dots */}
        <div className="hidden md:flex items-center gap-3 font-mono text-xs" style={{ color: 'rgba(204,255,0,0.4)', letterSpacing: '0.15em' }}>
          <span>DRAG TO EXPLORE →</span>
          <div className="flex gap-1.5 items-center">
            {WORKS.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? 24 : 5,
                  height: i === activeIndex ? 3 : 2,
                  background: i === activeIndex ? '#CCFF00' : 'rgba(204,255,0,0.2)',
                  transition: 'all 0.35s ease',
                  boxShadow: i === activeIndex ? '0 0 8px #CCFF00' : 'none',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className="h-scroll-container absolute inset-0 pt-28 pb-20"
        style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="h-scroll-item" style={{ width: '8vw', flexShrink: 0 }} />
        {WORKS.map((work, i) => (
          <WorkCard key={work.id} work={work} index={i} isActive={i === activeIndex} />
        ))}
        <div className="h-scroll-item" style={{ width: '8vw', flexShrink: 0 }} />
      </div>

      {/* Bottom counter */}
      <div
        className="absolute bottom-20 left-8 md:left-16 z-30 font-mono"
        style={{ color: 'rgba(204,255,0,0.35)', fontSize: '0.65rem', letterSpacing: '0.25em' }}
      >
        {String(activeIndex + 1).padStart(2, '0')} / {String(WORKS.length).padStart(2, '0')}
      </div>

      {/* Active work info */}
      <div className="absolute bottom-20 right-8 md:right-16 z-30 text-right" style={{ maxWidth: '40vw' }}>
        <div
          className="font-display font-black uppercase transition-all duration-500"
          style={{
            fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
            color: '#CCFF00',
            letterSpacing: '0.1em',
            textShadow: '0 0 16px rgba(204,255,0,0.5)',
          }}
        >
          {WORKS[activeIndex].title}
        </div>
        <div className="font-mono text-xs mt-1" style={{ color: 'rgba(240,240,240,0.4)', letterSpacing: '0.1em' }}>
          {WORKS[activeIndex].medium}
        </div>
      </div>

      {/* Hover instruction */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 font-mono text-xs hidden md:block"
        style={{ color: 'rgba(204,255,0,0.25)', letterSpacing: '0.2em', fontSize: '0.6rem' }}
      >
        HOVER TO REVEAL COLOR
      </div>
    </div>
  );
}

function WorkCard({ work, index, isActive }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-scroll-item relative flex-shrink-0"
      style={{
        width: 'clamp(260px, 36vw, 500px)',
        marginRight: '2.5vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div
        className="relative overflow-hidden"
        style={{
          height: 'clamp(280px, 52vh, 500px)',
          border: isActive
            ? '1px solid rgba(204,255,0,0.5)'
            : '1px solid rgba(255,255,255,0.07)',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
          boxShadow: isActive ? '0 0 30px rgba(204,255,0,0.1)' : 'none',
        }}
      >
        <img
          data-strk-img-id={work.imgId}
          data-strk-img={`[${work.descId}] [${work.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={work.title}
          className="w-full h-full object-cover"
          style={{
            filter: hovered ? 'none' : 'url(#duotone-acid)',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'filter 0.6s ease, transform 0.7s ease',
          }}
          draggable={false}
        />

        {/* Category badge */}
        <div
          className="absolute top-4 left-4 font-mono px-3 py-1"
          style={{
            background: 'rgba(10,0,16,0.9)',
            color: '#CCFF00',
            border: '1px solid rgba(204,255,0,0.4)',
            letterSpacing: '0.2em',
            fontSize: '0.58rem',
          }}
        >
          {work.category}
        </div>

        {/* Year */}
        <div
          className="absolute top-4 right-4 font-mono"
          style={{ color: 'rgba(204,255,0,0.6)', fontSize: '0.58rem', letterSpacing: '0.15em' }}
        >
          {work.year}
        </div>

        {/* Hover overlay with description */}
        <div
          className="absolute inset-0 flex items-end p-6"
          style={{
            background: 'linear-gradient(to top, rgba(10,0,16,0.92) 0%, rgba(10,0,16,0.3) 50%, transparent 100%)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <p className="font-mono text-sm" style={{ color: 'rgba(240,240,240,0.85)', lineHeight: 1.7 }}>
            {work.desc}
          </p>
        </div>

        {/* Glitch line on hover */}
        {hovered && (
          <div
            className="absolute left-0 right-0 pointer-events-none"
            style={{
              top: '35%',
              height: 1,
              background: 'rgba(255,0,204,0.8)',
              animation: 'glitch-bar-h 0.4s steps(1) infinite',
            }}
          />
        )}

        {/* Active corner accent */}
        {isActive && (
          <div
            className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none"
            style={{
              borderBottom: '2px solid #CCFF00',
              borderLeft: '2px solid #CCFF00',
              boxShadow: '-2px 2px 8px rgba(204,255,0,0.4)',
            }}
          />
        )}
      </div>

      {/* Card info */}
      <div className="mt-4 px-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono mb-1" style={{ color: 'rgba(204,255,0,0.4)', letterSpacing: '0.25em', fontSize: '0.58rem' }}>
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3
              id={work.titleId}
              className="font-display font-black uppercase"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                color: hovered ? '#CCFF00' : '#F0F0F0',
                letterSpacing: '-0.02em',
                transform: 'scaleX(1.05)',
                transformOrigin: 'left center',
                transition: 'color 0.4s ease',
                textShadow: hovered ? '0 0 12px rgba(204,255,0,0.4)' : 'none',
              }}
            >
              {work.title}
            </h3>
            <p id={work.descId} className="font-mono text-xs mt-1" style={{ color: 'rgba(240,240,240,0.4)', letterSpacing: '0.05em', display: 'none' }}>
              {work.desc}
            </p>
          </div>
          <div className="font-mono text-right flex-shrink-0" style={{ color: 'rgba(204,255,0,0.3)', letterSpacing: '0.1em', fontSize: '0.58rem', lineHeight: 1.9 }}>
            {work.medium.split(' / ').map((m, i) => <div key={i}>{m}</div>)}
          </div>
        </div>

        {/* Accent line */}
        <div
          className="mt-3 h-px"
          style={{
            background: hovered
              ? 'linear-gradient(to right, #CCFF00, rgba(204,255,0,0.2), transparent)'
              : 'linear-gradient(to right, rgba(204,255,0,0.15), transparent)',
            boxShadow: hovered ? '0 0 10px rgba(204,255,0,0.35)' : 'none',
            transition: 'all 0.5s ease',
          }}
        />
      </div>
    </div>
  );
}
