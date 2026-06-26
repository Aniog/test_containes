import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Settings2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { productCategories } from "@/data/products";

const heroIds = new Set([
  "double-folding",
  "metal-folding-machine",
  "metal-folder",
]);
const supportingIds = productCategories.map((p) => p.id);

export default function HomeProducts() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const featured = productCategories.filter((p) => heroIds.has(p.id));
  const secondary = productCategories.filter((p) => !heroIds.has(p.id));

  return (
    <section ref={containerRef} className="bg-mist-100 py-24 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow text-copper-600">Our machines</span>
            <h2
              id="products-title"
              className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-tight max-w-2xl text-balance"
            >
              A complete family of metal folding machines.
            </h2>
          </div>
          <p
            id="products-subtitle"
            className="text-ink-700 text-base md:text-lg max-w-md leading-relaxed"
          >
            Seven core product lines — from compact workshops to heavy fabrication
            cells — sharing the same precision DNA.
          </p>
        </div>

        {/* Featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((product, idx) => (
            <FeaturedCard
              key={product.id}
              product={product}
              large={idx === 0}
            />
          ))}
        </div>

        {/* Compact list */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondary.map((product) => (
            <CompactCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-navy-950 hover:text-copper-600 font-semibold text-sm group"
          >
            See all product lines
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ product, large }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className={`group relative overflow-hidden rounded-3xl bg-paper-50 border border-ink-900/8 hover-lift ${
        large ? "md:col-span-2 md:row-span-1" : ""
      }`}
    >
      <div
        className={`relative ${
          large ? "aspect-[16/9]" : "aspect-[4/3]"
        } overflow-hidden bg-navy-900`}
      >
        <img
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          data-strk-img-id={`product-feature-${product.id}-8a3c1d`}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] [products-subtitle] [products-title]`}
          data-strk-img-ratio={large ? "16x9" : "4x3"}
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/40 to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-paper-50/15 backdrop-blur-sm border border-paper-50/20 text-paper-50 text-xs font-medium px-3 py-1.5 rounded-full">
          <Settings2 className="w-3.5 h-3.5 text-copper-400" />
          {product.specs[0].label}
          <span className="text-paper-50/80">·</span>
          <span className="text-paper-50">{product.specs[0].value}</span>
        </div>
      </div>

      <div className="p-7 md:p-8">
        <h3
          id={`${product.id}-title`}
          className="font-display font-semibold text-xl md:text-2xl text-ink-900 group-hover:text-copper-600 transition-colors"
        >
          {product.title}
        </h3>
        <p
          id={`${product.id}-desc`}
          className="mt-3 text-ink-700 text-sm md:text-base leading-relaxed"
        >
          {product.short}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-copper-600 font-semibold text-sm">
          Explore details
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

function CompactCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group block bg-paper-50 border border-ink-900/8 rounded-2xl p-6 hover-lift"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-xs font-semibold tracking-[0.18em] uppercase text-copper-600">
          {product.specs[0].label}
        </span>
        <ArrowRight className="w-4 h-4 text-ink-500 group-hover:text-copper-600 group-hover:translate-x-1 transition-all" />
      </div>
      <h3
        id={`${product.id}-title`}
        className="mt-3 font-display font-semibold text-lg text-ink-900 group-hover:text-copper-600 transition-colors"
      >
        {product.title}
      </h3>
      <p
        id={`${product.id}-desc`}
        className="mt-2 text-sm text-ink-700 leading-relaxed line-clamp-3"
      >
        {product.short}
      </p>
    </Link>
  );
}