import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function RelatedProducts({ currentProduct }) {
  const related = products
    .filter((p) => p.id !== currentProduct.id)
    .slice(0, 4);

  return (
    <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20 border-t border-velvet-200">
      <h2 className="font-serif text-2xl md:text-3xl font-light text-velvet-900 tracking-wide text-center mb-12">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}