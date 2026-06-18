import React, { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Minus, Plus, ChevronDown, Truck, RotateCcw, Sparkles } from "lucide-react";
import { findProduct, PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StrkImageHost from "@/components/ui/StrkImageHost";
import StarRating from "@/components/ui/StarRating";
import ProductCard from "@/components/products/ProductCard";

const ACCORDIONS = [
  {
    id: "description",
    title: "Description",
    body: (product) => (
      <div className="space-y-3 text-sm text-espresso/80 leading-relaxed">
        <p>{product.description}</p>
        <p>
          Crafted in small batches in our atelier. Each piece is finished by hand,
          inspected, and packaged in our signature linen-wrapped box.
        </p>
      </div>
    ),
  },
  {
    id: "materials",
    title: "Materials & Care",
    body: (product) => (
      <div className="space-y-3 text-sm text-espresso/80 leading-relaxed">
        <p>
          <span className="text-ink">Materials:</span> {product.material}.
          Hypoallergenic and nickel-free.
        </p>
        <p>
          To preserve the finish, store in the included pouch and avoid contact with
          perfume, lotion, or chlorine. Wipe gently with a soft cloth.
        </p>
      </div>
    ),
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    body: () => (
      <div className="space-y-3 text-sm text-espresso/80 leading-relaxed">
        <p>Complimentary worldwide shipping on orders over $80.</p>
        <p>30-day no-questions returns. We cover return shipping.</p>
        <p>Standard delivery: 3–5 business days. Express available at checkout.</p>
      </div>
    ),
  },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = findProduct(slug);

  // Fixed-order hooks: declare ALL hooks before any conditional return.
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || "Gold");
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");

  const { addItem } = useCart();

  const related = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const handleAdd = () => {
    addItem(product, variant, qty);
  };

  return (
    <StrkImageHost deps={[product.slug, activeImage]}>
      {/* Breadcrumb */}
      <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16 pt-8 pb-2 text-[11px] uppercase tracking-editorial text-muted">
        <Link to="/" className="hover:text-gold transition">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-gold transition">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </div>

      <section className="max-w-page mx-auto px-5 md:px-10 lg:px-16 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Gallery — reuses the same image IDs the product cards use, so the
            stock-image system can statically resolve them via the catalog map. */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <ul className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible no-scrollbar md:w-20">
            {product.images.slice(0, 2).map((img, idx) => {
              const imgId = idx === 0
                ? `card-primary-${product.images[0].id}`
                : `card-secondary-${product.images[1].id}`;
              return (
                <li key={img.id} className="flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition ${
                      activeImage === idx ? "border-ink" : "border-sand hover:border-ink/60"
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img
                      data-strk-img-id={imgId}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex-1 relative aspect-[3/4] bg-bone overflow-hidden">
            {product.images.slice(0, 2).map((img, idx) => {
              const imgId = idx === 0
                ? `card-primary-${product.images[0].id}`
                : `card-secondary-${product.images[1].id}`;
              return (
                <img
                  key={img.id}
                  data-strk-img-id={imgId}
                  alt={`${product.name} view ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImage === idx ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              );
            })}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">
            {product.category}
          </p>
          <h1
            id={`${product.id}-card-name`}
            className="font-serif text-3xl md:text-5xl uppercase tracking-editorial text-ink leading-tight"
          >
            {product.name}
          </h1>
          <p
            id={`${product.id}-card-tagline`}
            className="mt-3 text-base text-espresso/80"
          >
            {product.tagline}
          </p>

          <div className="mt-5 flex items-center gap-4">
            <span className="font-serif text-3xl text-ink">${product.price}</span>
            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} />
              <span className="text-xs text-muted">({product.reviewCount})</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-espresso leading-relaxed max-w-md">
            {product.description}
          </p>

          {/* Variant pills */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-editorial text-muted mb-3">
              Tone — <span className="text-ink">{variant}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`px-5 py-2.5 rounded-full border text-[11px] uppercase tracking-editorial transition ${
                    variant === v
                      ? "border-ink bg-ink text-ivory"
                      : "border-sand text-ink hover:border-ink"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + add to cart */}
          <div className="mt-8 flex items-stretch gap-3">
            <div className="inline-flex items-center border border-ink">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="px-3 hover:text-gold transition"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus size={14} strokeWidth={1.5} />
              </button>
              <span className="px-4 text-sm tabular-nums">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="px-3 hover:text-gold transition"
                onClick={() => setQty((q) => q + 1)}
              >
                <Plus size={14} strokeWidth={1.5} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 bg-gold text-ivory py-3.5 tracking-editorial uppercase text-[11px] hover:bg-goldDeep transition"
            >
              Add to Cart — ${(product.price * qty).toFixed(2)}
            </button>
          </div>

          {/* Trust micro-strip */}
          <ul className="mt-8 grid grid-cols-3 gap-4 text-[10px] uppercase tracking-editorial text-muted">
            <li className="flex flex-col items-center text-center gap-2">
              <Truck size={16} strokeWidth={1.5} className="text-gold" />
              Free Shipping
            </li>
            <li className="flex flex-col items-center text-center gap-2">
              <RotateCcw size={16} strokeWidth={1.5} className="text-gold" />
              30-Day Returns
            </li>
            <li className="flex flex-col items-center text-center gap-2">
              <Sparkles size={16} strokeWidth={1.5} className="text-gold" />
              Hypoallergenic
            </li>
          </ul>

          {/* Accordions */}
          <div className="mt-10 border-t border-sand">
            {ACCORDIONS.map((acc) => {
              const isOpen = openAccordion === acc.id;
              return (
                <div key={acc.id} className="border-b border-sand">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[12px] uppercase tracking-editorial text-ink">
                      {acc.title}
                    </span>
                    <ChevronDown
                      size={16}
                      strokeWidth={1.5}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pb-5">{acc.body(product)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-bone py-20 md:py-24 border-t border-sand">
        <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">Pair It With</p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink">You may also like</h2>
            </div>
            <Link
              to="/shop"
              className="text-[11px] uppercase tracking-editorial border-b border-ink pb-1 hover:text-gold hover:border-gold transition"
            >
              Shop All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </StrkImageHost>
  );
}
