import { Link } from 'react-router-dom';

const categories = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings elegant close up jewelry' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace elegant close up jewelry' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie earrings close up jewelry' },
];

export default function ShopByCategory() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest-xl uppercase text-gold-500 mb-3 font-medium">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800" style={{ fontWeight: 400 }}>
            Shop by Category
          </h2>
          <div className="hairline max-w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4]"
            >
              <img
                data-strk-img-id={`category-tile-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/50 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-cream-50 text-2xl md:text-3xl tracking-wider mb-2" style={{ fontWeight: 400 }}>
                    {cat.name}
                  </p>
                  <span className="text-cream-100/70 text-xs tracking-widest-xl uppercase border-b border-cream-100/40 pb-0.5 group-hover:border-cream-100/70 transition-colors">
                    Shop Now
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
