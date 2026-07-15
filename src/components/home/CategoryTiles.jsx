import { Link } from 'react-router-dom';

const tiles = [
  {
    id: 'earrings',
    title: 'Earrings',
    slug: 'earrings',
    query: 'gold earrings editorial',
  },
  {
    id: 'necklaces',
    title: 'Necklaces',
    slug: 'necklaces',
    query: 'gold necklace editorial',
  },
  {
    id: 'huggies',
    title: 'Huggies',
    slug: 'huggies',
    query: 'gold huggie earrings',
  },
];

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <p className="text-center text-[10px] tracking-[0.3em] uppercase text-warm-400 mb-3">
        Explore
      </p>
      <h2 className="section-title text-center mb-14">Shop by Category</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={`/shop?category=${tile.slug}`}
            className="group relative aspect-[4/5] bg-cream-300 overflow-hidden"
          >
            <img
              alt={tile.title}
              data-strk-img-id={`category-tile-${tile.id}`}
              data-strk-img={`[category-tile-name-${tile.id}] ${tile.query}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-warm-900/20 group-hover:bg-warm-900/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`category-tile-name-${tile.id}`}
                className="font-serif text-3xl md:text-4xl text-cream tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {tile.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}