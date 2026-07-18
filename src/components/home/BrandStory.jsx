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
    <section ref={containerRef} className="border-t border-taupe">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Image */}
        <div className="relative aspect-square md:aspect-auto">
          <img
            data-strk-img-id="brand-story-img-z1a2b3"
            data-strk-img="[brand-story-desc] [brand-story-title] artisan jewelry crafting gold"
            data-strk-img-ratio="1x1"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 md:px-16 lg:px-20 py-12 md:py-0 bg-ivory">
          <div className="max-w-md">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Our Story</h2>
            <p id="brand-story-desc" className="font-sans text-sm text-warm-gray leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece is thoughtfully designed in our London studio and crafted with 18K gold plating over 
              hypoallergenic metals — so you can wear your favorites every day without worry.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
              We believe in slow fashion, timeless design, and pieces that become part of your story. 
              No trends, no fast fashion — just jewelry made to last.
            </p>
            <Link
              to="/about"
              className="inline-block text-xs font-sans font-medium tracking-product uppercase text-charcoal border-b border-charcoal pb-1 no-underline hover:text-gold hover:border-gold transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
