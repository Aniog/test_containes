import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-14 md:py-0 bg-cream">
      <div className="mx-auto max-w-7xl md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden bg-parchment">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-5 md:px-14 py-14 md:py-20">
            <p className="text-xs tracking-widest uppercase text-lightgray mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl max-w-md leading-[1.15]"
            >
              Designed for the Moments That Matter
            </h2>
            <p
              id="brand-story-body"
              className="mt-5 text-warmgray leading-relaxed max-w-md"
            >
              Velmora was born from a belief that fine jewelry should feel accessible — without compromising on craft or conscience. Each piece is 18K gold-plated, nickel-free, and designed to be worn every day.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase hover:text-gold transition-colors"
            >
              Read Our Story
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
