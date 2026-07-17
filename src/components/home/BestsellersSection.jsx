import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getBestsellers } from '../../data/products';

const BestsellersSection = () => {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-gold-600">
            Customer Favorites
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900">
            Our Bestsellers
          </h2>
          <div className="mt-4 w-12 h-px bg-gold-500 mx-auto" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 lg:mt-16 text-center">
          <Link
            to="/shop"
            className="inline-block border border-charcoal-900 text-charcoal-900 px-8 py-4 font-sans text-sm font-medium tracking-wider uppercase hover:bg-charcoal-900 hover:text-cream-50 transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
