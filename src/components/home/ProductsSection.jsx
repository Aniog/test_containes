import React, { useEffect, useMemo, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "./products.data";
import { cn } from "@/lib/utils";

function ProductCard({ product, index }) {
  const titleId = `product-${product.id}-title`;
  const subtitleId = `product-${product.id}-subtitle`;
  const descId = `product-${product.id}-desc`;
  const imgId = `product-img-${product.id}-${index}a1`;
  return (
    <article className="group flex flex-col bg-paper border border-mist transition-colors hover:border-brass">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <img
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          data-strk-img-id={imgId}
          data-strk-img={`[${descId}] [${titleId}] [${subtitleId}] [products-eyebrow] [products-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent" />
        <div className="absolute top-4 left-4 bg-paper/95 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-ink">
          0{index + 1}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p
          id={subtitleId}
          className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-brass-deep"
        >
          {product.subtitle}
        </p>
        <h3
          id={titleId}
          className="font-display text-2xl md:text-3xl font-semibold mt-3 text-ink"
        >
          {product.title}
        </h3>
        <p id={descId} className="mt-4 text-sm leading-relaxed text-smoke">
          {product.desc}
        </p>

        <ul className="mt-6 space-y-2 border-t border-mist pt-6">
          {product.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-xs text-ink/80"
            >
              <span className="mt-1 h-1 w-3 bg-brass shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink hover:text-brass-deep transition-colors"
        >
          Request datasheet
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function ProductsSection() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [filter]);

  const filtered = useMemo(() => {
    if (filter === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.id.includes(filter));
  }, [filter]);

  const filters = [
    { id: "all", label: "All Machines" },
    { id: "double", label: "Double Fold" },
    { id: "sheet", label: "Sheet Folder" },
    { id: "metal", label: "Metal Folder" },
  ];

  return (
    <section
      id="products"
      ref={containerRef}
      className="bg-sand py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <span id="products-eyebrow" className="eyebrow">
              The Product Line
            </span>
            <h2
              id="products-title"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mt-6 text-ink"
            >
              Seven machines.
              <br />
              One standard of precision.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg text-smoke leading-relaxed">
              From our flagship double folding machine to fully automated CNC
              metal folding systems, every ARTITECT machine is engineered to the
              same micron-level standard.
            </p>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-mist pb-6">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition-colors",
                filter === f.id
                  ? "bg-ink text-paper"
                  : "bg-transparent text-ink/70 hover:text-ink hover:bg-paper"
              )}
              aria-pressed={filter === f.id}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs uppercase tracking-[0.25em] text-smoke">
            {filtered.length} {filtered.length === 1 ? "machine" : "machines"}
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
