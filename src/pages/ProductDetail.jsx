import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Minus, Plus, Heart, Truck, RotateCcw, ShieldCheck, Share2, Check } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import Gallery from "@/components/product/Gallery";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { formatPrice, cn } from "@/lib/cn";
import { useCart, useUI } from "@/context/CartContext";

const TONES = [
  { value: "gold",   label: "18K Gold"  },
  { value: "silver", label: "Sterling Silver" },
];

const ACCORDION_ITEMS = (product) => [
  {
    title: "Description",
    content: <p>{product.description}</p>,
  },
  {
    title: "Materials & Care",
    content: (
      <>
        <p>
          <strong className="text-ink">{product.materials}</strong> — hypoallergenic, nickel-free, suitable for sensitive skin.
        </p>
        <p>
          To keep your piece looking its best, avoid contact with perfumes, lotions, and chlorinated water. Polish gently with the included cloth and store dry.
        </p>
      </>
    ),
  },
  {
    title: "Shipping & Returns",
    content: (
      <>
        <p>
          Free worldwide shipping on orders over $80. Most orders ship within 1–2 business days from our atelier in Lisbon.
        </p>
        <p>
          30-day returns on unworn pieces — we'll send you a prepaid label and refund quickly once we receive the parcel.
        </p>
      </>
    ),
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = useMemo(() => getRelatedProducts(id, 4), [id]);

  const [tone, setTone] = useState(product?.tones?.[0] || "gold");
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  const { add } = useCart();
  const { showToast } = useUI();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  useEffect(() => {
    if (product?.tones?.length) setTone(product.tones[0]);
    setQty(1);
    setActiveImg(0);
  }, [product]);

  if (!product) {
    return (
      <div className="vm-page bg-cream-50 min-h-[60vh] grid place-items-center">
        <div className="text-center px-5">
          <p className="vm-eyebrow text-ink-muted">404 — Not Found</p>
          <h1 className="vm-display text-ink mt-3 text-4xl">We can't find that piece.</h1>
          <Link to="/shop" className="vm-btn vm-btn--outline mt-8 inline-flex">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    add(product, { tone, qty });
    showToast(`${product.name} added to your bag`);
  };

  const handleRelatedAdd = (p) => {
    add(p, { tone: p.tone, qty: 1 });
    showToast(`${p.name} added to your bag`);
  };

  return (
    <div className="vm-page bg-cream-50">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-page px-5 md:px-10 pt-6 md:pt-8">
        <nav aria-label="Breadcrumb" className="text-[11px] tracking-[0.18em] uppercase text-ink-muted">
          <Link to="/" className="hover:text-gold-dark">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold-dark">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-gold-dark">{product.categoryLabel || product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Top section */}
      <section className="mx-auto max-w-page px-5 md:px-10 py-10 md:py-16 grid lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-16">
        <Gallery images={product.images} name={product.name} />

        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <p className="vm-eyebrow text-gold-dark">{product.category}</p>
            <h1 className="vm-serif text-ink mt-4 text-4xl md:text-5xl lg:text-[52px] uppercase tracking-[0.06em] leading-[1.05] font-light">
              {product.name}
            </h1>
            <p className="mt-3 text-ink-muted text-sm md:text-base italic vm-serif text-xl">{product.tagline}</p>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl text-ink tabular-nums">{formatPrice(product.price)}</span>
              <span className="text-xs text-ink-muted">or 4 payments of {formatPrice(product.price / 4)}</span>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k} className={cn("w-3.5 h-3.5", k < Math.round(product.rating) ? "fill-current" : "fill-current opacity-30")}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </span>
                ))}
              </span>
              <span>{product.rating.toFixed(1)} · {product.reviews} reviews</span>
              <a href="#reviews" className="text-ink-muted underline hover:text-gold-dark text-xs">Read</a>
            </div>

            <p className="mt-6 text-ink-soft text-[15px] leading-relaxed max-w-md">
              {product.short}
            </p>
          </Reveal>

          {/* Variant selector */}
          <Reveal delay={120}>
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="vm-eyebrow text-ink">Finish</p>
                <span className="text-[11px] text-ink-muted uppercase tracking-[0.18em]">
                  {product.tones.length} options
                </span>
              </div>
              <div className="mt-3 flex gap-2">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    aria-pressed={tone === t}
                    className={cn(
                      "px-4 py-2.5 text-sm border transition-colors",
                      tone === t
                        ? "border-ink bg-ink text-cream"
                        : "border-ink/20 text-ink hover:border-ink"
                    )}
                  >
                    {TONES.find((x) => x.value === t)?.label || t}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quantity + Add to cart */}
          <Reveal delay={180}>
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="vm-eyebrow text-ink">Quantity</p>
                <span className="text-[11px] text-ink-muted">In stock — ships in 24h</span>
              </div>
              <div className="mt-3 flex items-stretch gap-3">
                <div className="inline-flex items-center border border-ink/25">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="w-10 h-12 grid place-items-center text-ink hover:bg-ink hover:text-cream transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" strokeWidth={1.6} />
                  </button>
                  <span className="w-10 text-center text-ink tabular-nums">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    aria-label="Increase quantity"
                    className="w-10 h-12 grid place-items-center text-ink hover:bg-ink hover:text-cream transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 vm-btn vm-btn--primary"
                >
                  <Check className="w-4 h-4" strokeWidth={1.6} />
                  Add to Bag · {formatPrice(product.price * qty)}
                </button>
              </div>
              <button
                type="button"
                className="mt-3 vm-btn vm-btn--outline w-full"
              >
                <Heart className="w-4 h-4" strokeWidth={1.6} />
                Save to Wishlist
              </button>

              <div className="mt-4 flex items-center justify-end text-xs text-ink-muted">
                <button type="button" className="inline-flex items-center gap-1.5 hover:text-gold-dark">
                  <Share2 className="w-3.5 h-3.5" strokeWidth={1.4} />
                  Share
                </button>
              </div>
            </div>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={240}>
            <ul className="mt-8 grid grid-cols-3 gap-3 text-[11px] text-ink-muted uppercase tracking-[0.18em] border-t border-ink/10 pt-6">
              <li className="flex flex-col items-center text-center gap-1.5">
                <Truck className="w-4 h-4 text-gold-dark" strokeWidth={1.4} />
                Free over $80
              </li>
              <li className="flex flex-col items-center text-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-gold-dark" strokeWidth={1.4} />
                30-day returns
              </li>
              <li className="flex flex-col items-center text-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-dark" strokeWidth={1.4} />
                Hypoallergenic
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Accordions */}
      <section className="mx-auto max-w-page px-5 md:px-10 pb-16 md:pb-24">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-16">
          <div className="md:hidden">
            <Gallery images={product.images} name={product.name} />
          </div>
          <div>
            <Reveal>
              <p className="vm-eyebrow text-ink-muted">The Details</p>
              <h2 className="vm-display text-ink mt-3 text-3xl md:text-4xl">Everything you'd want to know.</h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-6">
                <Accordion items={ACCORDION_ITEMS(product)} initial={0} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-page px-5 md:px-10">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <p className="vm-eyebrow text-ink-muted">You may also love</p>
                  <h2 className="vm-display text-ink mt-3 text-4xl md:text-5xl leading-[1.05]">
                    Pair it with{" "}
                    <span className="italic font-light">a quiet companion.</span>
                  </h2>
                </div>
                <Link to="/shop" className="vm-link">Shop all</Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 md:gap-x-7 gap-y-12">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} onQuickAdd={handleRelatedAdd} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </div>
  );
}
