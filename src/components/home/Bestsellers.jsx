import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-light mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-champagne">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12 lg:mt-16">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-champagne/60 hover:text-gold font-sans transition-colors duration-300 group"
          >
            View All Jewelry
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
