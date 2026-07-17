import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-container mx-auto px-6 lg:px-12 flex items-center">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
            Discover our collection of premium demi-fine jewelry. Each piece
            designed to elevate your everyday with timeless elegance.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-4 bg-champagne text-white font-medium text-sm uppercase tracking-wider hover:bg-antique-gold transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;