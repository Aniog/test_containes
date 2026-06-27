import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl mb-3"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Bestsellers
          </h2>
          <p
            className="text-sm md:text-base max-w-md mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Our most loved pieces, chosen by women who appreciate timeless elegance
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}