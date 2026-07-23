import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Truck, RotateCcw, ShieldCheck, Sparkles } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  ALL_PRODUCTS,
  PLACEHOLDER_IMG,
  formatPrice,
  getProduct,
} from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/ui/StarRating";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const VIEWS = [
  { id: "front", label: "Product" },
  { id: "worn", label: "Worn" },
  { id: "detail", label: "Detail" },
  { id: "scale", label: "Scale" },
];

const VIEW_QUERY = {
  front: "gold jewelry product photography on neutral background",
  worn: "gold jewelry worn on model close-up warm light",
  detail: "macro detail of gold jewelry texture craftsmanship",
  scale: "gold jewelry held in hand for scale soft light",
};

const PERKS = [
  { icon: Truck, label: "Free worldwide shipping over $75" },
  { icon: RotateCcw, label: "30-day easy returns" },
  { icon: ShieldCheck, label: "2-year plating warranty" },
  { icon: Sparkles, label: "Hypoallergenic & nickel-free" },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);
  const [view, setView] = useState("front");
  const [variant, setVariant] = useState("Gold");
  const [qty, setQty] = useState(1);
  const { addItem, openCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    let cleanup;
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (typeof cleanup === "function") cleanup();
    };
  }, [id, view]);

  const related = useMemo(() => {
    if (!product) return [];
    const same = ALL_PRODUCTS.filter(
      (p) => p.id !== product.id && p.category === product.category
    );
    const rest = ALL_PRODUCTS.filter(
      (p) => p.id !== product.id && p.category !== product.category
    );
    return [...same, ...rest].slice(0, 4);
  }, [product]);

  if (!product) return <Navigate to="/shop" replace />;

  const handleAdd = () => {
    addItem(product.id, variant, qty);
    openCart();
  };

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <nav className="text-[11px] uppercase tracking-[0.22em] text-taupe" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-espresso">Home</Link>
          <span className="mx-2 text-champagne">/</span>
          <Link to="/shop" className="transition-colors hover:text-espresso">Shop</Link>
          <span className="mx-2 text-champagne">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="transition-colors hover:text-espresso"
          >
            {product.category}
          </Link>
          <span className="mx-2 text-champagne">/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              {VIEWS.map((v) => (
                <img
                  key={v.id}
                  src={PLACEHOLDER_IMG}
                  alt={`${product.name} — ${v.label.toLowerCase()} view`}
                  loading={v.id === "front" ? "eager" : "lazy"}
                  data-strk-img-id={`pdp-${product.id}-${v.id}`}
                  data-strk-img={`[pdp-${product.id}-tagline] [pdp-${product.id}-name] ${VIEW_QUERY[v.id]}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                    view === v.id ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
              {product.badge && (
                <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-espresso backdrop-blur-sm">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {VIEWS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setView(v.id)}
                  aria-label={`Show ${v.label} view`}
                  className={cn(
                    "relative aspect-square overflow-hidden border bg-sand transition-all duration-300",
                    view === v.id
                      ? "border-espresso"
                      : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <img
                    src={PLACEHOLDER_IMG}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    data-strk-img-id={`pdp-${product.id}-thumb-${v.id}`}
                    data-strk-img={`[pdp-${product.id}-tagline] [pdp-${product.id}-name] ${VIEW_QUERY[v.id]}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:py-4">
            <p
              id={`pdp-${product.id}-tagline`}
              className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold"
            >
              {product.tagline}
            </p>
            <h1
              id={`pdp-${product.id}-name`}
              className="mt-3 font-display text-4xl font-medium uppercase leading-tight tracking-[0.08em] text-espresso md:text-5xl"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={15} />
              <span className="text-sm text-mocha">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 flex items-baseline gap-3 font-display text-3xl font-semibold text-espresso">
              {formatPrice(product.price)}
              {product.compareAt && (
                <span className="text-xl font-normal text-taupe line-through">
                  {formatPrice(product.compareAt)}
                </span>
              )}
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-mocha">
              {product.description}
            </p>

            <div className="mt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-espresso">
                Finish — <span className="text-gold">{variant}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {["Gold", "Silver"].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300",
                      variant === v
                        ? "border-espresso bg-espresso text-cream"
                        : "border-espresso/25 text-mocha hover:border-espresso hover:text-espresso"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-stretch gap-3">
              <div className="flex items-center border border-espresso/25">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-mocha transition-colors hover:text-espresso"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-sm font-semibold text-espresso">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                  className="px-4 py-3 text-mocha transition-colors hover:text-espresso"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex flex-1 items-center justify-center gap-3 bg-gold py-4 text-[12px] font-semibold uppercase tracking-[0.26em] text-cream transition-colors duration-300 hover:bg-gold-deep"
              >
                <ShoppingBag size={16} strokeWidth={1.75} />
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
            </div>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PERKS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-xs text-mocha">
                  <Icon size={15} strokeWidth={1.5} className="shrink-0 text-gold" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-champagne">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  {product.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Orders ship within 1–2 business days in plastic-free
                  packaging. Worldwide shipping is complimentary on orders over
                  $75 (a flat $6 below). Not in love? Return unworn pieces
                  within 30 days for a full refund — no questions asked.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <section className="border-t border-champagne bg-sand/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                Complete the look
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-espresso md:text-4xl">
                You May Also Like
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden text-[11px] font-semibold uppercase tracking-[0.26em] text-espresso transition-colors hover:text-gold md:block"
            >
              View all
            </Link>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
