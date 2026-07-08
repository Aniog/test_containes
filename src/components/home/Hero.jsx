import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/80 font-sans leading-relaxed">
            Discover our collection of demi-fine gold jewelry — elegant pieces designed for 
            everyday moments and special occasions.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 btn-primary bg-velmora-gold hover:bg-velmora-goldDark text-charcoal"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}