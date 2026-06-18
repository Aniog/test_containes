import { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { REELS } from '@/data/products';

export default function ReelsRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-ink py-20 md:py-28 text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-3">
              @velmora
            </p>
            <h2 className="font-serif font-light text-3xl md:text-5xl text-cream">
              Worn by our community
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-block text-xs uppercase tracking-[0.3em] text-cream/80 hover:text-cream link-underline"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      <div className="reels-fade-mask">
        <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x snap-mandatory">
          {REELS.map((reel) => {
            const captionId = `reel-caption-${reel.id}`;
            return (
              <article
                key={reel.id}
                className="relative flex-shrink-0 w-[62vw] sm:w-[300px] md:w-[280px] aspect-[9/16] overflow-hidden bg-ink-soft snap-start group cursor-pointer"
              >
                <img
                  alt={reel.caption}
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[${captionId}] gold jewelry on neck and ear close up portrait warm cinematic`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-cream/15 backdrop-blur-md flex items-center justify-center">
                  <Play
                    className="w-3.5 h-3.5 text-cream fill-cream"
                    strokeWidth={1}
                  />
                </div>
                <p
                  id={captionId}
                  className="absolute left-5 right-5 bottom-5 font-serif text-base md:text-lg text-cream leading-snug"
                >
                  {reel.caption}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="md:hidden text-center mt-8">
        <a
          href="#"
          className="text-xs uppercase tracking-[0.3em] text-cream/80 link-underline"
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
