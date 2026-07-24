import { useEffect, useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Heart, Minus, Plus, Share2, Truck, Award, Sparkles, ShieldCheck } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { findProduct, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StockImage from "@/components/ui/StockImage";
import StarRating from "@/components/ui/StarRating";
import Accordion from "@/components/ui/Accordion";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";

const TONES = [
  { id: "gold", label: "18K Gold" },
  { id: "silver", label: "Sterling Silver" },
];

function ThumbnailStrip({ gallery, active, setActive, productId }) {
  return (
    <div className="flex lg:flex-col gap-3 order-2 lg:order-1 overflow-x-auto lg:overflow-visible no-scrollbar">
      {gallery.map((g, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setActive(i)}
          aria-label={`View image ${i + 1}`}
          className={cn(
            "shrink-0 w-20 aspect-[3/4] overflow-hidden border transition-colors",
            active === i ? "border-onyx-800" : "border-transparent hover:border-onyx-800/30",
          )}
        >
          <StockImage
            query={g}
            ratio="3x4"
            width={200}
            imgId={`${productId}-img-${i + 1}`}
            className="w-full h-full"
            alt=""
          />
        </button>
      ))}
    </div>
  );
}

export default function Product() {
  const { id } = useParams();
  const product = useMemo(() => findProduct(id), [id]);
  const { addItem, openCart } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [tone, setTone] = useState(product?.tones?.[0] || "gold");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Reset state when product changes
  useEffect(() => {
    setActiveImage(0);
    setTone(product?.tones?.[0] || "gold");
    setQuantity(1);
    setAdded(false);
  }, [product?.id]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const gallery = [product.img1, product.img2, ...(product.gallery || [])];
  const related = getRelatedProducts(product, 4);

  function onAdd() {
    addItem(product, { tone }, quantity);
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <main className="pt-24 sm:pt-32 pb-24 bg-cream-100 min-h-screen">
      <div className="container-wide">
        {/* Breadcrumb */}
        <nav className="text-[11px] uppercase tracking-widest-2 text-mocha-500 mb-6 sm:mb-8">
          <Link to="/" className="hover:text-onyx-800">Home</Link>
          <span className="mx-2 text-onyx-800/30">/</span>
          <Link to="/shop" className="hover:text-onyx-800">Shop</Link>
          <span className="mx-2 text-onyx-800/30">/</span>
          <span className="text-onyx-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <ThumbnailStrip
              gallery={gallery}
              active={activeImage}
              setActive={setActiveImage}
              productId={product.id}
            />
            <div className="flex-1 order-1 lg:order-2">
              <Reveal>
                <div className="relative bg-onyx-900/5">
                  <StockImage
                    query={gallery[activeImage]}
                    ratio="3x4"
                    width={1200}
                    imgId={`${product.id}-img-${activeImage + 1}`}
                    className="w-full"
                    alt={product.name}
                    priority
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 chip bg-cream-100/95 backdrop-blur-sm text-[10px] py-1">
                      {product.badge}
                    </span>
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Info */}
          <Reveal delay={120}>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow mb-3 capitalize">
                {product.category.replace(/s$/, "")}
              </p>
              <h1 className="font-display text-[40px] sm:text-[56px] leading-[1.02] text-onyx-800">
                {product.name}
              </h1>
              <div className="mt-5 flex items-center gap-4">
                <span className="text-[20px] tabular-nums text-onyx-800">
                  {formatPrice(product.price)}
                </span>
                <span className="text-[12px] uppercase tracking-widest-2 text-mocha-500">
                  or 4 payments of {formatPrice(product.price / 4)}
                </span>
              </div>
              <div className="mt-4">
                <StarRating
                  rating={product.rating}
                  reviews={product.reviews}
                  showCount={true}
                />
              </div>

              <p className="mt-7 text-[15px] sm:text-[16px] text-mocha-600 leading-[1.75] max-w-[52ch]">
                {product.description}
              </p>

              {/* Tone selector */}
              <div className="mt-8">
                <p className="font-sans uppercase tracking-widest-2 text-[11px] text-onyx-800 mb-3">
                  Finish: <span className="text-mocha-500">{TONES.find((t) => t.id === tone)?.label}</span>
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {product.tones.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTone(t)}
                      className={cn(
                        "px-5 py-2.5 text-[11px] uppercase tracking-widest-2 border transition-colors",
                        tone === t
                          ? "border-onyx-800 bg-onyx-800 text-cream-100"
                          : "border-onyx-800/25 text-onyx-800 hover:border-onyx-800",
                      )}
                    >
                      {TONES.find((x) => x.id === t)?.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-8 grid grid-cols-[auto_1fr] gap-3">
                <div className="inline-flex items-center border border-onyx-800/25 h-[52px]">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="w-11 h-full flex items-center justify-center text-onyx-800 hover:bg-onyx-800/5"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center text-[14px] tabular-nums text-onyx-800">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="w-11 h-full flex items-center justify-center text-onyx-800 hover:bg-onyx-800/5"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={onAdd}
                  className={cn(
                    "h-[52px] inline-flex items-center justify-center gap-2 px-7 text-[12px] uppercase tracking-widest-2 font-medium transition-all duration-300",
                    added
                      ? "bg-gold-500 text-cream-100"
                      : "bg-onyx-800 text-cream-100 hover:bg-onyx-900",
                  )}
                >
                  {added ? "Added to bag" : "Add to bag"}
                </button>
              </div>

              {/* Secondary actions */}
              <div className="mt-3 flex items-center gap-5 text-[12px] uppercase tracking-widest-2 text-mocha-500">
                <button type="button" className="inline-flex items-center gap-2 hover:text-onyx-800 transition-colors">
                  <Heart size={14} strokeWidth={1.4} /> Add to wishlist
                </button>
                <button type="button" className="inline-flex items-center gap-2 hover:text-onyx-800 transition-colors">
                  <Share2 size={14} strokeWidth={1.4} /> Share
                </button>
              </div>

              {/* Reassurance */}
              <ul className="mt-9 grid grid-cols-2 gap-4 border-t border-onyx-800/15 pt-7">
                {[
                  { icon: Truck, label: "Free worldwide shipping" },
                  { icon: Award, label: "18K gold plated" },
                  { icon: Sparkles, label: "Hypoallergenic" },
                  { icon: ShieldCheck, label: "30-day returns" },
                ].map((it) => {
                  const Icon = it.icon;
                  return (
                    <li key={it.label} className="flex items-center gap-2.5">
                      <Icon size={14} strokeWidth={1.4} className="text-gold-500" />
                      <span className="text-[12px] tracking-wider text-onyx-800">
                        {it.label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion
                  defaultIndex={0}
                  items={[
                    {
                      title: "Description",
                      content: product.description,
                    },
                    {
                      title: "Materials & Care",
                      content: (
                        <div className="space-y-3">
                          <p>
                            Crafted with a {product.materials?.includes("recycled") ? "recycled " : ""}
                            brass core and finished in a thick layer of 18K gold for a
                            warm, lasting finish. Skin-friendly, nickel-free, hypoallergenic.
                          </p>
                          <p>
                            <strong className="font-medium text-onyx-800">Care:</strong>{" "}
                            Remove before showering, swimming, or applying lotion.
                            Wipe gently with the included polishing cloth to restore shine.
                          </p>
                        </div>
                      ),
                    },
                    {
                      title: "Shipping & Returns",
                      content: (
                        <div className="space-y-3">
                          <p>
                            Free worldwide shipping on orders over $75. Most orders ship
                            within 1–2 business days from our Stockholm studio. Delivery
                            in 3–7 business days, depending on your region.
                          </p>
                          <p>
                            Not quite right? Send it back within 30 days for a full refund.
                            We even cover the return label.
                          </p>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24 sm:mt-32">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <h2 className="font-display text-[32px] sm:text-[44px] leading-[1.05] text-onyx-800">
                You may also love
              </h2>
              <Link
                to="/shop"
                className="font-sans uppercase tracking-widest-2 text-[11px] text-onyx-800 border-b border-onyx-800 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
