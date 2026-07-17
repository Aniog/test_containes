import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-16 md:py-24 bg-ivory-50">
      <div className="max-w-[1440px] mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl text-velvet-950 mb-3">
            Bestsellers
          </h2>
          <p className="text-sm text-obsidian-muted max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know what they want.
          </p>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline text-xs">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
