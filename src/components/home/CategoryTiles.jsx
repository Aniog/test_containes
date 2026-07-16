import { Link } from 'react-router-dom';

const tiles = [
  {
    id: 'earrings',
    label: 'Earrings',
    slug: 'earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    slug: 'necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    slug: 'huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <h2 className="font-serif text-3xl lg:text-4xl text-center mb-2 text-charcoal">
        Shop by Category
      </h2>
      <p className="text-center text-stone text-sm mb-12 tracking-wide">
        Find your perfect piece
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={`/shop/${tile.slug}`}
            className="group block relative aspect-[4/5] bg-sand/20 overflow-hidden"
          >
            <img
              data-strk-img-id={`cat-${tile.id}`}
              data-strk-img={`[cat-label-${tile.id}] gold jewelry on dark background`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={tile.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-300 flex items-center justify-center">
              <span
                id={`cat-label-${tile.id}`}
                className="font-serif text-2xl lg:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {tile.label}
              </span>
            </div>
            {/* Always visible label on mobile */}
            <div className="md:hidden absolute inset-0 bg-charcoal/30 flex items-center justify-center">
              <span className="font-serif text-2xl text-white tracking-wide">{tile.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
