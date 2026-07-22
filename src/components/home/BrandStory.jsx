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
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-title] [brand-story-subtitle]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="section-subtitle">Our Philosophy</p>
            <h2 id="brand-story-title" className="section-title mt-3 mb-6">
              Where Craft<br />Meets Consciousness
            </h2>
            <p id="brand-story-subtitle" className="text-velmora-warm-gray leading-relaxed mb-6">
              Every Velmora piece begins as a sketch, shaped by hands that understand the weight of a well-made thing. We believe luxury shouldn't cost the earth — which is why our demi-fine collection uses responsibly sourced materials, 18K gold plating over recycled brass, and packaging you'll actually want to keep.
            </p>
            <p className="text-velmora-warm-gray leading-relaxed mb-8">
              The result? Jewelry that feels as good as it looks. Pieces designed to be worn daily, treasured for years, and passed on when the time comes.
            </p>
            <Link to="/about" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
