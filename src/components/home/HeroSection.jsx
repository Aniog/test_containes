import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          data-strk-img-id="hero-bg-img"
          data-strk-img="warm gold jewelry on model closeup editorial"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <p className="font-sans text-xs md:text-sm tracking-[0.28em] uppercase mb-4 md:mb-6 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight mb-6 max-w-2xl text-balance animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/70 max-w-md mb-8 animate-slide-up">
          Demi-fine gold jewelry designed for the modern woman. Premium materials, accessible luxury — pieces you'll reach for every day.
        </p>
        <Link to="/shop" className="btn-primary animate-slide-up">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-white/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}