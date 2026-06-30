import { useEffect, useRef } from 'react';
import { ugcReels } from '@/data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId;
    const scroll = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 0.5;
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-ivory">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="font-serif text-2xl md:text-4xl text-text-primary">
            As Seen On You
          </h2>
          <p className="mt-2 text-sm text-warm-gray">Tag @velmorajewelry for a chance to be featured</p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="ugc-scroll flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-2 cursor-grab active:cursor-grabbing"
      >
        {/* Double the array for seamless loop */}
        {[...ugcReels, ...ugcReels].map((reel, i) => (
          <div
            key={`${reel.id}-${i}`}
            className="flex-shrink-0 w-48 md:w-56 relative rounded-sm overflow-hidden group"
          >
            <div className="aspect-[9/16] bg-warm-dark">
              <img
                src={reel.image}
                alt={`Styled by ${reel.username}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs text-white/90 leading-relaxed line-clamp-2 font-serif italic">
                  &ldquo;{reel.caption}&rdquo;
                </p>
                <p className="text-xs text-white/60 mt-1">{reel.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}