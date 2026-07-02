import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { Link } from 'react-router-dom';

export default function BestsellersSection() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-cream text-[clamp(1.75rem,3vw,2.5rem)]">
            Bestsellers
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
          {bestsellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-cream/20 hover:border-gold text-cream hover:text-gold font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-3.5 transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
