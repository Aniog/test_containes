import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[3/4] overflow-hidden bg-charcoal rounded-sm"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-warmgray-light/40 text-xs uppercase tracking-widest">{cat.name} Image</span>
              </div>
              <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-xl md:text-2xl text-white tracking-widest-xl uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-white text-xs tracking-[0.2em] uppercase font-medium group-hover:opacity-0 transition-opacity duration-300">
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
