import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full -mt-16 md:-mt-[7.5rem] h-[100svh] min-h-[640px] max-h-[920px] overflow-hidden bg-ink text-ivory"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/55"
        />
      </div>

      {/* Content */}
      <div className="relative h-full container-page flex flex-col justify-end pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-2xl animate-fade-in">
          <p id="hero-eyebrow" className="eyebrow text-gold-soft">
            The Velmora Edit · Autumn 2026
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif font-light text-display text-ivory"
          >
            Crafted to be <em className="not-italic font-serif italic text-gold-soft">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-lg text-base md:text-lg text-ivory/80 leading-relaxed"
          >
            Demi-fine jewelry in 18K gold plate, designed in small batches and finished by hand. Pieces to wear every day, and to keep.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-accent group">
              Shop the Collection
              <ArrowRight
                className="ml-3 w-3.5 h-3.5 transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                strokeWidth={1.6}
              />
            </Link>
            <Link
              to="/shop?category=sets"
              className="btn-outline-light"
            >
              Gift Sets
            </Link>
          </div>
        </div>
      </div>

      {/* small scroll indicator */}
      <div className="hidden md:flex absolute right-10 bottom-10 lg:right-16 lg:bottom-16 items-center gap-3 text-ivory/70">
        <span className="text-[10px] uppercase tracking-widest-2">Scroll</span>
        <span className="block w-12 h-px bg-ivory/40" />
      </div>
    </section>
  );
}
