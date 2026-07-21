import { useRef } from "react";
import { getRelatedProducts } from "../../data/products";
import { useImageHelper } from "../../hooks/useImageHelper";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ currentId }) {
  const sectionRef = useRef(null);
  useImageHelper(sectionRef, [currentId]);
  const related = getRelatedProducts(currentId, 4);

  if (related.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="bg-champagne py-20 md:py-24 border-t border-sand"
      aria-labelledby="related-title"
    >
      <div className="container-velmora">
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <p className="eyebrow">You may also love</p>
          <h2
            id="related-title"
            className="heading-display text-3xl md:text-4xl mt-3"
          >
            Pieces that go together.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-7 gap-y-10 md:gap-y-12">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
