import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1920&q=80"
          alt="Model wearing gold jewelry"
          className="w-full h-full object-cover object-center"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-3xl mx-auto">
          {/* Decorative line */}
          <div className="w-12 h-px bg-[var(--color-accent)] mx-auto mb-8 animate-fadeIn" />
          
          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            Crafted to be Treasured
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            Demi-fine jewelry for moments that matter. Designed with intention, made to be worn every day.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fadeInUp" style={{ animationDelay: '600ms' }}>
            <Link to="/shop">
              <Button variant="accent" size="lg" className="px-10 py-4">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
