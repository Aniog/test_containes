import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    { id: 'earrings', name: 'Earrings', query: 'earrings gold jewelry' },
    { id: 'necklaces', name: 'Necklaces', query: 'necklaces gold jewelry' },
    { id: 'huggies', name: 'Huggies', query: 'huggie earrings gold' },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">Explore</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-[var(--velmora-bg-secondary)]"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img="[shop-by-category-title] [velmora-jewelry]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 id={`${cat.id}-category-title`} className="velmora-heading text-2xl sm:text-3xl text-white tracking-wider mb-2">
                    {cat.name}
                  </h3>
                  <span className="text-xs tracking-widest uppercase text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
