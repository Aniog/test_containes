import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronDown, Plus, Minus, Truck, RefreshCw, ShieldCheck, Heart } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { findProductById, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import StarRating from "@/components/product/StarRating";
import ProductCard from "@/components/product/ProductCard";

const TONES = [
  { id: "gold", label: "18K Gold" },
  { id: "silver", label: "Sterling Silver" },
  { id: "rose", label: "Rose Gold" },
];

function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-dune">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] uppercase tracking-widest2 font-medium text-espresso">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-taupe transition-transform duration-500",
            open && "rotate-180"
          )}
          strokeWidth={1.25}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden text-sm md:text-[15px] text-espresso/80 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = findProductById(id);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [activeImg, setActiveImg] = useState(0);
  const [tone, setTone] = useState(product?.tone || "gold");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setActiveImg(0);
    setQty(1);
    if (product) setTone(product.tone || "gold");
  }, [id]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [id, activeImg]);

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-40 pb-32 text-center bg-canvas min-h-[60vh]">
        <p className="font-serif text-3xl text-espresso mb-3">Piece not found</p>
        <p className="text-taupe mb-6">It may have moved or sold out.</p>
        <Link
          to="/shop"
          className="text-[11px] uppercase tracking-widest2 text-espresso border-b border-espresso pb-0.5"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, qty, tone);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div ref={containerRef} className="bg-canvas">
      {/* Breadcrumb */}
      <div className="max-w-editorial mx-auto px-6 md:px-10 pt-28 md:pt-32">
        <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-widest2 text-taupe">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-espresso truncate max-w-[180px] md:max-w-none">
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      <section className="max-w-editorial mx-auto px-6 md:px-10 pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7 lg:col-span-7">
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-5">
              {/* Thumbnails (desktop) */}
              <div className="hidden md:flex flex-col gap-3 w-20 flex-none">
                {product.images.map((img, i) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "block aspect-square bg-surface overflow-hidden border transition-colors",
                      activeImg === i ? "border-espresso" : "border-dune hover:border-espresso/50"
                    )}
                  >
                    <img
                      alt={`${product.name} thumbnail ${i + 1}`}
                      data-strk-img-id={`${img.id}-thumb`}
                      data-strk-img={`[${product.id}-tagline] [${product.id}-name] detail`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              {/* Main image */}
              <div className="flex-1 bg-surface aspect-[4/5] overflow-hidden">
                <img
                  key={`${product.id}-${activeImg}`}
                  alt={product.name}
                  data-strk-img-id={`${product.images[activeImg].id}-main`}
                  data-strk-img={`[${product.id}-tagline] [${product.id}-name] ${activeImg === 0 ? "primary" : "alternate"}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover animate-fadeIn"
                />
              </div>
              {/* Thumbnails (mobile) */}
              <div className="md:hidden flex gap-3 overflow-x-auto no-scrollbar">
                {product.images.map((img, i) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "block w-16 h-16 flex-none bg-surface overflow-hidden border transition-colors",
                      activeImg === i ? "border-espresso" : "border-dune"
                    )}
                  >
                    <img
                      alt={`${product.name} thumbnail ${i + 1}`}
                      data-strk-img-id={`${img.id}-m-thumb`}
                      data-strk-img={`[${product.id}-tagline] [${product.id}-name] detail`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-5 lg:col-span-5 md:sticky md:top-28 md:self-start">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
              {product.tagline}
            </p>
            <h1
              id={`${product.id}-name`}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso uppercase tracking-[0.16em] leading-tight"
            >
              {product.name}
            </h1>
            <p
              id={`${product.id}-tagline`}
              className="mt-4 text-taupe text-sm md:text-[15px] leading-relaxed"
            >
              {product.description}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="font-serif text-2xl md:text-3xl text-espresso">
                {formatPrice(product.price)}
              </span>
              <span className="text-[11px] uppercase tracking-widest2 text-taupe">
                · Free shipping over $75
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-taupe">
              <StarRating value={product.rating} />
              <span className="text-espresso">{product.rating.toFixed(1)}</span>
              <span>· {product.reviewCount} reviews</span>
            </div>

            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-espresso mb-3 font-medium">
                Tone
              </p>
              <div className="flex flex-wrap gap-2.5">
                {TONES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    aria-pressed={tone === t.id}
                    className={cn(
                      "h-10 px-5 text-[11px] uppercase tracking-widest2 border transition-colors duration-300",
                      tone === t.id
                        ? "border-espresso bg-espresso text-canvas"
                        : "border-dune text-espresso hover:border-espresso"
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-dune h-12">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-10 h-12 inline-flex items-center justify-center text-taupe hover:text-espresso"
                >
                  <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm text-espresso">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-10 h-12 inline-flex items-center justify-center text-taupe hover:text-espresso"
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  "flex-1 inline-flex items-center justify-center h-12 text-[11px] uppercase tracking-widest2 font-medium transition-colors duration-300",
                  added
                    ? "bg-gold text-canvas"
                    : "bg-espresso text-canvas hover:bg-espresso/90"
                )}
              >
                {added ? "Added to Bag" : "Add to Cart"}
              </button>
              <button
                type="button"
                aria-label="Save to wishlist"
                className="h-12 w-12 inline-flex items-center justify-center border border-dune text-taupe hover:text-espresso hover:border-espresso transition-colors"
              >
                <Heart className="h-4 w-4" strokeWidth={1.25} />
              </button>
            </div>

            <ul className="mt-6 grid grid-cols-3 gap-2 text-center text-[11px] uppercase tracking-widest2 text-taupe border-y border-dune py-4">
              <li className="flex flex-col items-center gap-1.5">
                <Truck className="h-4 w-4" strokeWidth={1.25} />
                <span>Free Shipping</span>
              </li>
              <li className="flex flex-col items-center gap-1.5">
                <RefreshCw className="h-4 w-4" strokeWidth={1.25} />
                <span>30-Day Returns</span>
              </li>
              <li className="flex flex-col items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" strokeWidth={1.25} />
                <span>Hypoallergenic</span>
              </li>
            </ul>

            <div className="mt-6">
              <Accordion title="Description" defaultOpen>
                {product.details}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-surface border-t border-dune">
        <div className="max-w-editorial mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-tight">
              You may also like
            </h2>
            <Link
              to="/shop"
              className="text-[11px] uppercase tracking-widest2 text-espresso hover:text-gold transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
