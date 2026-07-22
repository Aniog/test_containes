import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="section-padding bg-cream-dark">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry artisan workshop gold crafting elegant warm"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan jewelry workshop"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold-accent mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-base mb-6 leading-tight">
              Jewelry that feels
              <br />
              <span className="italic font-medium">like you</span>
            </h2>
            <div className="space-y-4 text-warm-gray font-sans text-sm leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves to wear jewelry that makes her feel extraordinary — without the extraordinary price tag.
              </p>
              <p>
                We design demi-fine pieces that bridge the gap between costume and fine jewelry. Each piece is crafted from 18K gold-plated surgical steel and hand-finished with the care and attention of much more expensive collections.
              </p>
              <p>
                Our pieces are hypoallergenic, tarnish-resistant, and designed to be worn every day — from morning coffee to midnight cocktails.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-block mt-8 font-sans text-xs uppercase tracking-wider text-gold-accent border-b border-gold-accent pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors duration-300"
            >
              Discover Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
