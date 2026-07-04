import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function Bestsellers() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="container-x py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
        <div>
          <p className="eyebrow mb-3">Bestsellers</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.05] max-w-xl">
            The pieces our community keeps reaching for.
          </h2>
        </div>
        <Link
          to="/shop"
          className="label-cap text-ink/80 hover:text-ink border-b border-ink/40 hover:border-ink pb-1 self-start md:self-end"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} eager />
        ))}
      </div>
    </section>
  );
}
