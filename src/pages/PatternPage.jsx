import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const patternImages = [
  {
    id: 'pattern-1',
    titleId: 'pattern-title-1',
    descId: 'pattern-desc-1',
    imgId: 'pattern-img-a1b2c3',
    title: 'Echeveria Rosette',
    desc: 'Ultra-macro succulent spiral — Echeveria elegans',
    caption: 'Fibonacci sequence in living form',
    number: '01',
  },
  {
    id: 'pattern-2',
    titleId: 'pattern-title-2',
    descId: 'pattern-desc-2',
    imgId: 'pattern-img-d4e5f6',
    title: 'Sunflower Disc',
    desc: 'Helianthus annuus seed head — golden angle phyllotaxis',
    caption: '137.5° — the golden angle',
    number: '02',
  },
  {
    id: 'pattern-3',
    titleId: 'pattern-title-3',
    descId: 'pattern-desc-3',
    imgId: 'pattern-img-g7h8i9',
    title: 'Aloe Spiral',
    desc: 'Aloe polyphylla — perfect pentagonal symmetry',
    caption: 'Five-fold symmetry, nature\'s architecture',
    number: '03',
  },
  {
    id: 'pattern-4',
    titleId: 'pattern-title-4',
    descId: 'pattern-desc-4',
    imgId: 'pattern-img-j1k2l3',
    title: 'Cactus Areoles',
    desc: 'Mammillaria elongata — spine cluster macro',
    caption: 'Radial symmetry at microscopic scale',
    number: '04',
  },
  {
    id: 'pattern-5',
    titleId: 'pattern-title-5',
    descId: 'pattern-desc-5',
    imgId: 'pattern-img-m4n5o6',
    title: 'Dahlia Petals',
    desc: 'Dahlia pinnata — concentric petal arrangement',
    caption: 'Logarithmic spiral in bloom',
    number: '05',
  },
];

function PatternItem({ item, index }) {
  const ref = useRef(null);
  const [rotation, setRotation] = useState(0);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        const dir = isEven ? 1 : -1;
        setRotation(dir * (1 - ratio) * 6);
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isEven]);

  return (
    <article
      ref={ref}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 py-20 md:py-32 border-b border-[#E8E0D0] last:border-0`}
    >
      {/* Image */}
      <div
        className="w-full md:w-[61.8%] flex-shrink-0 transition-transform duration-700 ease-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: '1.618 / 1' }}>
          <img
            data-strk-img-id={item.imgId}
            data-strk-img={`[${item.descId}] [${item.titleId}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F5F0E8]/20 pointer-events-none" />
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-[38.2%] flex flex-col gap-4 px-4 md:px-0">
        <span className="font-mono text-xs text-[#8B7355] tracking-[0.3em]">{item.number}</span>
        <h2
          id={item.titleId}
          className="font-serif text-4xl md:text-5xl font-light text-[#3D5C3A] leading-tight"
        >
          {item.title}
        </h2>
        <p
          id={item.descId}
          className="font-serif italic text-base text-[#8B7355] leading-relaxed"
        >
          {item.desc}
        </p>
        <div className="w-8 h-px bg-[#7A9E7E] my-2" />
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B7355]">
          {item.caption}
        </p>
      </div>
    </article>
  );
}

export default function PatternPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-16">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-neo-green mb-6">
            The Pattern
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-neo-green leading-none mb-8">
            Growth<br />
            <em className="not-italic text-neo-green">in spiral</em>
          </h1>
          <p className="font-sans text-sm text-neo-green leading-relaxed max-w-md">
            Phyllotaxis — from the Greek <em>phyllon</em> (leaf) and <em>taxis</em> (arrangement).
            The mathematical order hidden in every petal, seed, and spine.
          </p>
        </div>

        {/* Decorative golden ratio line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px bg-[#E8E0D0] flex-1" />
          <span className="font-mono text-xs text-[#8B7355] tracking-widest">φ = 1.618</span>
          <div className="h-px bg-[#E8E0D0] w-16" />
        </div>
      </section>

      {/* Scrolling image sequence */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16">
        {patternImages.map((item, index) => (
          <PatternItem key={item.id} item={item} index={index} />
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 py-24 text-center">
        <p className="font-serif italic text-2xl text-[#8B7355] mb-8">
          "In every curve of nature, mathematics speaks."
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-[#E8E0D0] w-16" />
          <span className="font-mono text-xs text-[#7A9E7E] tracking-widest">Phyllotaxis</span>
          <div className="h-px bg-[#E8E0D0] w-16" />
        </div>
      </section>
    </div>
  );
}
