import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

export default function BestsellersGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Bestsellers</h2>
          <p className="mt-3 text-sm font-sans text-charcoal-500 max-w-md mx-auto">
            The pieces our community returns to, season after season.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}