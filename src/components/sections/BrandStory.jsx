import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-brand-bg-primary">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-brand-gold/30 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold mb-4 block">
              Our Story
            </span>
            <h2 className="serif-heading text-3xl md:text-4xl text-brand-text-primary leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <p className="mt-6 text-brand-text-secondary leading-relaxed">
              Founded with a passion for accessible luxury, Velmora was born from the belief 
              that every woman deserves to feel extraordinary. We craft demi-fine jewelry 
              that balances timeless elegance with modern sensibility.
            </p>
            <p className="mt-4 text-brand-text-secondary leading-relaxed">
              Each piece is thoughtfully designed and meticulously crafted using premium 
              materials — 18K gold plating, hypoallergenic metals, and carefully selected 
              stones that catch the light beautifully.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-brand-gold hover:text-brand-gold-hover transition-colors group"
            >
              Discover Our Journey
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
