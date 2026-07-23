import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-section-mobile lg:py-section bg-velmora-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
            Bestsellers
          </h2>
          <p className="mt-3 text-velmora-gray max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}