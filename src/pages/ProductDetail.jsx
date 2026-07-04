import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Minus, Plus, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { getProductById, getProductsByIds } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Accordion from "@/components/product/Accordion";
import StarRating from "@/components/product/StarRating";
import { useCart } from "@/context/CartContext";
import { useStrkImages } from "@/hooks/useStrkImages";
import { formatPrice } from "@/lib/utils";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const GALLERY_IMAGES = 4;

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const ref = useRef(null);
  useStrkImages(ref, [id]);
  const { addToCart } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState(product?.defaultVariant || "gold");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setActiveImage(0);
    setVariant(product?.defaultVariant || "gold");
    setQty(1);
  }, [id, product?.defaultVariant]);

  const related = useMemo(
    () => (product ? getProductsByIds(product.related) : []),
    [product],
  );

  if (!product) {
    return (
      <div className="container-editorial pt-32 pb-32 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="font-serif text-5xl text-ink mt-3">We couldn't find that piece.</h1>
        <Link to="/shop" className="btn-outline mt-10">Return to Shop</Link>
      </div>
    );
  }

  function onAddToCart() {
    addToCart(product.id, variant, qty);
    toast.success(`${product.name} added to your bag.`);
  }

  const accordionItems = [
    { title: "Description", content: <p>{product.longDescription}</p> },
    {
      title: "Materials & Care",
      content: <p>{product.materials} <br /><br /> {product.care}</p>,
    },
    { title: "Shipping & Returns", content: <p>{product.shipping}</p> },
  ];

  return (
    <div ref={ref} className="pt-24 md:pt-28 bg-cream">
      <div className="container-editorial">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="py-6 text-[11px] uppercase tracking-[0.22em] text-taupe">
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link to="/" className="hover:text-ink">Home</Link></li>
            <ChevronRight className="w-3 h-3" />
            <li><Link to="/shop" className="hover:text-ink">Shop</Link></li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-ink truncate max-w-[40ch]">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 pb-20">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 md:gap-4 md:w-20 flex-shrink-0">
              {Array.from({ length: GALLERY_IMAGES }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`relative aspect-square overflow-hidden bg-ivory border ${
                    activeImage === i ? "border-ink" : "border-transparent hover:border-hairline"
                  } transition-colors`}
                >
                  <img
                    alt={`${product.name} thumbnail ${i + 1}`}
                    data-strk-img-id={`${product.imgId1}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src={PLACEHOLDER}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            <div className="relative flex-1 aspect-[3/4] overflow-hidden bg-ivory">
              <img
                alt={product.name}
                data-strk-img-id={activeImage === 0 ? product.imgId1 : `${product.imgId1}-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                key={`${id}-${activeImage}`}
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-cream/95 text-ink text-[10px] uppercase tracking-[0.22em] px-2.5 py-1">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mt-3 leading-[1.05] tracking-[-0.01em] text-balance"
            >
              {product.name.toUpperCase()}
            </h1>
            <div className="mt-5 flex items-center gap-5">
              <span className="font-serif text-2xl text-ink tabular-nums">
                {formatPrice(product.price)}
              </span>
              <span className="text-hairline">·</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <p id={product.descId} className="mt-6 text-base text-ink-soft leading-relaxed max-w-prose">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="eyebrow mb-3">Finish</p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => {
                  const selected = variant === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v.id)}
                      aria-pressed={selected}
                      className={`inline-flex items-center gap-2.5 border px-4 py-2.5 text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 ease-editorial ${
                        selected
                          ? "border-ink bg-ink text-cream"
                          : "border-hairline bg-transparent text-ink hover:border-ink"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-ink/30"
                        style={{ backgroundColor: v.swatch }}
                      />
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="eyebrow mb-3">Quantity</p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-11 h-11 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm tabular-nums">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-11 h-11 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={onAddToCart}
              className="btn-primary w-full mt-8"
            >
              Add to Bag · {formatPrice(product.price * qty)}
            </button>

            {/* Promise icons */}
            <ul className="mt-8 grid grid-cols-3 gap-3 text-center">
              <li className="flex flex-col items-center gap-2 py-4 border border-hairline">
                <Truck className="w-4 h-4 text-gold-deep" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink">Free Shipping</span>
              </li>
              <li className="flex flex-col items-center gap-2 py-4 border border-hairline">
                <RefreshCw className="w-4 h-4 text-gold-deep" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink">30-Day Returns</span>
              </li>
              <li className="flex flex-col items-center gap-2 py-4 border border-hairline">
                <ShieldCheck className="w-4 h-4 text-gold-deep" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink">Hypoallergenic</span>
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-20 border-t border-hairline">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="eyebrow">You May Also Love</p>
                <h2 className="font-serif text-3xl md:text-4xl text-ink mt-3 tracking-[-0.01em]">
                  More from Velmora
                </h2>
              </div>
              <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-ink hover:text-gold-deep transition-colors">
                Shop All →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
