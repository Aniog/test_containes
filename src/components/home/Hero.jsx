import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-warm-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream px-6 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-cream/90 mb-10 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-champagne text-charcoal font-medium text-sm tracking-widest hover:bg-soft-gold transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}