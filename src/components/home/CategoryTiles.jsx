import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">Shop by Category</h2>
          <p className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>
            Find your perfect piece
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative overflow-hidden aspect-[3/4]"
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
                className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"
              />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    className="font-serif text-2xl md:text-3xl text-white mb-2 tracking-widest"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                  >
                    {category.name}
                  </h3>
                  <span
                    className="font-sans text-xs text-white/80 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}
                  >
                    Shop Now
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