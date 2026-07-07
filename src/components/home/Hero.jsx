import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Velmora Fine Jewelry - Elegant gold jewelry"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/50 via-espresso-900/30 to-espresso-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-slide-up delay-100">
          Demi-fine jewelry designed for the modern woman. Timeless elegance, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-hover transition-all duration-300 hover:shadow-elevated animate-slide-up delay-200"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
