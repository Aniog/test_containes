import React, { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Minus, Plus, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProduct, getRelated, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useStrkImages, getStrkImageUrl } from "@/hooks/useStrkImages";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Stars, Eyebrow } from "@/components/ui/primitives";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

const VARIANTS = ["Gold", "Silver"];

const VIEWS = [
  { suffix: "product photography on warm neutral background", label: "Product" },
  { suffix: "worn on model close-up warm light", label: "On model" },
  { suffix: "macro detail texture dark editorial", label: "Detail" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const [view, setView] = useState(0);
  const [variant, setVariant] = useState("Gold");
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const containerRef = useStrkImages([id, view]);

  React.useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, view, containerRef]);

  const related = useMemo(() => (product ? getRelated(product) : []), [product]);

  if (!product) return <Navigate to="/shop" replace />;

  return (
    <div ref={containerRef} className="bg-cream pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-12">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-taupe">
          <Link to="/" className="transition-colors hover:text-gold">Home</Link>
          <span>/</span>
          <Link to="/shop" className="transition-colors hover:text-gold">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden bg-sand">
              <img
                key={`${product.id}-${view}`}
                data-strk-img-id={`${product.galleryIds[view]}`}
                data-strk-img={`[pdp-name-${product.id}] [pdp-tag-${product.id}] ${VIEWS[view].suffix} gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src={getStrkImageUrl(product.galleryIds[view])}
                alt={`${product.name} — ${VIEWS[view].label}`}
                className="aspect-[3/4] w-full object-cover animate-fade-in"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {VIEWS.map((v, i) => (
                <button
                  key={v.label}
                  onClick={() => setView(i)}
                  className={cn(
                    "overflow-hidden border bg-sand transition-all duration-300",
                    view === i ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"
                  )}
                  aria-label={`View ${v.label}`}
                >
                  <img
                    data-strk-img-id={`${product.galleryIds[i]}-thumb`}
                    data-strk-img={`[pdp-name-${product.id}] [pdp-tag-${product.id}] ${v.suffix} gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src={getStrkImageUrl(`${product.galleryIds[i]}-thumb`)}
                    alt=""
                    className="aspect-[3/4] w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-4">
            <Eyebrow>{product.category}</Eyebrow>
            <h1
              id={`pdp-name-${product.id}`}
              className="mt-3 font-serif text-3xl font-medium uppercase leading-tight tracking-[0.12em] text-ink md:text-4xl"
            >
              {product.name}
            </h1>
            <p id={`pdp-tag-${product.id}`} className="mt-2 font-serif text-lg italic text-taupe">
              {product.tagline}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-[13px] text-taupe">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl font-medium text-ink">{formatPrice(product.price)}</p>

            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                Finish — <span className="text-gold-deep">{variant}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {VARIANTS.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
                      variant === v
                        ? "border-gold bg-gold text-cream"
                        : "border-stone bg-cream text-ink-soft hover:border-gold hover:text-gold-deep"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex gap-4">
              <div className="flex items-center border border-stone">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink-soft transition-colors hover:text-gold"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>
                <span className="w-10 text-center font-medium text-ink">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-ink-soft transition-colors hover:text-gold"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>
              <button
                onClick={() => addItem(product, variant, qty)}
                className="flex-1 bg-gold py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-gold-deep"
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
            </div>

            {/* Mini trust points */}
            <ul className="mt-8 space-y-3">
              {[
                { icon: Truck, text: "Free worldwide shipping, 3–7 business days" },
                { icon: RotateCcw, text: "30-day returns, no questions asked" },
                { icon: ShieldCheck, text: "2-year craftsmanship warranty" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[13px] text-ink-soft">
                  <Icon size={16} strokeWidth={1.5} className="shrink-0 text-gold" />
                  {text}
                </li>
              ))}
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                items={[
                  { title: "Description", content: product.description },
                  { title: "Materials & Care", content: product.materials },
                  {
                    title: "Shipping & Returns",
                    content:
                      "Complimentary worldwide shipping on all orders, dispatched within 24 hours from our Lisbon atelier (3–7 business days, fully tracked). Not the right piece? Return it within 30 days for a full refund — we'll even cover the label.",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="mt-20 border-t border-stone pt-14 md:mt-28">
          <div className="flex items-end justify-between">
            <div>
              <Eyebrow>Complete the Look</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl font-medium text-ink">You May Also Like</h2>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
