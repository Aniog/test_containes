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
    <section className="py-section-sm md:py-section bg-cream" ref={containerRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              alt="Velmora jewelry artisan at work"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-artisan-a2b3c4"
              data-strk-img="[brand-story-title] [brand-story-subtitle] jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs uppercase tracking-widest-2xl text-gold mb-3">
              Our Story
            </p>
            <h2 id="brand-story-title" className="font-serif text-heading text-charcoal mb-6">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-subtitle" className="font-sans text-warm-gray text-base leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as
              special as she is, without the luxury markup. We craft demi-fine pieces in 18K gold
              plating, designed to be worn every day and treasured for years.
            </p>
            <p className="font-sans text-warm-gray text-base leading-relaxed mb-8">
              Each piece is hypoallergenic, water-resistant, and made with the same attention to
              detail you&apos;d expect from fine jewelry — because quality shouldn&apos;t be a luxury.
            </p>
            <Link
              to="/about"
              className="font-sans text-xs uppercase tracking-widest-xl text-gold font-medium border-b border-gold pb-1 self-start hover:text-gold-dark transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
