import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

export default function ShopByCategory() {
  return (
    <section className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-ultra-wide uppercase text-gold-600 mb-3">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800">
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collections/all?category=${category.id}`}
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/20 to-transparent" />
              </div>

              {/* Content - Hidden by default, shown on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-serif text-3xl sm:text-4xl text-cream-50 mb-2 tracking-wide">
                  {category.name}
                </h3>
                <p className="text-cream-200 text-sm tracking-wide mb-4">
                  {category.description}
                </p>
                <span className="flex items-center gap-2 text-gold-400 text-sm tracking-wider uppercase">
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Label - Always visible, moves on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 group-hover:-translate-y-16">
                <h3 className="font-serif text-2xl text-cream-50 mb-1">
                  {category.name}
                </h3>
                <p className="text-cream-200/80 text-sm">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}