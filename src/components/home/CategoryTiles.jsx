import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-gold-500 text-xs uppercase tracking-extra-wide mb-3">
          Shop by Category
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-800">
          Find Your Style
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-warm-900/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                {category.name}
              </h3>
              <p className="text-white/70 text-sm mb-4 max-w-xs">
                {category.description}
              </p>
              <span className="inline-flex items-center gap-2 text-gold-300 text-xs uppercase tracking-extra-wide group-hover:gap-3 transition-all duration-300">
                Shop Now
                <ArrowRight size={14} strokeWidth={2} />
              </span>
            </div>

            {/* Border on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/50 transition-colors duration-300" />
          </Link>
        ))}
      </div>
    </section>
  );
}
