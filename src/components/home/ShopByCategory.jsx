import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function ShopByCategory() {
  return (
    <section className="bg-ivory py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-eyebrow text-gold font-medium">
            By Silhouette
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-espresso leading-tight">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden block bg-cream"
            >
              <img
                alt={cat.name}
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={`[cat-tile-${cat.id}-name] [cat-tile-${cat.id}-desc] ${cat.queryHint}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 md:p-8 text-ivory">
                <h3
                  id={`cat-tile-${cat.id}-name`}
                  className="font-serif text-3xl md:text-4xl font-light"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-tile-${cat.id}-desc`}
                  className="mt-1.5 text-sm text-ivory/85 max-w-[80%]"
                >
                  {cat.description}
                </p>
                <span className="mt-5 inline-block text-[11px] uppercase tracking-eyebrow border-b border-ivory/70 pb-0.5 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                  Shop {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
