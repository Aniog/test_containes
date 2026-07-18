import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-900 tracking-wide">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] bg-velvet-100 overflow-hidden rounded-sm"
          >
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              data-strk-bg-id={`cat-${cat.id}-bg`}
              data-strk-bg={`[cat-${cat.id}-desc] [cat-${cat.id}-name] gold jewelry`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/60 via-velvet-950/10 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
              <h3
                id={`cat-${cat.id}-name`}
                className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide"
              >
                {cat.name}
              </h3>
              <p
                id={`cat-${cat.id}-desc`}
                className="mt-1 text-white/70 text-sm tracking-wide"
              >
                {cat.description}
              </p>
              <span className="mt-4 text-xs tracking-widest uppercase text-white/80 border-b border-white/30 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}