import { products } from '../../data/products';
import ProductCard from '../shop/ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="product-section-title" className="font-serif text-3xl md:text-4xl text-fg mb-3">
            Bestsellers
          </h2>
          <p className="text-sm text-muted-fg tracking-wide">
            Our most-loved pieces, chosen by women who know what they want.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
