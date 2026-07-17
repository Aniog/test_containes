import products from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-widest uppercase text-espresso">
            Bestsellers
          </h2>
          <div className="mt-4 mx-auto w-12 h-px bg-gold" />
          <p className="mt-4 text-warm text-sm max-w-md mx-auto">
            The pieces our customers love most — timeless designs that sell out fast.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
