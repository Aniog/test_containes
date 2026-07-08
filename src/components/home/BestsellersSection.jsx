import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function BestsellersSection() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="heading-lg text-dark-900 mb-3">Bestsellers</h2>
        <p className="body-md text-dark-600">Our most-loved pieces, chosen by women like you.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
