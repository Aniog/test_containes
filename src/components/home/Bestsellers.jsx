import { ProductCard } from '@/components/product/ProductCard';
import { getBestsellers } from '@/data/products';
import { useIntersectionObserver } from '@/hooks/useScrollPosition';

export function Bestsellers() {
  const [ref, isVisible] = useIntersectionObserver();
  const bestsellers = getBestsellers();

  return (
    <section ref={ref} className="section-padding bg-ivory">
      <div className="container-wide">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Customer Favorites</p>
          <h2 className="section-title">Our Bestsellers</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
