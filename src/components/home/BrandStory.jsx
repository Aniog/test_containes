import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="section-padding section-padding-y">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-7xl mx-auto">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            data-strk-img-id="brand-story-main"
            data-strk-img="jewelry artisan workshop gold craftsmanship hands detail"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
          {/* Decorative frame */}
          <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-gold-400/30 -z-10" />
        </div>

        {/* Text */}
        <div className="lg:pl-4">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-800 leading-tight mb-6">
            Jewelry That Feels Like You
          </h2>
          <div className="space-y-4 text-ink-400 leading-relaxed">
            <p>
              Velmora was born from a simple belief: every woman deserves jewelry that makes her
              feel extraordinary — without the extraordinary price tag.
            </p>
            <p>
              Each piece in our collection is crafted from 18K gold-plated stainless steel,
              designed to be waterproof, hypoallergenic, and tarnish-resistant. We obsess over
              the details so you can wear your Velmora pieces from morning to midnight, every
              single day.
            </p>
            <p>
              From our studio to your jewelry box, every Velmora piece arrives in our signature
              packaging — ready to gift or to treasure.
            </p>
          </div>
          <Link
            to="/shop"
            className="btn-outline mt-8 inline-block"
          >
            Discover the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
