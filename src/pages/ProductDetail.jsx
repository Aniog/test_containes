import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Minus, Plus, Star, ChevronDown } from "lucide-react";
import { getProduct, getRelated } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/product/ProductCard";
import { cn, formatPrice } from "@/lib/utils";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] uppercase tracking-eyebrow text-ink font-medium">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-ink-soft transition-transform duration-300",
            open && "rotate-180"
          )}
          strokeWidth={1.4}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-soft-out",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden text-sm text-ink-soft leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants[0]?.id || "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Reset selection if the route product changes
  useEffect(() => {
    setActiveImage(0);
    setVariant(product?.variants[0]?.id || "");
    setQuantity(1);
    setAdded(false);
  }, [product?.id]);

  const related = useMemo(
    () => (product ? getRelated(product.id, 4) : []),
    [product?.id]
  );

  if (!product) {
    return (
      <section className="pt-40 pb-32 bg-bone">
        <div className="container-velmora text-center">
          <h1 className="font-serif text-5xl font-light mb-4 text-ink">
            Piece not found.
          </h1>
          <p className="text-ink-soft mb-8">
            The link may have moved, or the piece may have retired.
          </p>
          <Link to="/shop" className="btn-primary">
            Browse the Collection
          </Link>
        </div>
      </section>
    );
  }

  const handleAdd = () => {
    addItem({ productId: product.id, variantId: variant, quantity });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <>
      {/* Crumb */}
      <div className="bg-bone pt-28 md:pt-36">
        <div className="container-velmora">
          <nav
            aria-label="Breadcrumb"
            className="text-[11px] uppercase tracking-eyebrow text-ink-soft"
          >
            <Link to="/" className="hover:text-ink">Home</Link>
            <span className="mx-2 text-line">/</span>
            <Link to="/shop" className="hover:text-ink">Shop</Link>
            <span className="mx-2 text-line">/</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-bone pt-8 md:pt-12 pb-20 md:pb-28">
        <div className="container-velmora">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="md:col-span-7">
              <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-5">
                {/* Thumbnails */}
                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
                  {product.images.map((src, idx) => (
                    <button
                      key={src + idx}
                      type="button"
                      onClick={() => setActiveImage(idx)}
                      aria-label={`View image ${idx + 1}`}
                      className={cn(
                        "flex-shrink-0 w-16 h-20 md:w-20 md:h-24 bg-cream overflow-hidden border transition-all duration-300",
                        activeImage === idx
                          ? "border-ink"
                          : "border-line hover:border-ink-soft"
                      )}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                {/* Active image */}
                <div className="flex-1 aspect-[4/5] bg-cream overflow-hidden">
                  <img
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
              {product.badge && (
                <p className="text-[11px] uppercase tracking-eyebrow text-gold-deep mb-4">
                  {product.badge}
                </p>
              )}
              <h1 className="product-name text-2xl md:text-3xl leading-tight">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-3.5 h-3.5",
                        i < Math.round(product.rating)
                          ? "fill-gold text-gold"
                          : "text-line"
                      )}
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <span className="text-ink tabular-nums">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-ink-soft">·</span>
                <span className="text-ink-soft">
                  {product.reviews} reviews
                </span>
              </div>
              <p className="mt-5 font-serif text-3xl text-ink">
                {formatPrice(product.price)}
              </p>
              <p className="mt-6 text-base text-ink-soft leading-relaxed">
                {product.blurb}
              </p>

              {/* Variant */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] uppercase tracking-eyebrow text-ink">
                    Finish
                  </p>
                  <p className="text-[11px] uppercase tracking-eyebrow text-ink-soft">
                    {product.variants.find((v) => v.id === variant)?.label}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v.id)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 border transition-all duration-300 text-sm",
                        variant === v.id
                          ? "border-ink bg-ink text-bone"
                          : "border-line text-ink hover:border-ink"
                      )}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-bone/30"
                        style={{ backgroundColor: v.swatch }}
                        aria-hidden="true"
                      />
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-7">
                <p className="text-[11px] uppercase tracking-eyebrow text-ink mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-ink">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-11 h-11 flex items-center justify-center text-ink hover:bg-cream"
                  >
                    <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                  <span className="w-12 text-center text-sm text-ink">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                    className="w-11 h-11 flex items-center justify-center text-ink hover:bg-cream"
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Add */}
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  "mt-7 w-full inline-flex items-center justify-center px-8 py-4 text-[11px] md:text-xs font-medium uppercase tracking-product transition-all duration-300 ease-soft-out",
                  added
                    ? "bg-gold text-bone"
                    : "bg-ink text-bone hover:bg-ink-soft"
                )}
              >
                {added ? "Added to your bag" : "Add to Bag"}
              </button>

              <ul className="mt-6 grid grid-cols-3 gap-3 text-[10px] uppercase tracking-eyebrow text-ink-soft">
                <li className="flex flex-col items-center text-center gap-1 border border-line py-3">
                  Free shipping
                </li>
                <li className="flex flex-col items-center text-center gap-1 border border-line py-3">
                  30-day returns
                </li>
                <li className="flex flex-col items-center text-center gap-1 border border-line py-3">
                  Hypoallergenic
                </li>
              </ul>

              <div className="mt-8">
                <Accordion title="Description" defaultOpen>
                  <p>{product.description}</p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <p className="mb-3">{product.materials}</p>
                  <p>{product.care}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p>{product.shipping}</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-velmora">
          <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <p className="eyebrow mb-4">You May Also Like</p>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.05] text-ink max-w-xl">
                Pieces that
                <span className="italic"> speak the same language.</span>
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-product text-ink hover:text-ink-soft font-medium border-b border-ink pb-1"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}