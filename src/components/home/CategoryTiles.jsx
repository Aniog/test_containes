import { Link } from 'react-router-dom';

const tiles = [
  {
    name: 'Earrings',
    slug: 'earrings',
    query: 'elegant gold earrings flat lay editorial warm lighting dark background',
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    query: 'gold necklace on silk fabric editorial photography luxury',
  },
  {
    name: 'Huggies',
    slug: 'huggies',
    query: 'gold huggie hoop earrings editorial on ear close up',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 px-6 bg-warm-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-subheading mb-3">Discover</p>
          <h2 className="section-heading">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((tile, i) => (
            <Link
              key={tile.slug}
              to={`/shop?category=${tile.name}`}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden"
            >
              <div
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`cat-tile-${i}`}
                data-strk-img={`[cat-name-${i}] ${tile.query}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 bg-espresso-900/25 group-hover:bg-espresso-900/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-name-${i}`}
                  className="font-serif text-2xl md:text-3xl text-cream tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                >
                  {tile.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
