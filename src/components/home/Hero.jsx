import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/40 via-velmora-charcoal/20 to-velmora-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream tracking-wide animate-slide-up opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Crafted to be Treasured
        </h1>
        <p 
          className="font-sans text-lg md:text-xl text-velmora-cream/80 mt-6 max-w-xl mx-auto animate-slide-up opacity-0"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          Premium demi-fine jewelry for the modern woman. 
          Elegant pieces designed to become your most treasured possessions.
        </p>
        <Link 
          to="/shop"
          className="inline-block mt-10 px-10 py-4 bg-velmora-gold text-velmora-charcoal font-sans text-sm tracking-widest uppercase hover:bg-velmora-goldLight transition-all duration-300 animate-slide-up opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}