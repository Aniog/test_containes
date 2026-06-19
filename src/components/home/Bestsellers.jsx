import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-[1400px] mx-auto section-padding">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-400 tracking-wide mb-3">
            Bestsellers
          </h2>
          <p className="text-sm text-charcoal-50 tracking-wide">
            Our most-loved pieces, chosen by women who know what they want.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
