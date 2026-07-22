import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  ChevronRight,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import StrkImage from "@/components/StrkImage";
import StarRating from "@/components/StarRating";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { getProduct, getRelated, formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

const VARIANTS = ["Gold", "Silver"];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-noir-line">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[11px] font-semibold uppercase tracking-luxe text-cream">
          {title}
        </span>
        <ChevronRight
          className={cn(
            "h-4 w-4 text-gold transition-transform duration-300",
            open && "rotate-90"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-sand">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [variant, setVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setVariant("Gold");
    setQuantity(1);
    setActiveImage(0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]);

  const related = useMemo(() => (product ? getRelated(product, 4) : []), [product]);

  if (!product) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-5 pt-24 text-center">
        <h1 className="font-serif text-4xl text-cream">Piece not found</h1>
        <p className="mt-3 text-sm text-sand">
          This piece may have sold out or moved.
        </p>
        <Link
          to="/shop"
          className="mt-8 bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-luxe text-noir transition-colors hover:bg-gold-deep"
        >
          Back to the collection
        </Link>
      </div>
    );
  }

  const titleId = `pdp-${product.id}-title`;
  const taglineId = `pdp-${product.id}-tagline`;

  const gallery = [
    {
      imgId: product.imgIds.main,
      query: `[${taglineId}] [${titleId}] warm gold jewelry product photography on dark neutral background, elegant editorial`,
    },
    {
      imgId: product.imgIds.gallery[0],
      query: `close-up of a model wearing [${taglineId}] [${titleId}] warm gold jewelry, editorial photography`,
    },
    {
      imgId: product.imgIds.gallery[1],
      query: `macro detail of [${taglineId}] [${titleId}] gold jewelry texture, dramatic warm light`,
    },
  ];

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    toast.success(`${product.name} (${variant}) added to your cart`);
  };

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto flex max-w-7xl items-center gap-2 px-5 pt-6 text-[11px] uppercase tracking-widest text-sand md:px-8"
      >
        <Link to="/" className="transition-colors hover:text-gold">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/shop" className="transition-colors hover:text-gold">
          Shop
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-gold">{product.name}</span>
      </nav>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:px-8 md:py-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="relative overflow-hidden rounded-sm border border-noir-line bg-noir-soft">
            <div className="aspect-[4/5] w-full">
              <StrkImage
                key={gallery[activeImage].imgId}
                imgId={gallery[activeImage].imgId}
                query={gallery[activeImage].query}
                ratio="4x5"
                width={1000}
                alt={product.name}
                imgClassName="animate-fade-in"
              />
            </div>
            {product.bestseller && (
              <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-luxe text-noir">
                Bestseller
              </span>
            )}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {gallery.map((image, index) => (
              <button
                key={image.imgId}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1} of ${product.name}`}
                className={cn(
                  "overflow-hidden rounded-sm border transition-colors duration-300",
                  activeImage === index
                    ? "border-gold"
                    : "border-noir-line hover:border-gold/50"
                )}
              >
                <div className="aspect-square w-full">
                  <StrkImage
                    imgId={`${image.imgId}-thumb`}
                    query={image.query}
                    ratio="1x1"
                    width={300}
                    alt=""
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:py-4">
          <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">
            {product.category}
          </p>
          <h1
            id={titleId}
            className="mt-3 font-serif text-3xl font-medium uppercase leading-tight tracking-[0.08em] text-cream md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={taglineId} className="mt-3 text-sm text-sand">
            {product.tagline}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size="w-4 h-4" />
            <span className="text-xs text-sand">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl font-medium text-gold">
            {formatPrice(product.price)}
          </p>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-cream/80">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-luxe text-cream">
              Finish — <span className="text-gold">{variant}</span>
            </p>
            <div className="mt-3 flex gap-2">
              {VARIANTS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setVariant(option)}
                  aria-pressed={variant === option}
                  className={cn(
                    "rounded-full border px-6 py-2.5 text-[11px] font-semibold uppercase tracking-widest transition-all duration-300",
                    variant === option
                      ? "border-gold bg-gold text-noir"
                      : "border-noir-line text-cream/80 hover:border-gold/60 hover:text-gold"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex gap-3">
            <div className="flex items-center border border-noir-line">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-12 w-11 items-center justify-center text-cream/80 transition-colors hover:text-gold"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm font-semibold text-cream">
                {quantity}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => Math.min(9, q + 1))}
                className="flex h-12 w-11 items-center justify-center text-cream/80 transition-colors hover:text-gold"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex flex-1 items-center justify-center gap-3 bg-gold px-6 py-3.5 text-[11px] font-bold uppercase tracking-luxe text-noir transition-colors duration-300 hover:bg-gold-deep"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>
          </div>

          {/* Mini trust row */}
          <div className="mt-6 grid grid-cols-3 gap-2 border-y border-noir-line py-4">
            {[
              { icon: Truck, label: "Free shipping over $75" },
              { icon: RefreshCcw, label: "30-day returns" },
              { icon: ShieldCheck, label: "2-year warranty" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                <Icon className="h-4 w-4 text-gold" />
                <span className="text-[10px] uppercase tracking-wider text-sand">{label}</span>
              </div>
            ))}
          </div>

          {/* Accordions */}
          <div className="mt-4">
            <Accordion title="Description" defaultOpen>
              {product.description} Designed in our atelier and finished by hand, this piece is
              made for daily wear — from morning coffee to midnight.
            </Accordion>
            <Accordion title="Materials & Care">{product.materials}</Accordion>
            <Accordion title="Shipping & Returns">
              Orders ship within 1–2 business days, free worldwide on orders over $75. Not quite
              right? You have 30 days to return or exchange, no questions asked. Every order
              arrives in our signature gift-ready packaging.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-noir-line">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl font-medium text-cream md:text-4xl">
              You may also <span className="italic text-gold-soft">like</span>
            </h2>
            <Link
              to="/shop"
              className="text-[11px] font-semibold uppercase tracking-luxe text-cream/80 transition-colors hover:text-gold"
            >
              View all
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-12 md:grid-cols-4 md:gap-x-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
