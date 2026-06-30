import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[1000px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Tagline */}
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-white/80 mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-base md:text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Timeless 18K gold-plated pieces designed for the modern woman. 
          Effortless elegance for every occasion.
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link
            to="/shop"
            className="inline-block bg-gold text-white font-sans text-sm uppercase tracking-wider px-10 py-4 rounded-sm transition-all duration-300 hover:bg-gold-hover hover:shadow-lg"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
