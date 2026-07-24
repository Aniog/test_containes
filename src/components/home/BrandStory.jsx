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
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="overflow-hidden aspect-[4/3] md:aspect-[3/4]">
            <img
              data-strk-img-id="brand-story-img-q8w9e0"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan gold jewelry crafting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="text-xs tracking-widest uppercase text-gold font-sans font-medium mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              Where Artistry Meets Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-stone font-sans leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece in our collection is thoughtfully designed and meticulously crafted using 18K gold plating over hypoallergenic metals — so you can wear your favorites every day without worry.
            </p>
            <p className="mt-4 text-stone font-sans leading-relaxed">
              We believe in slow fashion, timeless design, and the quiet confidence that comes from wearing something truly special.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm tracking-widest uppercase text-gold font-sans font-medium border-b border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors no-underline"
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
