import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/30 via-velmora-charcoal/10 to-velmora-cream/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-velmora-cream/90 mb-10 max-w-xl mx-auto font-sans font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Demi-fine jewelry designed for the modern woman. Quality pieces that elevate every moment.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-velmora-gold text-velmora-charcoal text-sm tracking-widest uppercase hover:bg-velmora-cream transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-cream/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}