import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-black"
      >
        {/* Fallback gradient overlay while image loads */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-content mx-auto px-4 md:px-8 w-full">
          <div className="max-w-lg">
            <h1
              id="hero-title"
              className="text-white font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-4"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="text-white/80 font-sans text-base md:text-lg mb-8 leading-relaxed max-w-md"
            >
              Discover demi-fine gold jewelry designed for the woman who values quiet elegance. Each piece, a keepsake.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-white uppercase tracking-widest text-sm px-10 py-4 transition-all duration-300 hover:bg-gold-hover font-sans"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
