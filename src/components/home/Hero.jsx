import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/40 via-velmora-charcoal/20 to-velmora-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-velmora-sand text-lg md:text-xl max-w-xl mx-auto mb-10 font-light">
          Premium demi-fine jewelry for the modern woman. 
          Timeless elegance, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-velmora-gold-dark transition-all duration-300 hover:scale-105"
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