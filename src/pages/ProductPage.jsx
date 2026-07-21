import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Minus,
  Plus,
  ChevronDown,
  Truck,
  RefreshCcw,
  ShieldCheck,
  ChevronRight,
  Heart,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProduct, PRODUCTS, formatPrice } from "@/data/products";
import { PLACEHOLDER_SRC } from "@/components/ui/StrkImg";
import Stars from "@/components/ui/Stars";
import { Button } from "@/components/ui/Buttons";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { useCart } from "@/context/CartContext";

const VARIANTS = ["Gold", "Silver"];

const GALLERY_LABELS = {
  cuff: ["Gold ear cuff with crystal accent, studio shot", "Ear cuff worn on ear, warm light", "Macro detail of crystal settings"],
  necklace: ["Floral crystal necklace, flat lay", "Necklace worn on collarbone", "Macro detail of floral crystals"],
  huggies: ["Chunky gold dome huggie earrings", "Huggies worn on ear", "Macro detail of polished gold dome"],
  drops: ["Gold filigree drop earrings, studio", "Drop earrings worn, evening light", "Macro detail of filigree texture"],
  set: ["Earring and necklace gift set", "Set presented in velvet gift box", "Macro detail of matching crystals"],
};

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-gold-deep transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-bronze">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);
  const containerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState("Gold");
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setActiveImage(0);
    setVariant("Gold");
    setQty(1);
    window.scrollTo({ top: 0 });
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  const related = useMemo(
    () => PRODUCTS.filter((p) => p.id !== id).slice(0, 4),
    [id]
  );

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-40 text-center">
        <p className="font-serif text-4xl text-ink">Piece not found</p>
        <Link to="/shop" className="mt-6 inline-block">
          <Button variant="secondary">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const nameId = `pdp-${product.id}-name`;
  const descId = `pdp-${product.id}-desc`;
  const labels = GALLERY_LABELS[product.images[0]] || GALLERY_LABELS.cuff;

  return (
    <div ref={containerRef} className="bg-ivory pt-16 md:pt-20">
      {/* Breadcrumb */}
      <nav className="mx-auto flex max-w-7xl items-center gap-2 px-5 pt-6 text-[11px] uppercase tracking-[0.2em] text-taupe md:px-8">
        <Link to="/" className="hover:text-ink">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-bronze">{product.name}</span>
      </nav>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2 md:gap-14 md:px-8 lg:gap-20">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[3/4] overflow-hidden border border-line bg-sand">
            <img
              key={`${product.id}-${activeImage}`}
              data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
              data-strk-img={`[pdp-cap-${product.id}-${activeImage}] [${nameId}] [${descId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src={PLACEHOLDER_SRC}
              alt={labels[activeImage]}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {product.badge && (
              <span className="absolute left-5 top-5 bg-ivory/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep border border-line">
                {product.badge}
              </span>
            )}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {labels.map((label, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative aspect-square overflow-hidden border bg-sand transition-all duration-300 ${
                  activeImage === i
                    ? "border-gold"
                    : "border-line opacity-70 hover:opacity-100"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                  data-strk-img={`[pdp-cap-${product.id}-${i}] [${nameId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src={PLACEHOLDER_SRC}
                  alt={label}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
          {/* Hidden captions feeding image queries */}
          <div className="sr-only" aria-hidden="true">
            {labels.map((label, i) => (
              <p key={i} id={`pdp-cap-${product.id}-${i}`}>
                {label}
              </p>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <Reveal>
            <div className="flex items-center gap-3">
              <Stars rating={product.rating} size={15} />
              <span className="text-xs text-taupe">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>
            <h1
              id={nameId}
              className="mt-4 font-serif text-3xl font-semibold uppercase leading-tight tracking-[0.12em] text-ink md:text-4xl"
            >
              {product.name}
            </h1>
            <p className="mt-4 font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </p>
            <p id={descId} className="mt-5 text-sm leading-relaxed text-bronze md:text-base">
              {product.short}
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-8">
            {/* Variant selector */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink">
              Finish — <span className="text-gold-deep">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {VARIANTS.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`rounded-full border px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                    variant === v
                      ? "border-gold bg-gold/10 text-ink"
                      : "border-line text-bronze hover:border-gold-soft"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Quantity + wishlist */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-line">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3.5 text-ink/60 transition-colors hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-ink">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3.5 text-ink/60 transition-colors hover:text-ink"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={() => setWishlisted((v) => !v)}
                aria-label="Add to wishlist"
                className={`flex h-[46px] w-[46px] items-center justify-center border transition-all duration-300 ${
                  wishlisted
                    ? "border-gold bg-gold/10 text-gold-deep"
                    : "border-line text-bronze hover:border-gold-soft"
                }`}
              >
                <Heart
                  size={17}
                  strokeWidth={1.5}
                  fill={wishlisted ? "currentColor" : "none"}
                />
              </button>
            </div>

            <Button
              variant="primary"
              className="mt-6 w-full py-5"
              onClick={() => addToCart(product, variant, qty)}
            >
              Add to Cart — {formatPrice(product.price * qty)}
            </Button>

            {/* Mini trust */}
            <div className="mt-7 grid grid-cols-3 gap-2 border-y border-line py-5">
              {[
                { icon: Truck, label: "Free shipping over $75" },
                { icon: RefreshCcw, label: "30-day returns" },
                { icon: ShieldCheck, label: "Hypoallergenic" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon size={16} strokeWidth={1.5} className="text-gold" />
                  <span className="text-[10px] uppercase tracking-wider text-bronze">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Accordions */}
          <Reveal delay={150} className="mt-2 border-t border-line">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">{product.materials}</Accordion>
            <Accordion title="Shipping & Returns">
              Orders are dispatched within 1–2 business days and ship free
              worldwide on orders over $75. Not quite right? Return unworn
              pieces within 30 days for a full refund — gift sets included.
              Every order arrives in our signature pouch with a care card.
            </Accordion>
          </Reveal>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-line bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="flex items-end justify-between">
            <h2 className="font-serif text-3xl font-medium text-ink md:text-4xl">
              You May Also Like
            </h2>
            <Link
              to="/shop"
              className="hidden text-[11px] font-semibold uppercase tracking-[0.25em] text-ink underline decoration-gold underline-offset-8 hover:text-gold-deep md:inline-block"
            >
              View All
            </Link>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} idPrefix="related" index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
