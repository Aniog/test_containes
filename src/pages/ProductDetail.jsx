import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, Heart, Share2, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { getProductById, getRelatedProducts } from "@/data/products.js";
import { useCart, formatPrice } from "@/context/CartContext.jsx";
import { useStrkImages } from "@/lib/imageLoader.js";
import StarRating from "@/components/common/StarRating.jsx";
import ProductCard from "@/components/product/ProductCard.jsx";
import Hairline from "@/components/common/Hairline.jsx";
import { cn } from "@/lib/format.js";

function Accordion({ items, defaultOpen = 0 }) {
  const [openIdx, setOpenIdx] = useState(defaultOpen);
  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={item.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-ink">
                {item.title}
              </span>
              <ChevronDown
                strokeWidth={1.5}
                className={cn(
                  "w-4 h-4 text-ink-muted transition-transform duration-300",
                  open && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-out",
                open ? "max-h-[600px] pb-6 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="font-sans text-[15px] text-ink-muted leading-relaxed max-w-2xl">
                {item.body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = useMemo(() => getRelatedProducts(id, 4), [id]);
  const ref = useRef(null);
  useStrkImages(ref);

  const { addToCart } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [variantId, setVariantId] = useState(product?.variants[0]?.id || "gold");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setActiveImage(0);
    setVariantId(product?.variants[0]?.id || "gold");
    setQuantity(1);
  }, [product?.id]);

  if (!product) {
    return (
      <div className="container-wide py-32 text-center flex flex-col items-center gap-4">
        <p className="font-serif text-3xl font-light text-ink">Piece not found</p>
        <p className="font-sans text-sm text-ink-muted">
          The piece you are looking for has moved or is no longer available.
        </p>
        <Link to="/shop" className="btn-secondary mt-2">Back to the collection</Link>
      </div>
    );
  }

  const mainImage = product.images[activeImage] || product.images[0];

  const handleAdd = () => {
    addToCart(product.id, variantId, quantity);
  };

  return (
    <div ref={ref} className="bg-cream">
      {/* Breadcrumb */}
      <div className="container-wide pt-24 md:pt-28">
        <nav
          aria-label="Breadcrumb"
          className="font-sans text-xs tracking-[0.18em] uppercase text-ink-muted py-4"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link to="/" className="hover:text-ink">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/shop" className="hover:text-ink">Shop</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">{product.name}</li>
          </ol>
        </nav>
      </div>

      <section className="container-wide pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7 lg:col-span-7">
            <div className="flex gap-4">
              {/* Thumbnails (desktop) */}
              <div className="hidden md:flex flex-col gap-3 w-20 flex-shrink-0">
                {product.images.map((img, i) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "block aspect-[4/5] overflow-hidden bg-surface-warm border transition-colors",
                      i === activeImage ? "border-ink" : "border-line hover:border-ink"
                    )}
                    aria-label={`View image ${i + 1}`}
                    aria-current={i === activeImage}
                  >
                    <img
                      alt=""
                      data-strk-img-id={img.id}
                      data-strk-img={img.query}
                      data-strk-img-ratio={img.ratio}
                      data-strk-img-width="200"
                      loading="lazy"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 relative">
                <div className="relative aspect-[4/5] bg-surface-warm overflow-hidden">
                  <img
                    key={mainImage.id}
                    alt={product.name}
                    data-strk-img-id={mainImage.id}
                    data-strk-img={mainImage.query}
                    data-strk-img-ratio={mainImage.ratio}
                    data-strk-img-width="1400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                  />
                </div>

                {/* Mobile dots */}
                <div className="mt-4 flex md:hidden items-center justify-center gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "h-1 transition-all",
                        i === activeImage
                          ? "w-6 bg-ink"
                          : "w-2 bg-line hover:bg-ink-muted"
                      )}
                      aria-label={`View image ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="md:sticky md:top-28">
              <p className="eyebrow text-ink-muted">
                {product.category}
              </p>
              <h1
                id="pd-title"
                className="font-serif text-3xl md:text-4xl text-ink font-light leading-[1.1] mt-3"
              >
                {product.name}
              </h1>
              <div className="mt-4 flex items-center gap-3">
                <StarRating value={product.rating} size={14} />
                <span className="font-sans text-xs text-ink-muted">
                  {product.rating} · {product.reviewCount} reviews
                </span>
              </div>
              <p className="mt-5 font-sans text-2xl text-ink">
                {formatPrice(product.price)}
              </p>
              <p
                id="pd-short"
                className="mt-5 font-sans text-[15px] text-ink-muted leading-relaxed"
              >
                {product.shortDescription}
              </p>

              {/* Variant selector */}
              <div className="mt-7">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-ink-muted mb-3">
                  Tone
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariantId(v.id)}
                      className={cn(
                        "px-5 py-2.5 border font-sans text-sm transition-colors",
                        v.id === variantId
                          ? "border-ink text-ink bg-cream"
                          : "border-line text-ink-muted hover:border-ink hover:text-ink"
                      )}
                      aria-pressed={v.id === variantId}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-7">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-ink-muted mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-line">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2.5 text-ink hover:text-gold"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="px-4 font-sans text-sm tabular-nums text-ink min-w-[2.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2.5 text-ink hover:text-gold"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <div className="mt-7 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="btn-primary btn-block py-4"
                >
                  Add to bag · {formatPrice(product.price * quantity)}
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => toast.success("Saved to your wishlist")}
                    className="btn border border-line text-ink hover:border-ink"
                  >
                    <Heart strokeWidth={1.5} className="w-4 h-4 mr-2" />
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: product.name,
                            text: product.shortDescription,
                            url: window.location.href,
                          })
                          .catch(() => {});
                      } else {
                        navigator.clipboard
                          ?.writeText(window.location.href)
                          .then(() => toast.success("Link copied"));
                      }
                    }}
                    className="btn border border-line text-ink hover:border-ink"
                  >
                    <Share2 strokeWidth={1.5} className="w-4 h-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>

              {/* Trust strip */}
              <ul className="mt-7 grid grid-cols-3 gap-3 pt-6 border-t border-line">
                {[
                  { icon: Truck, label: "Free shipping" },
                  { icon: RotateCcw, label: "30-day returns" },
                  { icon: ShieldCheck, label: "Hypoallergenic" },
                ].map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <Icon
                      strokeWidth={1.5}
                      className="w-5 h-5 text-gold"
                    />
                    <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-ink-muted">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-20 max-w-3xl">
          <Accordion
            items={[
              { title: "Description", body: product.description },
              { title: "Materials & Care", body: product.materials + " " + product.care },
              { title: "Shipping & Returns", body: product.shipping },
            ]}
            defaultOpen={0}
          />
        </div>
      </section>

      <Hairline />

      {/* Related products */}
      <section className="container-wide py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-ink font-light">
            You may also love
          </h2>
          <Link
            to="/shop"
            className="link-underline font-sans text-sm text-ink hover:text-gold"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
