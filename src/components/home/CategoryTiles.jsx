import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CATEGORIES } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-cream py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-3">
            By Category
          </p>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-ink">
            Shop the silhouette you love
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {CATEGORIES.map((cat) => {
            const titleId = `category-${cat.id}-title`;
            const blurbId = `category-${cat.id}-blurb`;
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative block overflow-hidden bg-bone aspect-[4/5] md:aspect-[3/4]"
              >
                <img
                  alt={cat.label}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${blurbId}] [${titleId}] gold demi fine jewelry editorial close up warm light`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-ink/5 transition-opacity duration-500 group-hover:from-ink/65" />

                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8 text-cream">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3
                        id={titleId}
                        className="font-serif font-light text-3xl md:text-4xl tracking-tight"
                      >
                        {cat.label}
                      </h3>
                      <p
                        id={blurbId}
                        className="text-sm text-cream/85 mt-2 max-w-[260px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                      >
                        {cat.blurb}
                      </p>
                    </div>
                    <span className="w-10 h-10 rounded-full border border-cream/40 flex items-center justify-center group-hover:bg-cream group-hover:text-ink transition-colors flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
