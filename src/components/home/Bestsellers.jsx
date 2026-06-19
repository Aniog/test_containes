import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs tracking-widest uppercase text-gold-600 mb-2 block">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800">
            Our Bestsellers
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/collection"
            className="inline-block border-b border-charcoal-800 pb-1 font-sans text-sm tracking-wider text-charcoal-800 hover:text-gold-600 hover:border-gold-600 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
