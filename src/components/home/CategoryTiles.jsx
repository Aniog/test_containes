import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold mb-3">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-espresso tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-warmgray overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gold-light/30 to-warmgray flex items-center justify-center">
                <span className="font-serif text-6xl text-gold/20">{cat.name.charAt(0)}</span>
              </div>
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl font-light text-cream tracking-wide"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className="text-cream/70 text-xs tracking-[0.15em] uppercase mt-2"
                >
                  {cat.description}
                </p>
                <span className="mt-6 w-8 h-px bg-cream/50 group-hover:w-16 transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}