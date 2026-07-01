import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronLeft, Truck, RefreshCw, ShieldCheck, Heart } from "lucide-react";
import { getProductById, getRelatedProducts, toneOptions } from "@/data/products";
import { useCart, formatPrice } from "@/store/cart";
import StarRating from "@/components/ui/StarRating";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/cn";

const accordions = [
  { id: "description", title: "Description" },
  { id: "materials", title: "Materials & Care" },
  { id: "shipping", title: "Shipping & Returns" },
];

function Accordion({ items, openDefault = "description" }) {
  const [open, setOpen] = useState(openDefault);
  return (
    <div className="border-t hairline-dark">
      {items.map((it) => {
        const isOpen = open === it.id;
        return (
          <div key={it.id} className="border-b hairline-dark">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : it.id)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-[11px] tracking-widest2 uppercase text-espresso-200">
                {it.title}
              </span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-muted transition-transform duration-300",
                  isOpen && "rotate-180 text-espresso-200",
                )}
                strokeWidth={1.4}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-editorial",
                isOpen ? "max-h-[600px] pb-6 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div className="text-sm text-muted leading-relaxed whitespace-pre-line pr-8">
                {it.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [tone, setTone] = useState(product?.tone?.[0] || "gold");
  const [quantity, setQuantity] = useState(1);
  const [accordionItems, setAccordionItems] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setActiveImg(0);
    setQuantity(1);
    if (product) setTone(product.tone?.[0] || "gold");
  }, [id, product]);

  useEffect(() => {
    if (!product) return;
    setAccordionItems([
      { id: "description", title: "Description", content: product.description },
      { id: "materials", title: "Materials & Care", content: product.materials + "\n\n" + product.care },
      { id: "shipping", title: "Shipping & Returns", content: product.shipping },
    ]);
  }, [product]);

  const related = useMemo(() => getRelatedProducts(id, 4), [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-32 bg-ivory-50 min-h-screen">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-4xl text-espresso-200 mb-4">Piece not found</h1>
          <p className="text-muted mb-8">The piece you're looking for has moved or is no longer available.</p>
          <button onClick={() => navigate("/shop")} className="btn-primary">
            Browse the collection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory-50 pt-24 sm:pt-32">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 pb-6">
        <nav className="text-[10px] tracking-widest2 uppercase text-muted flex items-center gap-2">
          <Link to="/" className="hover:text-espresso-200">Home</Link>
          <span className="opacity-40">/</span>
          <Link to="/shop" className="hover:text-espresso-200">Shop</Link>
          <span className="opacity-40">/</span>
          <span className="text-espresso-200 truncate">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex gap-4">
            <div className="hidden sm:flex flex-col gap-3 w-20 flex-shrink-0">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "aspect-square overflow-hidden bg-ivory-200 border-2 transition-colors",
                    activeImg === i ? "border-espresso-200" : "border-transparent hover:border-muted/30",
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={src} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 relative aspect-[4/5] bg-ivory-200 overflow-hidden">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500"
                key={activeImg}
              />
              {product.badge && (
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-ivory-50/95 text-espresso-200 text-[10px] tracking-widest2 uppercase font-sans">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] tracking-widest2 uppercase text-gold-400 mb-3">
                  {product.category}
                </div>
                <h1 className="font-sans text-2xl sm:text-3xl tracking-wider2 uppercase text-espresso-200">
                  {product.name}
                </h1>
              </div>
              <button
                type="button"
                aria-label="Add to wishlist"
                className="p-2 -mr-2 text-muted hover:text-espresso-200 transition-colors"
              >
                <Heart className="w-5 h-5" strokeWidth={1.4} />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <StarRating value={product.rating} size={13} />
              <span className="text-xs text-muted">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-serif text-3xl text-espresso-200">{formatPrice(product.price)}</span>
              <span className="text-xs text-muted">or 4 payments of {formatPrice(product.price / 4)}</span>
            </div>

            <p className="mt-5 text-sm text-muted leading-relaxed max-w-md">
              {product.shortDescription}
            </p>

            {/* Tone selector */}
            {product.tone && product.tone.length > 0 && (
              <div className="mt-8">
                <div className="text-[10px] tracking-widest2 uppercase text-muted mb-3">
                  Tone — <span className="text-espresso-200">{tone === "silver" ? "Silver" : "Gold"}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.tone.map((t) => {
                    const opt = toneOptions.find((o) => o.id === t);
                    if (!opt) return null;
                    const active = tone === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTone(t)}
                        className={cn("pill", active && "is-active")}
                      >
                        <span
                          className="w-3 h-3 rounded-full mr-3 border border-muted/30"
                          style={{ background: opt.swatch }}
                        />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8 flex items-center gap-6">
              <div className="text-[10px] tracking-widest2 uppercase text-muted">Quantity</div>
              <div className="inline-flex items-center border hairline-dark">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-ivory-100 transition-colors"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-sans">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-ivory-100 transition-colors"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to bag */}
            <button
              type="button"
              onClick={() => addItem(product.id, tone, quantity)}
              className="btn-primary w-full mt-7 py-4"
            >
              Add to bag · {formatPrice(product.price * quantity)}
            </button>

            {/* Mini assurances */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] tracking-wider2 uppercase text-muted">
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5" strokeWidth={1.4} /> Free shipping
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5" strokeWidth={1.4} /> 30-day returns
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.4} /> Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-ivory-100 py-20 sm:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-espresso-200">
              You may also like
            </h2>
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center text-[11px] tracking-widest2 uppercase text-espresso-200 link-underline"
            >
              <ChevronLeft className="w-3.5 h-3.5 mr-2 rotate-180" strokeWidth={1.4} />
              Shop all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
