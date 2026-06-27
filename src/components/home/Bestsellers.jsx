import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">Bestsellers</h2>
          <p className="mt-3 text-[#6B6B6B]">Our most loved pieces</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellerProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a href="/collections" className="inline-block text-sm tracking-wider uppercase border-b border-[#1A1A1A] pb-1 hover:text-[#C9A962] hover:border-[#C9A962] transition-colors">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}