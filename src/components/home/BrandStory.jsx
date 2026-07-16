import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-pearl">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x7y8z9"
              data-strk-img="artisan crafting gold jewelry workshop warm lighting close-up hands"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:py-8">
            <p className="font-sans text-xs uppercase tracking-widest text-gold font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide mb-8 leading-snug">
              Jewelry that speaks softly and lasts forever
            </h2>
            <p className="font-sans text-warm-gray leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that feels
              luxurious without the luxury price tag. Our pieces are crafted with 18K gold
              plating over premium brass, designed to be worn daily and treasured always.
            </p>
            <p className="font-sans text-warm-gray leading-relaxed mb-8">
              Each design is thoughtfully created by our in-house team, drawing inspiration
              from art, architecture, and the women who wear our pieces every day.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
