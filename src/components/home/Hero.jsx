import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0"
      data-strk-bg-id="hero-bg-velmora-7f4ac9"
      data-strk-bg="[hero-subtitle] [hero-title] warm lit closeup of woman wearing gold jewelry on neck and ear editorial dark moody background"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="2000"
    />
    {/* Overlay for legibility */}
    <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/40 via-velmora-ink/20 to-velmora-ink/70" />

    <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-end pb-20 md:pb-28">
      <div className="max-w-2xl velmora-fade-up">
        <p className="text-xs uppercase tracking-[0.4em] text-velmora-gold mb-6">
          The 2026 Collection
        </p>
        <h1
          id="hero-title"
          className="font-serif text-velmora-cream text-5xl md:text-7xl lg:text-8xl font-light leading-[1.02] tracking-tight"
        >
          Crafted to be
          <br />
          <em className="not-italic text-velmora-gold">Treasured</em>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-8 text-velmora-cream/85 text-base md:text-lg max-w-lg leading-relaxed"
        >
          Demi-fine 18K gold-plated jewelry, designed in small batches and made to be lived in —
          today, tomorrow, and a decade from now.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center bg-velmora-gold text-white px-9 py-4 text-xs uppercase tracking-[0.25em] hover:bg-velmora-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center border border-velmora-cream/60 text-velmora-cream px-9 py-4 text-xs uppercase tracking-[0.25em] hover:bg-velmora-cream hover:text-velmora-ink transition-colors duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
