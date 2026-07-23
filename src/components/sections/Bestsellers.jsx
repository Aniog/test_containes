import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/sections/ProductCard';
import { getBestsellers } from '@/data/products';

export function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-ultra-wide uppercase mb-3">Customer Favorites</p>
          <h2 className="section-title">Our Bestsellers</h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold transition-colors group"
          >
            View All Products
            <span className="w-8 h-px bg-current transform transition-all group-hover:w-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}
