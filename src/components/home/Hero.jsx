import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          data-strk-bg-id="hero-background"
          data-strk-bg="gold jewelry luxury close up warm light elegant"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/30 to-brand-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <p className="text-brand-gold-light text-xs tracking-widest-2xl uppercase font-medium mb-4 animate-fade-in">
          18K Gold Plated · Hypoallergenic
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6 animate-slide-up">
          Crafted to be<br />
          <span className="italic">Treasured</span>
        </h1>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
          Discover demi-fine gold jewelry designed for the modern woman. 
          Premium quality, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3.5 text-xs tracking-widest-xl uppercase font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/20"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-[10px] tracking-widest-2xl uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
