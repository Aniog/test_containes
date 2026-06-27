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
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 overlay-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-fade-in">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wider mb-6 leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed">
          Discover our collection of demi-fine gold jewelry — elegant pieces designed 
          for the modern woman who appreciates quiet luxury.
        </p>
        <Link 
          to="/shop"
          className="inline-block px-10 py-4 text-sm tracking-widest transition-all hover:opacity-90 hover:scale-105"
          style={{ 
            backgroundColor: 'var(--color-velmora-gold)',
            color: 'white'
          }}
        >
          SHOP THE COLLECTION
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}