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
    <section ref={containerRef} className="bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto bg-[#F5EDDA] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-subtitle] [brand-story-title] gold jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <div className="max-w-md">
              <p
                id="brand-story-subtitle"
                className="text-[11px] tracking-[0.2em] uppercase text-[#C4952E] mb-4"
              >
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.15] tracking-[0.03em] mb-6"
              >
                Fine jewelry shouldn't be locked in a vault.
              </h2>
              <p className="text-[#78716C] leading-relaxed mb-8 text-[15px]">
                Velmora was born from a simple belief: that every woman deserves jewelry
                that feels precious — not just on special occasions, but every single day.
                We work directly with artisan workshops to craft 18K gold-plated pieces
                with the same care as fine jewelry, at a fraction of the markup.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase font-medium text-[#252320] hover:text-[#C4952E] transition-colors duration-300 group"
              >
                <span>Read Our Story</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
