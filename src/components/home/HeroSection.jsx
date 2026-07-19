import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="woman wearing gold jewelry warm lighting editorial portrait"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-site mx-auto px-4 md:px-8 flex items-center">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-parchment font-light leading-[1.1] tracking-wide-heading">
            Crafted to be
            <br />
            <span className="text-gold italic">Treasured</span>
          </h1>
          <p className="mt-4 md:mt-6 text-parchment/70 text-sm md:text-base font-sans leading-relaxed max-w-md">
            Premium demi-fine jewelry, designed for the modern woman. 18K gold
            plated, hypoallergenic, and made to last.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-6 md:mt-8 bg-gold hover:bg-gold-hover text-ink font-sans font-semibold text-xs md:text-sm uppercase tracking-[0.15em] px-8 py-3.5 transition-all duration-200 hover:shadow-lg"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-parchment/40 text-[10px] uppercase tracking-[0.2em] font-sans">Scroll</span>
        <div className="w-px h-8 bg-parchment/20 animate-pulse" />
      </div>
    </section>
  );
}
