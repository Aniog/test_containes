import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <h1 
          className="heading-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Crafted to be Treasured
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
          Discover demi-fine jewelry that celebrates life's special moments. 
          18K gold plated pieces designed for everyday elegance.
        </p>
        <Link to="/shop">
          <Button variant="primary" size="lg">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
