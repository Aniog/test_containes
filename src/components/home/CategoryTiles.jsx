import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useIntersectionObserver } from '@/hooks/useScrollPosition';

export function CategoryTiles() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="section-padding bg-ivory">
      <div className="container-wide">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Explore</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/collection?category=${category.slug}`}
              className={`group relative aspect-[4/5] overflow-hidden rounded-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-charcoal/10 group-hover:from-charcoal/80 transition-all duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ivory/70 group-hover:text-gold transition-colors">
                    Shop Now
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-ivory/20 group-hover:border-gold/50 transition-colors duration-300 rounded-lg pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
