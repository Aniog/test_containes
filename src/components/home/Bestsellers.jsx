import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { getBestsellers } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="section-padding bg-background">
      <div className="max-w-content mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">
            Our Bestsellers
          </h2>
          <p className="text-text-secondary font-sans">
            Loved by thousands, worn every day
          </p>
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
            to="/collection"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-wide text-primary hover:text-accent transition-colors group"
          >
            View All Products
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}
