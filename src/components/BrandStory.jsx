import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-0 bg-velmora-cream">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] lg:min-h-[700px]">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-title] [brand-story-body] gold jewelry artisan crafting handmade"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-6 py-16 md:px-12 lg:px-20 md:py-20">
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal leading-tight"
              >
                Designed With Intention, Worn With Confidence
              </h2>
              <div className="mt-6 space-y-4">
                <p
                  id="brand-story-body"
                  className="font-sans text-sm md:text-base text-velmora-stone leading-relaxed"
                >
                  Velmora was born from a simple belief: fine jewelry should not require a fine-art budget. Every piece in our collection is thoughtfully designed in our studio and crafted with 18K gold plating on a hypoallergenic base — so you can wear it every day, without compromise.
                </p>
                <p className="font-sans text-sm md:text-base text-velmora-stone leading-relaxed">
                  We work with skilled artisans who share our obsession for detail. From the weight of a huggie clasp to the curve of a filigree drop, nothing is left to chance.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-velmora-charcoal border-b border-velmora-charcoal pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
              >
                Our Story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
