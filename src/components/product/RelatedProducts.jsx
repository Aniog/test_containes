import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function RelatedProducts({ currentProductId }) {
  const related = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="section-padding bg-cream-50 border-t border-charcoal-100">
      <div className="container-page">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 text-center mb-12">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}