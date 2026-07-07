import { useStrkImages } from '@/hooks/useStrkImages';
import { ProductCard } from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data/products';

export function BestsellersSection() {
  const containerRef = useStrkImages();

  return (
    <section ref={containerRef} className="bg-velmora-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-display text-xs font-medium uppercase tracking-superwide text-velmora-gold-dark">
            Curated Favorites
          </p>
          <h2 className="font-serif text-4xl font-light text-velmora-espresso md:text-5xl">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {PRODUCTS.map((product) => (
            <div key={product.id}>
              <span id={`product-${product.id}-name`} className="sr-only">
                {product.name}
              </span>
              <ProductCard
                product={product}
                imgId={`bestseller-${product.id}`}
                query={`[product-${product.id}-name] ${product.category} gold jewelry product`}
                ratio="4x5"
                width={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
