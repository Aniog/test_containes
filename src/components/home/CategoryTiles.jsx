import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-muted mb-3">Explore</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to="/shop"
            className="relative aspect-[4/5] overflow-hidden group bg-gradient-to-br from-[#C5B8A6] to-[#9A8B78]"
          >
            <img
              data-strk-img-id={`cat-${cat.id}`}
              data-strk-img={`${cat.name} gold jewelry elegant editorial`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-white text-xl md:text-2xl tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {cat.name}
              </span>
            </div>
            <div className="absolute bottom-5 left-5">
              <span className="font-serif text-white text-sm tracking-widest uppercase">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
