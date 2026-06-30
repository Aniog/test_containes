import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronRight, Plus, Minus, Truck, RotateCcw, ShieldCheck, Sparkles } from "lucide-react";
import Artwork from "@/components/ui/Artwork";
import StarRating from "@/components/ui/StarRating";
import ProductCard from "@/components/product/ProductCard";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";
import { toast } from "sonner";

const TONES = ["Gold", "Silver", "Rose Gold"];

const RELATED_VARIANTS = {
  earCuff: "filigreeDrop",
  floraNecklace: "earCuff",
  sphereHuggies: "earCuff",
  filigreeDrop: "sphereHuggies",
  heirloomSet: "sphereHuggies",
};

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const { addToCart } = useCart();
  const [tone, setTone] = useState(product.tone?.[0] || "Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeArt, setActiveArt] = useState(product.art);
  const [openAccordion, setOpenAccordion] = useState("description");

  const variantArt = RELATED_VARIANTS[product.art] || product.art;
  const gallery = [product.art, variantArt, "sphereHuggies"];

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const onAdd = () => {
    addToCart(product, { tone, quantity });
    toast.success(`${product.name} added to cart`);
  };

  const onBuyNow = () => {
    addToCart(product, { tone, quantity });
    navigate("/checkout");
  };

  return (
    <article className="bg-ivory">
      {/* Breadcrumb */}
      <div className="container-editorial pt-28 md:pt-32">
        <nav aria-label="Breadcrumb" className="text-[11px] tracking-[0.22em] uppercase text-mute">
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link to="/" className="hover:text-ink">Home</Link></li>
            <li><ChevronRight className="w-3 h-3 inline" /></li>
            <li><Link to="/shop" className="hover:text-ink">Shop</Link></li>
            <li><ChevronRight className="w-3 h-3 inline" /></li>
            <li>
              <Link
                to={`/shop?category=${product.category}`}
                className="hover:text-ink capitalize"
              >
                {product.category}
              </Link>
            </li>
            <li><ChevronRight className="w-3 h-3 inline" /></li>
            <li className="text-ink truncate max-w-[200px]">{product.name}</li>
          </ol>
        </nav>
      </div>

      {/* Main PDP */}
      <div className="container-editorial pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7 flex gap-4">
            <div className="hidden md:flex flex-col gap-3 w-20 flex-shrink-0">
              {gallery.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setActiveArt(g)}
                  className={cn(
                    "aspect-[4/5] bg-bone overflow-hidden border transition-colors",
                    activeArt === g ? "border-ink" : "border-transparent hover:border-line"
                  )}
                  aria-label={`Show ${g} view`}
                >
                  <Artwork variant={g} tone="deep" className="w-full h-full" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-bone overflow-hidden">
              <Artwork
                variant={activeArt}
                tone="deep"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <div className="label-eyebrow text-mute mb-3 capitalize">
                {product.category}
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center gap-3">
                <StarRating value={product.rating} count={product.reviewCount} />
                <span className="text-xs text-mute tracking-wide">
                  · {product.reviewCount} reviews
                </span>
              </div>
              <div className="mt-5 text-2xl font-medium tabular-nums">
                {formatPrice(product.price)}
              </div>
              <p className="mt-4 text-charcoal leading-relaxed">
                {product.description}
              </p>

              {/* Tone selector */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-ink">
                    Tone
                  </div>
                  <div className="text-xs text-mute">{tone}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {TONES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTone(t)}
                      className={cn(
                        "px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase border transition-colors",
                        tone === t
                          ? "bg-ink text-ivory border-ink"
                          : "border-line text-ink hover:border-ink"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-8 flex items-stretch gap-3">
                <div className="flex items-center border border-line">
                  <button
                    type="button"
                    aria-label="Decrease"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-11 h-12 flex items-center justify-center hover:bg-bone"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase"
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    className="w-11 h-12 flex items-center justify-center hover:bg-bone"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={onAdd}
                  className="flex-1 btn-primary"
                >
                  Add to Cart · {formatPrice(product.price * quantity)}
                </button>
              </div>
              <button
                type="button"
                onClick={onBuyNow}
                className="mt-3 w-full btn-ghost"
              >
                Buy It Now
              </button>

              {/* Reassurance row */}
              <ul className="mt-8 grid grid-cols-2 gap-3 text-xs text-charcoal">
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-gold-dark" strokeWidth={1.5} />
                  Free worldwide shipping
                </li>
                <li className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-gold-dark" strokeWidth={1.5} />
                  30-day easy returns
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-dark" strokeWidth={1.5} />
                  Hypoallergenic
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-dark" strokeWidth={1.5} />
                  18K gold plated
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-24 max-w-3xl">
          <Accordion
            id="description"
            title="Description"
            open={openAccordion === "description"}
            onToggle={() =>
              setOpenAccordion(openAccordion === "description" ? null : "description")
            }
          >
            <p className="text-charcoal leading-relaxed">{product.description}</p>
            <p className="mt-4 text-charcoal leading-relaxed">
              Each Velmora piece is designed in-house and produced in small batches. Our demi-fine jewelry is built on a solid brass core with a thick 18K gold plating — meant to be worn daily, not stored in a box.
            </p>
          </Accordion>
          <Accordion
            id="materials"
            title="Materials & Care"
            open={openAccordion === "materials"}
            onToggle={() =>
              setOpenAccordion(openAccordion === "materials" ? null : "materials")
            }
          >
            <ul className="space-y-2 text-charcoal">
              {product.details.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-gold-dark flex-shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="hairline my-6" />
            <div className="label-eyebrow text-mute mb-3">Care</div>
            <ul className="space-y-2 text-charcoal">
              {product.care.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-gold-dark flex-shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Accordion>
          <Accordion
            id="shipping"
            title="Shipping & Returns"
            open={openAccordion === "shipping"}
            onToggle={() =>
              setOpenAccordion(openAccordion === "shipping" ? null : "shipping")
            }
          >
            <div className="space-y-4 text-charcoal">
              <div>
                <div className="font-medium text-ink mb-1">Shipping</div>
                <p>Free worldwide shipping on all orders. US orders ship in 2–4 business days; international orders in 5–10.</p>
              </div>
              <div>
                <div className="font-medium text-ink mb-1">Returns</div>
                <p>30-day returns, no questions asked. Items must be unworn and in their original packaging. We provide a prepaid return label.</p>
              </div>
            </div>
          </Accordion>
        </div>
      </div>

      {/* Related products */}
      <section className="container-editorial pb-20 md:pb-28">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            You may also love
          </h2>
          <Link
            to="/shop"
            className="hidden md:inline text-xs tracking-[0.22em] uppercase text-ink hover:text-gold-dark transition-colors underline-grow"
          >
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </article>
  );
}

function Accordion({ id, title, open, onToggle, children }) {
  return (
    <div className="border-t border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`acc-${id}`}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-display text-xl md:text-2xl text-ink">{title}</span>
        <span
          className={cn(
            "w-7 h-7 border border-line rounded-full flex items-center justify-center transition-transform duration-300",
            open && "rotate-45"
          )}
          aria-hidden
        >
          <Plus className="w-3.5 h-3.5" />
        </span>
      </button>
      <div
        id={`acc-${id}`}
        className={cn(
          "grid transition-all duration-500",
          open ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.7, 0.2, 1)" }}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
