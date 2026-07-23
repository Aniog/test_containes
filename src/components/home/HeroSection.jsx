import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-950">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/30 to-charcoal-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-cream-300/80 mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 font-light leading-[1.1] mb-6 animate-slide-up">
          Crafted to be<br className="md:hidden" /> Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-cream-300/80 max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Gold jewelry designed for the woman who knows that the finest things are felt, not flaunted.
        </p>
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-10 py-3.5 bg-cream-50 text-charcoal-900 font-sans text-sm font-medium tracking-[0.15em] uppercase hover:bg-cream-100 transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-10 bg-cream-50/30" />
      </div>
    </section>
  );
}