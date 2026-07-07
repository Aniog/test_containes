import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export function ShopByCategory() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Shop by Category</h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/20 to-transparent" />
              
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50 tracking-wide">
                  {category.name}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-cream-100/80 text-sm font-sans tracking-wider uppercase opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Shop Now</span>
                  <span className="w-4 h-px bg-current" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
