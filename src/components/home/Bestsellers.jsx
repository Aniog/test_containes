import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellerProducts = products.filter(p => p.featured).slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Bestsellers
          </h2>
          <div className="hairline max-w-xs mx-auto" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="/shop"
            className="inline-block border-b border-velmora-charcoal pb-1 text-sm uppercase tracking-widest text-velmora-charcoal hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}