import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, Truck, Sparkles, Shield, Heart } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import ProductCard from "@/components/product/ProductCard";

function Accordion({ title, children, defaultOpen = false, icon: Icon }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase font-medium text-ink">
          {Icon && <Icon size={14} className="text-gold" />}
          {title}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            "transition-transform duration-300 text-mute",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden text-sm leading-relaxed text-ink/80">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [activeImg, setActiveImg] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || "Gold");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setActiveImg(0);
    setQty(1);
    setVariant(product?.variants?.[0] || "Gold");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id, product]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeImg, id]);

  const related = useMemo(
    () => PRODUCTS.filter((p) => p.id !== id).slice(0, 4),
    [id]
  );

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant,
      imageId: product.images[0].id,
      imageQuery: product.images[0].desc,
      qty,
    });
  };

  return (
    <div ref={containerRef} className="bg-bone pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 text-[11px] tracking-[0.25em] uppercase text-mute">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="grid grid-cols-[80px_1fr] gap-4 md:gap-5">
              {/* Thumbnails */}
              <div className="flex flex-col gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImg(idx)}
                    aria-label={`Thumbnail ${idx + 1}`}
                    className={cn(
                      "relative aspect-[4/5] bg-cream overflow-hidden border transition-all",
                      activeImg === idx
                        ? "border-ink"
                        : "border-transparent hover:border-hairline"
                    )}
                  >
                    <img
                      alt=""
                      data-strk-img-id={`thumb-${img.id}`}
                      data-strk-img={`[${img.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="sr-only" id={img.titleId}>
                      {img.desc}
                    </span>
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="relative aspect-[4/5] bg-cream overflow-hidden">
                {product.images.map((img, idx) => (
                  <img
                    key={img.id}
                    alt={product.name}
                    data-strk-img-id={`main-${img.id}`}
                    data-strk-img={`[${img.titleId}] [pdp-name]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                      activeImg === idx ? "opacity-100" : "opacity-0"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
              {product.category}
            </p>
            <h1
              id="pdp-name"
              className="font-serif font-light text-3xl md:text-5xl uppercase tracking-[0.12em] text-ink leading-[1.1]"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? "fill-gold" : "text-hairline"}
                  />
                ))}
              </div>
              <span className="text-xs text-mute">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>

            {/* Price */}
            <p className="mt-6 font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </p>

            {/* Short description */}
            <p className="mt-6 text-ink/80 text-[15px] leading-relaxed max-w-md">
              {product.short}
            </p>

            <hr className="my-8 border-hairline" />

            {/* Variant pills */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-mute mb-3">
                Tone · <span className="text-ink">{variant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase border transition-colors",
                      variant === v
                        ? "border-ink bg-ink text-bone"
                        : "border-hairline text-ink hover:border-ink"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add */}
            <div className="mt-8 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-hairline">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-mute hover:text-ink"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm min-w-[2ch] text-center">{qty}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-mute hover:text-ink"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 bg-ink text-bone hover:bg-gold-deep transition-colors py-4 text-[11px] tracking-[0.3em] uppercase font-medium"
              >
                Add to Cart · {formatPrice(product.price * qty)}
              </button>
              <button
                aria-label="Add to wishlist"
                className="border border-hairline px-4 hover:border-ink hover:text-gold transition-colors"
              >
                <Heart size={16} />
              </button>
            </div>

            {/* Reassurance row */}
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] tracking-[0.25em] uppercase text-ink/75">
              <li className="flex items-center gap-2">
                <Truck size={14} className="text-gold" /> Free Shipping
              </li>
              <li className="flex items-center gap-2">
                <Shield size={14} className="text-gold" /> 30-Day Returns
              </li>
              <li className="flex items-center gap-2">
                <Sparkles size={14} className="text-gold" /> Hand-finished
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  <strong className="text-ink">Materials:</strong> {product.materials}
                </p>
                <p className="mt-3">
                  <strong className="text-ink">Care:</strong> {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-3">
                  Not in love? Return any unworn piece within 30 days for a full
                  refund.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                Editorial Pairing
              </p>
              <h2 className="font-serif font-light text-3xl md:text-4xl text-ink">
                You may also love
              </h2>
            </div>
            <Link
              to="/shop"
              className="link-underline text-[11px] tracking-[0.3em] uppercase text-ink"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6 md:gap-y-14">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
