import { bestsellers } from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-vel-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="font-serif italic text-vel-gold text-sm tracking-wider mb-3">
            Loved by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-vel-deep tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-vel-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
