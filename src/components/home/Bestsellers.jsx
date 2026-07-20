import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-display mb-4">Bestsellers</h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know what they want.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-10">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link to="/collection" className="btn-outline text-sm">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
