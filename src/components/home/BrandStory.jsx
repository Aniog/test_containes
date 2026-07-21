import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const BrandStory = () => {
  return (
    <section className="section bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute top-6 left-6 right-6 bottom-6 border border-[var(--color-gold)] opacity-30 pointer-events-none" />
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4 block">
              Our Story
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6 leading-tight">
              Where Quiet Luxury Meets Lasting Quality
            </h2>
            
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that everyone deserves to wear beautiful jewelry without compromise. We craft pieces that feel special, not disposable.
              </p>
              <p>
                Each design begins with an obsession over detail — the way light catches a curve, the weight of gold against skin, the perfect clasp that lasts years. We source only the finest materials: 18K gold plating over hypoallergenic metals, crystals that actually sparkle.
              </p>
              <p>
                The result is jewelry you can wear every day and treasure forever.
              </p>
            </div>
            
            <div className="mt-10">
              <Link to="/about">
                <Button variant="secondary">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
