import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { getBestsellers } from '@/data/products';

const BestsellersSection = () => {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="section-subtitle block mb-3">OUR FAVORITES</span>
          <h2 className="section-title">Bestsellers</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-charcoal-700 hover:text-charcoal-900 font-sans text-sm tracking-wide transition-colors group"
          >
            View All Pieces
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
