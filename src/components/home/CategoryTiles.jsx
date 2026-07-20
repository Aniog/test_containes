import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding section-padding-y bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              <img
                data-strk-img-id={`cat-${category.id}`}
                data-strk-img={`[${category.id}-cat-name] gold jewelry collection display elegant`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-950/20 group-hover:bg-charcoal-950/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3
                  className="font-serif text-3xl md:text-4xl text-cream-50 tracking-ultra-wide uppercase mb-2"
                  id={`${category.id}-cat-name`}
                >
                  {category.name}
                </h3>
                <p className="font-sans text-xs text-cream-200 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {category.description}
                </p>
                <span className="mt-4 font-sans text-xs tracking-ultra-wide uppercase text-cream-50 border-b border-cream-50/50 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
