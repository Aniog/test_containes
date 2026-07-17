import { Link } from 'react-router-dom';
import { getBestSellers } from '@/data/products';
import { ProductCard } from '@/components/ui';

export default function Bestsellers() {
  const bestsellers = getBestSellers();

  return (
    <section className="section-spacing">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-extra-wide text-gold mb-3">
            Customer Favorites
          </p>
          <h2 className="section-title">Bestsellers</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-extra-wide text-charcoal hover:text-gold transition-colors group"
          >
            View All Products
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
