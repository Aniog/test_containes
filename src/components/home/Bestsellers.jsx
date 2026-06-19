import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="section bg-[#FAF7F2]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-3">
            Bestsellers
          </h2>
          <p className="text-[#6B6B6B] text-sm tracking-wide">
            Our most loved pieces
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellerProducts.map((product, index) => (
            <div
              key={product.id}
              className={`animate-fade-in opacity-0 stagger-${index + 1}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}