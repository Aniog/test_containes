import { Link } from 'react-router-dom';
import { useRef } from 'react';

const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings collection elegant display warm lighting' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace collection elegant display warm lighting' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings collection elegant display warm lighting' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold-500 text-xs uppercase tracking-mega-wide font-medium mb-3">
            Browse by category
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal-950">
            Shop by Category
          </h2>
          <div className="divider-hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              <img
                data-strk-img-id={`category-tile-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal-950/20 group-hover:bg-charcoal-950/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-10">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-2">
                    {cat.label}
                  </h3>
                  <span className="text-cream-200 text-xs uppercase tracking-ultra-wide font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-cream-300 pb-0.5">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
