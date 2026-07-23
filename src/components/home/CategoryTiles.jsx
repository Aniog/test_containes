import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-velvet-900">
          Shop by Category
        </h2>
        <hr className="hairline-divider w-16 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden bg-velvet-100"
          >
            <img
              alt={cat.name}
              data-strk-img-id={`cat-${cat.id}`}
              data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span id={`cat-name-${cat.id}`} className="hidden">{cat.name}</span>
            <span id={`cat-desc-${cat.id}`} className="hidden">{cat.desc}</span>

            <div className="absolute inset-0 bg-velvet-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
              <span className="font-serif text-2xl tracking-wider text-white">{cat.name}</span>
              <span className="mt-2 text-sm text-white/80 font-light tracking-wide">{cat.desc}</span>
            </div>

            {/* Always-visible label on mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-velvet-900/70 to-transparent md:hidden">
              <span className="font-serif text-lg tracking-wider text-white">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
