import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[var(--color-background)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <div className="max-w-2xl mx-auto">
          {/* Subhead */}
          <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-white/90 mb-4 animate-fade-in">
            Demi-Fine Gold Jewelry
          </p>
          
          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Crafted to be Treasured
          </h1>
          
          {/* Subheadline */}
          <p className="font-sans text-base md:text-lg text-white/80 mb-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Delicate designs made with 18K gold plating, crafted for everyday luxury and moments that matter.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link to="/shop">
              <Button variant="primary" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
