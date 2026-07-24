import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl text-[#1A1815] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Bestsellers
          </h2>
          <p className="text-[#6B6560] max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless
            elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}