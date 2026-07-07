import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function CategoryTile({ category, delay }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <Link
      to={`/collection?category=${category.id}`}
      ref={ref}
      className={`group block relative overflow-hidden animate-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
      </div>
      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-2xl lg:text-3xl font-light text-ivory uppercase tracking-ultra-wide
                         opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0
                         transition-all duration-300">
          {category.name}
        </span>
      </div>
      {/* Default label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 group-hover:opacity-0 transition-opacity duration-300">
        <span className="font-serif text-xl lg:text-2xl font-light text-ivory uppercase tracking-extra-wide">
          {category.name}
        </span>
        <span className="font-sans text-xs text-ivory/70 mt-1 uppercase tracking-wide">
          {category.description}
        </span>
      </div>
    </Link>
  );
}

export function ShopByCategory() {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-charcoal">
            Find Your Look
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <CategoryTile key={cat.id} category={cat} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
