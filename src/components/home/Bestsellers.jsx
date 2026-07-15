import { products } from '@/data/products';
import { ProductCard } from '../ProductCard';

export function Bestsellers() {
  const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

  return (
    <section className="bg-velmora-porcelain py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-3xl text-velmora-ink sm:text-4xl">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
