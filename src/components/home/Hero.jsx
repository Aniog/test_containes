import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Elegant gold jewelry"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight animate-fade-in">
          Crafted to be<br />
          <span className="italic">Treasured</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-cream/80 font-sans font-light max-w-xl mx-auto animate-fade-in stagger-1">
          Demi-fine jewelry that brings joy to everyday moments. 
          Premium 18K gold plated pieces, designed for the modern woman.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 px-10 py-4 bg-cream text-charcoal font-sans font-medium tracking-wide transition-all duration-300 hover:bg-champagne hover:scale-105 animate-fade-in stagger-2"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-cream/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
