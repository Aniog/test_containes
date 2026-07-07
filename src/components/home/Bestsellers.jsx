import { Link } from 'react-router-dom';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 mb-4">
            Our Bestsellers
          </h2>
          <p className="text-taupe max-w-lg mx-auto">
            Discover the pieces our community can't stop wearing
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-espresso-900 text-espresso-900 text-sm uppercase tracking-wider hover:bg-espresso-900 hover:text-white transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
