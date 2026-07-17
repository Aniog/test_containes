import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Model wearing gold jewelry"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-velvet/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-main w-full">
          <div className="max-w-xl animate-slide-up">
            {/* Eyebrow */}
            <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-6">
              Demi-Fine Gold Jewelry
            </p>
            
            {/* Headline */}
            <h1 className="font-serif text-ivory mb-6" style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              lineHeight: 1.1, 
              letterSpacing: '0.02em' 
            }}>
              Crafted to be<br />
              <span className="italic text-champagne">Treasured</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-ivory/80 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
              Timeless pieces designed for everyday luxury. 
              18K gold plated, hypoallergenic, and made to last.
            </p>
            
            {/* CTA Button */}
            <Link
              to="/collection"
              className="inline-flex items-center gap-3 bg-champagne text-velvet px-8 py-4 text-sm font-medium tracking-widest uppercase rounded-sm transition-all duration-200 hover:bg-gold-light hover:shadow-button group"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-ivory/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-champagne to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
