import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageScope, StrkImg } from '@/components/StrkImage.jsx';

const REELS = [
  {
    id: 'reel-ear-stack',
    caption: 'The everyday ear stack',
    credit: '@velmora.muse',
    query: 'close-up editorial photo of a woman\u2019s ear wearing stacked gold huggie earrings and an ear cuff, warm golden hour light, vertical portrait',
  },
  {
    id: 'reel-neck-layers',
    caption: 'Layers for golden hour',
    credit: '@styledby.june',
    query: 'vertical portrait of a woman wearing layered delicate gold necklaces on sunlit skin, warm neutral tones, editorial jewelry photography',
  },
  {
    id: 'reel-huggie-close',
    caption: 'Dome huggies, always',
    credit: '@maison.elle',
    query: 'macro shot of chunky gold dome huggie earring on a woman\u2019s ear, soft warm studio light, vertical format',
  },
  {
    id: 'reel-necklace-drop',
    caption: 'One drop of light',
    credit: '@aurora.wears',
    query: 'vertical editorial photo of a crystal pendant gold necklace resting on a woman\u2019s collarbone, warm shadow play',
  },
  {
    id: 'reel-unboxing',
    caption: 'Unboxing the Heirloom Set',
    credit: '@gifted.gold',
    query: 'hands opening an elegant linen jewelry gift box with gold earring and necklace set inside, warm tones, vertical video still',
  },
  {
    id: 'reel-filigree',
    caption: 'Lace, cast in gold',
    credit: '@velmora.muse',
    query: 'vertical close-up of textured gold filigree drop earring swaying on a woman\u2019s ear, dark warm background, editorial',
  },
];

export default function ReelRow() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section className="border-y border-linen bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-8 flex items-end justify-between md:mb-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">
              Worn by You
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-espresso md:text-5xl">
              #VelmoraDaily
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center border border-espresso/20 text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-ivory"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center border border-espresso/20 text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-ivory"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <ImageScope>
        <div
          ref={trackRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:gap-5 md:px-10"
        >
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative w-[200px] shrink-0 snap-start overflow-hidden bg-espresso md:w-[240px]"
            >
              <StrkImg
                imgId={`ugc-${reel.id}`}
                query={reel.query}
                ratio="9x16"
                width={480}
                alt={reel.caption}
                className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-serif text-lg italic leading-snug text-ivory">{reel.caption}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-ivory/70">
                  {reel.credit}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </ImageScope>
    </section>
  );
}
