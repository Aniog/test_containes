import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, Minus, Plus, ShoppingBag, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/product/ProductCard";
import ProductCard from "@/components/product/ProductCard";
import { getProductById, getRelated, CATEGORIES } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

const ACCORDIONS = [
  {
    id: "description",
    title: "Description",
    body: (p) => (
      <div className="space-y-3 text-[var(--color-stone)] leading-relaxed">
        <p>{p.description}</p>
        <ul className="space-y-1.5 pt-2">
          {p.details.map((d) => (
            <li key={d} className="flex gap-2.5 text-sm">
              <span className="text-[var(--color-gold-deep)]">·</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "care",
    title: "Materials & Care",
    body: (p) => (
      <div className="space-y-3 text-[var(--color-stone)] leading-relaxed">
        <ul className="space-y-1.5">
          {p.care.map((c) => (
            <li key={c} className="flex gap-2.5 text-sm">
              <span className="text-[var(--color-gold-deep)]">·</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    body: () => (
      <div className="space-y-4 text-[var(--color-stone)] leading-relaxed text-sm">
        <p>
          <strong className="text-[var(--color-ink)] font-medium">Free worldwide shipping</strong>{" "}
          on orders over $75. Standard delivery in 3–7 business days.
        </p>
        <p>
          <strong className="text-[var(--color-ink)] font-medium">30-day returns</strong> on
          unworn pieces in their original packaging. We make exchanges easy.
        </p>
      </div>
    ),
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, openCart } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] ?? null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");
  const [liked, setLiked] = useState(false);

  // Reset image / variant when product changes.
  useEffect(() => {
    setActiveImage(0);
    setVariant(product?.variants?.[0] ?? null);
    setQuantity(1);
    setOpenAccordion("description");
  }, [product?.id]);

  if (!product) {
    return (
      <main className="pt-40 pb-32 text-center">
        <Container>
          <h1 className="font-serif text-5xl text-[var(--color-ink)] mb-4">Not found</h1>
          <p className="text-[var(--color-stone)] mb-8">
            The piece you're looking for has slipped off the bench.
          </p>
          <Link
            to="/shop"
            className="font-sans text-[0.72rem] uppercase tracking-eyebrow text-[var(--color-ink)] link-underline"
          >
            Back to shop
          </Link>
        </Container>
      </main>
    );
  }

  const categoryLabel = CATEGORIES.find((c) => c.id === product.category)?.label ?? product.category;
  const related = getRelated(product);

  const onAdd = () => {
    addToCart(product, variant, quantity);
  };

  const nextImage = () => setActiveImage((i) => (i + 1) % product.images.length);
  const prevImage = () => setActiveImage((i) => (i - 1 + product.images.length) % product.images.length);

  return (
    <main className="pt-24 sm:pt-32 pb-24">
      <Container>
        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--color-stone)] mb-8 sm:mb-10" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link to="/" className="hover:text-[var(--color-ink)] transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-[var(--color-ink)] transition-colors">Shop</Link>
            </li>
            <li>/</li>
            <li>
              <Link to={`/shop?category=${product.category}`} className="hover:text-[var(--color-ink)] transition-colors">
                {categoryLabel}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[var(--color-ink)]">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20 md:flex-shrink-0">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  className={cn(
                    "relative aspect-square bg-[var(--color-cream)] overflow-hidden transition-all",
                    activeImage === i
                      ? "ring-1 ring-[var(--color-ink)] ring-offset-2 ring-offset-[var(--color-bone)]"
                      : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 bg-[var(--color-cream)] aspect-[4/5] overflow-hidden">
              <img
                key={product.images[activeImage]}
                src={product.images[activeImage]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover fade-enter"
              />

              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-bone)]/85 backdrop-blur-sm text-[var(--color-ink)] flex items-center justify-center hover:bg-[var(--color-bone)] transition-colors"
                  >
                    <ChevronLeft size={16} strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-bone)]/85 backdrop-blur-sm text-[var(--color-ink)] flex items-center justify-center hover:bg-[var(--color-bone)] transition-colors"
                  >
                    <ChevronRight size={16} strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <Eyebrow>{categoryLabel}</Eyebrow>
            <h1 className="mt-3 font-sans uppercase tracking-display text-[1.7rem] sm:text-2xl md:text-[1.85rem] font-medium text-[var(--color-ink)] leading-tight">
              {product.name}
            </h1>
            <p className="mt-2 font-serif italic text-[var(--color-stone)] text-xl leading-snug">
              {product.tagline}
            </p>

            <div className="mt-5 flex items-center gap-4">
              <Stars value={product.rating} size={14} />
              <span className="text-xs text-[var(--color-stone)]">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>

            <p className="mt-7 font-serif text-4xl text-[var(--color-ink)]">
              {formatPrice(product.price)}
            </p>
            <p className="mt-1 text-xs text-[var(--color-stone)]">Tax included. Shipping calculated at checkout.</p>

            <div className="mt-8">
              <p className="text-[0.7rem] uppercase tracking-eyebrow text-[var(--color-ink)] font-medium mb-3">
                Tone
              </p>
              <div className="flex flex-wrap gap-2.5">
                {product.variants.map((v) => {
                  const active = variant?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v)}
                      className={cn(
                        "inline-flex items-center gap-2.5 px-4 h-11 border transition-all",
                        "text-sm",
                        active
                          ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bone)]"
                          : "border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-ink)]"
                      )}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-current/30"
                        style={{ background: v.swatch }}
                      />
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[0.7rem] uppercase tracking-eyebrow text-[var(--color-ink)] font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-[var(--color-line)]">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-11 h-11 flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-11 h-11 flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onAdd}
                className="flex-1 h-14 bg-[var(--color-gold)] text-[var(--color-bone)] uppercase tracking-eyebrow text-[0.78rem] font-medium hover:bg-[var(--color-gold-deep)] transition-colors inline-flex items-center justify-center gap-2.5"
              >
                <ShoppingBag size={16} strokeWidth={1.5} />
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => setLiked((l) => !l)}
                aria-label="Save to wishlist"
                className={cn(
                  "h-14 w-14 border transition-colors inline-flex items-center justify-center",
                  liked
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bone)]"
                    : "border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-ink)]"
                )}
              >
                <Heart size={16} strokeWidth={1.5} className={liked ? "fill-current" : ""} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                addToCart(product, variant, quantity);
                openCart();
              }}
              className="mt-3 h-12 text-[0.7rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)] link-underline"
            >
              Buy now
            </button>

            {/* Trust row */}
            <ul className="mt-8 grid grid-cols-3 gap-3 pt-8 border-t border-[var(--color-line)]">
              <li className="flex flex-col items-center text-center gap-2">
                <Truck size={18} strokeWidth={1.5} className="text-[var(--color-gold-deep)]" />
                <span className="text-[0.65rem] uppercase tracking-eyebrow text-[var(--color-stone)] leading-tight">
                  Free Shipping
                </span>
              </li>
              <li className="flex flex-col items-center text-center gap-2">
                <RotateCcw size={18} strokeWidth={1.5} className="text-[var(--color-gold-deep)]" />
                <span className="text-[0.65rem] uppercase tracking-eyebrow text-[var(--color-stone)] leading-tight">
                  30-Day Returns
                </span>
              </li>
              <li className="flex flex-col items-center text-center gap-2">
                <ShieldCheck size={18} strokeWidth={1.5} className="text-[var(--color-gold-deep)]" />
                <span className="text-[0.65rem] uppercase tracking-eyebrow text-[var(--color-stone)] leading-tight">
                  Hypoallergenic
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-20 max-w-3xl">
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mb-2">The Details</h2>
          <p className="text-sm text-[var(--color-stone)] mb-8">Everything you'd want to know before it arrives.</p>
          <div className="border-t border-[var(--color-line)]">
            {ACCORDIONS.map((section) => {
              const isOpen = openAccordion === section.id;
              return (
                <div key={section.id} className="border-b border-[var(--color-line)]">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : section.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-sans text-[0.85rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)]">
                      {section.title}
                    </span>
                    <span className="text-[var(--color-ink)] text-xl font-light leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 fade-enter">{section.body(product)}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* You may also like */}
      <section className="mt-24">
        <Container>
          <div className="flex items-end justify-between mb-10 md:mb-12">
            <div>
              <Eyebrow>You May Also Love</Eyebrow>
              <h2 className="mt-3 font-serif font-light text-3xl sm:text-4xl text-[var(--color-ink)]">
                Pair it with
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden sm:inline-block font-sans text-[0.72rem] uppercase tracking-eyebrow text-[var(--color-ink)] link-underline"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}