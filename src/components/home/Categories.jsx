import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-mega-wide text-brand-500 mb-3">
            Explore
          </p>
          <h2 className="heading-section">Shop by Category</h2>
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={category.src}
                alt={`${category.name} collection`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso-950/30 group-hover:bg-espresso-950/50 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide mb-2">
                  {category.name}
                </span>
                <span className="font-sans text-xs text-warm-200 uppercase tracking-ultra-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
                  {category.description}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
