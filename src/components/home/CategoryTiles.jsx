import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-h2 lg:text-h3 text-charcoal">Shop by Category</h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-h3 text-white font-medium">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-sm font-sans mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {category.count} pieces
                  </p>
                </div>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-4 border-2 border-white/0 group-hover:border-white/30 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}