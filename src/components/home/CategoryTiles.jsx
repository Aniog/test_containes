import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { StockBg } from '@/lib/images';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-espresso">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[3/4] md:aspect-[4/5] rounded overflow-hidden"
            >
              <StockBg
                id={`category-${cat.id}`}
                query={`[category-label-${cat.id}]`}
                ratio="3x4"
                width={800}
                className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <span id={`category-label-${cat.id}`} className="sr-only">
                {cat.label} gold jewelry collection
              </span>
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-xl md:text-2xl tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  {cat.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
