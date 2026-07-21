import { products } from '../../data/products';
import ProductCard from '../shop/ProductCard';

const Bestsellers = () => {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-ivory text-section-mobile md:text-section mb-4">
            Bestsellers
          </h2>
          <p className="text-warm-gray max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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