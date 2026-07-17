import { products } from '../../data/products';
import ProductCard from '../shop/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
          <p className="text-[#8A8A8A] font-sans">Our most loved pieces</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}