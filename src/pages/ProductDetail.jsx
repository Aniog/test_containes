import { useEffect, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Minus, Plus, Star, Truck, ShieldCheck, Sparkles, ChevronDown, Heart } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0]?.id || "gold");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [slug, activeIndex]);

  if (!product) return <Navigate to="/shop" replace />;

  const related = getRelatedProducts(product.slug, 4);

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-8">
          <nav className="text-[11px] tracking-[0.22em] uppercase text-ink/55">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-gold">Shop</Link>
            <span className="mx-2">/</span>
            <Link to={`/shop?category=${product.category}`} className="hover:text-gold">
              {product.category}
            </Link>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
            {/* Gallery */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-[88px_1fr] gap-4">
                {/* Thumbnails */}
                <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
                  {product.images.map((img, i) => (
                    <button
                      key={img.imgId}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-label={`View image ${i + 1}`}
                      className={cn(
                        "relative shrink-0 w-20 md:w-full aspect-[4/5] overflow-hidden bg-bone transition-all",
                        activeIndex === i
                          ? "ring-1 ring-gold ring-offset-2 ring-offset-cream"
                          : "opacity-70 hover:opacity-100"
                      )}
                    >
                      {/* Hidden reference text for this specific image angle */}
                      <span
                        id={`pdp-angle-${img.imgId}`}
                        className="sr-only"
                      >
                        {img.angle}
                      </span>
                      <img
                        alt=""
                        data-strk-img-id={img.imgId}
                        data-strk-img={`[pdp-name] [pdp-angle-${img.imgId}]`}
                        data-strk-img-ratio={img.ratio}
                        data-strk-img-width="200"
                        className="absolute inset-0 w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </button>
                  ))}
                </div>

                {/* Main image */}
                <div className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden bg-bone">
                  <img
                    key={product.images[activeIndex].imgId}
                    alt={product.name}
                    data-strk-img-id={product.images[activeIndex].imgId}
                    data-strk-img={`[pdp-name] [pdp-angle-${product.images[activeIndex].imgId}]`}
                    data-strk-img-ratio={product.images[activeIndex].ratio}
                    data-strk-img-width={product.images[activeIndex].width}
                    className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-5 md:pl-4">
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                {product.category}
              </p>
              <h1
                id="pdp-name"
                className="font-serif font-light text-4xl md:text-5xl tracking-tight leading-[1.05]"
              >
                {product.name}
              </h1>
              <p id="pdp-tagline" className="mt-3 text-ink/65">
                {product.tagline}
              </p>

              <div className="flex items-center gap-4 mt-5">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      strokeWidth={1.2}
                      fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-xs text-ink/60">
                  {product.rating.toFixed(1)} · {product.reviewCount} reviews
                </span>
              </div>

              <div className="mt-6 pb-6 border-b border-mist/40">
                <p className="font-serif text-3xl tabular-nums">
                  {formatPrice(product.price)}
                </p>
              </div>

              <p className="mt-6 text-ink/80 leading-relaxed">
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mt-8">
                <p className="text-[11px] tracking-[0.3em] uppercase text-ink/70 mb-3">
                  Finish — <span className="text-ink">{product.variants.find((v) => v.id === variant)?.label}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v.id)}
                      className={cn(
                        "px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase border transition-all",
                        variant === v.id
                          ? "border-ink bg-ink text-cream"
                          : "border-ink/30 text-ink hover:border-ink"
                      )}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add */}
              <div className="mt-8 flex items-stretch gap-3">
                <div className="inline-flex items-center border border-ink/30">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 hover:text-gold"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="px-4 text-sm tabular-nums w-10 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-3 hover:text-gold"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => addItem(product, variant, quantity)}
                  className="flex-1 bg-ink text-cream hover:bg-espresso transition-colors text-[12px] tracking-[0.3em] uppercase"
                >
                  Add to Cart — {formatPrice(product.price * quantity)}
                </button>
                <button
                  type="button"
                  aria-label="Save to wishlist"
                  className="border border-ink/30 px-4 hover:text-gold hover:border-gold transition-colors"
                >
                  <Heart size={16} strokeWidth={1.4} />
                </button>
              </div>

              {/* Quick perks */}
              <ul className="mt-8 space-y-2.5 text-xs text-ink/70">
                <li className="flex items-center gap-3">
                  <Truck size={14} strokeWidth={1.4} className="text-gold" />
                  Free worldwide shipping over $75
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck size={14} strokeWidth={1.4} className="text-gold" />
                  30-day returns and 1-year warranty
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles size={14} strokeWidth={1.4} className="text-gold" />
                  Arrives in a linen-lined gift box
                </li>
              </ul>

              {/* Accordions */}
              <div className="mt-10 border-t border-mist/40">
                <Accordion title="Description" defaultOpen>
                  <p>
                    {product.description} Each piece is plated with 18K
                    gold over recycled brass and finished by hand. The
                    result is a warm, even tone that wears beautifully and
                    sits comfortably from morning to night.
                  </p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Recycled brass base, 18K gold plating (2.5 microns)</li>
                    <li>Hypoallergenic and nickel-free</li>
                    <li>Avoid contact with perfume, lotion, chlorine and salt water</li>
                    <li>Polish gently with the included Velmora cloth</li>
                  </ul>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p>
                    Free standard worldwide shipping on orders over $75.
                    Express options at checkout. All Velmora pieces are
                    eligible for return or exchange within 30 days of
                    delivery. Returns are free in the US.
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-bone py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="mb-12">
              <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-4">
                Pair It With
              </p>
              <h2 className="font-serif font-light text-3xl md:text-4xl tracking-tight">
                You may also like.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-mist/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[12px] tracking-[0.25em] uppercase text-ink">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={cn(
            "transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-sm text-ink/75 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
