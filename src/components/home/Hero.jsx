import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-stone-900"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl font-light text-white leading-tight animate-slide-up"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg text-stone-300 leading-relaxed max-w-md"
          >
            Demi-fine gold jewelry designed for the modern woman. Pieces that
            tell your story, crafted with intention and meant to last.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="inline-block px-8 py-3 bg-gold text-white text-sm uppercase tracking-[0.15em] hover:bg-gold-dark transition-all duration-300 text-center"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border border-white/30 text-white text-sm uppercase tracking-[0.15em] hover:bg-white/10 transition-all duration-300 text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
