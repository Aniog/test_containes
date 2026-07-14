import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded">
            <img
              data-strk-img-id="brand-story-img-main"
              data-strk-img="[brand-story-heading] [brand-story-text] artisan gold jewelry crafting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-velmora-gold/30 rounded" />
          </div>

          {/* Text */}
          <div className="lg:pl-6">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 id="brand-story-heading" className="heading-section text-3xl md:text-4xl mb-6">
              Jewelry That Feels Like You
            </h2>
            <p id="brand-story-text" className="text-velmora-stone leading-relaxed mb-5">
              Velmora was born from a simple belief: everyone deserves jewelry that feels luxurious
              without the luxury markup. We design demi-fine pieces in 18K gold plating that stand
              up to real life — shower-proof, sweat-proof, and beautifully crafted to wear every
              single day.
            </p>
            <p className="text-velmora-stone leading-relaxed mb-8">
              Each piece is designed in our studio, tested for durability, and made with
              hypoallergenic materials so you never have to choose between comfort and style.
              From a quick coffee run to a candlelit dinner, Velmora moves with you.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-velmora-charcoal hover:text-velmora-gold transition-colors font-medium group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
