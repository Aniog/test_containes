import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl text-brand-charcoal font-light mb-3">
            Shop by Category
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-brand-cream"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h3 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide mb-2">
                    {cat.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-sans text-xs uppercase tracking-widest">Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}