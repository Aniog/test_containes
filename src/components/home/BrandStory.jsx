import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-u0v1w2"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-snug"
            >
              A Legacy of Quiet Luxury
            </h2>
            <p
              id="brand-story-desc"
              className="text-taupe leading-relaxed mb-4"
            >
              Every Velmora piece begins with a sketch and a story. Our artisans blend time-honored goldsmithing techniques with modern design sensibility, creating jewelry that feels both timeless and of-the-moment.
            </p>
            <p className="text-taupe leading-relaxed mb-8">
              We believe luxury should be accessible. That's why we use premium 18K gold plating over hypoallergenic bases — delivering the look and feel of fine jewelry at a fraction of the price, without compromising on quality or ethics.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-gold text-gold text-sm tracking-wider uppercase font-sans font-medium pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
