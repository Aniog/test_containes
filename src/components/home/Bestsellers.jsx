import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function Bestsellers() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 id="product-section-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-3">
            Bestsellers
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Our most loved pieces, chosen by women who know that everyday luxury is the best kind.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                nameId: `product-${product.id}-name`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
