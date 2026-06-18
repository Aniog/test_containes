import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, Play } from 'lucide-react';
import JewelryImage from '@/components/ui/JewelryImage';
import { UGC_POSTS } from '@/data/products';
import { useStrkImages } from '@/lib/useStrkImages';

export default function UGCReel() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  useStrkImages(containerRef, []);

  function scrollBy(dir) {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }

  return (
    <section ref={containerRef} className="bg-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
              #VelmoraOnYou
            </p>
            <h2 className="mt-3 font-serif font-light text-espresso text-4xl md:text-5xl">
              Worn in the wild
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="w-10 h-10 inline-flex items-center justify-center border border-hairline text-espresso hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={16} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="w-10 h-10 inline-flex items-center justify-center border border-hairline text-espresso hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight size={16} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto"
      >
        <div className="flex gap-4 md:gap-5 px-5 md:px-8 lg:px-12 pb-2">
          {UGC_POSTS.map((post) => (
            <article
              key={post.id}
              className="relative flex-shrink-0 w-[68vw] sm:w-[44vw] md:w-[260px] lg:w-[280px] aspect-[9/16] overflow-hidden bg-espresso group"
            >
              <JewelryImage
                imgId={post.imgId}
                query={`[ugc-${post.id}-caption]`}
                fallbackQuery={post.imgQuery}
                ratio="9x16"
                width={600}
                kind={post.id.endsWith('1') || post.id.endsWith('5') ? 'earring' : post.id.endsWith('2') ? 'necklace' : 'huggie'}
                theme={post.id.endsWith('3') ? 'linen' : 'warm'}
                alt={post.caption}
                className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(31,26,20,0.0) 30%, rgba(31,26,20,0.65) 100%)',
                }}
              />
              {/* Top right play icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/15 backdrop-blur-sm flex items-center justify-center text-cream">
                <Play size={12} strokeWidth={1.4} className="ml-0.5" />
              </div>
              {/* Bottom-left caption + handle */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-cream">
                <p
                  id={`ugc-${post.id}-caption`}
                  className="font-serif text-lg md:text-xl leading-snug"
                >
                  “{post.caption}”
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-cream/80 font-sans">
                    {post.handle}
                  </span>
                  <Heart size={14} strokeWidth={1.4} className="text-cream/80" />
                </div>
              </div>
            </article>
          ))}
          <div className="flex-shrink-0 w-1 md:w-4" aria-hidden />
        </div>
      </div>
    </section>
  );
}
