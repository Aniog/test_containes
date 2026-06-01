import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const principles = [
  {
    id: 'ma',
    kanji: '間',
    title: 'Ma — The Space Between',
    body: 'In Japanese aesthetics, ma is the pause, the interval, the emptiness that gives form its meaning. We do not fill space. We shape it. Every room we design is first conceived as an absence — a void that the building is built around.',
  },
  {
    id: 'wabi',
    kanji: '侘',
    title: 'Wabi — Imperfect Beauty',
    body: 'We resist the perfect surface. Concrete is left to show its formwork. Timber is allowed to silver. Steel oxidises. These are not failures of craft — they are the material speaking its own language, recording the passage of time.',
  },
  {
    id: 'sabi',
    kanji: '寂',
    title: 'Sabi — The Beauty of Age',
    body: 'A building should improve with age. We choose materials that patinate, that absorb the life lived within them. The goal is not a building that looks new forever, but one that becomes more itself with every passing year.',
  },
  {
    id: 'mu',
    kanji: '無',
    title: 'Mu — Nothingness',
    body: 'The most difficult thing to design is nothing. To resist the impulse to add, to ornament, to explain — this is the discipline at the centre of our practice. We ask of every element: does this earn its place?',
  },
];

export default function Philosophy() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ma-white min-h-screen">
      {/* Full-bleed backdrop section */}
      <div className="relative h-[80vh] md:h-screen overflow-hidden bg-ma-paper">
        <div
          className="absolute inset-0"
          data-strk-bg-id="phil-hero-bg-z9y8x7"
          data-strk-bg="[phil-hero-sub] [phil-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-ma-ink/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-ma-ink/30 via-transparent to-ma-ink/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
          <p
            id="phil-hero-sub"
            className="text-xs tracking-ultra uppercase text-white/50 font-light mb-6"
          >
            Our Thinking
          </p>
          <h1
            id="phil-hero-title"
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-wide leading-none max-w-3xl"
          >
            The Art of<br />
            <span className="italic">Emptiness</span>
          </h1>
          <div className="mt-10 w-12 h-px bg-white/30" />
        </div>
      </div>

      {/* Opening statement */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-36 text-center">
        <p className="font-display text-2xl md:text-3xl font-light text-ma-ink leading-relaxed tracking-wide">
          Architecture is not the art of building.
          It is the art of creating conditions for life —
          conditions of light, of silence, of breath.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="w-12 h-px bg-ma-wood" />
        </div>
      </section>

      {/* Principles */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pb-24 md:pb-36">
        <p className="text-xs tracking-ultra uppercase text-ma-ash font-light mb-16">
          Guiding Principles
        </p>
        <div className="space-y-0">
          {principles.map((p, i) => (
            <div
              key={p.id}
              className={`border-t border-ma-stone py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12
                ${i === principles.length - 1 ? 'border-b' : ''}
              `}
            >
              {/* Kanji */}
              <div className="md:col-span-1 flex md:flex-col items-start gap-4 md:gap-0">
                <span className="font-display text-5xl md:text-6xl font-light text-ma-stone leading-none">
                  {p.kanji}
                </span>
              </div>
              {/* Text */}
              <div className="md:col-span-3">
                <h2 className="font-display text-xl md:text-2xl font-light text-ma-ink tracking-wide mb-5">
                  {p.title}
                </h2>
                <p className="text-sm text-ma-concrete font-light leading-loose">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing image + quote */}
      <section className="relative overflow-hidden h-[60vh] md:h-[70vh] bg-ma-paper">
        <div
          className="absolute inset-0"
          data-strk-bg-id="phil-close-bg-w6v5u4"
          data-strk-bg="[phil-close-quote]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-ma-ink/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
          <p
            id="phil-close-quote"
            className="font-display text-xl md:text-3xl font-light italic text-white leading-relaxed tracking-wide max-w-2xl"
          >
            "We do not design buildings.
            We design the experience of being inside them."
          </p>
          <p className="mt-6 text-xs tracking-ultra uppercase text-white/40">
            — MA (Space) Studio
          </p>
        </div>
      </section>

      {/* Studio note */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-36 text-center">
        <p className="text-xs tracking-ultra uppercase text-ma-ash font-light mb-8">
          The Studio
        </p>
        <p className="text-sm text-ma-concrete font-light leading-loose">
          MA (Space) was founded in Tokyo in 2018. We are a small practice — deliberately so.
          Each project receives the full attention of the studio. We work slowly, carefully,
          and in close collaboration with our clients. We believe that the best architecture
          emerges from a long conversation between the building, its site, and the people
          who will inhabit it.
        </p>
      </section>
    </div>
  );
}
