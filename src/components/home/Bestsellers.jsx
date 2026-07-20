import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

const Bestsellers = () => {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-section-mobile lg:py-section bg-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
          <p className="mt-3 text-taupe max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate timeless elegance
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a 
            href="/shop" 
            className="inline-block border-b border-charcoal text-charcoal text-sm uppercase tracking-[0.1em] pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;