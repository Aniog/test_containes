import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { placeholderSrc } from '@/lib/images';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={placeholderSrc}
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:py-8">
            <p className="caption-label mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="section-title mb-6 md:mb-8"
            >
              Quiet Luxury, Made to Last
            </h2>
            <div className="space-y-5 text-velmora-taupe leading-relaxed mb-8">
              <p id="brand-story-body">
                Velmora was founded on a simple belief: fine-feeling jewelry
                should not require a special occasion. Each piece is designed in
                our studio and crafted in small batches using 18K gold plating,
                responsibly sourced brass, and hypoallergenic finishes.
              </p>
              <p>
                We create for the woman who buys herself flowers, who gifts with
                intention, who knows that the smallest detail can hold the most
                meaning.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-velmora-charcoal hover:text-velmora-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
