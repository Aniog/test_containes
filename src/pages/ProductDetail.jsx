import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Minus, Plus, Star, Truck, RefreshCw, ShieldCheck, Heart } from "lucide-react";
import ImageGallery from "@/components/product/ImageGallery";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/product/ProductCard";
import { getProductById, getRelated } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem, openCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  const [variant, setVariant] = useState(
    product?.variants?.[0] || "Gold",
  );
  const [qty, setQty] = useState(1);
  const [fav, setFav] = useState(false);

  const related = useMemo(() => (product ? getRelated(product.id, 4) : []), [product]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const onAdd = () => {
    addItem(product.id, variant, qty);
    openCart();
  };

  return (
    <div ref={containerRef} className="bg-bone">
      {/* Breadcrumb */}
      <div className="container-page pt-24 sm:pt-28 lg:pt-32">
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] uppercase tracking-[0.18em] text-taupe"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link to="/" className="hover:text-ink transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-ink transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                to={`/shop?collection=${product.category}`}
                className="hover:text-ink transition-colors"
              >
                {product.category[0].toUpperCase() + product.category.slice(1)}
              </Link>
            </li>
            <li>/</li>
            <li className="text-ink/80 truncate max-w-[60vw]">
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      <div className="container-page py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ImageGallery product={product} />

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">{product.eyebrow}</p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[56px] font-light leading-[1.05] text-ink">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-base sm:text-lg font-medium text-ink">
                {formatPrice(product.price)}
              </span>
              <span className="text-taupe">·</span>
              <span className="inline-flex items-center gap-1 text-xs text-ink/80">
                <Star
                  className="w-3.5 h-3.5 fill-gold text-gold"
                  strokeWidth={0}
                />
                {product.rating.toFixed(1)} ({product.reviews})
              </span>
            </div>

            <p className="mt-7 text-ink/75 text-[15px] leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="product-name text-ink">Finish</span>
                  <span className="text-xs text-taupe">{variant}</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVariant(v)}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-medium transition-colors duration-300",
                        variant === v
                          ? "border-ink bg-ink text-bone"
                          : "border-line text-ink hover:border-ink",
                      )}
                      aria-pressed={variant === v}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "w-3 h-3 rounded-full border",
                          v === "Gold"
                            ? "bg-gold border-gold-deep"
                            : "bg-cream border-taupe",
                        )}
                      />
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add */}
            <div className="mt-8 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-11 h-12 inline-flex items-center justify-center hover:bg-ink hover:text-bone transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.25} />
                </button>
                <span className="w-10 text-center text-sm font-medium">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  className="w-11 h-12 inline-flex items-center justify-center hover:bg-ink hover:text-bone transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.25} />
                </button>
              </div>
              <button
                type="button"
                onClick={onAdd}
                className="btn-primary flex-1"
              >
                Add to Bag
                <span className="opacity-60">·</span>
                <span>{formatPrice(product.price * qty)}</span>
              </button>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setFav((f) => !f)}
                className={cn(
                  "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] transition-colors duration-300",
                  fav ? "text-gold-deep" : "text-ink/70 hover:text-ink",
                )}
                aria-pressed={fav}
              >
                <Heart
                  className={cn(
                    "w-4 h-4",
                    fav ? "fill-gold text-gold-deep" : "",
                  )}
                  strokeWidth={1.25}
                />
                {fav ? "Saved" : "Save"}
              </button>
              <span className="text-[11px] uppercase tracking-[0.18em] text-taupe">
                Free 30-day returns
              </span>
            </div>

            {/* Trust row */}
            <ul className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { Icon: Truck, label: "Free shipping" },
                { Icon: RefreshCw, label: "30-day returns" },
                { Icon: ShieldCheck, label: "Hypoallergenic" },
              ].map(({ Icon, label }) => (
                <li
                  key={label}
                  className="border border-line py-4 flex flex-col items-center gap-2"
                >
                  <Icon
                    className="w-4 h-4 text-ink/80"
                    strokeWidth={1.25}
                  />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-ink/70">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                items={[
                  {
                    title: "Description",
                    content: <p>{product.details}</p>,
                  },
                  {
                    title: "Materials & Care",
                    content: (
                      <>
                        <p>{product.materials}</p>
                        <p className="mt-3">{product.care}</p>
                      </>
                    ),
                  },
                  {
                    title: "Shipping & Returns",
                    content: <p>{product.shipping}</p>,
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 sm:mt-28 border-t border-line pt-16 sm:pt-20">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <p className="eyebrow">You may also love</p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ink">
                  From the same edit
                </h2>
              </div>
              <Link
                to="/shop"
                className="text-[11px] uppercase tracking-[0.18em] text-ink link-underline hidden sm:inline-block"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
