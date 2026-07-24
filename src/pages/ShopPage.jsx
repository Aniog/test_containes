import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/shop/ProductGrid';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  return (
    <main className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-warm-900 text-center">
            Our Collection
          </h1>
          <p className="text-warm-500 text-sm text-center mt-3 max-w-md mx-auto">
            Each piece is thoughtfully designed and crafted to bring quiet luxury to your everyday.
          </p>
        </div>

        <ProductGrid initialCategory={categoryParam} />
      </div>
    </main>
  );
}