import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">Shop by Category</h2>
          <p className="text-taupe text-sm mt-3 font-sans">
            Find your perfect piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">{category.name}</h3>
                  <p className="text-white/70 text-xs uppercase tracking-wider font-sans">
                    {category.count} Pieces
                  </p>
                </div>
              </div>
              {/* Visible label on mobile */}
              <div className="absolute bottom-6 left-6 md:hidden">
                <h3 className="font-serif text-xl text-white">{category.name}</h3>
                <p className="text-white/70 text-xs uppercase tracking-wider mt-1 font-sans">
                  {category.count} Pieces
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}