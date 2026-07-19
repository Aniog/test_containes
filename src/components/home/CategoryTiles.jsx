import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section-spacing bg-[var(--color-secondary)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm text-[var(--color-muted)] tracking-widest uppercase">
            Curated Selection
          </span>
          <h2 className="heading-serif text-4xl md:text-5xl mt-3">
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/collections?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-[var(--color-secondary-dark)]"
            >
              {/* Background Image */}
              <img 
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[var(--color-primary)]/30 group-hover:bg-[var(--color-primary)]/50 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="heading-serif text-3xl md:text-4xl text-white">
                    {category.name}
                  </h3>
                  <span className="inline-block mt-3 text-sm text-white/80 tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}