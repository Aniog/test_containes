import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const tileConfig = {
  earrings: { imgId: 'cat-earrings-f8a1c2', titleId: 'cat-earrings-title', descId: 'cat-earrings-desc' },
  necklaces: { imgId: 'cat-necklaces-d3b4e5', titleId: 'cat-necklaces-title', descId: 'cat-necklaces-desc' },
  huggies: { imgId: 'cat-huggies-a6c7d8', titleId: 'cat-huggies-title', descId: 'cat-huggies-desc' },
};

export default function CategoryTiles() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => {
          const cfg = tileConfig[cat.id];
          return (
            <Link
              key={cat.id}
              to={`/shop/${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cfg.imgId}
                data-strk-img={`[${cfg.descId}] [${cfg.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-3xl md:text-4xl text-warmwhite font-semibold tracking-wide mb-1">
                  {cat.name}
                </h3>
                <p className="text-warmwhite/70 text-sm tracking-wide uppercase text-xs md:text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  {cat.description}
                </p>
              </div>
              <span className="sr-only" id={cfg.titleId}>{cat.name}</span>
              <span className="sr-only" id={cfg.descId}>{cat.description}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
