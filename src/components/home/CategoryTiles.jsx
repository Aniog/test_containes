import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[11px] tracking-[0.2em] uppercase text-velmora-muted mb-3">Explore</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-black">Shop by Category</h2>
        <div className="w-12 h-px bg-velmora-gold/60 mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => {
          const imgId = `cat-img-${cat.id}`;
          const nameId = `cat-name-${cat.id}`;
          const descId = `cat-desc-${cat.id}`;
          return (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative overflow-hidden block aspect-[4/3]"
            >
              <img
                data-strk-img-id={imgId}
                data-strk-img={`[${descId}] [${nameId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-10">
                <h3 id={nameId} className="font-serif text-2xl md:text-3xl text-white tracking-wide transition-all duration-300 group-hover:-translate-y-1">
                  {cat.name}
                </h3>
                <p
                  id={descId}
                  className="text-white/70 text-xs md:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                >
                  {cat.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
