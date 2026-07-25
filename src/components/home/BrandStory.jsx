import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const { ImageHelper } = await import('@strikingly/sdk');
      const config = await import('../../strk-img-config.json');
      if (containerRef.current) {
        ImageHelper.loadImages(config.default, containerRef.current);
      }
    };
    loadImages();
  }, []);

  return (
    <section className="section-padding bg-white" ref={containerRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-lg">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="elegant jewelry workshop artisan crafting gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-velmora-charcoal/10" />
          </div>

          {/* Right: Text Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
              Our Story
            </h2>
            <div className="hairline w-16 mb-6" />
            
            <p className="text-velmora-charcoal leading-relaxed mb-6 text-lg">
              At Velmora, we believe that jewelry should be more than just an accessory—it should be a 
              treasured companion in life's most precious moments.
            </p>
            
            <p className="text-velmora-warmGray leading-relaxed mb-8">
              Founded with a passion for creating demi-fine jewelry that bridges the gap between luxury and 
              accessibility, each piece in our collection is thoughtfully designed and crafted using 18k gold 
              plating over high-quality brass. Our commitment to hypoallergenic materials ensures that every 
              piece is as comfortable as it is beautiful.
            </p>

            <p className="text-velmora-warmGray leading-relaxed mb-10 italic">
              "We create jewelry for the modern woman who appreciates the finer things in life, 
              but values authenticity over pretense."
            </p>

            <Link 
              to="/about"
              className="btn-secondary inline-block"
            >
              Discover Our Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
