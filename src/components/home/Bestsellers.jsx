import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-velmora-gold mb-2">
              Most Loved
            </p>
            <h2 className="font-serif text-[28px] md:text-[38px] font-light text-velmora-charcoal">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:block font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-velmora-warm-gray hover:text-velmora-charcoal transition-colors border-b border-transparent hover:border-velmora-charcoal pb-0.5"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-velmora-warm-gray"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}