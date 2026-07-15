import { products } from '@/data/products';
import ProductCard from './ProductCard';

const bestsellers = products.filter((p) => p.isBestseller);

export default function BestsellersGrid() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-page">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-4">
            Bestsellers
          </h2>
          <p className="text-charcoal-500 text-sm md:text-base max-w-md mx-auto">
            The pieces our community loves most — each one designed to be worn and treasured every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}