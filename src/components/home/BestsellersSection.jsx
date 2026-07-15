import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function BestsellersSection() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-gold font-medium mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block text-xs uppercase tracking-[0.14em] font-medium text-muted hover:text-gold transition-colors border-b border-linen hover:border-gold pb-0.5"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-[0.14em] font-medium text-muted hover:text-gold transition-colors border-b border-linen hover:border-gold pb-0.5"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
