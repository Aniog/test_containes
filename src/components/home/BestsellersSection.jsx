import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function BestsellersSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto container-px">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-overline mb-3">Curated for You</p>
          <h2 className="font-serif text-display-sm md:text-[3.5rem] text-charcoal">
            Bestsellers
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
