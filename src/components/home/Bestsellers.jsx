import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Bestsellers</h2>
          <p className="text-stone text-lg max-w-xl mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}