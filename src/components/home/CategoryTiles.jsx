import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-charcoal">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl lg:text-4xl text-velmora-ivory tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {category.name.toUpperCase()}
                </span>
              </div>
              
              {/* Border on hover */}
              <div className="absolute inset-4 border-2 border-velmora-ivory/0 group-hover:border-velmora-ivory/50 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}