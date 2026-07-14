import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Timeless demi-fine jewelry designed for the moments that matter. 18K gold plating, hypoallergenic, made to last.
        </p>
        <Link
          to="/collections/all"
          className="inline-block px-10 py-4 bg-accent text-white font-medium tracking-wide hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Shop the Collection
        </Link>
      </div>
      
      {/* Scroll Indicator */}
      <a
        href="#bestsellers"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}

export default HeroSection;
