import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-[var(--color-bg)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[var(--color-accent)] text-sm tracking-[0.3em] uppercase mb-3">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text)]">
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-text)] tracking-[0.2em] mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {category.name.toUpperCase()}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                
                {/* Hover Line */}
                <div className="w-12 h-px bg-[var(--color-accent)] mt-4 transition-all duration-300 group-hover:w-20" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
