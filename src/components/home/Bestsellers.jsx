import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getBestsellers } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = getBestsellers().slice(0, 5);

  return (
    <section className="section-padding bg-ivory">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-overline text-gold mb-3">Customer Favorites</p>
          <h2 className="heading-2 text-charcoal">Our Bestsellers</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-charcoal-light hover:text-charcoal transition-colors duration-200 group"
          >
            <span className="font-sans text-sm tracking-wide">View All Products</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
