import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { Heart, Share2, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import strkImgConfig from "@/strk-img-config.json";
import {
  getProductById,
  getRelatedProducts,
  CATEGORIES,
  MATERIALS,
} from "@/lib/products";
import ProductGallery from "@/components/product/ProductGallery";
import Accordion from "@/components/ui/Accordion";
import Stars from "@/components/ui/Stars";
import ProductCard from "@/components/product/ProductCard";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

const TONES = ["Gold", "Silver", "Rose Gold"];

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [tone, setTone] = useState(product?.tone || "Gold");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    if (product) {
      setTone(product.tone);
      setQty(1);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="container-shell py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <p className="mt-3 text-muted">It may have been moved or sold out.</p>
        <Link to="/shop" className="btn-primary mt-8">
          Back to Shop
        </Link>
      </div>
    );
  }

  const categoryLabel =
    CATEGORIES.find((c) => c.id === product.category)?.label || "";
  const materialLabel =
    MATERIALS.find((m) => m.id === product.material)?.label || "";

  const onAdd = () => {
    addItem({ ...product, tone }, qty);
    toast.success(`${product.name} added to your cart.`);
  };

  const accordionItems = [
    { title: "Description", content: <p>{product.description}</p> },
    {
      title: "Materials & Care",
      content: (
        <div className="space-y-3">
          <p>{product.materials}</p>
          <p className="text-muted">{product.care}</p>
        </div>
      ),
    },
    { title: "Shipping & Returns", content: <p>{product.shipping}</p> },
  ];

  const related = getRelatedProducts(product.id, 4);

  return (
    <div ref={containerRef} className="bg-ivory">
      {/* Crumb */}
      <div className="container-shell pt-28 md:pt-32">
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2 text-line">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2 text-line">/</span>
          <Link
            to={`/shop?collection=${product.category}`}
            className="hover:text-ink transition-colors"
          >
            {categoryLabel}
          </Link>
          <span className="mx-2 text-line">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="container-shell py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery product={product} />
          </div>

          {/* Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <span className="eyebrow">{categoryLabel}</span>
            <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-[44px] text-ink leading-[1.1] uppercase tracking-[0.08em]">
              {product.name}
            </h1>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-serif text-2xl text-ink">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-muted">USD</span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <Stars value={product.rating} size={14} />
              <span className="text-xs text-muted">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-ink/80">
              {product.shortDescription}
            </p>

            {/* Tone */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                Tone: <span className="text-ink">{tone}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {TONES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={`pill ${tone === t ? "pill-active" : ""}`}
                    aria-pressed={tone === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Material note */}
            <p className="mt-5 text-xs text-muted">
              {materialLabel} · Hypoallergenic · Tarnish-resistant finish
            </p>

            {/* Qty + Add */}
            <div className="mt-9 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-ink/40">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-11 h-12 flex items-center justify-center text-ink hover:bg-parchment"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-11 h-12 flex items-center justify-center text-ink hover:bg-parchment"
                >
                  +
                </button>
              </div>
              <button type="button" onClick={onAdd} className="btn-accent flex-1">
                Add to Cart
              </button>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-muted hover:text-ink transition-colors"
                onClick={() => toast("Saved to your wishlist.")}
              >
                <Heart size={14} strokeWidth={1.5} /> Save
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-muted hover:text-ink transition-colors"
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({ title: product.name, url: window.location.href })
                      .catch(() => {});
                  } else {
                    navigator.clipboard?.writeText(window.location.href);
                    toast.success("Link copied to clipboard.");
                  }
                }}
              >
                <Share2 size={14} strokeWidth={1.5} /> Share
              </button>
            </div>

            {/* Reassurance */}
            <ul className="mt-8 space-y-2 text-xs text-ink/70 border-t border-line/70 pt-6">
              <li className="flex items-center gap-3">
                <Truck size={14} strokeWidth={1.5} className="text-gold-deep" />
                Free worldwide shipping on orders over $80
              </li>
              <li className="flex items-center gap-3">
                <RotateCcw size={14} strokeWidth={1.5} className="text-gold-deep" />
                30-day returns on unworn pieces
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck size={14} strokeWidth={1.5} className="text-gold-deep" />
                Hypoallergenic · Nickel-free · Tarnish-resistant
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accordions full-width */}
      <section className="container-shell pb-16">
        <div className="max-w-3xl">
          <Accordion items={accordionItems} defaultOpen={0} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-parchment/40 border-t border-line/70">
        <div className="container-shell py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">
              You may also love.
            </h2>
            <Link
              to="/shop"
              className="text-[12px] uppercase tracking-[0.22em] text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
