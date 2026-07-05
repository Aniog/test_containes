import ProductCard from './ProductCard';
import { getBestsellers } from '@/lib/products';

export default function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 lg:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-velmora-taupe mb-3">
            Loved by Many
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-espresso font-medium">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
