import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { getBestsellers } from '../../data/products';

const Bestsellers = () => {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 sm:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Our Bestsellers
          </h2>
          <p className="mt-3 font-sans text-sm text-softGray max-w-lg mx-auto">
            Discover the pieces our customers can't stop wearing
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-sm text-charcoal 
                     hover:text-gold-500 transition-colors group"
          >
            <span>View All Products</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
