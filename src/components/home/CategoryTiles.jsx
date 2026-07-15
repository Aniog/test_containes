import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-page">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-charcoal-500 text-sm md:text-base max-w-md mx-auto">
            Find the perfect piece for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-velvet-100 overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-2xl text-white mb-1"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className="text-cream-100/70 text-sm mb-3"
                >
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}