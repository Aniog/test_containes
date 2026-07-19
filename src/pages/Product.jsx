import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Star,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import ProductCard from "@/components/product/ProductCard";

function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="product-name text-sm text-ink-300">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-ink-300 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={1.4}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="text-sm leading-relaxed text-ink-100">{children}</div>
        </div>
      </div>
    </div>
  );
}

function StarRating({ value, count }) {
  return (
    <div className="flex items-center gap-2 text-sm text-ink-50">
      <span className="flex items-center gap-0.5 text-gold-300">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            className={`h-3.5 w-3.5 ${
              idx < Math.round(value) ? "fill-current" : "fill-hairline"
            }`}
            strokeWidth={0}
          />
        ))}
      </span>
      <span className="text-ink-300 tabular-nums">{value.toFixed(1)}</span>
      <span aria-hidden>·</span>
      <Link
        to="#reviews"
        className="link-underline text-ink-50 hover:text-ink-300"
      >
        {count} reviews
      </Link>
    </div>
  );
}

export default function Product({ product }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [tone, setTone] = useState(product.toneOptions?.[0] || "Gold");
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  // Reset when navigating to a different product.
  useEffect(() => {
    setActiveImage(0);
    setTone(product.toneOptions?.[0] || "Gold");
    setQuantity(1);
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product, activeImage]);

  const onAdd = () => {
    addItem(product, { tone, quantity });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  };

  const related = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  // Tiny list of three product image IDs, used to pick the active one.
  // Each image is rendered as a direct <img data-strk-img-id={...}> so the
  // build-time image plugin can statically resolve every reference.
  const gallery = [
    { id: product.imgId, label: "View image 1" },
    { id: product.imgIdHover, label: "View image 2" },
    { id: product.imgIdDetail, label: "View image 3" },
  ];

  return (
    <div ref={containerRef} className="bg-cream-100 pt-20 md:pt-24">
      <div className="mx-auto max-w-editorial px-5 pt-6 md:px-10 md:pt-8 lg:px-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-ink-50">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="link-underline hover:text-ink-300">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/shop" className="link-underline hover:text-ink-300">
                Shop
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                to={`/shop?category=${product.category}`}
                className="link-underline hover:text-ink-300"
              >
                {product.category}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-ink-300">{product.name}</li>
          </ol>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-10 md:mt-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-3 md:flex-row md:gap-4">
            <ul
              className="flex flex-row gap-2 md:w-20 md:flex-col md:gap-3"
              role="tablist"
              aria-label="Product images"
            >
              <li>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeImage === 0}
                  aria-label={gallery[0].label}
                  onClick={() => setActiveImage(0)}
                  className={`block aspect-square w-16 overflow-hidden border bg-cream-200 transition-colors duration-300 md:w-20 ${
                    activeImage === 0
                      ? "border-ink-300"
                      : "border-hairline hover:border-ink-100"
                  }`}
                >
                  <img
                    alt=""
                    aria-hidden
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.titleId}] [${product.descId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="240"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeImage === 1}
                  aria-label={gallery[1].label}
                  onClick={() => setActiveImage(1)}
                  className={`block aspect-square w-16 overflow-hidden border bg-cream-200 transition-colors duration-300 md:w-20 ${
                    activeImage === 1
                      ? "border-ink-300"
                      : "border-hairline hover:border-ink-100"
                  }`}
                >
                  <img
                    alt=""
                    aria-hidden
                    data-strk-img-id={product.imgIdHover}
                    data-strk-img={`[${product.titleId}] [${product.descId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="240"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeImage === 2}
                  aria-label={gallery[2].label}
                  onClick={() => setActiveImage(2)}
                  className={`block aspect-square w-16 overflow-hidden border bg-cream-200 transition-colors duration-300 md:w-20 ${
                    activeImage === 2
                      ? "border-ink-300"
                      : "border-hairline hover:border-ink-100"
                  }`}
                >
                  <img
                    alt=""
                    aria-hidden
                    data-strk-img-id={product.imgIdDetail}
                    data-strk-img={`[${product.titleId}] [${product.descId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="240"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </button>
              </li>
            </ul>

            <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-cream-200">
              {activeImage === 0 && (
                <img
                  key={product.imgId}
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              {activeImage === 1 && (
                <img
                  key={product.imgIdHover}
                  alt={product.name}
                  data-strk-img-id={product.imgIdHover}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              {activeImage === 2 && (
                <img
                  key={product.imgIdDetail}
                  alt={product.name}
                  data-strk-img-id={product.imgIdDetail}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-y-0 left-2 flex items-center md:hidden">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() =>
                    setActiveImage(
                      (idx) => (idx - 1 + 3) % 3,
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100/80 text-ink-300"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.4} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center md:hidden">
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() =>
                    setActiveImage(
                      (idx) => (idx + 1) % 3,
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100/80 text-ink-300"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={1.4} />
                </button>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:sticky md:top-28 md:self-start">
            <p
              id={product.titleId}
              className="product-name text-xl text-ink-300 md:text-2xl"
            >
              {product.name}
            </p>
            <p
              id={product.descId}
              className="mt-2 text-sm text-ink-50"
            >
              {product.shortDescription}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="font-serif text-2xl text-ink-300">
                {formatPrice(product.price)}
              </span>
            </div>
            <div className="mt-2">
              <StarRating value={product.rating} count={product.reviewCount} />
            </div>

            {/* Tone selector */}
            {product.toneOptions?.length > 1 && (
              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <p className="eyebrow text-ink-50">Tone</p>
                  <p className="text-xs text-ink-50">
                    Selected: <span className="text-ink-300">{tone}</span>
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.toneOptions.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTone(t)}
                      className={`min-w-[88px] rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                        tone === t
                          ? "border-ink-300 bg-ink-300 text-cream-100"
                          : "border-hairline text-ink-300 hover:border-ink-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-7">
              <p className="eyebrow text-ink-50">Quantity</p>
              <div className="mt-3 inline-flex items-center border border-hairline">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="h-11 w-11 text-ink-300 transition-colors hover:text-gold-300"
                >
                  <Minus className="mx-auto h-4 w-4" strokeWidth={1.4} />
                </button>
                <span className="min-w-10 text-center text-sm tabular-nums text-ink-300">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="h-11 w-11 text-ink-300 transition-colors hover:text-gold-300"
                >
                  <Plus className="mx-auto h-4 w-4" strokeWidth={1.4} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={onAdd}
              className="btn-primary mt-7 w-full"
            >
              {justAdded ? "Added to Bag" : "Add to Bag"}
            </button>

            {/* Quick trust row */}
            <ul className="mt-6 grid grid-cols-3 gap-3 text-center">
              <li className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-ink-50">
                <Truck className="h-4 w-4 text-gold-300" strokeWidth={1.4} />
                Free Shipping
              </li>
              <li className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-ink-50">
                <RotateCcw className="h-4 w-4 text-gold-300" strokeWidth={1.4} />
                30-Day Returns
              </li>
              <li className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-ink-50">
                <Shield className="h-4 w-4 text-gold-300" strokeWidth={1.4} />
                Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
                <ul className="mt-4 space-y-1.5">
                  {product.details.map((d) => (
                    <li key={d} className="flex gap-2 text-ink-100">
                      <span aria-hidden className="text-gold-300">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="eyebrow text-ink-50">Materials</p>
                <ul className="mt-3 space-y-1.5">
                  {product.materials.map((m) => (
                    <li key={m} className="flex gap-2 text-ink-100">
                      <span aria-hidden className="text-gold-300">—</span>
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 eyebrow text-ink-50">Care</p>
                <ul className="mt-3 space-y-1.5">
                  {product.care.map((c) => (
                    <li key={c} className="flex gap-2 text-ink-100">
                      <span aria-hidden className="text-gold-300">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders over $80. Standard
                  delivery within 3–7 business days. Returns accepted within
                  30 days, in original condition. See our full policy for
                  details.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="mx-auto mt-24 max-w-editorial px-5 pb-8 md:px-10 md:mt-32 lg:px-14">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl text-ink-300 md:text-3xl">
            You may also love
          </h2>
          <Link to="/shop" className="btn-ghost hidden md:inline-flex">
            View All
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-7">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
