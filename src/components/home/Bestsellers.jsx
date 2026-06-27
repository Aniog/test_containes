import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-gold mb-3 block">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Our Bestsellers
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link to="/collection" className="btn-secondary">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
