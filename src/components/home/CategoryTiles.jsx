import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

const categoryImages = {
  earrings: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  necklaces: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  huggies: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
};

export function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-3">
            Shop by Category
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Find Your Style
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={categoryImages[category.id]}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-warmWhite tracking-extra-wide uppercase mb-2">
                  {category.name}
                </h3>
                <p className="font-sans text-xs text-warmWhite/70 tracking-wide mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-warmWhite opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans text-xs tracking-extra-wide uppercase">
                    Explore
                  </span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
