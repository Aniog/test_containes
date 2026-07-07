import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-charcoal/60 via-velmora-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-velmora-ivory leading-tight animate-slide-up">
              Crafted to be Treasured
            </h1>
            <p className="mt-6 text-lg text-velmora-ivory/80 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 px-10 py-4 bg-velmora-gold text-white font-medium tracking-widest hover:bg-velmora-gold-dark transition-all duration-300 hover:shadow-soft-lg animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              SHOP THE COLLECTION
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-ivory/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-ivory/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}