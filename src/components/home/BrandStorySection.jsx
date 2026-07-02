import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x7y8z9"
              data-strk-img="[brand-story-heading] [brand-story-text] artisan gold jewelry making"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-overline mb-4">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-serif text-display-sm md:text-[3rem] text-charcoal leading-tight"
            >
              Jewelry With Intention
            </h2>
            <div className="w-12 h-[1px] bg-gold mt-6 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-body-lg text-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels
              as special as she is — without the luxury markup. We design demi-fine pieces
              in 18K gold plating that are made to last, meant to layer, and crafted with the
              kind of attention to detail usually reserved for fine jewelry houses.
            </p>
            <p className="font-sans text-body-lg text-warm-gray leading-relaxed mb-8">
              Each piece begins as a hand-drawn sketch in our atelier, before being brought
              to life by skilled artisans using time-honored techniques and the finest
              hypoallergenic materials.
            </p>
            <Link to="/about" className="btn-outline">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
