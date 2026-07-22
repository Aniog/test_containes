import { getBestsellers } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const Bestsellers = () => {
  const products = getBestsellers();

  return (
    <section className="py-section-mobile md:py-section bg-velmora-cream">
      <div className="max-w-container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
            Bestsellers
          </h2>
          <p className="mt-3 text-velmora-gray max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;