import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { getBestsellers } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
            Our Bestsellers
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block font-sans text-sm uppercase tracking-wider text-charcoal hover:text-gold transition-colors duration-300 group"
          >
            View All Products
            <span className="block w-0 group-hover:w-full h-px bg-gold transition-all duration-300 mt-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
