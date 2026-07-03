import { products } from '@/data/products';
import ProductCard from './ProductCard';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide text-ink">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
