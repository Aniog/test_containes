import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-0 bg-velmora-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden bg-velmora-cream">
            <img
              data-strk-img-id="story-img"
              data-strk-img="[story-title] [story-body]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-12 md:px-16 lg:px-20">
            <p className="text-[10px] tracking-[0.3em] uppercase text-velmora-accent font-medium mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide text-velmora-text leading-tight"
            >
              Born from a<br />Love of Detail
            </h2>
            <p
              id="story-body"
              className="mt-6 text-sm md:text-base text-velmora-text-muted leading-relaxed max-w-md"
            >
              Velmora was founded on the belief that fine jewelry should not be reserved for special occasions alone. Every piece is designed in our London studio, cast in 18K gold-plated brass, and finished by hand — so you can wear luxury every single day.
            </p>
            <p className="mt-4 text-sm md:text-base text-velmora-text-muted leading-relaxed max-w-md">
              We partner with family-run ateliers who have perfected their craft over generations. The result? Jewelry that feels substantial, looks radiant, and stands the test of time.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.2em] uppercase text-velmora-text font-medium hover:text-velmora-accent transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
