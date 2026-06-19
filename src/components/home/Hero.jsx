import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/40 via-charcoal-900/30 to-charcoal-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Eyebrow */}
          <p className="font-sans text-xs sm:text-sm tracking-extra-wide uppercase text-cream-200 mb-6">
            Demi-Fine Gold Jewelry
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 leading-tight mb-6 animate-slide-up">
            Crafted to be
            <span className="block italic font-light">Treasured</span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-base sm:text-lg text-cream-200/90 max-w-xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Hand-finished 18K gold plated pieces designed for everyday elegance. 
            Quality jewelry that feels luxurious without the luxury price tag.
          </p>

          {/* CTA Button */}
          <Link
            to="/shop"
            className="inline-block bg-cream-50 text-charcoal-900 px-10 py-4 font-sans text-xs font-medium tracking-wider uppercase hover:bg-cream-100 transition-colors duration-300 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-200/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream-200/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
