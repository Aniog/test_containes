import { products } from '@/data/products';
import ProductCard from './ProductCard';

const bestsellers = products.filter((p) => p.bestseller);

export default function BestsellersGrid() {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-900 tracking-wide">
          Bestsellers
        </h2>
        <p className="mt-3 text-velvet-500 text-sm tracking-wide">
          The pieces our customers love most
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}