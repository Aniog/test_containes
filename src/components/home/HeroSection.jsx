import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/50 to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="max-w-xl">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 animate-slide-up"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: 1.1,
            }}
          >
            Crafted to be Treasured
          </h1>
          
          <p className="text-lg text-white/80 mb-8 max-w-md animate-slide-up" style={{ animationDelay: '150ms' }}>
            Demi-fine jewelry for the moments worth remembering. 18K gold plated pieces designed for everyday elegance.
          </p>

          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Link to="/shop">
              <Button size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
