import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    imgId: 'cat-earrings-home',
    desc: 'Delicate drops and bold hoops',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    imgId: 'cat-necklaces-home',
    desc: 'Layer-ready pendant chains',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
    imgId: 'cat-huggies-home',
    desc: 'Everyday essential huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-fg mb-3">
            Shop by Category
          </h2>
          <p className="text-sm text-muted-fg tracking-wide">
            Find your signature piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-${cat.id}-name] [cat-${cat.id}-desc] gold jewelry`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  id={`cat-${cat.id}-desc`}
                  className="text-white/60 text-xs tracking-wide mb-1 hidden"
                >
                  {cat.desc}
                </span>
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wide"
                >
                  {cat.name}
                </h3>
                <span className="mt-3 text-white text-[10px] font-medium tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white pb-0.5">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
