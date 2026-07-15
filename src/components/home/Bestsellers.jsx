import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { getBestsellers } from '../../data/products';

const Bestsellers = () => {
  const bestsellers = getBestsellers();

  return (
    <section className="section-padding bg-cream">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs tracking-[0.2em] text-gold uppercase font-sans">
              Customer Favorites
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mt-2">
              Our Bestsellers
            </h2>
          </div>
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors mt-4 md:mt-0"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.slice(0, 5).map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
