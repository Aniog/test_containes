import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';

export function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Bestsellers</h2>
          <p className="text-charcoal-500 font-light max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate quiet luxury
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-wider uppercase text-charcoal-700 hover:text-gold-600 transition-colors group"
          >
            View All Products
            <span className="w-8 h-px bg-current transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
