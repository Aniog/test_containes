import { products } from '../../data/products';
import ProductCard from '../../components/product/ProductCard';

const Bestsellers = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-family-serif)' }}
          >
            Bestsellers
          </h2>
          <p className="text-[var(--color-muted)] max-w-md mx-auto">
            Our most loved pieces, chosen by you
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product, index) => (
            <div 
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;