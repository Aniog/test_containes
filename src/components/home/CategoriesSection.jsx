import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoriesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--warm-stone)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm tracking-[0.2em] text-[var(--champagne-gold)] mb-3"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            EXPLORE
          </p>
          <h2
            className="text-3xl md:text-4xl text-[var(--deep-espresso)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-espresso)]/90 via-[var(--deep-espresso)]/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3
                  className="text-2xl md:text-3xl text-[var(--ivory-cream)] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {category.name}
                </h3>
                <p className="text-sm text-[var(--warm-stone)] mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[var(--champagne-gold)] tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
