import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/30 via-velmora-charcoal/20 to-velmora-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream tracking-wide animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-lg md:text-xl text-velmora-cream/80 font-sans max-w-xl mx-auto animate-slide-up delay-100">
          Discover our collection of demi-fine gold jewelry, designed for the modern woman who appreciates quiet luxury.
        </p>
        <Link 
          to="/shop"
          className="inline-block mt-10 btn-primary bg-velmora-cream text-velmora-charcoal hover:bg-velmora-gold hover:text-velmora-cream animate-slide-up delay-200"
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