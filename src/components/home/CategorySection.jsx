import { Link } from 'react-router-dom';
import { CategoryPlaceholder } from '../ui/ProductImagePlaceholder';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & ear cuffs',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & collars',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Hoops that hug the ear',
  },
];

export function CategorySection() {
  return (
    <section className="py-16 md:py-24 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray-900">
            Shop by Category
          </h2>
          <div className="divider-gold w-12 mx-auto mt-4" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] md:aspect-[3/4] overflow-hidden"
            >
              {/* Background image */}
              <CategoryPlaceholder category={category.id} className="absolute inset-0 w-full h-full" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-rich-black/30 group-hover:bg-rich-black/50 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-ivory mb-2 group-hover:scale-105 transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-warm-ivory/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <span className="mt-6 text-xs font-medium tracking-wider uppercase text-champagne opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Shop Now →
                </span>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-warm-ivory/20 group-hover:border-champagne/50 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
