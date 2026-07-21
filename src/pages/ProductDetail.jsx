import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Star,
  Plus,
  Minus,
  ChevronDown,
  Truck,
  RotateCcw,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { productById, relatedFor } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import ProductCard from "@/components/ui/ProductCard";
import strkImgConfig from "@/strk-img-config.json";


const productImages = (product) => [
  `${product.id}-img-1`,
  `${product.id}-img-2`,
  `${product.id}-img-3`,
  `${product.id}-img-4`,
];

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-[11px] uppercase tracking-widest2 text-espresso">
          {title}
        </span>
        <ChevronDown
          className={[
            "w-4 h-4 text-taupe-500 transition-transform duration-300",
            open ? "rotate-180" : "",
          ].join(" ")}
          strokeWidth={1.25}
        />
      </button>
      <div
        className={[
          "grid transition-all duration-500 ease-out",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = productById(id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState(product?.variants?.[0]?.id || "gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    setVariant(product?.variants?.[0]?.id || "gold");
    setQuantity(1);
    setActiveImage(0);
  }, [id, product]);

  useEffect(() => {
    if (!galleryRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, galleryRef.current);
  }, [id, activeImage]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const images = productImages(product);
  const related = relatedFor(product, 4);

  const onAddToBag = () => {
    addItem(product.id, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="bg-ivory-100">
      {/* Breadcrumb */}
      <div className="pt-24 sm:pt-28 border-b border-hairline">
        <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12 py-4">
          <nav
            aria-label="Breadcrumb"
            className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest2 text-taupe-500"
          >
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link to="/" className="hover:text-espresso">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/shop" className="hover:text-espresso">
                  Shop
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  to={`/shop?category=${product.category}`}
                  className="hover:text-espresso capitalize"
                >
                  {product.category}
                </Link>
              </li>
              <li>/</li>
              <li className="text-espresso truncate max-w-[180px] sm:max-w-none">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main two-column layout */}
      <section
        className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20"
        ref={galleryRef}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              {/* Thumbnails (desktop) */}
              <ul className="hidden sm:flex sm:flex-col sm:col-span-2 gap-3 order-2 sm:order-1">
                {images.map((imgId, i) => (
                  <li key={imgId}>
                    <button
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={[
                        "block w-full aspect-square bg-ivory-200 overflow-hidden border transition-colors",
                        activeImage === i
                          ? "border-espresso"
                          : "border-hairline hover:border-taupe-400",
                      ].join(" ")}
                      aria-label={`View image ${i + 1}`}
                      aria-current={activeImage === i}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        data-strk-img-id={`${product.id}-thumb-${i + 1}`}
                        data-strk-img={`[${product.id}-title] [velmora-tagline]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Main image */}
              <div className="sm:col-span-10 order-1 sm:order-2">
                <div className="relative aspect-[4/5] bg-ivory-200 overflow-hidden">
                  {images.map((imgId, i) => (
                    <img
                      key={imgId}
                      alt={`${product.name} — view ${i + 1}`}
                      data-strk-img-id={imgId}
                      data-strk-img={`[${product.id}-title] [velmora-tagline]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      loading={i === 0 ? "eager" : "lazy"}
                      className={[
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                        activeImage === i ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                    />
                  ))}
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-ivory-50/90 backdrop-blur-sm text-espresso text-[10px] uppercase tracking-widest2 px-3 py-1.5 font-sans">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Mobile thumbnail strip */}
                <ul className="sm:hidden flex gap-2 mt-3 overflow-x-auto no-scrollbar">
                  {images.map((imgId, i) => (
                    <li key={imgId} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => setActiveImage(i)}
                        className={[
                          "block w-16 h-16 bg-ivory-200 overflow-hidden border",
                          activeImage === i
                            ? "border-espresso"
                            : "border-hairline",
                        ].join(" ")}
                        aria-label={`View image ${i + 1}`}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          data-strk-img-id={`${product.id}-thumb-mob-${i + 1}`}
                          data-strk-img={`[${product.id}-title] [velmora-tagline]`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="120"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-taupe-500 capitalize">
                {product.category} · {product.material}
              </p>
              <h1
                id={`${product.id}-title`}
                className="product-name mt-3 text-2xl sm:text-3xl lg:text-4xl leading-tight"
              >
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={[
                        "w-3.5 h-3.5",
                        i < Math.round(product.rating)
                          ? "fill-gold-500 text-gold-500"
                          : "text-hairline",
                      ].join(" ")}
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="font-sans text-xs text-taupe-500">
                  {product.rating.toFixed(1)} · {product.reviews} reviews
                </p>
              </div>

              <p className="mt-6 font-sans text-2xl text-espresso tabular-nums">
                {formatPrice(product.price)}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-taupe-500 max-w-prose">
                {product.description}
              </p>

              {/* Variant selector */}
              {product.variants?.length > 1 && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <p className="eyebrow text-taupe-500">Finish</p>
                    <p className="font-sans text-xs text-taupe-500">
                      {product.variants.find((v) => v.id === variant)?.label}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVariant(v.id)}
                        className={[
                          "pill",
                          variant === v.id ? "pill-active" : "",
                        ].join(" ")}
                        aria-pressed={variant === v.id}
                      >
                        <span
                          className="inline-block w-3 h-3 rounded-full border border-espresso/10 mr-2"
                          style={{ backgroundColor: v.swatch }}
                          aria-hidden="true"
                        />
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity + add to bag */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <div className="inline-flex items-center justify-between border border-hairline sm:w-32">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-12 flex items-center justify-center text-espresso hover:text-gold-500"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                  <span className="font-sans text-sm tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-12 flex items-center justify-center text-espresso hover:text-gold-500"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={onAddToBag}
                  className={[
                    "btn-primary flex-1",
                    added ? "!bg-gold-500" : "",
                  ].join(" ")}
                >
                  {added ? "Added to Bag" : "Add to Bag"}
                </button>
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center justify-center w-12 h-12 border border-hairline text-espresso hover:border-espresso transition-colors"
                  aria-label="Save to wishlist"
                >
                  <Heart className="w-4 h-4" strokeWidth={1.25} />
                </button>
              </div>

              {/* Reassurance row */}
              <ul className="mt-6 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-widest2 text-taupe-500">
                <li className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-gold-500" strokeWidth={1.25} />
                  Free shipping
                </li>
                <li className="flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5 text-gold-500" strokeWidth={1.25} />
                  30-day returns
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-500" strokeWidth={1.25} />
                  Hypoallergenic
                </li>
              </ul>

              {/* Accordions */}
              <div className="mt-10">
                <AccordionItem title="Description" defaultOpen>
                  <p className="font-sans text-sm leading-relaxed text-taupe-500">
                    {product.description}
                  </p>
                </AccordionItem>
                <AccordionItem title="Materials & Care">
                  <div className="font-sans text-sm leading-relaxed text-taupe-500 space-y-4">
                    <div>
                      <p className="eyebrow text-espresso mb-2">
                        Materials
                      </p>
                      <ul className="space-y-1.5">
                        {product.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 before:content-['—'] before:text-gold-500 before:mr-1"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow text-espresso mb-2">Care</p>
                      <ul className="space-y-1.5">
                        {product.care.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 before:content-['—'] before:text-gold-500 before:mr-1"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem title="Shipping & Returns">
                  <div className="font-sans text-sm leading-relaxed text-taupe-500 space-y-3">
                    <p>
                      Free worldwide shipping on orders over $80. Most orders
                      ship within 2 business days from our Brooklyn studio.
                    </p>
                    <p>
                      We accept returns on unworn pieces within 30 days of
                      delivery. Engraved or final-sale items are not eligible
                      for return.
                    </p>
                  </div>
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-ivory-50 border-t border-hairline py-20 sm:py-24">
          <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <p className="eyebrow text-taupe-500">More to love</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-espresso">
                You may also like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
