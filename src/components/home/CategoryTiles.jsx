import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-section-mobile lg:py-section bg-velmora-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-light animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-black/30 group-hover:bg-velmora-black/40 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl md:text-4xl text-velmora-cream tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.name}
                </span>
              </div>

              {/* Always visible label on mobile */}
              <div className="absolute bottom-6 left-6 md:hidden">
                <span className="font-serif text-2xl text-velmora-cream tracking-widest uppercase">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}