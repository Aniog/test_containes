import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="font-serif text-3xl md:text-4xl mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
          >
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
              style={{ backgroundColor: 'var(--color-ivory)' }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
                style={{
                  background: 'linear-gradient(to top, rgba(26,24,22,0.7) 0%, rgba(26,24,22,0.2) 100%)',
                }}
              />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3
                  className="font-serif text-2xl md:text-3xl mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {category.name}
                </h3>
                <p className="text-sm opacity-80 text-center">
                  {category.description}
                </p>
                <span
                  className="mt-4 text-xs tracking-widest uppercase opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}