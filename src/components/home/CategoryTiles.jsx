import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

const gradients = [
  'from-vel-deep/70 via-vel-deep/40 to-transparent',
  'from-vel-deep/60 via-vel-deep/30 to-transparent',
  'from-vel-deep/70 via-vel-deep/50 to-transparent',
];

const accentGradients = [
  'from-vel-gold/30 to-vel-gold/5',
  'from-vel-gold/25 to-vel-gold/5',
  'from-vel-gold/35 to-vel-gold/5',
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-vel-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="font-serif italic text-vel-gold text-sm tracking-wider mb-3">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-vel-deep tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-vel-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.id}`}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden bg-vel-light"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${gradients[i]} z-10`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${accentGradients[i]}`} />

              {/* Jewelry icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {i === 0 && (
                  <svg viewBox="0 0 100 140" className="w-24 text-white">
                    <ellipse cx="50" cy="40" rx="22" ry="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="50" cy="55" r="5" fill="currentColor" />
                    <line x1="50" y1="70" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                )}
                {i === 1 && (
                  <svg viewBox="0 0 100 140" className="w-24 text-white">
                    <path d="M50 20 Q25 60 50 110 Q75 60 50 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="50" cy="105" r="7" fill="currentColor" />
                  </svg>
                )}
                {i === 2 && (
                  <svg viewBox="0 0 100 140" className="w-24 text-white">
                    <circle cx="50" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="60" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                )}
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="font-serif text-xl md:text-2xl text-white tracking-wide">
                  {cat.name}
                </span>
                <span className="inline-flex items-center gap-1 text-white/60 text-xs mt-2 group-hover:text-vel-gold transition-colors">
                  Shop Now <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
