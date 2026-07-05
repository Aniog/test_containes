import { Link } from 'react-router-dom';
import { ProductCard } from '../product/ProductCard';
import { products } from '../../data/products';

export function Bestsellers() {
  const bestsellerProducts = products.filter(p => p.isBestseller).slice(0, 5);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-3">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Our Bestsellers
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-extra-wide uppercase text-charcoal hover:text-gold-600 transition-colors group"
          >
            View All Products
            <span className="w-8 h-px bg-charcoal group-hover:bg-gold-600 transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}
