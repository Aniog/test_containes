import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/50 to-charcoal-900/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <p className="eyebrow text-white/80 mb-4">Fine Jewelry, Reimagined</p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-4xl mx-auto">
            Crafted to be<br className="hidden sm:block" /> Treasured
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light">
            Timeless demi-fine pieces designed for the moments that matter most. 
            18K gold-plated jewelry that's accessible, elegant, and built to last.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/shop">
              <Button size="large" className="bg-white text-charcoal-800 hover:bg-cream-100 border-0">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="large" className="border-white/50 text-white hover:bg-white hover:text-charcoal-800">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
