import React, { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Star, ShoppingBag, Check, ChevronRight } from "lucide-react";
import ProductGallery from "@/components/product/ProductGallery";
import Accordion from "@/components/product/Accordion";
import RelatedProducts from "@/components/product/RelatedProducts";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import { useCart } from "@/context/CartContext";
import { PRODUCT_BY_ID, CATEGORIES } from "@/data/products";
import { formatPrice, cn } from "@/lib/utils";

const VARIANTS = [
  { id: "gold", label: "18K Gold Plated" },
  { id: "silver", label: "Sterling Silver" },
];

function Stars({ value, count }) {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="inline-flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.round(value);
          return (
            <Star
              key={i}
              className={cn(
                "w-3.5 h-3.5",
                filled ? "fill-gold text-gold" : "text-hairline"
              )}
              strokeWidth={0}
            />
          );
        })}
      </div>
      <span className="font-sans text-xs text-muted-light">
        {value.toFixed(1)} · {count} reviews
      </span>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCT_BY_ID[id];
  const { addItem } = useCart();
  const [variant, setVariant] = useState("gold");
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  const cat = CATEGORIES.find((c) => c.id === product?.category);

  const onAdd = () => {
    if (!product) return;
    setAdding(true);
    addItem(product.id, variant, qty);
    setTimeout(() => setAdding(false), 1200);
  };

  const accordionItems = useMemo(
    () =>
      product
        ? [
            { title: "Description", body: product.description },
            { title: "Materials & Care", body: `${product.materials}\n\n${product.care}` },
            { title: "Shipping & Returns", body: product.shipping },
          ]
        : [],
    [product]
  );

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <>
      <AnnouncementBar tone="light" />
      <div className="pt-16 md:pt-20" />

      <section className="container-editorial pt-8 md:pt-12 pb-16 md:pb-24">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="font-sans text-[11px] uppercase tracking-editorial text-muted-light flex items-center gap-2 flex-wrap mb-8"
        >
          <Link to="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-ink transition-colors">
            Shop
          </Link>
          {cat && (
            <>
              <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
              <Link
                to={`/shop/${cat.id}`}
                className="hover:text-ink transition-colors"
              >
                {cat.label}
              </Link>
            </>
          )}
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7">
            <ProductGallery product={product} />
          </div>

          {/* Info */}
          <div className="md:col-span-5 md:sticky md:top-24 md:self-start">
            <p className="eyebrow">{cat?.label || "Velmora"}</p>
            <h1
              id={product.titleId}
              className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-editorial font-medium text-ink leading-[1.1]"
            >
              {product.name}
            </h1>
            <p
              id={product.descId}
              className="mt-3 font-sans text-sm md:text-base text-muted-light leading-relaxed"
            >
              {product.subtitle}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-serif text-2xl text-ink">
                {formatPrice(product.price)}
              </span>
              <Stars value={product.rating} count={product.reviewCount} />
            </div>

            <hr className="my-8" />

            {/* Variant pills */}
            <div>
              <p className="font-sans text-[11px] uppercase tracking-editorial text-muted-light mb-3">
                Finish:{" "}
                <span className="text-ink">
                  {VARIANTS.find((v) => v.id === variant)?.label}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {VARIANTS.map((v) => {
                  const active = v.id === variant;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v.id)}
                      aria-pressed={active}
                      className={cn(
                        "px-4 py-2 border font-sans text-[11px] uppercase tracking-editorial transition-colors duration-500 ease-editorial",
                        active
                          ? "border-ink bg-ink text-bone"
                          : "border-hairline text-ink hover:border-ink"
                      )}
                    >
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-[11px] uppercase tracking-editorial text-muted-light mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-10 h-10 flex items-center justify-center text-ink hover:text-gold"
                >
                  −
                </button>
                <span
                  aria-live="polite"
                  className="w-10 text-center font-sans text-sm"
                >
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-10 h-10 flex items-center justify-center text-ink hover:text-gold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={onAdd}
              className="mt-8 w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink text-bone font-sans text-[11px] uppercase tracking-editorial font-medium hover:bg-gold hover:text-ink transition-colors duration-500"
            >
              {adding ? (
                <>
                  <Check className="w-4 h-4" strokeWidth={1.5} />
                  Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                  Add to Bag · {formatPrice(product.price * qty)}
                </>
              )}
            </button>

            <p className="mt-4 font-sans text-[11px] text-muted-light text-center">
              Free worldwide shipping over $75 · 30-day returns
            </p>

            {/* Accordion */}
            <div className="mt-10">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts productId={product.id} />
    </>
  );
}
