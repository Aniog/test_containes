import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-sans text-xs uppercase tracking-ultra text-velmora-gold">
            Curated Categories
          </p>
          <h2 className="font-serif text-3xl text-velmora-charcoal md:text-4xl">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-sand md:aspect-[4/5]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/30 transition-opacity duration-300 group-hover:bg-velmora-charcoal/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="translate-y-2 font-serif text-2xl uppercase tracking-widest text-velmora-cream opacity-0 transition-all duration-500 ease-velmora group-hover:translate-y-0 group-hover:opacity-100 md:text-3xl">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}