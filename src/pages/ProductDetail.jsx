import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ChevronRight,
  Heart,
  Minus,
  Plus,
  RefreshCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { formatPrice, getProduct, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/ui/StarRating";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const VARIANTS = ["Gold", "Silver"];

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const { addItem } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    setActiveImage(0);
    setVariant("Gold");
    setQuantity(1);
    setWishlisted(false);
  }, [id]);

  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]);

  const related = useMemo(
    () => products.filter((p) => p.id !== id).slice(0, 4),
    [id]
  );

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 pt-24 text-center">
        <p className="font-serif text-3xl text-noir">Piece not found</p>
        <Link
          to="/shop"
          className="bg-noir px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory hover:bg-espresso"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const galleryViews = [
    { suffix: "studio", note: "studio still life on warm neutral silk" },
    { suffix: "worn", note: "worn by a model, editorial close-up" },
    { suffix: "macro", note: "extreme macro detail of gold texture" },
    { suffix: "flatlay", note: "flat lay with gift box and ribbon" },
  ];

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <nav className="flex items-center gap-2 py-5 text-[11px] uppercase tracking-[0.18em] text-taupe">
          <Link to="/" className="transition-colors hover:text-noir">
            Home
          </Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="transition-colors hover:text-noir">
            Shop
          </Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-noir">{product.name}</span>
        </nav>

        <div className="grid gap-10 pb-16 md:grid-cols-2 md:gap-16 md:pb-24">
          <div>
            <div className="relative overflow-hidden bg-cream">
              <div className="aspect-[3/4]">
                <img
                  key={activeImage}
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={`[pdp-tag-${product.id}] [pdp-name-${product.id}] ${galleryViews[activeImage].note}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1100"
                  src={PLACEHOLDER_SRC}
                  alt={product.name}
                  className="h-full w-full animate-fade-up object-cover"
                />
              </div>
              {product.isNew && (
                <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-noir">
                  New
                </span>
              )}
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {galleryViews.map((view, i) => (
                <button
                  key={view.suffix}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`View ${i + 1}`}
                  className={cn(
                    "overflow-hidden border bg-cream transition-all duration-300",
                    activeImage === i
                      ? "border-gold"
                      : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <div className="aspect-square">
                    <img
                      data-strk-img-id={`pdp-thumb-${product.id}-${view.suffix}`}
                      data-strk-img={`[pdp-name-${product.id}] gold jewelry ${view.note}`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="300"
                      src={PLACEHOLDER_SRC}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="md:py-4">
            <p
              id={`pdp-tag-${product.id}`}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold"
            >
              {product.tagline}
            </p>
            <h1
              id={`pdp-name-${product.id}`}
              className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-[0.1em] text-noir md:text-5xl"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={15} />
              <span className="text-xs text-taupe">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl text-noir">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-taupe">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-noir">
                Finish — <span className="text-taupe">{variant}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {VARIANTS.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300",
                      variant === v
                        ? "border-noir bg-noir text-ivory"
                        : "border-line bg-transparent text-noir hover:border-noir"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <div className="flex items-center border border-line">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-4 text-noir transition-colors hover:text-gold"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-8 text-center text-sm font-medium text-noir">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-4 text-noir transition-colors hover:text-gold"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(product.id, { variant, quantity })}
                className="flex-1 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory transition-colors duration-300 hover:bg-goldlight"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
              <button
                type="button"
                aria-label="Add to wishlist"
                onClick={() => setWishlisted(!wishlisted)}
                className={cn(
                  "flex items-center justify-center border px-4 transition-all duration-300",
                  wishlisted
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-line text-noir hover:border-noir"
                )}
              >
                <Heart
                  size={17}
                  strokeWidth={1.5}
                  className={wishlisted ? "fill-gold" : ""}
                />
              </button>
            </div>

            <ul className="mt-8 space-y-3 border-t border-line pt-8">
              {[
                { icon: Truck, text: "Free worldwide shipping on all orders" },
                { icon: RefreshCcw, text: "30-day returns, no questions asked" },
                { icon: ShieldCheck, text: "Hypoallergenic · 2-year warranty" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-taupe">
                  <Icon size={16} strokeWidth={1.5} className="text-gold" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5">
                  {product.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  Crafted in 18K gold plate over recycled brass. {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Orders ship within 1–2 business days with complimentary
                  tracked worldwide delivery (3–7 business days). Not the one?
                  Return or exchange within 30 days — free, always.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <section className="border-t border-line bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-noir md:text-4xl">
              You May Also Like
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
