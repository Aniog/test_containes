import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 
              className="font-serif text-3xl md:text-4xl mb-6"
              style={{ fontFamily: 'var(--font-family-serif)' }}
            >
              Our Story
            </h2>
            <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
              Founded with a passion for creating jewelry that transcends trends, 
              Velmora represents the perfect balance between luxury and accessibility. 
              Each piece is thoughtfully designed to become a cherished part of your personal story.
            </p>
            <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
              We believe in jewelry that doesn't just accessorize — it empowers. 
              Our demi-fine collections are crafted to be worn every day, 
              becoming companions to your most treasured moments.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider border-b border-[var(--color-text)] pb-1 hover:opacity-70 transition-opacity"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;