import { bestsellers } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function Bestsellers() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">Bestsellers</h2>
        <div className="w-10 h-px bg-gold mx-auto mb-4" />
        <p className="text-taupe text-sm md:text-base max-w-md mx-auto">
          The pieces our community loves most. Everyday essentials and statement styles, crafted to be worn on repeat.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
