import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = products.filter(
    (p) => p.badge === 'Bestseller' || p.badge === 'New' || p.badge === 'Gift Set'
  );

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-label text-brand mb-3">Most Loved</p>
          <h2 className="heading-serif text-3xl lg:text-4xl text-charcoal-800">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-brand mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
