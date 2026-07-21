import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';

export default function Bestsellers({ products }) {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Our Bestsellers
          </h2>
          <p className="mt-3 text-taupe font-sans max-w-lg mx-auto">
            The pieces our customers reach for again and again
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-charcoal text-charcoal font-sans font-medium tracking-wide transition-all duration-300 hover:bg-charcoal hover:text-cream"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
