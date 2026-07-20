import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-champagne">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-sand overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-heading] [brand-story-subtext]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:py-10">
            <p className="text-gold text-xs tracking-widest uppercase font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="serif-heading text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight mb-6"
            >
              Jewelry that becomes part of your story
            </h2>
            <p
              id="brand-story-subtext"
              className="text-umber leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that every woman deserves jewelry
              that feels luxurious without the luxury markup. We combine 18K gold plating
              with ethically sourced materials to create demi-fine pieces that are meant
              to be worn — not locked away.
            </p>
            <p className="text-umber leading-relaxed mb-8">
              Each design is crafted in small batches by artisans who have honed their
              craft over generations. The result is jewelry that looks and feels
              expensive, at a price that feels like an everyday indulgence.
            </p>
            <Link to="/about" className="btn-outline text-xs">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
