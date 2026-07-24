import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-[var(--color-cream)] px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-lg md:text-xl font-sans font-light tracking-wide opacity-90 animate-fade-in stagger-1">
          Demi-fine jewelry for the modern woman. Elegant pieces designed for everyday luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 btn-primary bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-warm-gold)] animate-fade-in stagger-2"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--color-cream)] border-opacity-50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--color-cream)] rounded-full" />
        </div>
      </div>
    </section>
  );
}