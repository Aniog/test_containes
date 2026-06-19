import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-600 text-xs tracking-widest uppercase font-medium mb-3">
            Browse by Category
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-400/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream-200"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <span className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}