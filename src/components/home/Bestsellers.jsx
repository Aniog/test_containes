import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ui/ProductCard';
import { products } from '@/data/products';

export function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-h2 text-charcoal">Bestsellers</h2>
            <p className="mt-2 text-stone-500 font-sans">Our most loved pieces</p>
          </div>
          <Link 
            to="/shop" 
            className="font-sans text-sm uppercase tracking-widest text-gold hover:text-gold-light transition-colors"
          >
            View All
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}