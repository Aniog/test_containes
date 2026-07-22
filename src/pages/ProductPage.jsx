import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ChevronRight,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { formatPrice, getProduct, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useReveal } from "@/hooks/useReveal";
import ProductGallery from "@/components/product/ProductGallery";
import ProductAccordions from "@/components/product/ProductAccordions";
import ProductCard from "@/components/product/ProductCard";

const variants = [
  { id: "gold", label: "18K Gold Tone", swatch: "bg-[#C9A227]" },
  { id: "silver", label: "Silver Tone", swatch: "bg-[#C8C8CC]" },
];

export default function ProductPage() {
  const { productId } = useParams();
  const product = getProduct(productId);
  const { addItem, openCart } = useCart();
  const [variant, setVariant] = useState("gold");
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const containerRef = useRef(null);
  const revealRef = useReveal([productId]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [productId]);

  useEffect(() => {
    setVariant("gold");
    setQty(1);
    setWishlisted(false);
  }, [productId]);

  const related = useMemo(() => {
    if (!product) return [];
    const sameCategory = products.filter(
      (p) => p.id !== product.id && p.category === product.category
    );
    const others = products.filter(
      (p) => p.id !== product.id && p.category !== product.category
    );
    return [...sameCategory, ...others].slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 pb-28 pt-40 text-center">
        <h1 className="font-serif text-4xl text-espresso">Piece not found</h1>
        <p className="mt-4 text-cocoa">
          This treasure may have sold out or moved.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-espresso px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-bronze"
        >
          Back to the Collection
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product.id, variant, qty);
    openCart();
  };

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        revealRef.current = node;
      }}
      className="mx-auto max-w-7xl px-5 pb-24 pt-24 md:px-10 md:pt-32"
    >
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cocoa"
      >
        <Link to="/" className="transition-colors hover:text-espresso">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
        <Link to="/shop" className="transition-colors hover:text-espresso">
          Shop
        </Link>
        <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
        <span className="text-espresso">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 md:mt-12 md:grid-cols-2 md:gap-16">
        <ProductGallery product={product} />

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
            {product.category === "sets" ? "Gift Set" : product.category}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold uppercase leading-[1.1] tracking-[0.08em] text-espresso md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 font-serif text-lg italic text-cocoa">
            {product.tagline}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <div
              className="flex gap-0.5"
              aria-label={`Rated ${product.rating} out of 5`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(product.rating)
                      ? "fill-bronze text-bronze"
                      : "text-line"
                  }`}
                  strokeWidth={1}
                />
              ))}
            </div>
            <span className="text-xs tracking-wide text-cocoa">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <p className="font-serif text-3xl font-medium text-espresso">
              {formatPrice(product.price)}
            </p>
            {product.compareAtPrice && (
              <p className="text-base text-cocoa/70 line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            )}
          </div>

          <p className="mt-6 border-t border-line pt-6 text-sm leading-relaxed text-cocoa">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Finish —{" "}
              <span className="font-normal text-cocoa">
                {variants.find((v) => v.id === variant)?.label}
              </span>
            </p>
            <div className="mt-3 flex gap-3">
              {variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVariant(v.id)}
                  aria-pressed={variant === v.id}
                  className={`flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-xs font-medium tracking-wide transition-all duration-300 ${
                    variant === v.id
                      ? "border-espresso bg-espresso text-ivory"
                      : "border-line bg-ivory text-espresso hover:border-espresso/50"
                  }`}
                >
                  <span
                    className={`h-3.5 w-3.5 rounded-full ${v.swatch} ring-1 ring-espresso/20`}
                    aria-hidden="true"
                  />
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex items-stretch gap-4">
            <div className="flex items-center border border-espresso/25">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-full w-11 items-center justify-center text-espresso transition-colors hover:bg-sand/60"
              >
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="w-10 text-center text-sm font-semibold text-espresso">
                {qty}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => Math.min(9, q + 1))}
                className="flex h-full w-11 items-center justify-center text-espresso transition-colors hover:bg-sand/60"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setWishlisted((w) => !w)}
              aria-label="Add to wishlist"
              aria-pressed={wishlisted}
              className={`flex w-12 items-center justify-center border transition-all duration-300 ${
                wishlisted
                  ? "border-bronze bg-bronze/10 text-bronze"
                  : "border-espresso/25 text-espresso hover:border-espresso"
              }`}
            >
              <Heart
                className={`h-4 w-4 ${wishlisted ? "fill-bronze" : ""}`}
                strokeWidth={1.5}
              />
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="mt-4 flex w-full items-center justify-center gap-3 bg-bronze px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-bronze-dark"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            Add to Cart — {formatPrice(product.price * qty)}
          </button>

          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-line pt-7">
            {[
              { icon: Truck, label: "Free ship over $75" },
              { icon: RotateCcw, label: "30-day returns" },
              { icon: ShieldCheck, label: "2-year warranty" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon className="h-4 w-4 text-bronze" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.15em] text-cocoa">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <ProductAccordions product={product} />
        </div>
      </div>

      {/* Related products */}
      <section className="mt-24 border-t border-line pt-16 md:mt-32">
        <div className="reveal flex items-end justify-between">
          <h2 className="font-serif text-3xl font-medium text-espresso md:text-4xl">
            You May Also Like
          </h2>
          <Link
            to="/shop"
            className="hidden border-b border-espresso pb-1 text-[11px] font-medium uppercase tracking-[0.25em] text-espresso transition-colors hover:border-bronze hover:text-bronze md:inline-block"
          >
            View All
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
          {related.map((p) => (
            <div key={p.id} className="reveal">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
