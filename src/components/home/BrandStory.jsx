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
    <section ref={containerRef} className="section-padding bg-velvet-surface">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-text] [brand-story-title] artisan jewelry crafting"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-14 lg:pl-20 pt-10 md:pt-0">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-velvet-base mb-6">
              The Art of<br />Everyday Gold
            </h2>
            <p id="brand-story-text" className="text-velvet-muted leading-relaxed mb-6 max-w-md">
              Velmora was born from the belief that fine jewelry shouldn't be reserved for special occasions. Every piece is designed in our London studio, crafted from 18K gold-plated brass with meticulous attention to weight, finish, and wearability.
            </p>
            <p className="text-velvet-muted leading-relaxed mb-8 max-w-md">
              From the precise curve of a huggie to the way a chain catches light, we obsess over the details that turn an accessory into a signature.
            </p>
            <Link to="/about" className="btn-outline inline-block text-sm">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
