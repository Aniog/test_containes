import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded-sm overflow-hidden bg-sand">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-heading] jewelry craftsmanship editorial warm"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-heading"
              className="serif-heading text-3xl md:text-4xl text-espresso mb-6 leading-snug"
            >
              Jewelry That Lives in Your Story
            </h2>
            <p className="font-sans text-cocoa leading-relaxed mb-4 text-sm md:text-base">
              Velmora was founded on a simple belief: that fine jewelry should be part of your everyday — not locked away for special occasions. Each piece is designed in London and crafted with 18K gold plate over brass, using ethically sourced crystals.
            </p>
            <p className="font-sans text-cocoa leading-relaxed mb-8 text-sm md:text-base">
              We work directly with artisans to bring you heirloom-quality pieces at a fraction of traditional luxury pricing. No markups, no mystery — just beautiful jewelry made to be worn and loved.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-wider uppercase text-warmgold hover:text-goldlight transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
