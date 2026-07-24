import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

const Bestsellers = () => {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-velmora-charcoal mb-4">
            Bestsellers
          </h2>
          <div className="hairline max-w-16 mx-auto mb-4" />
          <p className="text-velmora-taupe max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellerProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;