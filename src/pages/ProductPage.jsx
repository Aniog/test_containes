import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  ChevronDown,
  ChevronRight,
  Gem,
  Minus,
  Plus,
  RotateCcw,
  Ruler,
  ShoppingBag,
  Truck,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import {
  formatPrice,
  getProductById,
  getRelatedProducts,
} from "@/data/products";
import { useCart } from "@/context/CartContext";
import Stars from "@/components/product/Stars";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const VARIANTS = [
  { id: "Gold", note: "18K gold plated" },
  { id: "Silver", note: "Rhodium plated" },
];

const GALLERY_VIEWS = [
  { suffix: "front", label: "Product still", query: "product still life on neutral backdrop" },
  { suffix: "worn", label: "Worn on model", query: "worn on model close-up editorial" },
  { suffix: "detail", label: "Detail macro", query: "extreme macro detail texture" },
  { suffix: "styled", label: "Styled flat lay", query: "styled flat lay with silk and warm tones" },
];

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sand">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[11px] uppercase tracking-[0.25em] text-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-taupe transition-transform duration-300",
            open && "rotate-180 text-gold",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 text-sm leading-relaxed text-espresso">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const containerRef = useRef(null);
  const { addItem, openCart } = useCart();

  const [viewIndex, setViewIndex] = useState(0);
  const [variant, setVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setViewIndex(0);
    setVariant("Gold");
    setQuantity(1);
  }, [productId]);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [productId, viewIndex]);

  const related = useMemo(
    () => (product ? getRelatedProducts(product, 4) : []),
    [product],
  );

  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
        <p className="font-serif text-4xl italic text-espresso">
          This piece has found a home
        </p>
        <p className="mt-3 text-sm text-taupe">
          The product you’re looking for is no longer available.
        </p>
        <Link
          to="/shop"
          className="mt-8 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold-deep"
        >
          Back to the Collection
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product.id, variant, quantity);
    openCart();
  };

  return (
    <div ref={containerRef} className="bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-5 pt-6 md:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-taupe">
          <li>
            <Link to="/" className="transition-colors hover:text-gold">
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link to="/shop" className="transition-colors hover:text-gold">
              Shop
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link
              to={`/shop?category=${product.category}`}
              className="transition-colors hover:text-gold"
            >
              {product.category}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3" />
          </li>
          <li className="text-espresso">{product.name}</li>
        </ol>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:px-8 md:py-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {GALLERY_VIEWS.map((view, i) => (
              <button
                key={view.suffix}
                type="button"
                onClick={() => setViewIndex(i)}
                aria-label={`Show ${view.label}`}
                className={cn(
                  "relative h-20 w-16 shrink-0 overflow-hidden border transition-all md:h-24 md:w-20",
                  viewIndex === i
                    ? "border-gold"
                    : "border-sand opacity-70 hover:opacity-100",
                )}
              >
                <img
                  data-strk-img-id={`pdp-thumb-${product.id}-${view.suffix}`}
                  data-strk-img={`[pdp-${product.id}-tagline] [pdp-${product.id}-name] ${view.query}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="220"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden bg-ivory">
            <div className="relative aspect-[4/5]">
              {GALLERY_VIEWS.map((view, i) => (
                <img
                  key={view.suffix}
                  data-strk-img-id={`pdp-main-${product.id}-${view.suffix}`}
                  data-strk-img={`[pdp-${product.id}-tagline] [pdp-${product.id}-name] ${view.query}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} — ${view.label}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                    viewIndex === i ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                />
              ))}
            </div>
            {product.badge && (
              <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-espresso backdrop-blur">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="lg:py-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            {product.category} · {product.material}
          </p>
          <h1
            id={`pdp-${product.id}-name`}
            className="mt-3 font-serif text-4xl font-medium uppercase leading-tight tracking-[0.08em] text-ink md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={`pdp-${product.id}-tagline`} className="mt-2 font-serif text-xl italic text-espresso">
            {product.tagline}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Stars rating={product.rating} size="h-4 w-4" />
            <span className="text-sm text-espresso">{product.rating}</span>
            <span className="text-sm text-taupe">
              · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-espresso">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-espresso">
              Finish — <span className="text-gold">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {VARIANTS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVariant(v.id)}
                  aria-pressed={variant === v.id}
                  className={cn(
                    "flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm transition-all",
                    variant === v.id
                      ? "border-gold bg-gold-soft text-ink"
                      : "border-sand bg-white text-espresso hover:border-gold",
                  )}
                >
                  <span
                    className={cn(
                      "h-3.5 w-3.5 rounded-full border",
                      v.id === "Gold"
                        ? "border-gold-deep bg-gold"
                        : "border-taupe bg-sand",
                    )}
                  />
                  {v.id}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add */}
          <div className="mt-8 flex gap-3">
            <div className="flex items-center border border-sand bg-white">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-3.5 text-espresso transition-colors hover:text-gold"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm text-ink">
                {quantity}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
                className="p-3.5 text-espresso transition-colors hover:text-gold"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex flex-1 items-center justify-center gap-2 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-gold-deep"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>
          </div>

          {/* Mini assurances */}
          <div className="mt-7 grid grid-cols-3 gap-3 border-y border-sand py-5">
            {[
              { icon: Truck, label: "Free shipping" },
              { icon: RotateCcw, label: "30-day returns" },
              { icon: Gem, label: "2-year warranty" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon className="h-4 w-4 text-gold" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-espresso">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Accordions */}
          <div className="mt-2">
            <AccordionItem title="Description" defaultOpen>
              <p>{product.details}</p>
            </AccordionItem>
            <AccordionItem title="Materials & Care">
              <p>
                18K gold plated over recycled brass. Nickel-free and
                hypoallergenic, safe for sensitive skin.
              </p>
              <p>
                To keep the shine: avoid water, perfume, and lotions while
                wearing; store in your Velmora pouch; polish gently with the
                enclosed cloth.
              </p>
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              <p>
                Free worldwide shipping on all orders. Dispatched within 1–2
                business days; delivery in 3–7 business days depending on
                region.
              </p>
              <p>
                Not the one? Return or exchange within 30 days, no questions
                asked. Gift sets include a complimentary return label.
              </p>
            </AccordionItem>
            <AccordionItem title="Size & Fit">
              <p className="flex items-center gap-2">
                <Ruler className="h-4 w-4 shrink-0 text-gold" />
                {product.category === "Necklaces"
                  ? "16-inch chain with 2-inch extender. Pendant approx. 12mm."
                  : product.category === "Huggies"
                    ? "Inner diameter 10mm — hugs most lobes comfortably."
                    : product.category === "Sets"
                      ? "Necklace 16 + 2 inches; huggies 10mm inner diameter."
                      : "One size, gently adjustable for a secure fit."}
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-sand bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-ink">
              You may <em className="italic">also like</em>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <ProductCard product={item} imgIdPrefix="rel" compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
