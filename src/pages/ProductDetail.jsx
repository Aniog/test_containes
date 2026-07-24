import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, Minus, Plus, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { toast } from "sonner";
import { getProduct, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StrkImage from "@/components/ui/StrkImage";
import Stars from "@/components/ui/Stars";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/shop/ProductCard";
import { cn, formatPrice } from "@/lib/utils";

const variants = ["Gold", "Silver"];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-luxe",
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm font-light leading-relaxed text-muted">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState("Gold");
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  const related = useMemo(() => {
    if (!product) return [];
    const sameCat = products.filter(
      (p) => p.id !== product.id && p.category === product.category
    );
    const rest = products.filter(
      (p) => p.id !== product.id && p.category !== product.category
    );
    return [...sameCat, ...rest].slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 pt-20 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-4xl font-light text-ink">
          This piece has sold out
        </h1>
        <Link to="/shop" className="btn-outline-light mt-8">
          Back to the Collection
        </Link>
      </div>
    );
  }

  const gallery = [
    {
      imgId: `gallery-${product.imgId}`,
      query: `[${product.tagId}] [${product.titleId}] gold jewelry product photography`,
      alt: product.name,
    },
    {
      imgId: `gallery-${product.hoverImgId}`,
      query: `close-up worn [${product.tagId}] [${product.titleId}] on model`,
      alt: `${product.name} worn`,
    },
    {
      imgId: `gallery-${product.imgId}-detail`,
      query: `macro detail texture [${product.tagId}] [${product.titleId}] gold`,
      alt: `${product.name} detail`,
    },
  ];

  const handleAdd = () => {
    addItem(product.id, variant, qty);
    toast.success(`${product.name} (${variant}) added to your bag`);
  };

  return (
    <div className="bg-ivory pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
          <Link to="/" className="transition-colors hover:text-gold-deep">Home</Link>
          <span>/</span>
          <Link to="/shop" className="transition-colors hover:text-gold-deep">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden bg-sand">
              <div className="aspect-[3/4]">
                <StrkImage
                  key={gallery[activeImg].imgId}
                  imgId={gallery[activeImg].imgId}
                  query={gallery[activeImg].query}
                  ratio="3x4"
                  width="900"
                  alt={gallery[activeImg].alt}
                  className="animate-fade-in"
                />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {gallery.map((g, i) => (
                <button
                  key={g.imgId}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "overflow-hidden border bg-sand transition-all duration-300",
                    activeImg === i
                      ? "border-gold"
                      : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <div className="aspect-square">
                    <StrkImage
                      imgId={`${g.imgId}-thumb`}
                      query={g.query}
                      ratio="1x1"
                      width="300"
                      alt={g.alt}
                    />
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">{product.category === "sets" ? "Gift Set" : product.category}</p>
            <h1
              id={product.titleId}
              className="mt-3 font-serif text-3xl font-medium uppercase leading-tight tracking-product text-ink md:text-4xl"
            >
              {product.name}
            </h1>
            <p id={product.tagId} className="mt-2 font-serif text-lg italic font-light text-muted">
              {product.tagline}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-xs text-muted">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>
            <p className="mt-5 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>
            <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-muted">
              {product.short}
            </p>

            <div className="mt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
                Finish — <span className="text-gold-deep">{variant}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "border px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300",
                      variant === v
                        ? "border-gold bg-gold/10 text-gold-deep"
                        : "border-line text-muted hover:border-gold-soft hover:text-ink"
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
                  className="px-3.5 py-3 text-muted transition-colors hover:text-ink"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-sm font-medium text-ink">{qty}</span>
                <button
                  className="px-3.5 py-3 text-muted transition-colors hover:text-ink"
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button onClick={handleAdd} className="btn-gold flex-1">
                Add to Bag — {formatPrice(product.price * qty)}
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-y border-line py-5">
              {[
                { icon: Truck, label: "Free Shipping" },
                { icon: RotateCcw, label: "30-Day Returns" },
                { icon: ShieldCheck, label: "2-Year Warranty" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                  <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-muted">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">{product.materials}</Accordion>
              <Accordion title="Shipping & Returns">
                Complimentary worldwide shipping on every order, dispatched within
                1–2 business days in our signature gift packaging. Not quite right?
                Returns are free within 30 days — no questions, no fuss.
              </Accordion>
            </div>
          </Reveal>
        </div>

        <section className="mt-24 border-t border-line pt-16 md:mt-32">
          <Reveal className="mb-10 text-center">
            <p className="eyebrow">Complete the Look</p>
            <h2 className="mt-3 font-serif text-3xl font-light text-ink md:text-4xl">
              You May Also Like
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
