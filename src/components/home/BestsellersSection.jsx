import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function BestsellersSection() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Curated For You</p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-white">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
