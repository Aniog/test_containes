import ProductCard from '@/components/ui/ProductCard';
import products from '@/data/products';

export default function Bestsellers() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-taupe mb-3">The Edit</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-oxford">Bestsellers</h2>
          <div className="mt-4 w-[60px] h-[1px] bg-gold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
