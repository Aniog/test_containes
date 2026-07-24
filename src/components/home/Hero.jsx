import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Elegant gold jewelry"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-overline text-gold mb-6 animate-fade-in">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="heading-display text-white mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Crafted to be Treasured
          </h1>
          <p className="text-body-lg text-white/80 mb-10 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            Handcrafted 18K gold-plated pieces designed for everyday elegance. 
            Each design tells a story of quiet luxury and timeless beauty.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" strokeWidth={1.5} />
      </button>
    </section>
  );
}
