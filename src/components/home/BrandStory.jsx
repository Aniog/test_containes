import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-0 bg-ivory-dark overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        {/* Image side */}
        <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-stone-pale">
          <img
            data-strk-img-id="brand-story-img-c3d4e5"
            data-strk-img="[brand-story-text] [brand-story-title] fine jewelry artisan craftsmanship gold"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/10" />
        </div>

        {/* Text side */}
        <div className="flex items-center justify-center px-8 lg:px-16 py-16 lg:py-20 bg-ivory-dark">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-widest font-sans text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl lg:text-5xl text-charcoal font-light leading-tight mb-6"
            >
              Made with<br />
              <em>intention</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-7" />
            <p
              id="brand-story-text"
              className="font-sans text-stone text-sm leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't
              require a compromise. We design each piece to be worn every day — to
              the office, to dinner, to wherever life takes you.
            </p>
            <p className="font-sans text-stone text-sm leading-relaxed mb-8">
              Every piece is crafted from hypoallergenic materials and finished with
              18K gold plating, so you can wear it close to your skin without worry.
              We believe in quiet luxury — pieces that speak softly but say everything.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-sans text-charcoal hover:text-gold transition-colors duration-300 group"
            >
              Read Our Story
              <span className="w-8 h-px bg-charcoal group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
