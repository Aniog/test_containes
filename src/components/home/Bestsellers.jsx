import { Link } from 'react-router-dom';
import ProductCard from '@/components/ui/ProductCard';
import { getBestsellers } from '@/data/products';

export default function Bestsellers() {
  const products = getBestsellers();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mt-3">
            Our Bestsellers
          </h2>
          <div className="w-12 h-px bg-[#d4af37] mx-auto mt-6" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block text-sm tracking-[0.2em] text-[#1a1a1a] hover:text-[#d4af37] transition-colors border-b border-[#1a1a1a] hover:border-[#d4af37] pb-1"
          >
            VIEW ALL PIECES
          </Link>
        </div>
      </div>
    </section>
  );
}
