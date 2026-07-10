import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth',
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
        {/* Overlay gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-in-up">
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          Demi-fine jewelry that celebrates life's moments. 
          Hypoallergenic, ethically crafted, designed for you.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-velmora-bg-dark px-10 py-4 text-xs tracking-widest uppercase font-medium hover:bg-velmora-accent hover:text-white transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
