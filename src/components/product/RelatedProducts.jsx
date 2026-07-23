import { relatedProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Container from "@/components/ui/Container";
import StrkImageLoader from "@/components/ui/StrkImageLoader";

export default function RelatedProducts({ productId }) {
  const items = relatedProducts(productId, 4);

  return (
    <section className="py-20 sm:py-24 bg-ivory-50 border-t border-line">
      <Container>
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">You may also love</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-light">
            From the same edit
          </h2>
        </div>
        <StrkImageLoader className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </StrkImageLoader>
      </Container>
    </section>
  );
}
