import products from '@/lib/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
          Curated Selection
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-50 tracking-wide">
          Bestsellers
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
