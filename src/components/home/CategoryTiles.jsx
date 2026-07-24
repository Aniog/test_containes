import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            Shop by Category
          </h2>
          <p className="mt-3 text-warm-gray text-sm max-w-md mx-auto">
            Find your perfect piece across our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/collection"
              className="group relative overflow-hidden bg-cream aspect-[4/5]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-sm mt-1 tracking-[0.1em] uppercase">
                    {category.count} {category.count === 1 ? 'Piece' : 'Pieces'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}