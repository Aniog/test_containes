import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Layered & luminous',
    handle: '@sophiam',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=400&q=80',
    caption: 'Golden hour glow',
    handle: '@olivia.k',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=400&q=80',
    caption: 'Everyday stack',
    handle: '@emma.j',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Date night details',
    handle: '@charlotte.m',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Brunch ready',
    handle: '@isabel.r',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&q=80',
    caption: 'Minimal & meaningful',
    handle: '@naomi.l',
  },
];

export default function UgcReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-velmora-sand py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-6 md:px-10 mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-deep tracking-widetitle font-semibold">
              Worn & Loved
            </h2>
            <p className="font-sans text-sm text-velmora-muted mt-4">
              See how our community styles Velmora
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 flex items-center justify-center border border-velmora-divider text-velmora-deep hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 flex items-center justify-center border border-velmora-divider text-velmora-deep hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 px-6 md:px-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[240px] snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-velmora-deep">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-white italic">{item.caption}</p>
                  <p className="font-sans text-xs text-white/60 mt-1">{item.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
