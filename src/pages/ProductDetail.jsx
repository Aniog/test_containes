import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronDown, ShoppingBag, Truck, RotateCcw, Sparkles, ShieldCheck, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Accordion, AccordionList } from "@/components/ui/Accordion";
import { StarRating } from "@/components/ui/StarRating";
import { ProductCard } from "@/components/product/ProductCard";
import { useCart } from "@/context/CartContext";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { formatCurrency, cn } from "@/lib/utils";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = useMemo(
    () => getRelatedProducts(product, 4),
    [product],
  );

  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const [variantId, setVariantId] = useState(product.variants?.[0]?.id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

  const variants = product.variants || [];
  const hasMultipleVariants = variants.length > 1;

  const handleAdd = () => {
    addItem(product, { variantId, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleBuyNow = () => {
    addItem(product, { variantId, quantity });
    setTimeout(() => {
      alert("Checkout coming soon — this is a demo storefront.");
    }, 400);
  };

  const accordions = [
    {
      title: "Description",
      body: <p>{product.description}</p>,
    },
    {
      title: "Details",
      body: <AccordionList items={product.details} />,
    },
    {
      title: "Materials & Care",
      body: (
        <div className="space-y-7">
          <AccordionList items={product.details.slice(0, 2)} />
          <AccordionList title="Care" items={product.care} />
        </div>
      ),
    },
    {
      title: "Shipping & Returns",
      body: <AccordionList items={product.shipping} />,
    },
  ];

  return (
    <div ref={containerRef} className="bg-cream pt-24 md:pt-28">
      {/* Breadcrumbs */}
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10 pt-2 md:pt-4">
        <nav aria-label="Breadcrumb" className="eyebrow-sm text-muted">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink truncate max-w-[40ch]">{product.name}</li>
          </ol>
        </nav>
      </div>

      {/* Main */}
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10 pt-8 md:pt-12 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 xl:gap-20">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {product.badge && (
              <p className="eyebrow-sm text-gold-deep mb-3">{product.badge}</p>
            )}
            <h1
              id={`product-detail-${product.slug}-title`}
              className="font-serif text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] uppercase tracking-[0.18em] text-espresso leading-[1.15] font-medium"
            >
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-4 flex-wrap">
              <span className="font-serif text-2xl md:text-[1.75rem] text-ink">
                {formatCurrency(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="font-serif text-lg text-muted line-through">
                  {formatCurrency(product.compareAtPrice)}
                </span>
              )}
              <span className="eyebrow-sm text-muted">·</span>
              <StarRating
                value={product.rating}
                count={product.reviewCount}
                size="sm"
              />
            </div>

            <p
              id={`product-detail-${product.slug}-short`}
              className="mt-7 font-serif italic text-[1.0625rem] md:text-[1.1875rem] text-ink/80 leading-[1.7] max-w-[48ch]"
            >
              {product.shortDescription}
            </p>

            {/* Variants */}
            {hasMultipleVariants && (
              <div className="mt-9">
                <div className="flex items-center justify-between mb-3">
                  <p className="eyebrow text-ink">Finish</p>
                  <p className="eyebrow-sm text-muted">
                    {variants.find((v) => v.id === variantId)?.label}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariantId(v.id)}
                      aria-pressed={variantId === v.id}
                      className={cn(
                        "inline-flex items-center gap-2.5 border px-4 py-2.5 transition-all duration-300",
                        variantId === v.id
                          ? "border-ink bg-ivory"
                          : "border-hairline hover:border-ink",
                      )}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-hairline"
                        style={{ backgroundColor: v.tone }}
                        aria-hidden="true"
                      />
                      <span className="eyebrow-sm text-ink">{v.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + add */}
            <div className="mt-9 flex items-stretch gap-3 md:gap-4">
              <QuantityStepper
                value={quantity}
                onChange={setQuantity}
                ariaLabel={product.name}
              />
              <button
                type="button"
                onClick={handleAdd}
                className="btn-primary flex-1"
              >
                {added ? (
                  <>
                    <Check className="w-3.5 h-3.5 mr-1" strokeWidth={2} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 mr-2" strokeWidth={1.5} />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={handleBuyNow}
              className="mt-3 btn-outline w-full"
            >
              Buy it now
            </button>

            {/* Reassurance row */}
            <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 pt-7 border-t border-hairline">
              {[
                { Icon: Truck, label: "Free worldwide shipping" },
                { Icon: RotateCcw, label: "30-day easy returns" },
                { Icon: Sparkles, label: "18K gold plated" },
                { Icon: ShieldCheck, label: "Hypoallergenic" },
              ].map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <Icon
                    className="w-[0.95rem] h-[0.95rem] text-gold-deep shrink-0"
                    strokeWidth={1.4}
                  />
                  <span className="text-sm text-ink/80 font-serif">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Accordions */}
            <div className="mt-10 md:mt-12">
              <Accordion items={accordions} defaultOpenIndex={0} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-hairline bg-sand py-20 md:py-28">
          <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-10 md:mb-14">
              <div>
                <p className="eyebrow text-muted mb-4">You may also love</p>
                <h2 className="text-display text-[2rem] sm:text-[2.5rem] md:text-[3rem] text-espresso">
                  <span className="text-display-italic">Worn</span> Together.
                </h2>
              </div>
              <Link to="/shop" className="link-editorial text-ink">
                View all &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-10 md:gap-y-14">
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

/* ---------------- Gallery ---------------- */

function ProductGallery({ product }) {
  const gallery =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image, product.image, product.image, product.image].filter(Boolean);
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_1fr] gap-3 md:gap-5">
      {/* Thumbnails */}
      <ul className="flex flex-col gap-3 md:gap-4">
        {gallery.map((src, idx) => (
          <li key={idx}>
            <button
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`View image ${idx + 1}`}
              aria-current={idx === active}
              className={cn(
                "block w-full aspect-square overflow-hidden bg-sand border-2 transition-colors",
                idx === active
                  ? "border-ink"
                  : "border-transparent hover:border-hairline",
              )}
            >
              <img
                alt={`${product.name} thumbnail ${idx + 1}`}
                loading="lazy"
                src={src}
                className="w-full h-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Main image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {gallery.map((src, idx) => (
          <img
            key={idx}
            alt={`${product.name} view ${idx + 1}`}
            loading={idx === 0 ? "eager" : "lazy"}
            src={src}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              idx === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Stepper ---------------- */

function QuantityStepper({ value, onChange, ariaLabel }) {
  return (
    <div className="inline-flex items-center border border-hairline">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label={`Decrease quantity of ${ariaLabel}`}
        className="w-12 h-14 flex items-center justify-center text-ink hover:bg-sand transition-colors"
        disabled={value <= 1}
      >
        <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.5} />
      </button>
      <span className="w-10 text-center font-sans text-sm font-medium text-ink tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        aria-label={`Increase quantity of ${ariaLabel}`}
        className="w-12 h-14 flex items-center justify-center text-ink hover:bg-sand transition-colors"
      >
        <ChevronDown className="w-3.5 h-3.5 rotate-180" strokeWidth={1.5} />
      </button>
    </div>
  );
}