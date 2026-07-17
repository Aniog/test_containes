import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { getBestsellers } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="section-padding bg-cream-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-extra-wide uppercase text-gold mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            Our Bestsellers
          </h2>
          <p className="text-sm text-warm-gray max-w-lg mx-auto">
            The pieces our community reaches for every day. Timeless designs crafted to elevate every moment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link 
            to="/collection"
            className="inline-block text-sm tracking-wide uppercase text-charcoal hover:text-gold transition-colors border-b border-charcoal/20 hover:border-gold pb-0.5"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
