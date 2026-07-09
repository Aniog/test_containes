import { getBestsellers } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] uppercase tracking-widest-2xl text-velmora-gold mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl lg:text-heading-2 text-velmora-charcoal mb-4">
            Bestsellers
          </h2>
          <div className="section-divider" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
