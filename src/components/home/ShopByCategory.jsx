import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

export function ShopByCategory() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Shop by Category
          </h2>
          <p className="text-warm-gray max-w-lg mx-auto">
            Find your perfect piece. From delicate earrings to statement necklaces.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-charcoal"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 
                  className="heading-serif text-2xl md:text-3xl mb-2 text-center"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm mb-4 text-center">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-button opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
