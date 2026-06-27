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
    <section ref={containerRef} className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-f6a2d8"
              data-strk-img="gold jewelry artisan workshop crafting close up warm light editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan jewelry crafting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-charcoal leading-tight mb-6">
              Where Artistry<br />Meets Accessibility
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p className="text-velmora-taupe leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels 
              luxurious without the luxury price tag. We create demi-fine pieces using 18K 
              gold plating over premium base metals, finished by hand with genuine crystals 
              and careful attention to detail.
            </p>
            <p className="text-velmora-taupe leading-relaxed mb-8">
              Each piece is designed to be worn, loved, and treasured — whether you're 
              treating yourself or gifting someone special. We ship worldwide, because 
              beautiful jewelry shouldn't have borders.
            </p>
            <Link
              to="/about"
              className="inline-block text-xs tracking-[0.2em] uppercase text-velmora-charcoal border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
