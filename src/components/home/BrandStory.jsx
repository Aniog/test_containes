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
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-velmora"
              data-strk-img="[brand-story-heading] [brand-story-body] artisan jewelry craftsmanship gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold-400/30 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="section-subtitle mb-4">Our Story</p>
            <h2 id="brand-story-heading" className="section-title mb-6 leading-snug">
              Jewelry That Tells Your Story
            </h2>
            <div id="brand-story-body" className="space-y-4">
              <p className="font-sans text-sm md:text-base text-walnut-600 leading-relaxed">
                Velmora was born from a simple belief: every woman deserves access to fine jewelry
                that feels luxurious without the luxury markup. We design pieces that become part of
                your story — the earrings you wore to your first big presentation, the necklace
                that adorned you on a night you will never forget.
              </p>
              <p className="font-sans text-sm md:text-base text-walnut-600 leading-relaxed">
                Each piece is crafted in 18K gold plating over premium base metals, designed to be
                hypoallergenic and built to last. We work directly with artisan workshops, cutting
                out the middleman to bring you quality that you can see and feel.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 font-sans text-xs tracking-[0.2em] uppercase text-walnut-900 border-b border-walnut-900 pb-1 hover:text-gold-700 hover:border-gold-700 transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
