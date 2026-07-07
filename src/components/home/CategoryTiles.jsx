import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function CategoryTiles() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl text-warm-dark mb-3">Shop by Category</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/collection?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm block"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-transform duration-300 group-hover:scale-105">
                  <h3 className="font-serif text-3xl lg:text-4xl text-white tracking-wide mb-2">
                    {cat.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-gold transition-colors">
                    Shop Now <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}