import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function ShopByCategory() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="label text-gold-500 mb-3">Browse by style</p>
          <h2 className="heading-2 text-charcoal-900">Shop by Category</h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-charcoal-900"
            >
              {/* Background image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-85"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="heading-3 text-cream-50 mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {cat.name}
                </h3>
                <p className="body-text-sm text-cream-200/70 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-ultra-wide text-gold-400 border border-gold-400/40 px-4 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-gold-400">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
