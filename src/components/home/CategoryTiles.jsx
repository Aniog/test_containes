import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF9F7]">
      <div className="container-app">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Shop by Category</h2>
          <p className="mt-4 text-[#6B6560]">
            Discover our curated collections
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-[#E8DCC4]"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A1918]/30 group-hover:bg-[#1A1918]/40 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-3xl md:text-4xl text-[#FAF9F7] mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-[#FAF9F7]/70">
                  {category.count} {category.count === 1 ? 'piece' : 'pieces'}
                </p>
                
                {/* Shop Now Link */}
                <span className="mt-6 text-sm font-medium text-[#FAF9F7] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}