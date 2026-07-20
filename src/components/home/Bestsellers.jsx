import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-h2 text-charcoal mb-4">Bestsellers</h2>
          <p className="text-charcoal-light max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}