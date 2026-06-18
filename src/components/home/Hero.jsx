import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg"
        data-strk-bg="[hero-headline] [hero-subhead] warm gold jewelry close up on model editorial soft light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/20 to-espresso/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[11px] uppercase tracking-eyebrow text-ivory/80 font-medium">
            The Spring Edit · 2026
          </p>
          <h1
            id="hero-headline"
            className="mt-5 font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-light text-ivory leading-[1.02]"
          >
            Crafted to be<br />
            <em className="not-italic text-champagne">Treasured.</em>
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 max-w-lg text-base md:text-lg text-ivory/85 font-light leading-relaxed"
          >
            Demi-fine gold jewelry, designed for everyday and made to last. Quietly luxurious, made in small batches.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-block bg-gold text-espresso text-xs uppercase tracking-eyebrow font-medium px-9 py-4 hover:bg-champagne transition-colors duration-300"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-block text-ivory text-xs uppercase tracking-eyebrow font-medium px-2 py-4 border-b border-ivory/60 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/70">
        <span className="text-[10px] uppercase tracking-eyebrow">Scroll</span>
        <span className="w-px h-10 bg-ivory/40" />
      </div>
    </section>
  );
}
