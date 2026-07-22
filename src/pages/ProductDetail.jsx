import React, { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Minus, Plus, ShoppingBag, ChevronRight, Truck, RefreshCw } from "lucide-react";
import { getProduct, relatedProducts, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { usePageFx } from "@/hooks/usePageFx";
import { StrkImage } from "@/components/ui/StrkMedia";
import Stars from "@/components/ui/Stars";
import Button from "@/components/ui/Button";
import AccordionItem from "@/components/ui/Accordion";
import ProductCard from "@/components/product/ProductCard";

const VARIANTS = ["Gold", "Silver"];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProduct(id);
  const { addItem } = useCart();

  const [variant, setVariant] = useState("Gold");
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);

  const ref = usePageFx([id, active]);

  const related = useMemo(() => relatedProducts(id, 4), [id]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-40 text-center">
        <h1 className="font-display text-4xl text-ink">Piece not found</h1>
        <p className="mt-3 text-inkSoft">This piece may have sold out.</p>
        <Button variant="solid" className="mt-8" onClick={() => navigate("/shop")}>
          Back to Shop
        </Button>
      </div>
    );
  }

  // Build a small gallery: main + hover + two extra contextual shots.
  const nameId = `pd-${product.id}-name`;
  const catId = `pd-${product.id}-cat`;
  const gallery = [
    { imgId: product.imgId, query: `[${nameId}] [${catId}] ${product.query}`, alt: product.name },
    { imgId: product.hoverImgId, query: `[${nameId}] ${product.hoverQuery}`, alt: `${product.name} worn` },
    { imgId: `${product.imgId}-d1`, query: `[${nameId}] gold jewelry detail macro, warm light, luxury`, alt: `${product.name} detail` },
    { imgId: `${product.imgId}-d2`, query: `[${nameId}] gold jewelry on neutral linen, editorial, elegant`, alt: `${product.name} styled` },
  ];

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 md:pt-32 lg:px-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-1.5 text-xs text-inkSoft">
        <Link to="/" className="transition-colors hover:text-gold">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="transition-colors hover:text-gold">Shop</Link>
        <ChevronRight size={12} />
        <span id={catId} className="text-ink">{product.category}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="relative overflow-hidden rounded-sm bg-sand">
            <div className="relative aspect-square w-full">
              {gallery.map((g, i) => (
                <StrkImage
                  key={g.imgId}
                  imgId={g.imgId}
                  query={g.query}
                  ratio="1x1"
                  width={1000}
                  alt={g.alt}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                />
              ))}
            </div>
            {product.tag && (
              <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-luxe text-ink backdrop-blur-sm">
                {product.tag}
              </span>
            )}
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {gallery.map((g, i) => (
              <button
                key={g.imgId}
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={`overflow-hidden rounded-sm ring-offset-2 ring-offset-cream transition-all ${
                  active === i ? "ring-2 ring-gold" : "opacity-60 hover:opacity-100"
                }`}
              >
                <StrkImage
                  imgId={`${g.imgId}-thumb`}
                  query={g.query}
                  ratio="1x1"
                  width={200}
                  alt=""
                  className="aspect-square w-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <p className="font-sans text-xs font-semibold uppercase tracking-overline text-gold">
            {product.category}
          </p>
          <h1
            id={nameId}
            className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-luxe text-ink md:text-4xl"
          >
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <Stars value={product.rating} size={15} />
            <span className="text-sm text-inkSoft">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-display text-2xl font-semibold text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-inkSoft">
            {product.short}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <span className="font-sans text-xs font-semibold uppercase tracking-luxe text-ink">
              Tone — <span className="text-gold">{variant}</span>
            </span>
            <div className="mt-3 flex gap-3">
              {VARIANTS.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`rounded-full border px-6 py-2.5 font-sans text-sm font-medium transition-all ${
                    variant === v
                      ? "border-gold bg-gold text-cream shadow-soft"
                      : "border-line bg-cream text-ink hover:border-gold hover:text-gold"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <span className="font-sans text-xs font-semibold uppercase tracking-luxe text-ink">
              Quantity
            </span>
            <div className="mt-3 inline-flex items-center border border-line">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-gold"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-sans text-sm font-semibold text-ink">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                aria-label="Increase quantity"
                className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-gold"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="mt-9">
            <Button
              variant="solid"
              size="full"
              onClick={() => addItem(product.id, variant, qty)}
            >
              <ShoppingBag size={17} />
              Add to Bag — {formatPrice(product.price * qty)}
            </Button>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-inkSoft">
              <span className="inline-flex items-center gap-1.5">
                <Truck size={14} className="text-gold" /> Free worldwide shipping
              </span>
              <span className="inline-flex items-center gap-1.5">
                <RefreshCw size={14} className="text-gold" /> 30-day returns
              </span>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-10 border-t border-line">
            <AccordionItem title="Description" defaultOpen>
              {product.description}
            </AccordionItem>
            <AccordionItem title="Materials & Care">
              {product.materials}
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              Complimentary worldwide shipping on every order, dispatched within
              1–2 business days in our signature gift packaging. Not quite
              right? Return or exchange within 30 days for a full refund — no
              questions asked.
            </AccordionItem>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="mt-24 md:mt-32">
        <div className="text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-overline text-gold">
            Complete the Look
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            You May Also Like
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {related.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
