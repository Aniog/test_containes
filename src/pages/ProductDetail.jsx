import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Minus, Plus, Check, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProduct, PRODUCTS, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StrkImg from "@/components/ui/StrkImg";
import Stars from "@/components/ui/Stars";
import Accordion from "@/components/ui/Accordion";
import AccentButton from "@/components/ui/AccentButton";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const TONE_OPTIONS = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const { addItem } = useCart();

  const [tone, setTone] = useState(product?.tone || "gold");
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setTone(product?.tone || "gold");
    setQty(1);
    setActiveImg(0);
  }, [id, product]);

  const gallery = useMemo(() => {
    if (!product) return [];
    return [
      { imgId: `pdp-${product.id}-1`, query: product.imageQuery, alt: product.name },
      { imgId: `pdp-${product.id}-2`, query: product.hoverQuery, alt: `${product.name} worn` },
      {
        imgId: `pdp-${product.id}-3`,
        query: `${product.name} ${product.category} gold jewelry detail macro, luxury photography`,
        alt: `${product.name} detail`,
      },
    ];
  }, [product]);

  const related = useMemo(() => {
    if (!product) return [];
    const sameCat = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category);
    const others = PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category);
    return [...sameCat, ...others].slice(0, 4);
  }, [product]);

  if (!product) return <Navigate to="/shop" replace />;

  const handleAdd = () => {
    addItem(product.id, tone, qty);
    toast.success(`${product.name} added to your cart.`);
  };

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: product.materials },
    {
      title: "Shipping & Returns",
      content:
        "Complimentary worldwide shipping on orders over $75 (standard $6 otherwise). Orders ship within 1–2 business days in our signature gift packaging. Not quite right? Enjoy 30-day returns for a full refund — no questions asked.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 md:pt-32 lg:px-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 font-body text-[11px] uppercase tracking-widest2 text-cocoa/60">
        <Link to="/" className="transition-colors hover:text-espresso">Home</Link>
        <span>/</span>
        <Link to="/shop" className="transition-colors hover:text-espresso">Shop</Link>
        <span>/</span>
        <span className="text-espresso">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div>
          <Reveal>
            <div className="aspect-[4/5] w-full overflow-hidden bg-sand">
              <StrkImg
                key={gallery[activeImg].imgId}
                imgId={gallery[activeImg].imgId}
                query={gallery[activeImg].query}
                ratio="4x5"
                width={1000}
                alt={gallery[activeImg].alt}
                className="animate-fade-in"
              />
            </div>
          </Reveal>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
                className={cn(
                  "aspect-[4/5] overflow-hidden border transition-all duration-300",
                  activeImg === i
                    ? "border-gold-deep ring-1 ring-gold-deep"
                    : "border-transparent opacity-70 hover:opacity-100"
                )}
              >
                <StrkImg
                  imgId={`${img.imgId}-thumb`}
                  query={img.query}
                  ratio="4x5"
                  width={300}
                  alt={img.alt}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <Reveal delay={120}>
          <span className="font-body text-[11px] font-semibold uppercase tracking-mega text-gold-deep">
            {product.category}
          </span>
          <h1 className="mt-3 font-display text-4xl uppercase leading-tight tracking-widest2 text-espresso md:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <Stars value={product.rating} size={16} />
            <span className="font-body text-sm text-cocoa/70">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-display text-3xl font-semibold text-espresso">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 font-body text-base leading-relaxed text-cocoa/80">
            {product.short}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-widest2 text-espresso">
              Finish — <span className="text-gold-deep">{tone}</span>
            </p>
            <div className="flex gap-3">
              {TONE_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setTone(opt.id)}
                  className={cn(
                    "rounded-full border px-6 py-2.5 font-body text-[12px] font-semibold uppercase tracking-widest2 transition-all duration-300",
                    tone === opt.id
                      ? "border-espresso bg-espresso text-ivory"
                      : "border-line bg-transparent text-cocoa hover:border-espresso"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-widest2 text-espresso">
              Quantity
            </p>
            <div className="inline-flex items-center border border-line">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="flex h-12 w-12 items-center justify-center text-espresso transition-colors hover:bg-sand"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-body text-base font-semibold text-espresso">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="flex h-12 w-12 items-center justify-center text-espresso transition-colors hover:bg-sand"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <AccentButton onClick={handleAdd} className="mt-8 w-full py-4">
            <Check size={16} />
            Add to Cart — {formatPrice(product.price * qty)}
          </AccentButton>

          {/* Trust points */}
          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-line pt-6">
            {[
              { icon: Truck, label: "Free shipping over $75" },
              { icon: RotateCcw, label: "30-day returns" },
              { icon: ShieldCheck, label: "Hypoallergenic" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon size={18} strokeWidth={1.5} className="text-gold-deep" />
                <span className="font-body text-[10px] uppercase tracking-widest2 text-cocoa/70">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Accordions */}
          <div className="mt-8">
            <Accordion items={accordions} />
          </div>
        </Reveal>
      </div>

      {/* Related */}
      <div className="mt-24 border-t border-line pt-16">
        <h2 className="text-center font-display text-3xl text-espresso md:text-4xl">
          You May Also Like
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {related.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
