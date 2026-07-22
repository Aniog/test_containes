import { useRef } from "react";
import { PRODUCTS } from "@/data/products";
import { useReveal } from "@/hooks/useReveal";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/shop/ProductCard";
import { useStrkImage } from "@/hooks/useStrkImage";

export default function RelatedProducts({ currentId, category }) {
  const ref = useRef(null);
  useReveal(ref);
  useStrkImage(ref, [currentId]);

  // Prefer same category, then anything else. Take 4.
  const sameCat = PRODUCTS.filter(
    (p) => p.id !== currentId && p.category === category,
  );
  const others = PRODUCTS.filter(
    (p) => p.id !== currentId && p.category !== category,
  );
  const picks = [...sameCat, ...others].slice(0, 4);

  if (picks.length === 0) return null;

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow>You may also love</Eyebrow>
            <SectionTitle className="mt-3">Pairs nicely with</SectionTitle>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-7 gap-y-12 md:gap-y-14">
          {picks.map((p, i) => (
            <div
              key={p.id}
              className="reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
