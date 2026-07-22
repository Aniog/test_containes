import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  Star,
  Plus,
  Minus,
  ChevronDown,
  Truck,
  RotateCcw,
  Shield,
  Heart,
  ShoppingBag,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById, getRelatedProducts, PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import ProductCard from "@/components/product/ProductCard";

const TONES = [
  { id: "gold", label: "Gold Tone", swatch: "linear-gradient(135deg,#D6B680 0%,#B8924A 50%,#8E6D2E 100%)" },
  { id: "silver", label: "Silver Tone", swatch: "linear-gradient(135deg,#E8E8E8 0%,#B8B8B8 50%,#8E8E8E 100%)" },
];

// Build N synthetic gallery images from a single product, varying the query
// to give the feel of multiple angles / detail shots.
function buildGallery(product) {
  const base = `[${product.eyebrow}] [${product.name}]`;
  return [
    { id: "main", query: `${base} editorial product shot on warm neutral background` },
    { id: "detail", query: `${base} macro detail close-up texture craftsmanship` },
    { id: "worn", query: `${base} worn on model editorial portrait warm soft light` },
    { id: "lifestyle", query: `${base} styled flat lay on warm linen natural light` },
  ];
}

function Stars({ rating, reviews }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5 text-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={[
              "h-3.5 w-3.5",
              i < Math.round(rating) ? "fill-current" : "fill-transparent",
            ].join(" ")}
            strokeWidth={1.25}
          />
        ))}
      </div>
      <span className="font-sans text-[12px] tracking-wide text-taupe">
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  );
}

