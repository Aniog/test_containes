import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-[var(--color-cream)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide">Bestsellers</h2>
          <p className="mt-4 text-[var(--color-muted)]">Our most loved pieces</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link to="/collections" className="btn-outline text-sm">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
