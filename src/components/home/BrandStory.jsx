import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StrkImg } from '@/components/ui/StrkImg';

export function BrandStory() {
  return (
    <section className="bg-velmora-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream-dark lg:aspect-[3/4]">
          <StrkImg
            id="brand-story-img"
            query="[brand-story-title] [brand-story-body] gold jewelry atelier"
            ratio="3x4"
            width={900}
            alt="Velmora craftsmanship"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="max-w-xl lg:py-10">
          <span className="mb-4 block font-sans text-xs font-medium uppercase tracking-[0.28em] text-velmora-gold">
            Our Story
          </span>
          <h2
            id="brand-story-title"
            className="font-serif text-4xl leading-tight text-velmora-base sm:text-5xl"
          >
            Made for Modern Heirlooms
          </h2>
          <p
            id="brand-story-body"
            className="mt-6 font-sans text-base leading-relaxed text-velmora-taupe"
          >
            Velmora began with a simple belief: fine jewelry should feel attainable, and
            everyday pieces should feel special. We design in small collections, source
            responsibly, and finish every piece in long-wearing 18k gold plate — so you can
            wear them now, and keep them forever.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-velmora-base pb-1 font-sans text-xs font-medium uppercase tracking-[0.22em] text-velmora-base transition-colors hover:text-velmora-gold hover:border-velmora-gold"
          >
            Read Our Story
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
