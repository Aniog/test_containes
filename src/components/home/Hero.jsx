import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="max-w-xl animate-fade-in">
          <span className="inline-block font-sans text-xs tracking-extra-wide uppercase text-gold-400 mb-4">
            Handcrafted Excellence
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-warmWhite leading-tight mb-6">
            Crafted to be
            <span className="block italic text-gold-400">Treasured</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-warmWhite/80 mb-8 max-w-md leading-relaxed">
            Demi-fine jewelry for the modern woman. Each piece is designed to become a cherished part of your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop">
              <Button variant="gold" size="lg">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-warmWhite text-warmWhite hover:bg-warmWhite hover:text-charcoal">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-warmWhite/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-warmWhite/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
