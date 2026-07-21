import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronRight, Plus, Minus, Truck, RotateCcw, ShieldCheck, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductBySlug, getRelatedProducts, formatPrice } from "@/data/products.js";
import { useCart } from "@/context/CartContext.jsx";
import ProductCard from "@/components/product/ProductCard.jsx";
import StarRating from "@/components/ui/StarRating.jsx";
import { cn } from "@/lib/utils.js";

const accordion = [
  {
    id: "description",
    title: "Description",
    body: (p) => p.description,
  },
  {
    id: "materials",
    title: "Materials & Care",
    body: () =>
      "Solid brass core, plated in 18K gold using a thicker-than-standard micron layer for daily wear. Hypoallergenic and nickel-free. To keep the finish, remove before showering, sleeping, and applying lotions. Store dry in the pouch provided.",
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    body: () =>
      "Free worldwide shipping on orders over $75. Standard delivery in 3–7 business days. We accept returns within 30 days, unworn, in their original packaging — email hello@velmora.com to start.",
  },
];

const toneLabel = {
  gold: { label: "18K Gold", description: "Warm, classic finish" },
  silver: { label: "Sterling Silver", description: "Cool, polished finish" },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-32 pb-20 bg-cream-100">
        <div className="text-center">
          <p className="eyebrow text-muted-500">Not Found</p>
          <h1 className="mt-3 font-serif text-4xl text-ink-800">This piece has wandered off.</h1>
          <Link to="/shop" className="btn-outline mt-8">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return <ProductDetailInner product={product} key={product.id} />;
}

