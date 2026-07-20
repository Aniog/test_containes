import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent z-10" />
        {/* Warm gold accent glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        {/* Simulated jewelry image area */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-gradient-to-br from-gold/30 via-gold/10 to-transparent blur-md" />
          <div className="absolute top-[40%] right-[25%] w-48 h-48 rounded-full bg-gradient-to-br from-rose/20 to-gold/10 blur-sm" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-6 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.15] mb-6 animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-cream/70 text-sm md:text-base max-w-md mx-auto mb-10 font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
          Demi-fine jewelry in 18K gold plate. Designed for the woman who buys for herself — and deserves the best.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-slide-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-cream/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-cream/60" />
        </div>
      </div>
    </section>
  );
}
