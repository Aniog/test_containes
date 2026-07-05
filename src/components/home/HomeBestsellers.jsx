import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const HomeBestsellers = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold block">Our Favorites</span>
            <h2 className="text-3xl md:text-5xl font-serif">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors underline-offset-8 underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBestsellers;