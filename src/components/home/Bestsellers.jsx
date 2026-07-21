import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

const Bestsellers = () => {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-dark">Bestsellers</h2>
          <p className="mt-4 text-velmora-textLight max-w-xl mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance
          </p>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellerProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
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