function ProductDetailInner({ product }) {
  const galleryRef = useRef(null);
  const { addItem } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [tone, setTone] = useState(product.tone?.[0] || "gold");
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");

  // Use the strk-img runtime to populate the gallery on mount
  useEffect(() => {
    if (!galleryRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, galleryRef.current);
  }, [product.id]);

  const related = useMemo(() => getRelatedProducts(product, 4), [product]);

  const images = [product.imgId, product.hoverImgId];
  const labels = ["Primary", "Detail"];

  const handleAdd = () => {
    addItem({ ...product }, { qty, tone });
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-100 pt-24 sm:pt-28 border-b border-hairline/50">
        <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
          <nav className="py-4 text-[11px] tracking-[0.22em] uppercase text-muted-500 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-ink-800">Home</Link>
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            <Link to="/shop" className="hover:text-ink-800">Shop</Link>
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-ink-800 capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            <span className="text-ink-800">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-cream-100 pb-20 sm:pb-24">
        <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Gallery */}
            <div ref={galleryRef} className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                {/* Thumbnails (desktop) */}
                <ul className="hidden lg:flex lg:flex-col gap-3 col-span-2">
                  {images.map((id, i) => (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => setActiveImg(i)}
                        className={cn(
                          "block w-full aspect-square overflow-hidden bg-ink-800 border transition-colors",
                          activeImg === i ? "border-ink-800" : "border-transparent hover:border-hairline"
                        )}
                        aria-label={`Show ${labels[i]}`}
                      >
                        <img
                          alt={`${product.name} thumbnail ${i + 1}`}
                          data-strk-img-id={`${id}-thumb`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Main image */}
                <div className="col-span-12 lg:col-span-10">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900">
                    <img
                      key={`${product.id}-${activeImg}`}
                      alt={product.name}
                      data-strk-img-id={images[activeImg]}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                      className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                    />
                    {product.bestseller && (
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-cream-100/90 text-ink-800 text-[10px] tracking-[0.28em] uppercase">
                        Bestseller
                      </div>
                    )}
                  </div>
                  {/* Mobile-only thumbnail strip */}
                  <ul className="mt-3 flex gap-3 lg:hidden">
                    {images.map((id, i) => (
                      <li key={id} className="flex-1">
                        <button
                          type="button"
                          onClick={() => setActiveImg(i)}
                          className={cn(
                            "block w-full aspect-square overflow-hidden bg-ink-800 border",
                            activeImg === i ? "border-ink-800" : "border-transparent"
                          )}
                          aria-label={`Show ${labels[i]}`}
                        >
                          <img
                            alt=""
                            data-strk-img-id={`${id}-thumb-m`}
                            data-strk-img={`[${product.descId}] [${product.titleId}]`}
                            data-strk-img-ratio="1x1"
                            data-strk-img-width="200"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Info column */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow text-muted-500">{product.material}</p>
                <h1
                  id={product.titleId}
                  className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800 leading-[1.05]"
                >
                  {product.name}
                </h1>
                <div
                  id={product.descId}
                  className="mt-4 flex items-center gap-3 text-sm"
                >
                  <StarRating value={product.rating} size={14} showValue />
                  <span className="text-[11px] tracking-[0.18em] uppercase text-muted-500">
                    {product.reviewCount} reviews
                  </span>
                </div>

                <p className="mt-6 font-serif text-3xl text-ink-800">{formatPrice(product.price)}</p>

                <p className="mt-6 text-[15px] leading-relaxed text-ink-800/85">
                  {product.description}
                </p>

                {/* Tone pills */}
                {product.tone?.length > 1 && (
                  <div className="mt-8">
                    <p className="eyebrow text-ink-800 mb-3">Finish</p>
                    <div className="flex flex-wrap gap-2.5">
                      {product.tone.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTone(t)}
                          className={cn(
                            "inline-flex items-center gap-2.5 px-4 py-2.5 border text-[11px] tracking-[0.22em] uppercase transition-colors",
                            tone === t
                              ? "border-ink-800 bg-ink-800 text-cream-100"
                              : "border-hairline text-ink-800 hover:border-ink-800"
                          )}
                        >
                          <span
                            aria-hidden
                            className={cn(
                              "w-3.5 h-3.5 rounded-full border",
                              t === "gold"
                                ? "bg-gradient-to-br from-gold-300 to-gold-500 border-gold-500"
                                : "bg-gradient-to-br from-sand-100 to-cream-200 border-muted-400"
                            )}
                          />
                          {toneLabel[t]?.label}
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-[11px] text-muted-500">
                      {toneLabel[tone]?.description}
                    </p>
                  </div>
                )}

                {/* Quantity + Add */}
                <div className="mt-8 flex items-stretch gap-3">
                  <div className="inline-flex items-center border border-hairline">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="w-11 h-12 flex items-center justify-center text-ink-800 hover:bg-sand-100"
                    >
                      <Minus className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <span className="w-10 text-center text-sm tracking-wider">{qty}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty((q) => q + 1)}
                      className="w-11 h-12 flex items-center justify-center text-ink-800 hover:bg-sand-100"
                    >
                      <Plus className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </div>
                  <button type="button" onClick={handleAdd} className="btn-primary flex-1">
                    Add to Bag · {formatPrice(product.price * qty)}
                  </button>
                </div>

                <button
                  type="button"
                  className="mt-3 btn-outline w-full"
                >
                  Add to Wishlist
                </button>

                {/* Trust row */}
                <ul className="mt-7 grid grid-cols-3 gap-2 text-center">
                  <TrustPill Icon={Truck} label="Free Shipping" />
                  <TrustPill Icon={RotateCcw} label="30-Day Returns" />
                  <TrustPill Icon={ShieldCheck} label="Hypoallergenic" />
                </ul>

                {/* Accordions */}
                <div className="mt-10 divide-y divide-hairline/70 border-y border-hairline/70">
                  {accordion.map((a) => {
                    const isOpen = openAccordion === a.id;
                    return (
                      <div key={a.id}>
                        <button
                          type="button"
                          onClick={() => setOpenAccordion(isOpen ? "" : a.id)}
                          className="w-full flex items-center justify-between py-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="text-[11px] tracking-[0.28em] uppercase text-ink-800 font-medium">
                            {a.title}
                          </span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 text-ink-800 transition-transform duration-300",
                              isOpen && "rotate-180"
                            )}
                            strokeWidth={1.5}
                          />
                        </button>
                        <div
                          className={cn(
                            "grid transition-all duration-300",
                            isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="text-sm leading-relaxed text-ink-800/85">
                              {a.body(product)}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-sand-100 py-20 sm:py-24">
        <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="eyebrow text-muted-500">You May Also Like</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800">Quiet Companions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TrustPill({ Icon, label }) {
  return (
    <li className="flex flex-col items-center gap-1.5 py-3">
      <Icon className="w-4 h-4 text-gold-500" strokeWidth={1.25} />
      <span className="text-[10px] tracking-[0.22em] uppercase text-ink-800">{label}</span>
    </li>
  );
}
