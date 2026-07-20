import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="section-padding section-padding-y bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12 md:mt-16">
          <Link to="/shop" className="btn-outline text-xs">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
