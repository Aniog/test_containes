import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function BrandStory() {
  return (
    <section className="bg-velmora-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=80"
            alt="Velmora jewelry craftsmanship"
            className="img-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 lg:py-24">
          <span className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-velmora-accent">
            Our Story
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text leading-tight">
            Designed for the Modern Heirloom
          </h2>
          <p className="mt-6 text-velmora-muted leading-relaxed">
            Velmora was born from a simple belief: fine-feeling jewelry should not
            require an occasion. Each piece is designed in small batches with
            responsibly sourced materials, then finished in warm 18K gold plating
            meant to age gracefully with you.
          </p>
          <p className="mt-4 text-velmora-muted leading-relaxed">
            From morning coffee runs to candlelit dinners, our demi-fine pieces are
            made to be lived in, layered, and eventually passed on.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-text hover:text-velmora-accent transition-colors"
          >
            Read Our Story
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
