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
    <section ref={containerRef} className="grid grid-cols-1 md:grid-cols-2">
      {/* Image */}
      <div className="aspect-[4/5] md:aspect-auto bg-velmora-sand overflow-hidden">
        <img
          data-strk-img-id="brand-story-img-velmora-7e2a1f"
          data-strk-img="[brand-story-text] [brand-story-heading]"
          data-strk-img-ratio="4x5"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora craftsmanship"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex items-center bg-velmora-pearl">
        <div className="px-8 md:px-16 lg:px-20 py-16 md:py-0 max-w-lg">
          <p className="text-xs font-medium tracking-widest uppercase text-velmora-stone mb-4">Our Story</p>
          <h2
            id="brand-story-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6"
          >
            Designed to be Lived In
          </h2>
          <p
            id="brand-story-text"
            className="text-sm text-velmora-stone leading-relaxed mb-8"
          >
            Velmora was born from the belief that luxury should feel effortless. 
            Each piece is crafted in small batches using 18K gold-plated brass and 
            ethically sourced crystals — designed in Paris, brought to life by 
            master artisans. We create jewelry that moves with you, from morning 
            coffee to evening cocktails.
          </p>
          <Link to="/" className="btn-outline text-xs">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}