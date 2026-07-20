import ProductCard from '@/components/ProductCard.jsx';
import { products } from '@/data/products.js';
import { useImageLoader } from '@/hooks/useImageLoader.js';

export default function Bestsellers() {
  const containerRef = useImageLoader([]);

  return (
    <section ref={containerRef} className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs uppercase tracking-brand text-accent">
            Curated Favorites
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
