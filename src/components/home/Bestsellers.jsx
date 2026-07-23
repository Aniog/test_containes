import { Link } from 'react-router-dom';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/lib/data';

export default function Bestsellers() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Most Loved
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-sm font-medium uppercase tracking-widest text-espresso underline underline-offset-4 hover:text-gold transition-colors"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}