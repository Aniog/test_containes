import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/30 via-transparent to-[var(--color-charcoal)]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-[var(--color-cream)] px-4 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-cream)]/80 mb-10 font-sans font-light animate-fade-in delay-200">
          Premium demi-fine jewelry for the modern woman. 
          Elegant pieces designed to become your most treasured possessions.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-fade-in delay-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--color-cream)]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--color-cream)]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}