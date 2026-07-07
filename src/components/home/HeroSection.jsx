import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop"
          alt="Gold jewelry editorial"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-ivory/70 font-sans text-sm tracking-extra-wide uppercase mb-4 animate-fade-in">
            Demi-Fine Collection
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-6 animate-fade-in stagger-1">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>

          {/* Subhead */}
          <p className="text-ivory/80 font-light text-lg sm:text-xl max-w-md mb-8 leading-relaxed animate-fade-in stagger-2">
            Timeless 18K gold plated jewelry designed for everyday luxury. 
            Pieces that become part of your story.
          </p>

          {/* CTA */}
          <div className="animate-fade-in stagger-3">
            <Link to="/collection">
              <Button variant="accent" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ivory/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-ivory/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
