import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-medium uppercase tracking-ultra-wide text-velmora-gold mb-3 block">
            Curated Collections
          </span>
          <h2 className="heading-section">Shop by Category</h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className={`group relative aspect-[4/5] rounded-lg overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-velmora-charcoal/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm transform transition-transform duration-300 delay-75 group-hover:-translate-y-2">
                  {category.description}
                </p>
                <span className="mt-4 text-xs font-medium uppercase tracking-ultra-wide text-velmora-gold opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
