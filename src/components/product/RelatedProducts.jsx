import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import ProductCard from "@/components/home/ProductCard";
import { relatedProducts } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function RelatedProducts({ productId }) {
  const items = relatedProducts(productId, 4);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-ivory py-20 md:py-28 border-t border-hairline">
      <Container>
        <div className="text-center mb-10 md:mb-14">
          <p className="eyebrow">You may also love</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink font-light">
            In a similar vein
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
