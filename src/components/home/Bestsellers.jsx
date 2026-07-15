import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { useImageLoader } from '@/hooks/useImageLoader';

export function Bestsellers() {
  const containerRef = useImageLoader();
  const sectionTitleId = 'bestsellers-title';

  return (
    <section ref={containerRef} className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-warmGray">Most Loved</p>
          <h2 id={sectionTitleId} className="heading-lg">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.filter((p) => p.bestseller).map((product) => (
            <ProductCard key={product.id} product={product} sectionTitleId={sectionTitleId} />
          ))}
        </div>
      </div>
    </section>
  );
}
