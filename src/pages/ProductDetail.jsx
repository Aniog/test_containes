import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  ChevronDown,
  Leaf,
  Minus,
  Plus,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, getProduct } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Stars from "@/components/ui/Stars";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import strkImgConfig from "@/strk-img-config.json";

const GALLERY_SHOTS = [
  { suffix: "main", note: "studio product shot on soft neutral background" },
  { suffix: "worn", note: "worn on model close-up, warm light" },
  { suffix: "detail", note: "macro detail texture close-up" },
  { suffix: "styled", note: "styled flat lay with linen and soft shadow" },
];

const VARIANTS = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
];

const RELATED_POOL = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    rating: 4.9,
    badge: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    rating: 4.8,
    badge: "New",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    rating: 5.0,
    badge: "Bestseller",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    rating: 4.7,
    badge: null,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring and necklace set in linen box",
    price: 95,
    compareAt: 116,
    category: "sets",
    rating: 4.9,
    badge: "Gift Ready",
  },
];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] font-semibold uppercase tracking-widest2 text-ink">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={cn("text-espresso transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm leading-relaxed text-espresso">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [activeShot, setActiveShot] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() =>
      ImageHelper.loadImages(strkImgConfig, containerRef.current),
    );
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  useEffect(() => {
    setVariant("gold");
    setQuantity(1);
    setActiveShot(0);
    setAdded(false);
  }, [id]);

  const related = useMemo(() => {
    if (!product) return [];
    const others = RELATED_POOL.filter((p) => p.id !== product.id);
    const sameCat = others.filter((p) => p.category === product.category);
    const rest = others.filter((p) => p.category !== product.category);
    return [...sameCat, ...rest].slice(0, 4).map((p) => ({
      ...p,
      mainImgId: `pdp-rel-${p.id}-m`,
      hoverImgId: `pdp-rel-${p.id}-h`,
      nameId: `pdp-rel-${p.id}-name`,
      taglineId: `pdp-rel-${p.id}-tag`,
      mainQuery: `[pdp-rel-${p.id}-tag] [pdp-rel-${p.id}-name] [pdp-related-title]`,
      hoverQuery: `[pdp-rel-${p.id}-tag] worn close-up lifestyle [pdp-related-title]`,
    }));
  }, [product]);

  if (!product) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
        <h1 className="font-serif text-4xl font-light text-ink">Piece not found</h1>
        <p className="mt-3 text-sm text-taupe">
          This piece may have sold out or moved. Explore the full collection instead.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-2 border border-ink px-8 py-3.5 text-xs font-medium uppercase tracking-widest2 text-ink transition-all hover:border-gold hover:text-gold-deep"
        >
          Back to Shop
        </Link>
      </main>
    );
  }

  const handleAdd = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <main ref={containerRef} className="bg-cream pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-taupe">
          <Link to="/" className="transition-colors hover:text-gold-deep">Home</Link>
          <span>/</span>
          <Link to="/shop" className="transition-colors hover:text-gold-deep">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-sand shadow-[0_24px_50px_-30px_rgba(33,26,18,0.5)]">
                {GALLERY_SHOTS.map((shot, i) => (
                  <img
                    key={shot.suffix}
                    alt={`${product.name} — ${shot.note}`}
                    data-strk-img-id={`pdp-${product.id}-${shot.suffix}`}
                    data-strk-img={`[pdp-tagline] [pdp-name] ${shot.note}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    loading={i === 0 ? "eager" : "lazy"}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                      activeShot === i ? "opacity-100" : "opacity-0"
                    )}
                  />
                ))}
                {product.badge && (
                  <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] font-medium uppercase tracking-widest2 text-ink backdrop-blur-sm">
                    {product.badge}
                  </span>
                )}
              </div>
            </Reveal>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {GALLERY_SHOTS.map((shot, i) => (
                <button
                  key={shot.suffix}
                  type="button"
                  onClick={() => setActiveShot(i)}
                  aria-label={`View image ${i + 1}`}
                  className={cn(
                    "relative aspect-square overflow-hidden rounded-sm bg-sand transition-all duration-300",
                    activeShot === i
                      ? "ring-1 ring-gold ring-offset-2 ring-offset-cream"
                      : "opacity-70 hover:opacity-100"
                  )}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    data-strk-img-id={`pdp-thumb-${product.id}-${shot.suffix}`}
                    data-strk-img={`[pdp-tagline] [pdp-name] ${shot.note}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <Reveal delay={100}>
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
                {product.category === "sets" ? "Gift Set" : product.category}
              </p>
              <h1
                id="pdp-name"
                className="mt-3 font-serif text-3xl font-medium uppercase leading-tight tracking-product text-ink md:text-4xl"
              >
                {product.name}
              </h1>
              <p id="pdp-tagline" className="mt-2 font-serif text-lg italic text-espresso">
                {product.tagline}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <Stars rating={product.rating} size={15} />
                <span className="text-xs text-taupe">
                  {product.rating.toFixed(1)} · {product.reviews} reviews
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-serif text-3xl font-medium text-ink">
                  {formatPrice(product.price)}
                </span>
                {product.compareAt && (
                  <span className="font-serif text-xl text-taupe line-through">
                    {formatPrice(product.compareAt)}
                  </span>
                )}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-espresso">
                {product.description}
              </p>

              <div className="mt-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest2 text-ink">
                  Finish — <span className="text-gold-deep">{variant}</span>
                </p>
                <div className="flex gap-2.5">
                  {VARIANTS.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v.id)}
                      className={cn(
                        "rounded-full border px-6 py-2.5 text-xs font-medium uppercase tracking-widest2 transition-all duration-300",
                        variant === v.id
                          ? "border-ink bg-ink text-cream"
                          : "border-line bg-transparent text-espresso hover:border-gold hover:text-gold-deep"
                      )}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-stretch gap-3">
                <div className="flex items-center border border-line">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-full w-11 items-center justify-center text-espresso transition-colors hover:bg-sand hover:text-ink"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-ink">{quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => Math.min(9, q + 1))}
                    className="flex h-full w-11 items-center justify-center text-espresso transition-colors hover:bg-sand hover:text-ink"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className={cn(
                    "flex flex-1 items-center justify-center gap-2.5 rounded-sm border px-8 py-4 text-xs font-medium uppercase tracking-widest2 transition-all duration-300",
                    added
                      ? "border-gold-deep bg-gold-deep text-cream"
                      : "border-ink bg-ink text-cream hover:border-gold-deep hover:bg-gold-deep"
                  )}
                >
                  <ShoppingBag size={15} strokeWidth={1.5} />
                  {added ? "Added to Bag" : "Add to Cart"}
                </button>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-y border-line py-5">
                {[
                  { Icon: Truck, label: "Free shipping over $75" },
                  { Icon: RefreshCcw, label: "30-day returns" },
                  { Icon: Leaf, label: "Hypoallergenic" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                    <Icon size={17} strokeWidth={1.25} className="text-gold" />
                    <span className="text-[10px] uppercase tracking-widest text-espresso">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <Accordion title="Description" defaultOpen>
                  <p>{product.description}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    {product.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </Accordion>
                <Accordion title="Materials & Care">
                  <p>
                    Crafted in 18K {variant} plating over recycled brass with a
                    protective e-coating. Nickel-free and safe for sensitive skin.
                  </p>
                  <p className="mt-3">
                    To keep your piece glowing: avoid water, perfume and lotions; store
                    in the pouch provided; polish gently with a soft dry cloth.
                  </p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p>
                    Orders ship within 1–2 business days. Free worldwide shipping on
                    orders over $75; flat $6 under that threshold. Express options
                    available at checkout.
                  </p>
                  <p className="mt-3">
                    Not quite right? Return or exchange within 30 days — no questions,
                    prepaid label included. Gift sets are returnable unopened or
                    gently worn.
                  </p>
                </Accordion>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[11px] text-taupe">
                <ShieldCheck size={14} strokeWidth={1.5} className="text-gold" />
                Secure checkout · 2-year craftsmanship warranty
              </div>
            </div>
          </Reveal>
        </div>

        <section className="border-t border-line py-16 md:py-24">
          <Reveal className="mb-10 text-center">
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
              Complete the Look
            </p>
            <h2 id="pdp-related-title" className="mt-3 font-serif text-3xl font-light text-ink md:text-4xl">
              You May Also Like
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
