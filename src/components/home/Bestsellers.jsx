import { useRef, useEffect } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Bestsellers() {
  const containerRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold-500 text-xs uppercase tracking-mega-wide font-medium mb-3">
            Curated for you
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal-950">
            Our Bestsellers
          </h2>
          <div className="divider-hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link to="/shop">
            <Button variant="secondary" size="md">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
