import { bestsellers } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function BestsellersGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs text-gold tracking-widest uppercase mb-3 font-sans">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}