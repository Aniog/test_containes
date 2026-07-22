import { useEffect, useMemo, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { products as allProducts } from "@/data/products";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";

export default function RelatedProducts({ product }) {
  const ref = useRef(null);

  const items = useMemo(() => {
    const ids = product.related ?? [];
    const list = ids.map((id) => allProducts.find((p) => p.id === id)).filter(Boolean);
    if (list.length < 3) {
      const fillers = allProducts
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4 - list.length);
      return [...list, ...fillers];
    }
    return list;
  }, [product]);

  useEffect(() => {
    if (!ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [product?.id]);

  if (items.length === 0) return null;

  return (
    <section ref={ref} className="py-20 md:py-28 bg-bone/40 border-t border-hairline">
      <Container>
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="eyebrow">You may also love</span>
          <h2 className="display-3 text-espresso">Considered pairings</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
