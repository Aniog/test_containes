import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subtitle mb-3">Curated for You</p>
          <h2 className="font-serif text-heading">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
          {bestsellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
