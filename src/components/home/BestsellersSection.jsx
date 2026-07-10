import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { getBestsellers } from '@/data/products';

export default function BestsellersSection() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-gold text-sm uppercase tracking-ultrawide mb-3 block">
              Customer Favorites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-warm-black">
              Our Bestsellers
            </h2>
          </div>
          
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors group"
          >
            <span className="text-sm font-medium">View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.slice(0, 5).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
