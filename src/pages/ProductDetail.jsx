import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronDown, Minus, Plus, Star, Heart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/product/ProductCard";

function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-ink/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[12px] uppercase tracking-[0.24em] text-velmora-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-velmora-ink transition-transform duration-300",
            open && "rotate-180",
          )}
          strokeWidth={1.4}
        />
      </button>
      <div
        className={cn(
          "grid overflow-hidden text-[14px] leading-relaxed text-velmora-charcoal/80 transition-all duration-300",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function Stars({ rating, reviews }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-3.5 w-3.5",
              i < Math.round(rating)
                ? "fill-velmora-gold text-velmora-gold"
                : "text-velmora-mist",
            )}
            strokeWidth={1.2}
          />
        ))}
      </div>
      <span className="text-[12px] text-velmora-taupe">
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);
  const { addItem, openCart } = useCart();

  const [variantId, setVariantId] = useState("gold");
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Use the 2 existing product images. We keep static refs so the strk-img
  // plugin can resolve them at scan time.
  const gallery = useMemo(() => (product ? product.images : []), [product]);

  const query = product
    ? `[${product.queries.heroDescId}] [${product.queries.heroTitleId}]`
    : "";

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  // Re-trigger image loading when gallery active changes (in case any new tagged img)
  useEffect(() => {
    if (!containerRef.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [activeImage]);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!product) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-40 text-center md:px-10">
        <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-taupe">
          404 · Not Found
        </p>
        <h1 className="mt-4 font-serif text-4xl text-velmora-ink">We can't find that piece.</h1>
        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="mt-8 bg-velmora-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-velmora-cream"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const related = getRelatedProducts(product.slug, 4);

  const handleAdd = () => {
    addItem(product, { variantId, quantity: qty });
  };

  const handleBuyNow = () => {
    addItem(product, { variantId, quantity: qty });
    openCart();
  };

  return (
    <div ref={containerRef} className="bg-velmora-cream pt-24 md:pt-28">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 md:px-10 lg:px-16">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 py-6 text-[11px] uppercase tracking-[0.22em] text-velmora-taupe"
        >
          <Link to="/" className="hover:text-velmora-ink">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-ink">Shop</Link>
          <span>/</span>
          <span className="text-velmora-ink">{product.categoryLabel}</span>
        </nav>

        {/* Top grid */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            {/* Thumbnails */}
            <div className="flex gap-3 md:flex-col md:gap-3">
              {gallery.map((g, idx) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  aria-label={`Show view ${idx + 1}`}
                  className={cn(
                    "relative h-20 w-20 flex-shrink-0 overflow-hidden border bg-velmora-bone transition-colors md:h-24 md:w-20",
                    idx === activeImage
                      ? "border-velmora-ink"
                      : "border-transparent hover:border-velmora-ink/30",
                  )}
                >
                  <img
                    alt={g.alt || product.name}
                    data-strk-img-id={g.id}
                    data-strk-img={query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width={200}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 overflow-hidden bg-velmora-bone">
              <div className="relative aspect-[4/5]">
                <img
                  alt={product.name}
                  data-strk-img-id={gallery[activeImage]?.id || product.images[0].id}
                  data-strk-img={query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width={1100}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-taupe">
              {product.categoryLabel}
            </p>
            <h1
              id={product.queries.heroTitleId}
              className="mt-3 text-[20px] font-medium uppercase tracking-[0.18em] text-velmora-ink md:text-[22px]"
            >
              {product.name}
            </h1>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-serif text-3xl text-velmora-ink">
                {formatPrice(product.price)}
              </span>
              <Stars rating={product.rating} reviews={product.reviews} />
            </div>

            <p
              id={product.queries.heroDescId}
              className="mt-7 text-[15px] leading-relaxed text-velmora-charcoal/80"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-9">
              <p className="text-[11px] uppercase tracking-[0.24em] text-velmora-ink">
                Tone · <span className="text-velmora-taupe">{variantId === "gold" ? "18K Gold" : "Sterling Silver"}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariantId(v.id)}
                    aria-pressed={variantId === v.id}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors",
                      variantId === v.id
                        ? "border-velmora-ink bg-velmora-ink text-velmora-cream"
                        : "border-velmora-ink/30 text-velmora-ink hover:border-velmora-ink",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="h-3 w-3 rounded-full border border-velmora-ink/20"
                      style={{ background: v.swatch }}
                    />
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-velmora-ink">
                Quantity
              </p>
              <div className="mt-3 inline-flex items-center border border-velmora-ink/20">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="px-3 py-2.5 text-velmora-ink hover:bg-velmora-bone"
                >
                  <Minus className="h-3.5 w-3.5" strokeWidth={1.6} />
                </button>
                <span className="min-w-[40px] text-center text-[14px] tabular-nums">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="px-3 py-2.5 text-velmora-ink hover:bg-velmora-bone"
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-velmora-ink py-4 text-[12px] uppercase tracking-[0.26em] text-velmora-cream transition-colors duration-300 hover:bg-velmora-charcoal"
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                aria-label="Add to wishlist"
                className="flex items-center justify-center gap-2 border border-velmora-ink px-6 py-4 text-[12px] uppercase tracking-[0.22em] text-velmora-ink transition-colors duration-300 hover:bg-velmora-ink hover:text-velmora-cream sm:px-5"
              >
                <Heart className="h-4 w-4" strokeWidth={1.4} />
                <span className="sm:hidden">Save</span>
              </button>
            </div>

            {/* Small benefits */}
            <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <li className="flex items-center gap-2 text-[12px] text-velmora-charcoal/75">
                <Truck className="h-4 w-4 text-velmora-gold-deep" strokeWidth={1.4} />
                Free shipping
              </li>
              <li className="flex items-center gap-2 text-[12px] text-velmora-charcoal/75">
                <RotateCcw className="h-4 w-4 text-velmora-gold-deep" strokeWidth={1.4} />
                30-day returns
              </li>
              <li className="flex items-center gap-2 text-[12px] text-velmora-charcoal/75">
                <ShieldCheck className="h-4 w-4 text-velmora-gold-deep" strokeWidth={1.4} />
                1-year guarantee
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-ink/10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">
                  Each piece is hand-finished in our atelier in Florence and individually inspected before it ships.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-1.5">
                  {product.materials.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-velmora-gold" />
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  To preserve the finish, avoid contact with perfume, lotion, and chlorinated water. Store in the included pouch when not worn.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Complimentary worldwide shipping on every order. Domestic orders ship within 1–2 business days; international within 3–5 business days.
                </p>
                <p className="mt-3">
                  Return any unworn piece within 30 days for a full refund or exchange. Gift orders may be exchanged within 60 days.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24 md:mt-32">
            <div className="flex items-end justify-between">
              <h2 className="font-serif text-3xl font-light text-velmora-ink md:text-4xl">
                You may also like
              </h2>
              <Link to="/shop" className="link-underline hidden text-[12px] uppercase tracking-[0.22em] text-velmora-ink md:inline-block">
                Shop All
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
