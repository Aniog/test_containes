import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.tags?.includes('bestseller'));

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest2 text-gold font-medium mb-3">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-widest2 font-medium text-warm-gray hover:text-charcoal transition-colors duration-300 flex items-center gap-2 self-start md:self-auto"
          >
            View All <span className="text-gold">→</span>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
