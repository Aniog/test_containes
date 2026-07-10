import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 md:py-30 bg-primary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-h2 text-secondary">Bestsellers</h2>
          <p className="mt-3 text-secondary-text max-w-md mx-auto">
            Our most loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}