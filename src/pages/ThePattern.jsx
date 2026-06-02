import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PATTERN_ITEMS = [
  {
    id: 'pattern-hero',
    titleId: 'pattern-hero-title',
    descId: 'pattern-hero-desc',
    imgId: 'pattern-img-hero-a1b2c3',
    title: 'Fibonacci Spiral',
    subtitle: 'Helianthus annuus',
    desc: 'Sunflower seed head displaying the golden angle arrangement — 137.5° between each successive floret.',
    ratio: '3x2',
    width: '1200',
    align: 'left',
  },
  {
    id: 'pattern-succulent',
    titleId: 'pattern-succulent-title',
    descId: 'pattern-succulent-desc',
    imgId: 'pattern-img-succulent-d4e5f6',
    title: 'Rosette Formation',
    subtitle: 'Echeveria elegans',
    desc: 'Leaves arranged in a perfect logarithmic spiral, each offset by the golden angle to maximise light capture.',
    ratio: '4x3',
    width: '900',
    align: 'right',
  },
  {
    id: 'pattern-fern',
    titleId: 'pattern-fern-title',
    descId: 'pattern-fern-desc',
    imgId: 'pattern-img-fern-g7h8i9',
    title: 'Crozier Unfurling',
    subtitle: 'Dryopteris filix-mas',
    desc: 'The fiddlehead fern uncoils in a tight Archimedean spiral — nature\'s most elegant compression algorithm.',
    ratio: '3x4',
    width: '700',
    align: 'center',
  },
  {
    id: 'pattern-aloe',
    titleId: 'pattern-aloe-title',
    descId: 'pattern-aloe-desc',
    imgId: 'pattern-img-aloe-j1k2l3',
    title: 'Distichous Symmetry',
    subtitle: 'Aloe polyphylla',
    desc: 'Five-fold spiral symmetry in the Spiral Aloe — one of the rarest phyllotactic patterns in the plant kingdom.',
    ratio: '1x1',
    width: '800',
    align: 'left',
  },
  {
    id: 'pattern-pine',
    titleId: 'pattern-pine-title',
    descId: 'pattern-pine-desc',
    imgId: 'pattern-img-pine-m4n5o6',
    title: 'Cone Geometry',
    subtitle: 'Pinus sylvestris',
    desc: 'Pine cone scales follow 8 clockwise and 13 counter-clockwise spirals — consecutive Fibonacci numbers.',
    ratio: '3x2',
    width: '1000',
    align: 'right',
  },
];

function PatternCard({ item, index }) {
  const ref = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ratio = entry.intersectionRatio;
          const dir = index % 2 === 0 ? 1 : -1;
          setRotation(dir * (1 - ratio) * 6);
        }
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const alignClass =
    item.align === 'right'
      ? 'ml-auto mr-0'
      : item.align === 'center'
      ? 'mx-auto'
      : 'ml-0 mr-auto';

  const maxW =
    item.ratio === '1x1' ? 'max-w-[520px]' :
    item.ratio === '3x4' ? 'max-w-[480px]' :
    item.ratio === '4x3' ? 'max-w-[680px]' :
    'max-w-[820px]';

  return (
    <article
      ref={ref}
      className={`w-full ${maxW} ${alignClass} transition-transform duration-700 ease-natural`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative overflow-hidden bg-parchment">
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}]`}
          data-strk-img-ratio={item.ratio}
          data-strk-img-width={item.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.title}
          className="w-full h-auto object-cover block"
          style={{
            aspectRatio: item.ratio.replace('x', '/'),
          }}
        />
      </div>
      <div className="pt-5 pb-2 border-b border-divider">
        <p id={item.titleId} className="font-serif text-2xl font-light text-ink leading-tight">
          {item.title}
        </p>
        <p className="font-sans text-xs tracking-widest uppercase text-sage mt-1">
          {item.subtitle}
        </p>
        <p id={item.descId} className="font-sans text-sm text-muted-ink leading-relaxed mt-3 max-w-[480px]">
          {item.desc}
        </p>
      </div>
    </article>
  );
}

export default function ThePattern() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-clay">
      {/* Hero header */}
      <section className="pt-40 pb-20 px-8 md:px-16 max-w-[1440px] mx-auto">
        <div className="max-w-[640px]">
          <p className="font-sans text-xs tracking-widest uppercase text-sage mb-4">
            The Pattern
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-ink leading-none tracking-tight">
            φ
          </h1>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-ink leading-tight mt-2">
            Nature's hidden geometry
          </h2>
          <p className="font-sans text-sm text-muted-ink leading-relaxed mt-6 max-w-[420px]">
            Every leaf, every seed, every spiral follows the same irrational number.
            Scroll to witness the golden ratio encoded in living matter.
          </p>
        </div>

        {/* Decorative rule */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-divider" />
          <span className="font-sans text-xs tracking-widest uppercase text-muted-ink">
            1 : 1.618
          </span>
          <div className="h-px w-16 bg-divider" />
        </div>
      </section>

      {/* Scrolling image sequence */}
      <section className="px-8 md:px-16 max-w-[1440px] mx-auto pb-32 flex flex-col gap-24 md:gap-40">
        {PATTERN_ITEMS.map((item, i) => (
          <PatternCard key={item.id} item={item} index={i} />
        ))}
      </section>

      {/* Footer note */}
      <div className="border-t border-divider px-8 md:px-16 py-12 max-w-[1440px] mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase text-muted-ink text-center">
          Phyllotaxis — from Greek φύλλον (leaf) + τάξις (arrangement)
        </p>
      </div>
    </div>
  );
}
