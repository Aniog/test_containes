import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, Minus, Plus, Heart, Truck, RotateCcw, Sparkles } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/data/catalog";
import { Stars } from "@/components/ui/Stars";
import { Button } from "@/components/ui/Button";
import ProductCard from "@/components/product/ProductCard";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

// Pre-register all gallery slots so the build-time plugin can resolve every
// data-strk-img-id from the static PRODUCTS catalog. These elements are
// hidden, but they register the IDs in strk-img-config so the runtime helper
// can populate any visible <img> element sharing the same data-strk-img-id.
function GalleryRegistry() {
  return (
    <div className="hidden" aria-hidden="true">
      {PRODUCTS.map((p) =>
        p.gallery.map((g) => (
          <img
            key={g.imgId}
            alt=""
            data-strk-img-id={g.imgId}
            data-strk-img={g.query}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        )),
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [variantId, setVariantId] = useState(product?.variants[0]?.id);
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");

  const related = useMemo(() => (product ? getRelatedProducts(product.slug, 4) : []), [product]);

  useEffect(() => {
    if (!containerRef.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [slug, activeImage]);

  if (!product) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Piece not found</h1>
        <p className="text-taupe mb-8">We couldn't find that product.</p>
        <Button as={Link} to="/shop" variant="primary">
          Back to Shop
        </Button>
      </div>
    );
  }

  const accordions = [
    {
      id: "description",
      title: "Description",
      content: product.long,
    },
    {
      id: "materials",
      title: "Materials & Care",
      content: `${product.materials}\n\n${product.care}`,
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content:
        "Complimentary worldwide shipping on every order. Most pieces ship within 1–2 business days. Return any unworn piece within 30 days for a full refund. Final-sale items are clearly marked.",
    },
  ];

  return (
    <div ref={containerRef} className="bg-ivory">
      <GalleryRegistry />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-8 pb-20 md:pb-28">
        {/* Breadcrumb */}
        <nav className="font-sans text-xs uppercase tracking-[0.22em] text-taupe mb-8">
          <Link to="/" className="hover:text-onyx transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-onyx transition-colors capitalize">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-onyx">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/5] bg-bone overflow-hidden mb-4">
              {product.gallery.map((g, i) => (
                <img
                  key={g.imgId}
                  alt={product.name}
                  data-strk-img-id={g.imgId}
                  data-strk-img={g.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                    i === activeImage ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute top-4 right-4 w-10 h-10 bg-ivory/85 backdrop-blur rounded-full flex items-center justify-center text-onyx hover:bg-onyx hover:text-ivory transition-colors z-10"
              >
                <Heart size={16} strokeWidth={1.25} />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={g.imgId}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative aspect-square bg-bone overflow-hidden transition-all",
                    i === activeImage
                      ? "ring-1 ring-onyx ring-offset-2 ring-offset-ivory"
                      : "opacity-70 hover:opacity-100",
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt=""
                    data-strk-img-id={g.imgId}
                    data-strk-img={g.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-2">
            <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif font-light uppercase tracking-[0.18em] text-2xl md:text-3xl leading-tight text-onyx"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="hidden">
              {product.short}
            </p>

            <div className="mt-5 flex items-center gap-5">
              <span className="font-serif text-3xl text-onyx tabular-nums">
                {formatPrice(product.price)}
              </span>
              <Stars value={product.rating} reviews={product.reviews} />
            </div>

            <p className="mt-6 font-sans text-base text-espresso/85 leading-relaxed">
              {product.short}
            </p>

            {/* Variant pills */}
            <div className="mt-8">
              <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-taupe mb-3">
                Tone — <span className="text-onyx">{product.variants.find((v) => v.id === variantId)?.label}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariantId(v.id)}
                    className={cn(
                      "px-5 py-2.5 font-sans text-xs uppercase tracking-[0.22em] border transition-colors",
                      variantId === v.id
                        ? "bg-onyx text-ivory border-onyx"
                        : "bg-transparent text-onyx border-hairline-dark hover:border-onyx",
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-taupe mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-hairline-dark">
                <button
                  type="button"
                  aria-label="Decrease"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-3 hover:text-gold transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-sans text-sm tabular-nums">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase"
                  onClick={() => setQty((q) => q + 1)}
                  className="p-3 hover:text-gold transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8">
              <Button
                variant="accent"
                size="block"
                onClick={() => addItem(product, { variantId, qty })}
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </Button>
              <p className="mt-3 font-sans text-xs text-taupe text-center">
                In stock · Ships within 1–2 business days
              </p>
            </div>

            {/* Perks */}
            <ul className="mt-8 grid grid-cols-3 gap-4 border-t border-hairline pt-6">
              {[
                { Icon: Truck, label: "Free shipping" },
                { Icon: RotateCcw, label: "30-day returns" },
                { Icon: Sparkles, label: "18K gold plated" },
              ].map(({ Icon, label }) => (
                <li key={label} className="text-center">
                  <Icon size={18} strokeWidth={1.25} className="mx-auto text-gold" />
                  <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.22em] text-taupe">
                    {label}
                  </p>
                </li>
              ))}
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              {accordions.map((acc) => {
                const open = openAccordion === acc.id;
                return (
                  <div key={acc.id} className="border-b border-hairline">
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(open ? null : acc.id)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="font-sans text-xs uppercase tracking-[0.28em] text-onyx">
                        {acc.title}
                      </span>
                      <ChevronDown
                        size={18}
                        strokeWidth={1.25}
                        className={cn(
                          "transition-transform duration-300",
                          open ? "rotate-180" : "",
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-out",
                        open ? "max-h-96 pb-6" : "max-h-0",
                      )}
                    >
                      <p className="font-sans text-sm text-espresso/85 leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-bone py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="mb-10">
            <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold">
              You may also love
            </span>
            <h2 className="mt-3 font-serif font-light text-3xl md:text-4xl tracking-tight text-onyx">
              Pair It With
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
