import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function BestsellersSection() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2
              className="text-3xl md:text-4xl text-charcoal mb-2"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                letterSpacing: '0.02em',
              }}
            >
              Bestsellers
            </h2>
            <p className="text-sm text-warm-gray">
              Our most loved pieces, chosen by you
            </p>
          </div>
          
          <Link
            to="/shop"
            className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-ui text-charcoal hover:text-gold transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 md:hidden">
          <Link
            to="/shop"
            className="flex items-center justify-center gap-2 text-sm font-medium text-charcoal hover:text-gold transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
