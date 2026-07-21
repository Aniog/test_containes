import { Link } from 'react-router-dom';
import ProductCard from '@/components/shared/ProductCard';
import { getBestsellers } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = getBestsellers();
  
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Customer Favorites</p>
          <h2 className="section-title">Bestsellers</h2>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-charcoal-600 hover:text-gold-600 transition-colors group"
          >
            <span className="tracking-ultra-wide uppercase font-medium">View All Pieces</span>
            <span className="w-8 h-px bg-current transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
