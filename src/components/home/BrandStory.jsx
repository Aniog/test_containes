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
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-base">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="brand-story-img-a1b2c3"
              data-strk-bg="[brand-story-title] [brand-story-text]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              style={{ backgroundColor: '#2A2420' }}
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-muted mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6"
            >
              Jewelry That Tells<br />Your Story
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-velmora-muted leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: fine jewelry should feel accessible, personal, and enduring. 
              Each piece in our collection is thoughtfully designed in small batches using 18K gold plating and 
              hypoallergenic materials — so you can wear them every day, without worry.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-muted leading-relaxed mb-8">
              From the first sketch to the final polish, we obsess over the details that make jewelry feel 
              special — the weight in your hand, the way light catches a crystal, the comfort of a perfect fit. 
              This is demi-fine jewelry for the woman who knows that true luxury is in the details.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-text hover:text-velmora-accent transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
