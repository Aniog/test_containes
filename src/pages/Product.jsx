import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, Minus, Plus, Truck, RotateCcw, ShieldCheck, Sparkles } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Accordion from "@/components/ui/Accordion";
import RelatedProducts from "@/components/product/RelatedProducts";
import { cn } from "@/lib/utils";

const TONES = [
  { id: "gold", label: "18K Gold", dot: "bg-gold-500" },
  { id: "silver", label: "Sterling Silver", dot: "bg-hairline border border-taupe/40" },
];

function Stars({ value, size = 13 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={cn(
            "inline-block leading-none",
            i < Math.round(value) ? "text-gold-500" : "text-hairline"
          )}
          style={{ fontSize: size }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [active, setActive] = useState(0);
  const [tone, setTone] = useState(product?.tone || "gold");
  const [quantity, setQuantity] = useState(1);
  const [imgErrors, setImgErrors] = useState({});
  const [added, setAdded] = useState(false);

  // Scroll to top when navigating between products
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  // Reset state when product changes
  useEffect(() => {
    setActive(0);
    setTone(product?.tone || "gold");
    setQuantity(1);
    setAdded(false);
  }, [id]);

  const accordions = useMemo(() => {
    if (!product) return [];
    return [
      { title: "Description", content: <p>{product.description}</p> },
      { title: "Materials & Care", content: <p>{product.materials}<br /><br />{product.care}</p> },
      { title: "Shipping & Returns", content: <p>{product.shipping}</p> },
    ];
  }, [product]);

  if (!product) {
    return (
      <div className="container-editorial pt-32 pb-32 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found.</h1>
        <Link to="/shop" className="btn-outline mt-8 inline-flex">
          Back to shop
        </Link>
      </div>
    );
  }

  const next = () => setActive((a) => (a + 1) % product.images.length);
  const prev = () => setActive((a) => (a - 1 + product.images.length) % product.images.length);

  const handleAdd = () => {
    addItem(product, { quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <>
      <div className="bg-cream pt-24 md:pt-28">
        {/* Breadcrumb */}
        <div className="container-editorial pt-6 pb-4">
          <nav className="text-[10px] uppercase tracking-widest2 text-taupe">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-ink transition-colors capitalize"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>

        <div className="container-editorial pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14">
            {/* Gallery */}
            <div className="md:col-span-7">
              <div className="flex gap-4">
                {/* Thumbnails (desktop) */}
                <div className="hidden md:flex flex-col gap-3 w-20 flex-shrink-0">
                  {product.images.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`View image ${i + 1}`}
                      className={cn(
                        "block aspect-[4/5] overflow-hidden border transition-colors",
                        active === i ? "border-ink" : "border-hairline hover:border-taupe"
                      )}
                    >
                      {imgErrors[`t-${i}`] ? (
                        <div className="w-full h-full bg-hairline/40" />
                      ) : (
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          onError={() => setImgErrors((s) => ({ ...s, [`t-${i}`]: true }))}
                          className="w-full h-full object-cover"
                          style={{ filter: "sepia(0.18) saturate(1.1) brightness(0.97)" }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Main image */}
                <div className="flex-1 relative aspect-[4/5] bg-hairline/40 overflow-hidden">
                  {product.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={i === 0 ? product.name : ""}
                      loading={i === 0 ? "eager" : "lazy"}
                      onError={() => setImgErrors((s) => ({ ...s, [i]: true }))}
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                        active === i ? "opacity-100" : "opacity-0"
                      )}
                      style={{ filter: "sepia(0.18) saturate(1.15) brightness(0.97) contrast(1.02)" }}
                    />
                  ))}

                  {/* Mobile nav arrows */}
                  <div className="md:hidden absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous image"
                      className="pointer-events-auto w-10 h-10 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center text-ink hover:text-gold-600 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next image"
                      className="pointer-events-auto w-10 h-10 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center text-ink hover:text-gold-600 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </div>

                  {/* Mobile dot indicator */}
                  <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                    {product.images.map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "h-1 transition-all",
                          active === i ? "w-6 bg-ink" : "w-1.5 bg-ink/30"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Buy box */}
            <div className="md:col-span-5 md:pl-2">
              <div className="md:sticky md:top-28">
                <div className="text-[10px] uppercase tracking-widest2 text-gold-600 mb-3">
                  New · Best seller
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05] text-balance">
                  {product.name}
                </h1>

                <div className="mt-5 flex items-center gap-3">
                  <Stars value={product.rating} />
                  <span className="text-[11px] uppercase tracking-widest2 text-taupe">
                    {product.rating} · {product.reviews} reviews
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <div className="text-2xl text-ink font-medium tabular-nums">${product.price}</div>
                  <div className="text-[11px] uppercase tracking-widest2 text-taupe">
                    or 4 payments of ${(product.price / 4).toFixed(2)}
                  </div>
                </div>

                <p className="mt-6 text-sm md:text-[15px] text-taupe leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Tone selector */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="eyebrow">Finish</div>
                    <div className="text-[11px] uppercase tracking-widest2 text-taupe">
                      {TONES.find((t) => t.id === tone)?.label}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {TONES.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTone(t.id)}
                        className={cn(
                          "inline-flex items-center gap-2.5 px-4 py-2.5 border text-[11px] uppercase tracking-widest2 transition-all duration-300",
                          tone === t.id
                            ? "border-ink bg-ink text-cream"
                            : "border-hairline text-ink hover:border-ink"
                        )}
                        aria-pressed={tone === t.id}
                      >
                        <span className={cn("w-3 h-3 rounded-full", t.dot)} />
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity + add */}
                <div className="mt-8 flex items-stretch gap-3">
                  <div className="inline-flex items-center border border-hairline">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      className="p-3 hover:text-gold-600 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" strokeWidth={2} />
                    </button>
                    <span className="px-4 text-sm tabular-nums min-w-[2.5rem] text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Increase quantity"
                      className="p-3 hover:text-gold-600 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleAdd}
                    className={cn(
                      "flex-1 inline-flex items-center justify-center gap-2 py-3.5 text-[11px] uppercase tracking-widest2 font-medium transition-all duration-500 ease-elegant",
                      added ? "bg-gold-600 text-cream" : "bg-ink text-cream hover:bg-gold-600"
                    )}
                  >
                    {added ? (
                      <>
                        <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
                        Added to bag
                      </>
                    ) : (
                      "Add to bag"
                    )}
                  </button>
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="px-3 border border-hairline text-ink hover:border-ink hover:text-gold-600 transition-colors flex items-center justify-center"
                  >
                    <Heart className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Reassurance row */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] uppercase tracking-widest2 text-taupe">
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
                    <span>Free shipping $75+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
                    <span>30-day returns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
                    <span>Hypoallergenic</span>
                  </div>
                </div>

                {/* Accordions */}
                <div className="mt-10">
                  <Accordion items={accordions} defaultOpen={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts product={product} />
    </>
  );
}
