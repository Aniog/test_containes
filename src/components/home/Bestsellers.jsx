import { useRef } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-sans text-[11px] uppercase tracking-mega-wide text-brand-gold mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-heading-2 text-brand-charcoal">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
