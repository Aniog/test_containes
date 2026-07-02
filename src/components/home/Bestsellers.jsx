import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";

export function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="container-velmora">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-velmora-muted">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl tracking-wide md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-widest text-velmora-accent hover:text-velmora-accent-hover"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
