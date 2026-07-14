import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function BestsellersSection() {
  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-[1440px] mx-auto section-pad">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="heading-section text-3xl md:text-4xl">Bestsellers</h2>
          <div className="gold-divider mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-velmora-charcoal hover:text-velmora-gold transition-colors font-medium group"
          >
            View All Jewelry
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
