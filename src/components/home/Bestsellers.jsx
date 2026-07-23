import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary font-normal">
            Bestsellers
          </h2>
          <p className="mt-3 font-sans text-sm text-text-secondary max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know that elegance is in the details.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
