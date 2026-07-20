import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-lg">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              Crafted to be
              <span className="italic font-light block">Treasured</span>
            </h1>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-white/80 font-light leading-relaxed max-w-md">
              Demi-fine gold jewelry, handcrafted for the modern woman. 
              Every piece tells a story of quiet elegance.
            </p>
            <div className="mt-8 md:mt-10">
              <Link to="/shop">
                <Button variant="primary" size="lg" className="text-xs md:text-sm">
                  Shop the Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}