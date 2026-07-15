import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-[#0D0D0D]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F5F5F0] tracking-wide">
            Bestsellers
          </h2>
          <p className="mt-3 text-[#A8A8A0]">
            Our most loved pieces, chosen by you
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
