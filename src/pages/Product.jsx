import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, Plus, Minus, ChevronDown, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import ProductCard from "@/components/product/ProductCard";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Product() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = useMemo(() => (product ? getRelatedProducts(product.slug, 4) : []), [product]);
  const { addItem, openCart } = useCart();

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] ?? "18K Gold");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    setActiveIndex(0);
    setQuantity(1);
    if (product) setVariant(product.variants[0]);
  }, [slug, product]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [slug, activeIndex]);

  if (!product) {
    return (
      <div className="mx-auto max-w-[800px] px-5 py-32 text-center md:px-10">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep">404</p>
        <h1 className="mt-4 font-serif text-5xl text-espresso">We can't find that piece.</h1>
        <p className="mt-4 text-muted">It may have been retired or never existed.</p>
        <Link
          to="/shop"
          className="mt-8 inline-block border border-espresso px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-espresso transition-colors hover:bg-espresso hover:text-cream"
        >
          Browse Shop
        </Link>
      </div>
    );
  }

  // Build gallery: primary + secondary
  const gallery = [
    {
      id: product.imgPrimaryId,
      query: product.primaryQuery,
    },
    {
      id: product.imgSecondaryId,
      query: product.secondaryQuery,
    },
  ];

  const onAdd = () => {
    addItem(product, { variant, quantity });
  };

  const onBuyNow = () => {
    addItem(product, { variant, quantity });
    openCart();
  };

  return (
    <div ref={containerRef} className="bg-cream">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-[1400px] px-5 pt-8 md:px-10">
        <nav className="text-[11px] uppercase tracking-[0.24em] text-muted">
          <Link to="/" className="hover:text-espresso">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-espresso">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-espresso">
            {product.categoryLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      {/* Main product */}
      <section className="mx-auto max-w-[1400px] px-5 py-10 md:px-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex flex-row gap-3 md:flex-col">
              {gallery.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={
                    "relative h-20 w-20 flex-shrink-0 overflow-hidden bg-cream-soft transition-all duration-300 md:h-24 md:w-24 " +
                    (i === activeIndex
                      ? "ring-1 ring-gold"
                      : "opacity-70 hover:opacity-100")
                  }
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt=""
                    data-strk-img-id={g.id}
                    data-strk-img={g.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-cream-soft">
              <img
                alt={product.name}
                data-strk-img-id={gallery[activeIndex].id}
                data-strk-img={gallery[activeIndex].query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover velmora-fade-in"
                key={activeIndex}
              />
              {product.badge && (
                <span className="absolute left-5 top-5 bg-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-espresso">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <p
              id="pd-cat"
              className="text-[11px] uppercase tracking-[0.4em] text-gold-deep"
            >
              {product.categoryLabel}
            </p>
            <h1
              id="pd-name"
              className="mt-4 font-serif text-4xl font-light leading-tight text-espresso md:text-5xl"
            >
              <span className="uppercase tracking-[0.06em]">{product.name}</span>
            </h1>
            <p className="mt-3 text-base text-espresso/70">{product.tagline}</p>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={i < Math.round(product.rating) ? "h-4 w-4 fill-current" : "h-4 w-4"}
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mt-8 flex items-baseline gap-3 border-y border-hairline py-6">
              <span className="font-serif text-4xl text-espresso">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-muted">USD · Tax incl.</span>
            </div>

            <p className="mt-7 text-sm leading-relaxed text-espresso/80">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-espresso">
                Tone <span className="ml-2 text-muted normal-case tracking-normal">{variant}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={
                      "rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 " +
                      (variant === v
                        ? "border-espresso bg-espresso text-cream"
                        : "border-hairline text-espresso hover:border-espresso")
                    }
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8 flex items-center gap-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-espresso">
                Quantity
              </p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 text-espresso transition-colors hover:text-gold-deep"
                  aria-label="Decrease"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="min-w-[2rem] text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2.5 text-espresso transition-colors hover:text-gold-deep"
                  aria-label="Increase"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={onAdd}
                className="w-full bg-gold py-4 text-[11px] uppercase tracking-[0.28em] text-cream transition-colors duration-300 hover:bg-gold-deep"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
              <button
                type="button"
                onClick={onBuyNow}
                className="w-full border border-espresso py-4 text-[11px] uppercase tracking-[0.28em] text-espresso transition-colors duration-300 hover:bg-espresso hover:text-cream"
              >
                Buy Now
              </button>
            </div>

            {/* Perks */}
            <ul className="mt-8 space-y-2.5 border-t border-hairline pt-6 text-xs text-muted">
              <li className="flex items-center gap-3">
                <Truck className="h-4 w-4 text-gold-deep" strokeWidth={1.4} />
                Free worldwide shipping over $80
              </li>
              <li className="flex items-center gap-3">
                <RotateCcw className="h-4 w-4 text-gold-deep" strokeWidth={1.4} />
                30-day no-questions returns
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-gold-deep" strokeWidth={1.4} />
                Hypoallergenic · 12-month warranty
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              <Accordion
                id="description"
                title="Description"
                open={openAccordion === "description"}
                onToggle={(id) =>
                  setOpenAccordion((c) => (c === id ? "" : id))
                }
              >
                <p>{product.description}</p>
                <p className="mt-3">{product.tagline}</p>
              </Accordion>
              <Accordion
                id="materials"
                title="Materials & Care"
                open={openAccordion === "materials"}
                onToggle={(id) =>
                  setOpenAccordion((c) => (c === id ? "" : id))
                }
              >
                <p className="font-medium text-espresso">Materials</p>
                <p>{product.materials}</p>
                <p className="mt-4 font-medium text-espresso">Care</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion
                id="shipping"
                title="Shipping & Returns"
                open={openAccordion === "shipping"}
                onToggle={(id) =>
                  setOpenAccordion((c) => (c === id ? "" : id))
                }
              >
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-hairline bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <div className="pb-12">
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep">
                Pairs Well With
              </p>
              <h2 className="mt-3 font-serif text-4xl font-light tracking-tight text-espresso md:text-5xl">
                You may also like.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Accordion({ id, title, open, onToggle, children }) {
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] uppercase tracking-[0.3em] text-espresso">
          {title}
        </span>
        <ChevronDown
          className={
            "h-4 w-4 text-espresso transition-transform duration-300 " +
            (open ? "rotate-180" : "")
          }
          strokeWidth={1.4}
        />
      </button>
      {open && (
        <div className="pb-6 text-sm leading-relaxed text-espresso/75 velmora-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
