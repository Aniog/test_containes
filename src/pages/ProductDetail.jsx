import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ChevronLeft, Truck, RefreshCw, ShieldCheck, Heart } from "lucide-react";
import { getProductById, getRelatedProducts, PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

const TONES = [
  { id: "gold", label: "18K Gold", swatch: "linear-gradient(135deg,#E5C68A,#B08B4F 60%,#8E6E3F)" },
  { id: "silver", label: "Sterling Silver", swatch: "linear-gradient(135deg,#E8E8E8,#B8B8B8 60%,#8E8E8E)" },
];

const ACCORDIONS = [
  { id: "description", label: "Description" },
  { id: "materials", label: "Materials & Care" },
  { id: "shipping", label: "Shipping & Returns" },
];

function Accordion({ id, label, openId, setOpenId, children }) {
  const open = openId === id;
  return (
    <div className="border-b border-sable/15">
      <button
        type="button"
        onClick={() => setOpenId(open ? null : id)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-[13px] tracking-widest2 uppercase font-medium text-sable">
          {label}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-sable transition-transform duration-300",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm sm:text-[15px] text-sable/80 font-sans font-light leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const ref = useRef(null);
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [tone, setTone] = useState(product?.tone || "gold");
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const related = useMemo(() => getRelatedProducts(id, 4), [id]);

  if (!product) {
    return (
      <div className="container-page py-32 text-center">
        <h1 className="font-serif text-3xl text-sable">Piece not found</h1>
        <p className="mt-3 text-taupe">The piece you're looking for has slipped out of the collection.</p>
        <Link to="/shop" className="btn-primary mt-8 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const onAdd = () => {
    addItem({ id: product.id, qty, variant: tone });
  };

  return (
    <div ref={ref} className="bg-ivory">
      {/* Breadcrumb */}
      <div className="container-page pt-24 sm:pt-28">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-[11px] tracking-widest2 uppercase text-taupe hover:text-sable transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Back to Shop
        </Link>
      </div>

      <div className="container-page py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {/* Thumbnails (desktop) */}
              <div className="hidden sm:flex col-span-1 flex-col gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "aspect-square overflow-hidden bg-ivory-200 border-2 transition-colors",
                      activeImage === i ? "border-sable" : "border-transparent hover:border-sable/40"
                    )}
                  >
                    <img
                      alt=""
                      src={i % 2 === 0 ? product.image : product.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="col-span-12 sm:col-span-11">
                <div className="relative aspect-[4/5] bg-ivory-200 overflow-hidden">
                  <img
                    key={activeImage}
                    alt={`${product.name} — view ${activeImage + 1}`}
                    src={activeImage % 2 === 0 ? product.image : product.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                  />
                  <button
                    type="button"
                    onClick={() => setFavorited((v) => !v)}
                    aria-label="Save"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ivory/90 backdrop-blur-sm flex items-center justify-center text-sable hover:bg-ivory transition-colors"
                  >
                    <Heart
                      className={cn("w-4 h-4", favorited && "fill-gold text-gold")}
                    />
                  </button>
                </div>

                {/* Mobile thumbnails */}
                <div className="sm:hidden mt-3 grid grid-cols-4 gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "aspect-square overflow-hidden bg-ivory-200 border-2 transition-colors",
                        activeImage === i ? "border-sable" : "border-transparent"
                      )}
                    >
                      <img
                        alt=""
                        src={i % 2 === 0 ? product.image : product.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <span id="pdp-cat" className="eyebrow !text-taupe">
              {product.category}
            </span>
            <h1
              id="pdp-name"
              className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light mt-3 text-sable leading-[1.1]"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-3.5 h-3.5",
                      i < Math.round(product.rating)
                        ? "text-gold fill-gold"
                        : "text-sable/20 fill-sable/20"
                    )}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe font-sans">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-2xl text-sable">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-sm sm:text-[15px] text-sable/75 font-sans font-light leading-relaxed">
              {product.short}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <span className="font-sans text-[11px] tracking-widest2 uppercase text-sable font-medium">
                  Finish
                </span>
                <span className="text-xs text-taupe font-sans">
                  {TONES.find((t) => t.id === tone)?.label}
                </span>
              </div>
              <div className="flex gap-2.5">
                {TONES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    aria-pressed={tone === t.id}
                    className={cn(
                      "group flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full border transition-all duration-300",
                      tone === t.id
                        ? "border-sable bg-ivory"
                        : "border-sable/20 hover:border-sable/50"
                    )}
                  >
                    <span
                      className="w-7 h-7 rounded-full border border-sable/10"
                      style={{ background: t.swatch }}
                    />
                    <span className="font-sans text-xs font-medium text-sable">
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <span className="font-sans text-[11px] tracking-widest2 uppercase text-sable font-medium block mb-3">
                Quantity
              </span>
              <div className="inline-flex items-center border border-sable/20">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease"
                  className="w-11 h-11 flex items-center justify-center text-sable hover:bg-ivory-200 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-sable">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase"
                  className="w-11 h-11 flex items-center justify-center text-sable hover:bg-ivory-200 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={onAdd}
              className="btn-primary w-full mt-8 py-5"
            >
              Add to Cart — {formatPrice(product.price * qty)}
            </button>
            <button
              type="button"
              className="btn-outline w-full mt-3 py-5"
              onClick={onAdd}
            >
              Buy It Now
            </button>

            {/* Trust micro-row */}
            <ul className="mt-7 grid grid-cols-3 gap-2 text-[10px] tracking-widest2 uppercase text-taupe font-sans">
              <li className="flex flex-col items-center gap-1.5 text-center">
                <Truck className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span>Free shipping</span>
              </li>
              <li className="flex flex-col items-center gap-1.5 text-center">
                <RefreshCw className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span>30-day returns</span>
              </li>
              <li className="flex flex-col items-center gap-1.5 text-center">
                <ShieldCheck className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span>Hypoallergenic</span>
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-sable/15">
              {ACCORDIONS.map((a) => (
                <Accordion
                  key={a.id}
                  id={a.id}
                  label={a.label}
                  openId={openAccordion}
                  setOpenId={setOpenAccordion}
                >
                  {a.id === "description" && <p>{product.description}</p>}
                  {a.id === "materials" && <p>{product.materials} <br /><br /><span className="text-taupe text-[13px]">Care —</span> {product.care}</p>}
                  {a.id === "shipping" && <p>{product.shipping}</p>}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="container-page py-20 sm:py-28 border-t border-sable/10 mt-12">
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <span className="eyebrow">Pairs well with</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mt-3 text-sable">
              You may also like
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-2 text-sable font-sans text-[12px] tracking-widest2 uppercase font-medium hover:text-gold transition-colors"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
