import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto">
          <img
            alt="Velmora craftsmanship"
            data-strk-img-id="brand-story-img-6d34fa"
            data-strk-img="[brand-story-title] [brand-story-text]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center">
          <div className="max-w-lg mx-auto px-6 lg:px-16 py-16 md:py-0">
            <p className="text-xs text-gold uppercase tracking-widest">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-2xl md:text-3xl text-espresso mt-4 leading-relaxed">
              Jewelry that becomes part of your story
            </h2>
            <p id="brand-story-text" className="text-taupe text-sm leading-relaxed mt-6">
              Velmora was born from a simple belief: that every woman deserves jewelry that feels precious — without the inaccessible price tag. Each piece is designed in our London atelier, crafted from 18K gold-plated brass and ethically sourced crystals. We believe in slow fashion for jewelry: timeless designs, responsible materials, and craftsmanship that lasts.
            </p>
            <Link to="/shop" className="btn-ghost inline-block mt-8">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
