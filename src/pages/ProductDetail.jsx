import React, { useEffect, useRef, useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Plus, Minus, ChevronDown, Truck, RotateCcw, Sparkles } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/product/ProductCard";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans uppercase tracking-widest2 text-[11px] text-ink">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={cn(
            "text-ink transition-transform duration-300",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      {open ? (
        <div className="pb-6 text-sm text-mocha leading-relaxed">{children}</div>
      ) : null}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [activeImg, setActiveImg] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || "Gold");
  const [quantity, setQuantity] = useState(1);

  const galleryIds = useMemo(() => {
    if (!product) return [];
    return [
      product.imgIds.main,
      product.imgIds.gallery1,
      product.imgIds.gallery2,
      product.imgIds.gallery3,
    ];
  }, [product]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setActiveImg(0);
    setQuantity(1);
    setVariant(product?.variants?.[0] || "Gold");
  }, [id, product]);

  useEffect(() => {
    const idAnim = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(idAnim);
  }, [id, activeImg]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 pt-32">
        <p className="font-sans uppercase tracking-widest2 text-[11px] text-taupe mb-4">
          Not found
        </p>
        <h1 className="font-serif text-4xl text-ink mb-6">
          We couldn't find that piece.
        </h1>
        <Button onClick={() => navigate("/shop")} variant="primary">
          Browse the collection
        </Button>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  return (
    <div ref={containerRef} className="bg-cream text-ink pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        {/* breadcrumbs */}
        <nav className="py-6 text-[11px] uppercase tracking-widest2 text-taupe">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Gallery */}
          <div className="md:col-span-7">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* thumbnails */}
              <div className="flex md:flex-col gap-3 md:w-20">
                {galleryIds.map((imgId, idx) => (
                  <button
                    key={imgId}
                    type="button"
                    onClick={() => setActiveImg(idx)}
                    aria-label={`Show image ${idx + 1}`}
                    className={cn(
                      "relative w-16 h-20 md:w-full md:h-24 bg-bone overflow-hidden border transition-colors",
                      activeImg === idx
                        ? "border-ink"
                        : "border-transparent hover:border-hairline"
                    )}
                  >
                    <img
                      alt=""
                      data-strk-img-id={`${imgId}-thumb`}
                      data-strk-img={`[${product.titleId}] detail view ${idx + 1}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="180"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* main image */}
              <div className="flex-1 relative aspect-[3/4] bg-bone overflow-hidden">
                <img
                  key={galleryIds[activeImg]}
                  alt={product.name}
                  data-strk-img-id={galleryIds[activeImg]}
                  data-strk-img={`[${product.descId}] [${product.titleId}] detail editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover animate-fadeUp"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 md:pl-2">
            <div className="md:sticky md:top-28">
              <p className="font-sans uppercase tracking-widest2 text-[11px] text-taupe mb-4">
                {product.category}
              </p>
              <h1
                id={product.titleId}
                className="font-serif uppercase tracking-wider2 text-3xl md:text-[34px] leading-tight text-ink"
              >
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-1 text-champagne">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <span className="text-xs text-taupe">
                  {product.rating.toFixed(1)} · {product.reviewCount} reviews
                </span>
              </div>

              <p className="mt-6 font-serif text-2xl text-ink">
                {formatPrice(product.price)}
              </p>

              <p
                id={product.descId}
                className="mt-5 text-base text-mocha leading-relaxed"
              >
                {product.description}
              </p>

              {/* Variant pills */}
              <div className="mt-8">
                <p className="font-sans uppercase tracking-widest2 text-[11px] text-taupe mb-3">
                  Tone — <span className="text-ink">{variant}</span>
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVariant(v)}
                      className={cn(
                        "px-5 py-2.5 text-[11px] uppercase tracking-widest2 border transition-all duration-300",
                        variant === v
                          ? "border-ink bg-ink text-cream"
                          : "border-hairline text-ink hover:border-ink"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <p className="font-sans uppercase tracking-widest2 text-[11px] text-taupe mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-hairline">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-11 h-11 flex items-center justify-center hover:text-champagne"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center text-sm">{quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-11 h-11 flex items-center justify-center hover:text-champagne"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <div className="mt-8">
                <Button
                  variant="accent"
                  size="block"
                  onClick={() => addItem(product, { variant, quantity })}
                >
                  Add to Cart — {formatPrice(product.price * quantity)}
                </Button>
              </div>

              {/* Quick perks */}
              <ul className="mt-8 grid grid-cols-3 gap-3 text-center">
                <li className="flex flex-col items-center gap-2 text-[10.5px] uppercase tracking-widest2 text-taupe">
                  <Truck size={16} strokeWidth={1.5} className="text-champagne" />
                  Free shipping
                </li>
                <li className="flex flex-col items-center gap-2 text-[10.5px] uppercase tracking-widest2 text-taupe">
                  <RotateCcw size={16} strokeWidth={1.5} className="text-champagne" />
                  30-day returns
                </li>
                <li className="flex flex-col items-center gap-2 text-[10.5px] uppercase tracking-widest2 text-taupe">
                  <Sparkles size={16} strokeWidth={1.5} className="text-champagne" />
                  18k gold plated
                </li>
              </ul>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion title="Description" defaultOpen>
                  <p>{product.description}</p>
                  <p className="mt-3 text-mocha/85">
                    Hand-finished in our atelier; quality-checked piece by piece.
                    Material: {product.material}.
                  </p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <p>
                    18k gold plated over recycled brass. Hypoallergenic and nickel-free.
                  </p>
                  <p className="mt-3">
                    To preserve the finish, avoid water, perfume, and lotion. Wipe gently
                    with a soft cloth and store in the pouch provided.
                  </p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p>
                    Complimentary worldwide shipping on every order. Most orders ship
                    within 1–2 business days from our New York atelier.
                  </p>
                  <p className="mt-3">
                    Not in love? Returns are free within 30 days, no questions asked.
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-bone py-20 md:py-24 border-t border-hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-ink">
              You may also like
            </h2>
            <Link
              to="/shop"
              className="hidden md:inline-block font-sans uppercase tracking-widest2 text-[11px] text-ink border-b border-ink hover:text-champagne hover:border-champagne pb-1 transition-all duration-300"
            >
              Shop All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 md:gap-x-6 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
