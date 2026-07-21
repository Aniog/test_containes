import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center text-ivory">
        <div className="max-w-3xl mx-auto">
          <p 
            className="text-xs uppercase tracking-[0.4em] text-gold mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1 
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            Crafted to be Treasured
          </h1>
          <p 
            className="text-lg md:text-xl text-ivory/80 mb-10 max-w-xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            Timeless pieces designed for every moment that matters. 18K gold plated, hypoallergenic, and made to last.
          </p>
          <div 
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          >
            <Link
              to="/collection"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal font-semibold text-xs uppercase tracking-widest hover:bg-gold-hover transition-all duration-300 hover:scale-105"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
        <div className="w-px h-12 bg-gradient-to-b from-ivory/50 to-transparent" />
      </div>
    </section>
  );
}
