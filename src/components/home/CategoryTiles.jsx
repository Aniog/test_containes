import { Link } from 'react-router-dom';

const categoryTiles = [
  {
    name: 'Earrings',
    slug: 'earrings',
    imgId: 'cat-earrings-x1y2z3',
    desc: 'Studs · Drops · Cuffs',
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    imgId: 'cat-necklaces-a4b5c6',
    desc: 'Chains · Pendants · Chokers',
  },
  {
    name: 'Huggies',
    slug: 'huggies',
    imgId: 'cat-huggies-m7n8o9',
    desc: 'Classic · Chunky · Mini',
  },
];

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs tracking-[0.2em] uppercase text-taupe mb-3">
          Discover
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-soft-black font-normal">
          Shop by Category
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categoryTiles.map((tile) => (
          <Link
            key={tile.slug}
            to={`/shop?category=${tile.slug}`}
            className="group relative aspect-[4/5] bg-sand overflow-hidden rounded-sm"
          >
            <img
              data-strk-img-id={tile.imgId}
              data-strk-img={`[cat-tile-name-${tile.slug}] gold jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={tile.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soft-black/50 via-soft-black/10 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center">
              <span
                id={`cat-tile-name-${tile.slug}`}
                className="hidden"
              >
                {tile.name}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-cream tracking-[0.12em] uppercase mb-2">
                {tile.name}
              </h3>
              <p className="text-xs text-sand/70 tracking-wide">{tile.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
