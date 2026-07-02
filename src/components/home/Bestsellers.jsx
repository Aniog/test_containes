import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data/products';

export function Bestsellers() {
  const bestsellers = PRODUCTS.filter((p) => p.tags.includes('bestseller'));

  return (
    <section className="bg-velmora-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.28em] text-velmora-gold">
            Shop Bestsellers
          </span>
          <h2 className="font-serif text-4xl text-velmora-base sm:text-5xl">
            Loved Most
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block border-b border-velmora-base pb-1 font-sans text-xs font-medium uppercase tracking-[0.22em] text-velmora-base transition-colors hover:text-velmora-gold hover:border-velmora-gold"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
