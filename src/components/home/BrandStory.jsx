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
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c2d4e6"
              data-strk-img="artisan jewelry workshop hands gold crafting close up"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="text-text-accent text-xs uppercase tracking-[0.2em] font-medium mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text leading-tight mb-6">
              Born from a Belief in Everyday Luxury
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
              Velmora was founded with a simple vision: that fine jewelry should not be reserved for special occasions alone. Every woman deserves to adorn herself with pieces that feel precious — without the precious price tag.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
              Each piece in our collection is crafted from 18K gold-plated brass, designed to be hypoallergenic, and built to last. We work directly with artisan workshops, cutting out the middleman to bring you demi-fine jewelry that punches well above its weight.
            </p>
            <Link to="/" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