function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-hairline">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-[12px] tracking-[0.28em] uppercase text-ink">
          {title}
        </span>
        <Plus
          className={[
            "h-3.5 w-3.5 text-ink transition-transform duration-500 ease-editorial",
            open && "rotate-45",
          ].join(" ")}
          strokeWidth={1.25}
        />
      </button>
      <div
        className={[
          "grid overflow-hidden transition-all duration-500 ease-editorial",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, openCart } = useCart();
  const { push } = useToast();
  const containerRef = useRef(null);

  const [active, setActive] = useState(0);
  const [tone, setTone] = useState(product?.tone || "gold");
  const [qty, setQty] = useState(1);

  const gallery = useMemo(() => (product ? buildGallery(product) : []), [product]);
  const related = useMemo(
    () => (product ? getRelatedProducts(product.id, 4) : []),
    [product]
  );

  useEffect(() => {
    setActive(0);
    setTone(product?.tone || "gold");
    setQty(1);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id, product?.id]);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product?.id, active]);

  if (!product) {
    return (
      <div className="bg-cream pt-32 pb-20 text-center">
        <h1 className="display-md text-ink">Piece not found</h1>
        <p className="mt-3 font-serif text-[15px] italic text-taupe">
          The piece you&rsquo;re looking for has wandered off.
        </p>
        <Link to="/shop" className="btn-primary mt-8">
          Back to Shop
        </Link>
      </div>
    );
  }

  const onAdd = () => {
    addToCart(product, tone, qty);
    push(`Added ${product.name}`);
  };

  return (
    <div ref={containerRef} className="bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-hairline"
      >
        <ol className="mx-auto flex max-w-screen-2xl items-center gap-2 px-6 py-3 font-sans text-[11px] tracking-[0.22em] uppercase text-taupe md:px-10 lg:px-16">
          <li>
            <Link to="/" className="hover:text-ink">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/shop" className="hover:text-ink">Shop</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-ink">{product.name}</li>
        </ol>
      </nav>

      {/* Main */}
      <div className="mx-auto max-w-screen-2xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              {/* Thumbnails (desktop) */}
              <div className="col-span-2 hidden flex-col gap-3 md:flex">
                {gallery.map((g, i) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={[
                      "aspect-square w-full overflow-hidden bg-bone border transition-colors duration-300",
                      active === i ? "border-espresso" : "border-transparent hover:border-hairline",
                    ].join(" ")}
                  >
                    <img
                      alt={`${product.name} thumbnail ${i + 1}`}
                      data-strk-img-id={`pdp-${product.id}-thumb-${i}`}
                      data-strk-img={g.query}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
              {/* Main image */}
              <div className="col-span-12 md:col-span-10">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-bone">
                  <img
                    key={gallery[active].id}
                    alt={`${product.name} view ${active + 1}`}
                    data-strk-img-id={`pdp-${product.id}-main-${active}`}
                    data-strk-img={gallery[active].query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Mobile thumbnails */}
                <div className="mt-4 flex gap-3 md:hidden">
                  {gallery.map((g, i) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`View image ${i + 1}`}
                      className={[
                        "aspect-square h-16 w-16 overflow-hidden bg-bone border transition-colors duration-300",
                        active === i ? "border-espresso" : "border-transparent",
                      ].join(" ")}
                    >
                      <img
                        alt={`${product.name} thumbnail ${i + 1}`}
                        data-strk-img-id={`pdp-${product.id}-m-thumb-${i}`}
                        data-strk-img={g.query}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="120"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <p className="eyebrow">{product.eyebrow}</p>
              <h1 className="display-md mt-4 text-ink">{product.name}</h1>
              <div className="mt-5 flex items-center gap-4">
                <p className="font-sans text-[20px] text-ink">${product.price}</p>
                <Stars rating={product.rating} reviews={product.reviews} />
              </div>
              <p className="mt-6 font-serif text-[16px] italic leading-relaxed text-charcoal">
                {product.description}
              </p>

              {/* Tone selector */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-ink">
                    Tone
                  </p>
                  <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-taupe">
                    {TONES.find((t) => t.id === tone)?.label}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {TONES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTone(t.id)}
                      aria-pressed={tone === t.id}
                      className={[
                        "flex items-center gap-3 border px-4 py-2.5 transition-all duration-300",
                        tone === t.id
                          ? "border-espresso bg-ivory text-ink"
                          : "border-hairline text-charcoal hover:border-charcoal",
                      ].join(" ")}
                    >
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 rounded-full border border-hairline"
                        style={{ background: t.swatch }}
                      />
                      <span className="font-sans text-[12px] tracking-[0.18em] uppercase">
                        {t.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-ink">
                  Quantity
                </p>
                <div className="mt-4 inline-flex items-center border border-hairline">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="p-3 text-ink transition-colors hover:text-gold"
                  >
                    <Minus className="h-3 w-3" strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center font-sans text-[14px] text-ink">{qty}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    className="p-3 text-ink transition-colors hover:text-gold"
                  >
                    <Plus className="h-3 w-3" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3">
                <button type="button" onClick={onAdd} className="btn-primary w-full">
                  <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Add to Bag — ${(product.price * qty).toFixed(0)}
                </button>
                <button
                  type="button"
                  className="btn-outline-dark w-full"
                  onClick={() => {
                    onAdd();
                    setTimeout(openCart, 80);
                  }}
                >
                  Buy It Now
                </button>
              </div>

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.28em] uppercase text-taupe hover:text-ink"
              >
                <Heart className="h-3.5 w-3.5" strokeWidth={1.25} />
                Add to Wishlist
              </button>

              {/* Reassurance row */}
              <ul className="mt-8 grid grid-cols-3 gap-3 border-t border-hairline pt-6 text-center">
                {[
                  { icon: Truck, label: "Free Shipping" },
                  { icon: RotateCcw, label: "30-Day Returns" },
                  { icon: Shield, label: "Hypoallergenic" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex flex-col items-center gap-2 text-taupe">
                    <Icon className="h-4 w-4" strokeWidth={1.25} />
                    <span className="font-sans text-[10px] tracking-[0.28em] uppercase">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion title="Description" defaultOpen>
                  <p className="font-sans text-[14px] leading-relaxed text-charcoal">
                    {product.description}
                  </p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <ul className="space-y-2 font-sans text-[14px] leading-relaxed text-charcoal">
                    {product.details.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-px w-3 flex-shrink-0 bg-gold" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-sans text-[13px] leading-relaxed text-taupe">
                    To keep your piece at its best: {product.care.join("; ")}.
                  </p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <ul className="space-y-2 font-sans text-[14px] leading-relaxed text-charcoal">
                    {product.shipping.map((s) => (
                      <li key={s} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-px w-3 flex-shrink-0 bg-gold" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-hairline bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16">
          <div className="flex items-end justify-between">
            <h2 className="display-md text-ink">You may also like</h2>
            <Link to="/shop" className="link-underline hidden md:inline-flex">
              View All
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
