import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const MANIFESTO_LINES = [
  'FORM IS RESISTANCE.',
  'STRUCTURE IS PROTEST.',
  'THE BODY IS THE CANVAS.',
  'NEO-FORM // SS_2026',
];

const FEATURED_SECTIONS = [
  {
    id: 'feat-collections',
    path: '/collections',
    label: 'COLLECTIONS',
    sub: 'DROP_01 — DROP_06',
    titleId: 'feat-collections-title',
    descId: 'feat-collections-desc',
    imgId: 'home-feat-collections-a1b2c3',
    span: 'col-span-12 md:col-span-7',
    height: 'h-[60vh] md:h-[70vh]',
  },
  {
    id: 'feat-lookbook',
    path: '/lookbook',
    label: 'LOOKBOOK',
    sub: 'RUNWAY // SS_2026',
    titleId: 'feat-lookbook-title',
    descId: 'feat-lookbook-desc',
    imgId: 'home-feat-lookbook-d4e5f6',
    span: 'col-span-12 md:col-span-5',
    height: 'h-[50vh] md:h-[70vh]',
  },
  {
    id: 'feat-studio',
    path: '/studio',
    label: 'THE_STUDIO',
    sub: 'PROCESS // ARCHIVE',
    titleId: 'feat-studio-title',
    descId: 'feat-studio-desc',
    imgId: 'home-feat-studio-g7h8i9',
    span: 'col-span-12',
    height: 'h-[40vh] md:h-[50vh]',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-neo-white">
      {/* Hero */}
      <section className="pt-16 border-b border-neo-black">
        <div className="max-w-screen-2xl mx-auto">
          {/* Massive display text */}
          <div className="px-4 md:px-6 pt-12 pb-0 overflow-hidden">
            <h1
              className="font-mono font-bold text-neo-yellow leading-none tracking-tighter select-none"
              style={{ fontSize: 'clamp(4rem, 14vw, 14rem)' }}
            >
              NEO-
            </h1>
            <h1
              className="font-mono font-bold text-neo-yellow leading-none tracking-tighter select-none -mt-4 md:-mt-8"
              style={{ fontSize: 'clamp(4rem, 14vw, 14rem)' }}
            >
              FORM
              <span className="cursor-blink text-neo-yellow">_</span>
            </h1>
          </div>

          {/* Marquee ticker */}
          <div className="border-t border-b border-neo-black py-2 overflow-hidden mt-4">
            <div className="marquee-track">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="font-mono text-xs tracking-[0.25em] text-neo-dim mr-12">
                  AVANT-GARDE FASHION COLLECTIVE &nbsp;// &nbsp;
                  SS_2026 &nbsp;// &nbsp;
                  FORM IS RESISTANCE &nbsp;// &nbsp;
                  NEO-FORM &nbsp;// &nbsp;
                  TOKYO — BERLIN — NEW YORK &nbsp;// &nbsp;
                </span>
              ))}
            </div>
          </div>

          {/* Hero sub-row */}
          <div className="grid grid-cols-12 border-b border-neo-black">
            <div className="col-span-12 md:col-span-8 px-4 md:px-6 py-8 border-b md:border-b-0 md:border-r border-neo-black">
              <p className="font-mono text-sm text-neo-dim leading-relaxed max-w-xl">
                NEO-FORM is an avant-garde fashion collective operating at the
                intersection of architecture, protest, and the body. We reject
                decoration. We build structure.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 px-4 md:px-6 py-8 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-neo-dim mb-1">CURRENT_SEASON</p>
                <p className="font-mono font-bold text-neo-black text-lg">SS_2026</p>
              </div>
              <div className="mt-4">
                <p className="font-mono text-xs tracking-[0.2em] text-neo-dim mb-1">DROPS_ACTIVE</p>
                <p className="font-mono font-bold text-neo-black text-lg">06</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="border-b border-neo-black bg-neo-black">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {MANIFESTO_LINES.map((line, i) => (
              <p
                key={i}
                className="font-mono font-bold text-neo-white border-b border-[#333] py-4 text-lg md:text-2xl tracking-tight"
              >
                <span className="text-[#444] text-xs mr-4">0{i + 1}</span>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Featured sections grid */}
      <section className="border-b border-neo-black">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-4 md:px-6 pt-8 pb-4 border-b border-neo-black">
            <p className="font-mono text-xs tracking-[0.3em] text-neo-dim">NAVIGATE // ARCHIVE</p>
          </div>
          <div className="grid grid-cols-12">
            {FEATURED_SECTIONS.map((section) => (
              <Link
                key={section.id}
                to={section.path}
                className={`${section.span} relative overflow-hidden border-b border-r border-neo-black img-wrapper group`}
              >
                <div className={`relative ${section.height} w-full`}>
                  <img
                    data-strk-img-id={section.imgId}
                    data-strk-img={`[${section.descId}] [${section.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={section.label}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="img-meta-overlay">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#888] mb-1">{section.sub}</p>
                    <p className="font-mono font-bold text-neo-white text-xl tracking-tight">{section.label}</p>
                    <p className="font-mono text-xs text-[#666] mt-2 tracking-[0.15em]">→ ENTER</p>
                  </div>
                </div>
                {/* Label bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-neo-white border-t border-neo-black px-4 py-2 flex justify-between items-center group-hover:bg-neo-black group-hover:text-neo-white transition-colors">
                  <span className="font-mono text-xs tracking-[0.2em]">{section.label}</span>
                  <span className="font-mono text-xs">→</span>
                </div>
                {/* Hidden text for image query */}
                <span id={section.titleId} className="sr-only">{section.label} fashion editorial</span>
                <span id={section.descId} className="sr-only">{section.sub} avant-garde fashion collective NEO-FORM</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neo-black">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-xs tracking-[0.2em] text-neo-dim">
            NEO-FORM © 2026 — ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-xs tracking-[0.2em] text-neo-dim">
            TOKYO — BERLIN — NEW YORK
          </p>
          <p className="font-mono text-xs tracking-[0.2em] text-neo-dim">
            FORM_IS_RESISTANCE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
