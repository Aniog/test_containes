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
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/20 to-secondary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary px-4">
        <h1 className="font-serif text-h1 md:text-[4.5rem] lg:text-[5.5rem] leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-body md:text-lg text-primary/80 max-w-xl mx-auto mb-8">
          Demi-fine jewelry that elevates every moment. 
          Premium 18K gold plated pieces designed for the modern woman.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-accent text-secondary px-10 py-4 text-body font-medium hover:bg-accent-hover transition-smooth"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}