import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-900">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative aspect-[4/3] md:aspect-[4/5] bg-warm-100 rounded-sm overflow-hidden"
            >
              <img
                alt={cat.name}
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-950/70 via-warm-950/10 to-transparent transition-opacity duration-300 group-hover:from-warm-950/80" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-10">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wide"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className="text-sm text-white/70 mt-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}