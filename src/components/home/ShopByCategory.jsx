import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

export default function ShopByCategory() {
  return (
    <section className="py-16 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold-600 text-xs uppercase tracking-widestplus font-medium">Browse by</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-light mt-3 tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-400/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-ink-100"
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                cat.id === 'earrings'
                  ? 'from-gold-200/30 via-ink-100 to-ink-200'
                  : cat.id === 'necklaces'
                  ? 'from-gold-200/20 via-ink-200 to-ink-300'
                  : 'from-gold-300/20 via-ink-100 to-ink-200'
              } group-hover:scale-105 transition-transform duration-700`} />

              {/* Inner ring decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-gold-400/20 group-hover:border-gold-400/40 transition-all duration-500" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent flex items-end p-6">
                <div className="transform group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-2xl sm:text-3xl text-cream-50 font-light tracking-wide">
                    {cat.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-cream-50/60 group-hover:text-gold-400 transition-colors text-xs uppercase tracking-widest font-medium">
                    <span>Shop Now</span>
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
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