import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  return (
    <section className="bg-ivory py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-eyebrow text-gold font-medium">
              Most Loved
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-espresso leading-tight">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-eyebrow font-medium text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors duration-300 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} priority />
          ))}
        </div>
      </div>
    </section>
  );
}
