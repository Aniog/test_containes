import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getRelated } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";

export default function RelatedProducts({ product }) {
  const sectionRef = useRef(null);
  const related = getRelated(product, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, [product?.id]);

  if (!related.length) return null;

  return (
    <section
      ref={sectionRef}
      className="bg-ivory-100 border-t border-hairline"
      aria-labelledby="related-heading"
    >
      <div className="container-x py-20 md:py-24">
        <Reveal className="text-center max-w-xl mx-auto">
          <p className="eyebrow">You may also love</p>
          <h2
            id="related-heading"
            className="h-display mt-3 text-display-md text-espresso-900"
          >
            Pair it with
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-7">
          {related.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
