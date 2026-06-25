import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-gold)] text-sm tracking-[0.3em] uppercase mb-3">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className={`group relative aspect-[4/5] overflow-hidden ${
                index === 0 ? 'md:row-span-2 md:aspect-auto' : ''
              }`}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-ivory)] mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-[var(--color-sand)] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-xs text-[var(--color-gold-light)] tracking-wider uppercase">
                  Explore
                  <span className="ml-2 w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
