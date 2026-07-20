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
    <section className="py-20 md:py-28 border-t border-taupe" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-t1u2v3"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan jewelry workshop gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal"
            >
              Our Story
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-sm text-stone mt-6 leading-relaxed"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Our pieces are designed in-house and crafted with 18K gold plating over hypoallergenic metals — so you can wear them every day, worry-free.
            </p>
            <p className="font-sans text-sm text-stone mt-4 leading-relaxed">
              We source responsibly, design intentionally, and believe that the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 font-sans text-xs uppercase tracking-wider text-charcoal border-b border-charcoal pb-0.5 no-underline hover:text-gold hover:border-gold transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
