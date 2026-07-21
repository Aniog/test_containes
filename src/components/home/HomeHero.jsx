import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velvet-950/50 via-velvet-950/20 to-velvet-950/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center text-white">
        <p id="hero-subtitle" className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-light mb-4 md:mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl leading-none md:leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm md:text-base text-velvet-200 max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed">
          Discover our collection of 18K gold-plated jewelry — designed for the modern woman who values understated elegance.
        </p>
        <Link to="/shop" className="btn-primary bg-white text-velvet-950 border-white hover:bg-gold hover:border-gold hover:text-white">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}