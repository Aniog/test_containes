import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryTiles = () => {
  return (
    <section className="section bg-[var(--color-primary)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Shop By Category
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)' }}>Find Your Style</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <h3 
                  className="text-white text-2xl md:text-3xl mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {category.name}
                </h3>
                <p 
                  className="text-white/70 text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {category.description}
                </p>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-gold)] transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
