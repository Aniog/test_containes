import { getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import StrkImage from "@/components/ui/StrkImage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function RelatedProducts({ product }) {
  const related = getRelatedProducts(product, 4);
  return (
    <section
      aria-labelledby="related-heading"
      className="container-content py-20 md:py-28"
    >
      <StrkImage>
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">You may also love</p>
              <h2
                id="related-heading"
                className="mt-3 font-serif text-4xl text-ink md:text-5xl"
              >
                More to Treasure
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-16">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </ScrollReveal>
      </StrkImage>
    </section>
  );
}

export default RelatedProducts;
