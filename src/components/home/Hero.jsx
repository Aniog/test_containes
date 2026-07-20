import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-charcoal/60 via-velmora-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-velmora-cream mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-velmora-gold-light/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-velmora-charcoal px-8 py-4 text-sm uppercase tracking-widest hover:bg-velmora-cream transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-gold-light/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-gold-light/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}