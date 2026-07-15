import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Velmora jewelry on model"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/90 via-ivory/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-xl">
          <span className="inline-block font-sans text-sm tracking-widest text-gold uppercase mb-4">
            Demi-Fine Collection
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight mb-6">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-lg text-charcoal/70 mb-8 leading-relaxed">
            Elevate everyday moments with our 18K gold-plated jewelry. 
            Designed for the modern woman who values quality, craftsmanship, 
            and timeless elegance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop">
              <Button variant="primary" size="lg">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="lg">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
