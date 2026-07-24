import ProductCard from '@/components/ui/ProductCard';
import { relatedProducts } from '@/data/products';

export default function RelatedProducts({ productId }) {
  const items = relatedProducts(productId, 4);

  return (
    <section className="bg-ivory border-t border-hairline">
      <div className="container-page py-20 md:py-28">
        <div className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
          <p className="eyebrow">You may also love</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink-soft">
            Styled together
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
