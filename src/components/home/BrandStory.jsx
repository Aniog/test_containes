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
    <section ref={containerRef} id="about" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-ivory overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-g7h8"
              data-strk-img="[brand-story-heading] [brand-story-text] jewelry artisan crafting gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal">
              Our Story
            </h2>
            <p id="brand-story-text" className="mt-6 text-muted leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Our pieces are designed in-house, crafted with 18K gold plating over hypoallergenic metals, and finished by hand.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We source ethically, produce responsibly, and ship directly to you — cutting out the middlemen so you get heirloom-quality pieces at a fraction of traditional retail.
            </p>
            <Link
              to="/#about"
              className="inline-block mt-8 text-sm uppercase tracking-widest text-gold font-medium hover:text-gold-dark transition-colors no-underline border-b border-gold pb-1"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
