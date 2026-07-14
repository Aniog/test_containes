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
          backgroundImage: `url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          style={{ 
            fontFamily: 'var(--font-serif)',
            textShadow: '0 2px 40px rgba(0,0,0,0.3)'
          }}
        >
          Crafted to be Treasured
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto mb-8 font-light">
          Demi-fine jewelry designed for the modern woman. Timeless elegance, everyday luxury.
        </p>

        <Link 
          to="/shop"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1C1917] text-xs font-medium tracking-[0.15em] uppercase rounded transition-all duration-300 hover:bg-[#C4A962] hover:text-white hover:-translate-y-0.5"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
