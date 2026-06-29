import { Link } from 'react-router-dom';

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-velmora-espresso">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundImage: `url(${SVG_PLACEHOLDER})` }}
      />
      <div className="absolute inset-0 bg-velmora-espresso/40" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <p
          id="hero-subtitle"
          className="text-white/80 uppercase tracking-[0.2em] text-sm md:text-base mb-4 animate-fade-in-up"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-3xl leading-[1.1] mb-8 animate-fade-in-up"
          style={{ animationDelay: '120ms' }}
        >
          Crafted to be Treasured
        </h1>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-8 py-4 bg-velmora-gold text-white text-sm uppercase tracking-[0.14em] hover:bg-velmora-gold-dark transition-colors duration-300 animate-fade-in-up"
          style={{ animationDelay: '240ms' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
