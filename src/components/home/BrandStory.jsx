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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-brand-text rounded-sm overflow-hidden">
            <img
              data-strk-img-id="story-img-7d8e9f"
              data-strk-img="[story-heading] [story-subhead]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="font-sans text-xs uppercase tracking-widest text-brand-accent mb-4">
              Our Story
            </p>
            <h2 id="story-heading" className="section-heading mb-6">
              Jewelry That Tells Your Story
            </h2>
            <p id="story-subhead" className="font-sans text-sm text-brand-text-secondary leading-relaxed mb-6">
              At Velmora, we believe fine jewelry should be accessible without compromise. 
              Every piece is crafted in 18K gold-plated brass with precision and care, 
              designed to be worn every day and treasured for a lifetime.
            </p>
            <p className="font-sans text-sm text-brand-text-secondary leading-relaxed mb-8">
              From our studio to your jewelry box, we honor the art of thoughtful making — 
              ethically sourced materials, hypoallergenic metals, and packaging that feels 
              as special as what's inside.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accent-hover transition-colors"
            >
              Read More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}