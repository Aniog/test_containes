import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="section-spacing bg-[var(--color-secondary)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm text-[var(--color-muted)] tracking-widest uppercase">
            Most Loved
          </span>
          <h2 className="heading-serif text-4xl md:text-5xl mt-3">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-[var(--color-accent)] mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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