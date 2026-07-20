import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { ProductCard } from '@/components/shared/ProductCard';
import { useImageLoader } from '@/hooks/useImageLoader';

export function BestsellersSection() {
  const sectionId = 'bestsellers';
  const ref = useImageLoader([]);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-extra-wide text-muted mb-3">Most Loved</p>
          <h2
            id={`${sectionId}-title`}
            className="font-serif text-3xl md:text-5xl font-light text-foreground"
          >
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} sectionId={sectionId} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block font-sans text-xs uppercase tracking-extra-wide text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
