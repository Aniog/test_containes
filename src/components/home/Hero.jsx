import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Crafted to be Treasured
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Demi-fine jewelry designed for the moments that matter. Everyday elegance, forever lasting.
        </p>
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Link to="/shop" className="btn-secondary text-white border-white hover:bg-white hover:text-velmora-charcoal">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
