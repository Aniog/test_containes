import { ProductCard } from '@/components/ui/ProductCard';

export function RelatedProducts({ products }) {
  if (!products.length) return null;

  return (
    <section className="bg-velmora-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center font-serif text-3xl text-velmora-base sm:text-4xl">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
