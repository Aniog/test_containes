import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-gold mb-3 block">
            Shop By Category
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Find Your Style
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="relative group aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/40 transition-opacity duration-300 group-hover:bg-charcoal/50" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl md:text-3xl tracking-wide mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
