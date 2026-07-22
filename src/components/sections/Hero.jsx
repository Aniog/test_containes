import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-primary/70 via-brand-bg-primary/50 to-brand-bg-primary/80" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10 text-center pt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-text-primary leading-tight tracking-[0.02em] animate-fade-up">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-text-secondary max-w-xl mx-auto leading-relaxed animate-fade-up stagger-1">
            Timeless demi-fine jewelry designed for the modern woman. 
            Elevate every moment with pieces that feel uniquely yours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-2">
            <Link to="/collection">
              <Button size="lg" variant="secondary">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/collection?category=earrings">
              <Button size="lg" variant="ghost" className="text-brand-text-primary hover:text-brand-gold">
                Explore Earrings
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-text-tertiary rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-brand-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
