import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../products/ProductCard';
import products from '../../data/products';

const Bestsellers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bestsellerProducts = products.filter(p => p.featured).slice(0, 5);

  return (
    <section ref={sectionRef} className="section-padding fade-in-up">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
          <div className="divider-hairline w-24 mx-auto mb-6" />
          <p className="text-warm-gray font-sans text-lg max-w-2xl mx-auto">
            Our most loved pieces, cherished by jewelry enthusiasts worldwide.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12 stagger-children">
          {bestsellerProducts.map((product, index) => (
            <div key={product.id} className="fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center fade-in-up" style={{ transitionDelay: '500ms' }}>
          <a
            href="/shop"
            className="btn-secondary inline-flex items-center gap-3 hover-lift"
          >
            View All Collections
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
