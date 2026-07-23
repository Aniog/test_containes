import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { findProduct, relatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import { Minus, Plus, Heart, Truck, RefreshCcw, ShieldCheck, ChevronRight } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import ProductGallery from "@/components/product/ProductGallery";
import ProductAccordion from "@/components/product/ProductAccordion";
import ProductCard from "@/components/product/ProductCard";
import StarRating from "@/components/ui/StarRating";

export default function Product() {
  const { slug } = useParams();
  const product = findProduct(slug);
  const { addItem } = useCart();

  const [tone, setTone] = useState("gold");
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);
  const [adding, setAdding] = useState(false);
  const pageRef = useRef(null);

  // For image helper scanning
  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;
    return ImageHelper.loadImages(strkImgConfig, el);
  }, [slug]);

  if (!product) {
    return (
      <div className="bg-bone-100 pt-32 pb-32 min-h-screen">
        <div className="container-x text-center">
          <p className="display-serif text-3xl">We couldn't find that piece.</p>
          <Link to="/shop" className="btn btn-outline mt-6">Back to shop</Link>
        </div>
      </div>
    );
  }

  function onAdd() {
    setAdding(true);
    // Grab the main product image's current src (resolved by ImageHelper)
    const main = pageRef.current?.querySelector?.('[data-strk-img-id]');
    const src =
      main && main.currentSrc && !main.currentSrc.startsWith("data:image")
        ? main.currentSrc
        : main && main.src && !main.src.startsWith("data:image")
          ? main.src
          : null;
    addItem(product.id, qty, tone, src);
    setTimeout(() => setAdding(false), 800);
  }

  const related = relatedProducts(product.slug, 4);

  return (
    <div ref={pageRef} id="product-page" className="bg-bone-100 pt-24 sm:pt-28 pb-24 min-h-screen">
      <div className="container-x">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] uppercase tracking-widest2 text-espresso/55 mb-6 flex items-center gap-1.5"
        >
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <ChevronRight size={11} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <ChevronRight size={11} strokeWidth={1.5} />
          <span className="text-espresso/80">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <ProductGallery product={product} />
          </div>

          {/* Buy box */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] uppercase tracking-widest2 text-espresso/55">
              {product.category}
            </p>
            <h1
              id={`${product.id}-name`}
              className="display-serif mt-3 text-3xl sm:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>
            <p
              id={`${product.id}-tagline`}
              className="mt-3 text-sm text-espresso/65 italic font-serif"
            >
              {product.tagline}
            </p>

            <div className="mt-5 flex items-center gap-4">
              <StarRating value={product.rating} count={product.reviewCount} />
              <span className="text-espresso/30">·</span>
              <a href="#reviews" className="text-[11px] uppercase tracking-widest2 text-espresso/65 hover:text-espresso transition-colors">
                Read reviews
              </a>
            </div>

            <p id={`${product.id}-price`} className="mt-6 display-serif text-3xl text-espresso">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 text-[15px] leading-[1.8] text-espresso/75 max-w-prose">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-espresso/65 mb-3">
                Tone: <span className="text-espresso">{tone === "gold" ? "Warm Gold" : "Silver"}</span>
              </p>
              <div className="flex items-center gap-2">
                {["gold", "silver"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      "h-10 px-5 inline-flex items-center gap-2 border text-[11px] uppercase tracking-widest2",
                      "transition-all duration-300",
                      tone === t
                        ? "border-espresso bg-espresso text-bone-50"
                        : "border-taupe-light text-espresso/70 hover:border-espresso hover:text-espresso",
                    )}
                    aria-pressed={tone === t}
                  >
                    <span
                      className={cn(
                        "inline-block h-3 w-3 rounded-full border",
                        t === "gold"
                          ? "bg-gradient-to-br from-gold-200 to-gold-400 border-gold-500/40"
                          : "bg-gradient-to-br from-bone-200 to-taupe-light border-taupe/50",
                      )}
                      aria-hidden
                    />
                    {t === "gold" ? "Gold" : "Silver"}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add */}
            <div className="mt-7 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-taupe-light">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-12 w-12 flex items-center justify-center text-espresso/70 hover:text-espresso transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="h-12 w-12 flex items-center justify-center text-espresso/70 hover:text-espresso transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={onAdd}
                disabled={adding}
                className="btn btn-primary flex-1 h-12"
              >
                {adding ? "Added" : "Add to Cart"}
              </button>
              <button
                type="button"
                aria-label="Save to wishlist"
                onClick={() => {
                  setLiked((v) => !v);
                  toast.success(liked ? "Removed from wishlist" : "Saved to wishlist");
                }}
                className={cn(
                  "h-12 w-12 flex items-center justify-center border transition-colors",
                  liked
                    ? "border-espresso bg-espresso text-bone-50"
                    : "border-taupe-light text-espresso/70 hover:border-espresso hover:text-espresso",
                )}
              >
                <Heart
                  size={16}
                  strokeWidth={1.5}
                  fill={liked ? "currentColor" : "none"}
                />
              </button>
            </div>

            {/* Trust micro-row */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-[11px] uppercase tracking-widest2 text-espresso/70">
              <li className="flex items-center gap-2">
                <Truck size={13} strokeWidth={1.5} className="text-gold-300" />
                Free over $75
              </li>
              <li className="flex items-center gap-2">
                <RefreshCcw size={13} strokeWidth={1.5} className="text-gold-300" />
                30-day returns
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={13} strokeWidth={1.5} className="text-gold-300" />
                Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-24 sm:mt-32">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest2 text-espresso/55">
                You may also love
              </p>
              <h2 className="display-serif mt-3 text-3xl sm:text-4xl">
                Complete the set
              </h2>
            </div>
            <Link
              to="/shop"
              className="link-underline hidden sm:inline-flex text-[11px] uppercase tracking-widest2"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
