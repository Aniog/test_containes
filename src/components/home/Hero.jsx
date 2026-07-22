import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-charcoal/60 via-velmora-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-velmora-cream">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-lg md:text-xl text-velmora-cream/80 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Premium demi-fine jewelry for the modern woman. Elegant pieces designed to be worn and cherished every day.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 px-8 py-4 bg-velmora-gold hover:bg-velmora-gold-hover text-velmora-charcoal font-medium transition-all duration-300 hover:shadow-hover animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}