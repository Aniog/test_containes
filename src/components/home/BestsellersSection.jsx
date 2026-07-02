import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function BestsellersSection() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">Our Favorites</p>
          <h2 className="section-title">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
