import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const sections = [
  {
    id: 'collections',
    label: 'Collections',
    meta: 'DROP_04 // SS_2026',
    desc: 'Asymmetric silhouettes. Deconstructed tailoring. Raw edges.',
    href: '/collections',
    imgId: 'home-collections-img-a1b2c3',
    titleId: 'home-collections-title',
    descId: 'home-collections-desc',
    wide: true,
  },
  {
    id: 'lookbook',
    label: 'Lookbook',
    meta: 'RUNWAY // 2026',
    desc: 'An endless strip of editorial fashion photography.',
    href: '/lookbook',
    imgId: 'home-lookbook-img-d4e5f6',
    titleId: 'home-lookbook-title',
    descId: 'home-lookbook-desc',
    wide: false,
  },
  {
    id: 'studio',
    label: 'The Studio',
    meta: 'BEHIND // FORM',
    desc: 'Low-fi. High-grain. The process behind the collection.',
    href: '/studio',
    imgId: 'home-studio-img-g7h8i9',
    titleId: 'home-studio-title',
    descId: 'home-studio-desc',
    wide: false,
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-16 relative overflow-hidden border-b border-nf-black">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
          {/* Left: text */}
          <div className="flex flex-col justify-end p-8 md:p-16 pb-16 border-r border-nf-black relative z-10">
            <p className="font-mono text-xs tracking-widest-xl uppercase text-nf-red mb-6">
              SS_2026 // COLLECTION FOUR
            </p>
            <h1
              className="font-mono font-bold uppercase text-nf-black leading-none mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}
            >
              NEO-<br />FORM
            </h1>
            <p className="font-mono text-sm text-nf-muted max-w-xs mb-10 leading-relaxed">
              Avant-garde fashion collective. Deconstructed forms. Radical silhouettes. Tokyo × Berlin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/collections"
                className="inline-flex items-center gap-3 font-mono text-xs tracking-widest-lg uppercase bg-nf-black text-white px-6 py-3 hover:bg-nf-red transition-colors duration-200"
              >
                View Collections <ArrowRight size={14} />
              </Link>
              <Link
                to="/lookbook"
                className="inline-flex items-center gap-3 font-mono text-xs tracking-widest-lg uppercase border border-nf-black text-nf-black px-6 py-3 hover:border-nf-red hover:text-nf-red transition-colors duration-200"
              >
                Lookbook
              </Link>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative min-h-[60vh] md:min-h-0 overflow-hidden">
            <img
              data-strk-img-id="home-hero-img-z9y8x7"
              data-strk-img="[home-hero-desc] avant-garde fashion editorial portrait high contrast"
              data-strk-img-ratio="2x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="NEO-FORM hero"
              className="w-full h-full object-cover object-top"
              style={{ filter: 'contrast(1.1)' }}
            />
            <p id="home-hero-desc" className="sr-only">
              Avant-garde fashion editorial portrait, deconstructed tailoring, high contrast black and white
            </p>
            {/* Ticker */}
            <div className="absolute bottom-0 left-0 right-0 bg-nf-black text-white py-2 overflow-hidden">
              <div className="flex gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
                {Array(6).fill('NEO-FORM // SS_2026 // DROP_04 // TOKYO × BERLIN').map((t, i) => (
                  <span key={i} className="font-mono text-xs tracking-widest-md uppercase flex-shrink-0">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-nf-black">
        {sections.map((s, i) => (
          <Link
            key={s.id}
            to={s.href}
            className={`group relative overflow-hidden border-r border-nf-black last:border-r-0 ${
              i === 0 ? 'md:col-span-2' : ''
            }`}
            style={{ minHeight: i === 0 ? '70vh' : '50vh' }}
          >
            <img
              id={s.imgId}
              data-strk-img-id={s.imgId}
              data-strk-img={`[${s.descId}] [${s.titleId}] fashion editorial portrait`}
              data-strk-img-ratio={i === 0 ? '16x9' : '3x4'}
              data-strk-img-width={i === 0 ? '1200' : '600'}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={s.label}
              className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ filter: 'contrast(1.05)' }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-nf-black opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <p className="font-mono text-xs tracking-widest-xl uppercase text-nf-red mb-2">
                {s.meta}
              </p>
              <h2
                id={s.titleId}
                className="font-mono font-bold uppercase text-white text-2xl md:text-4xl mb-2"
              >
                {s.label}
              </h2>
              <p id={s.descId} className="font-mono text-xs text-white/70 max-w-xs">
                {s.desc}
              </p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs tracking-widest-md uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Enter <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Manifesto strip */}
      <section className="border-b border-nf-black py-20 px-8 md:px-16">
        <div className="max-w-4xl">
          <p className="font-mono text-xs tracking-widest-xl uppercase text-nf-red mb-6">
            MANIFESTO // 2026
          </p>
          <blockquote
            className="font-mono font-bold uppercase text-nf-black leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
          >
            "Form follows<br />
            <span className="text-nf-red">disruption.</span><br />
            Not function."
          </blockquote>
          <p className="font-mono text-xs text-nf-muted mt-8 tracking-widest-md uppercase">
            — NEO-FORM Collective, Tokyo, 2026
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-nf-black">
        <span className="font-mono text-xs text-nf-muted tracking-widest-md uppercase">
          © 2026 NEO-FORM Collective
        </span>
        <span className="font-mono text-xs text-nf-muted tracking-widest-md uppercase">
          Tokyo × Berlin × Seoul
        </span>
        <span className="font-mono text-xs text-nf-muted tracking-widest-md uppercase">
          All Rights Reserved
        </span>
      </footer>
    </div>
  );
}
