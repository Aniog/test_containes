import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl mb-3"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Shop by Category
          </h2>
          <p
            className="text-sm md:text-base"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Discover your perfect piece
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.3)'
                }}
              />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                >
                  {category.name.toUpperCase()}
                </span>
              </div>

              {/* Hover Border Effect */}
              <div
                className="absolute inset-4 border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}