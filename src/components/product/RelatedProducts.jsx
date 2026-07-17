import products from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function RelatedProducts({ currentProductId }) {
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-10 border-t border-cream-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-2xl lg:text-3xl tracking-widest uppercase text-espresso text-center mb-12">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
