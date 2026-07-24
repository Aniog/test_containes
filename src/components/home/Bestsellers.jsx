import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { getBestsellers } from '../../data/products';

export default function Bestsellers() {
  const [ref, isVisible] = useIntersectionObserver();
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 md:py-28">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-medium uppercase tracking-ultra-wide text-velmora-gold mb-3 block">
            Customer Favorites
          </span>
          <h2 className="heading-section">Bestsellers</h2>
          <p className="mt-4 text-velmora-warm-gray max-w-md mx-auto">
            The pieces our community reaches for every day. Timeless designs, effortless style.
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link to="/shop" className="btn-secondary">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
