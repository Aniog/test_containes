import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../../components/product/ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellerProducts = products.filter(p => p.featured).slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
            <p className="mt-2 text-stone-warm">Our most loved pieces</p>
          </div>
          <Link
            to="/shop"
            className="hidden md:flex items-center gap-2 text-sm text-charcoal hover:text-gold-antique transition-colors mt-4 md:mt-0"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-charcoal hover:text-gold-antique transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}