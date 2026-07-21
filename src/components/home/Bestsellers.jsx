import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';
import { Link } from 'react-router-dom';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding section-padding-y">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
          Most Loved
        </p>
        <h2 className="section-title">Bestsellers</h2>
        <p className="section-subtitle">Our most treasured pieces, chosen by you</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">
          View All Jewelry
        </Link>
      </div>
    </section>
  );
}
