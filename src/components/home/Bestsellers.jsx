import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest text-velmora-taupe uppercase">Most Loved</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-velmora-charcoal">Bestsellers</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellerProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-slide-up opacity-0"
              style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a 
            href="/shop"
            className="inline-block px-8 py-3 border border-velmora-charcoal text-velmora-charcoal text-sm tracking-widest hover:bg-velmora-charcoal hover:text-white transition-colors"
          >
            VIEW ALL JEWELRY
          </a>
        </div>
      </div>
    </section>
  );
}