import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useImageLoader } from '@/hooks/useImageLoader';

export function BrandStorySection() {
  const sectionId = 'brand-story';
  const ref = useImageLoader([]);

  return (
    <section ref={ref} className="py-20 md:py-0 bg-cream">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-foreground overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img={`[${sectionId}-body] [${sectionId}-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs uppercase tracking-extra-wide text-muted mb-4">Our World</p>
            <h2
              id={`${sectionId}-title`}
              className="font-serif text-3xl md:text-5xl font-light text-foreground mb-6"
            >
              Designed for the Modern Muse
            </h2>
            <div id={`${sectionId}-body`} className="space-y-4 text-muted leading-relaxed mb-8">
              <p>
                Velmora was born from a belief that luxury should feel personal, not
                precious. Every piece is designed in-house and finished in 18K gold
                plating — made to move with you from morning coffee to midnight toasts.
              </p>
              <p>
                We work with small, family-run ateliers and use responsibly sourced
                materials whenever possible. Because jewelry that lasts should be made
                with care.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-extra-wide text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
