import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronRight, Minus, Plus, ShoppingBag, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { StarRating } from "@/components/ui/StarRating";
import { Accordion } from "@/components/ui/Accordion";
import ProductGallery from "@/components/product/ProductGallery";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductById(id), [id]);
  const { addToCart, openCart } = useCart();
  const [tone, setTone] = useState("Gold");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32">
        <h1 className="font-serif text-3xl mb-3">Piece not found</h1>
        <p className="text-sand-600 mb-6">This item may have sold out or moved.</p>
        <Link to="/shop" className="btn-primary">Back to shop</Link>
      </div>
    );
  }

  const tones = Array.isArray(product.tone) ? product.tone : [product.tone || "Gold"];
  const toneCapitalized = tones.find((t) => t.toLowerCase() === tone.toLowerCase()) || tones[0];

  const onAdd = () => {
    addToCart({ ...product, tone: toneCapitalized }, { tone: toneCapitalized, qty });
  };

  const accordionItems = [
    {
      title: "Description",
      content: (
        <div className="space-y-3 text-[14.5px]">
          <p>{product.description}</p>
          {product.short && (
            <p className="text-sand-600 italic font-serif text-base">{product.short}</p>
          )}
        </div>
      ),
    },
    {
      title: "Materials & Care",
      content: (
        <ul className="space-y-2 text-[14.5px]">
          {(product.materials || "").split(". ").filter(Boolean).map((s) => (
            <li key={s} className="flex gap-2">
              <span className="text-gold-400">·</span>
              <span>{s.trim()}{s.trim().endsWith(".") ? "" : "."}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <ul className="space-y-2 text-[14.5px]">
          {(product.shipping || "").split(". ").filter(Boolean).map((s) => (
            <li key={s} className="flex gap-2">
              <span className="text-gold-400">·</span>
              <span>{s.trim()}{s.trim().endsWith(".") ? "" : "."}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="bg-cream pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-editorial mx-auto px-5 sm:px-8 py-4 text-[11px] tracking-widest2 uppercase text-sand-600 font-sans">
        <nav className="flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-ink capitalize">
            {product.category}
          </Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-editorial mx-auto px-5 sm:px-8 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Gallery */}
          <div>
            <ProductGallery product={product} />
          </div>

          {/* Info */}
          <div className="md:pt-2">
            <p className="eyebrow mb-4">{capitalize(product.category)}</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight mb-4 uppercase">
              {product.name}
            </h1>
            <p className="text-sand-600 text-base sm:text-lg font-sans max-w-md mb-6">
              {product.short}
            </p>

            <div className="flex items-center gap-4 mb-7">
              <span className="font-serif text-2xl text-ink">{formatPrice(product.price)}</span>
              <span className="text-sand-600/40">·</span>
              <StarRating value={product.rating} count={product.reviews} size={13} />
            </div>

            {/* Tone selector */}
            <div className="mb-7">
              <p className="text-[11px] tracking-widest2 uppercase text-ink mb-3 font-sans font-medium">
                Tone: <span className="text-sand-600">{toneCapitalized}</span>
              </p>
              <div className="flex flex-wrap gap-2.5">
                {tones.map((t) => {
                  const active = t.toLowerCase() === tone.toLowerCase();
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTone(t)}
                      className={`pill ${active ? "pill-active" : ""}`}
                      aria-pressed={active}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="text-[11px] tracking-widest2 uppercase text-ink mb-3 font-sans font-medium">
                Quantity
              </p>
              <div className="inline-flex items-center border border-ink/20">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-ink hover:text-gold transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm font-sans">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  className="w-11 h-11 flex items-center justify-center text-ink hover:text-gold transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={onAdd}
              className="btn-primary w-full"
            >
              <ShoppingBag size={14} strokeWidth={1.6} />
              Add to Cart · {formatPrice(product.price * qty)}
            </button>
            <button
              type="button"
              onClick={() => {
                onAdd();
                setTimeout(() => navigate("/checkout"), 250);
              }}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-ink px-7 py-3.5 text-[11px] font-medium uppercase tracking-widest2 text-ink transition-all duration-300 hover:bg-ink hover:text-cream-50 active:scale-[0.99]"
            >
              Buy Now
            </button>

            {/* Reassurance row */}
            <div className="mt-7 grid grid-cols-3 gap-3 text-[10.5px] tracking-widest2 uppercase text-sand-600 font-sans">
              <Reassure icon={<Truck size={14} strokeWidth={1.5} />} label="Free shipping" />
              <Reassure icon={<RefreshCw size={14} strokeWidth={1.5} />} label="30-day returns" />
              <Reassure icon={<ShieldCheck size={14} strokeWidth={1.5} />} label="Hypoallergenic" />
            </div>

            {/* Accords */}
            <div className="mt-10">
              <Accordion items={accordionItems} defaultIndex={0} />
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts excludeId={product.id} />
    </div>
  );
}

function Reassure({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-center gap-1.5 py-3">
      <span className="text-gold-500">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function capitalize(s) {
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
