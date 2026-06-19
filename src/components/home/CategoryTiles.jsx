import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', slug: 'earrings', imgId: 'cat-earrings', desc: 'Sculptural studs, drops & cuffs' },
  { name: 'Necklaces', slug: 'necklaces', imgId: 'cat-necklaces', desc: 'Pendants, chains & layering pieces' },
  { name: 'Huggies', slug: 'huggies', imgId: 'cat-huggies', desc: 'Everyday hoops with a luxe finish' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.28em] uppercase text-ink-400 mb-3">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] bg-warm-100 overflow-hidden"
            >
              <img
                data-strk-img-id={`${cat.imgId}-tile`}
                data-strk-img={`[cat-name-${cat.slug}] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3
                  id={`cat-name-${cat.slug}`}
                  className="font-serif text-2xl md:text-3xl tracking-[0.14em] uppercase mb-2"
                >
                  {cat.name}
                </h3>
                <p className="font-sans text-xs text-white/70 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}