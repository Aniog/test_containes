import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Minus, Plus, Heart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import ProductGallery from "@/components/product/ProductGallery";
import ProductCard from "@/components/product/ProductCard";
import Accordion from "@/components/ui/Accordion";
import { findProduct, relatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

function Stars({ value, count, size = 14 }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={i < full ? "#A07A4A" : "none"}
            stroke={i < full ? "#A07A4A" : "#DCCFB8"}
            strokeWidth="1.5"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <span className="text-[12px] text-muted">
        {value} · {count} reviews
      </span>
    </div>
  );
}

export default function Product() {
  const { id } = useParams();
  const product = useMemo(() => findProduct(id), [id]);
  const related = useMemo(() => relatedProducts(product, 4), [product]);

  const [colorId, setColorId] = useState(
    product?.colors?.[0]?.id || "gold"
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const relatedRef = useRef(null);

  const { addToCart } = useCart();

  useEffect(() => {
    setColorId(product?.colors?.[0]?.id || "gold");
    setQuantity(1);
    setAdded(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [product?.id]);

  if (!product) return <Navigate to="/shop" replace />;

  const handleAdd = () => {
    addToCart({ product, colorId, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const accordions = [
    { title: "Description", content: <p>{product.description}</p> },
    {
      title: "Materials & Care",
      content: <p>{product.materialsCare}</p>,
    },
    {
      title: "Shipping & Returns",
      content: <p>{product.shipping}</p>,
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-x pt-6 pb-2">
        <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-widest2 text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span className="mx-2">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-ink capitalize"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink/80">{product.name}</span>
        </nav>
      </div>

      {/* Main split */}
      <section className="container-x pt-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
          <div className="md:col-span-7">
            <ProductGallery product={product} />
            {/* Hidden IDs for image query refs */}
            <span id={`${product.id}-name`} className="sr-only">
              {product.name}
            </span>
            <span id={`${product.id}-desc`} className="sr-only">
              {product.shortDescription}
            </span>
          </div>

          <div className="md:col-span-5 md:sticky md:top-24 md:self-start">
            {product.badge && (
              <p className="eyebrow text-gold mb-3">{product.badge}</p>
            )}
            <h1 className="product-name text-[14px] md:text-[15px]">
              {product.name}
            </h1>
            <p className="font-serif text-3xl md:text-4xl mt-3 text-ink">
              {formatPrice(product.price)}
            </p>
            <div className="mt-4">
              <Stars value={product.rating} count={product.reviewCount} />
            </div>
            <p className="mt-6 text-[14px] md:text-[15px] text-ink/80 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="label-cap text-muted">Finish</p>
                  <p className="label-cap text-ink/80">
                    {product.colors.find((c) => c.id === colorId)?.label}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setColorId(c.id)}
                      className={cn(
                        "inline-flex items-center gap-2.5 px-4 py-2.5 border transition-colors label-cap",
                        colorId === c.id
                          ? "border-ink text-ink"
                          : "border-hairline text-ink/70 hover:border-muted"
                      )}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-ink/20"
                        style={{ backgroundColor: c.swatch }}
                      />
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-12 inline-flex items-center justify-center text-ink/70 hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-[14px]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-12 inline-flex items-center justify-center text-ink/70 hover:text-ink"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  "flex-1 inline-flex items-center justify-center label-cap py-3.5 transition-colors",
                  added
                    ? "bg-ink text-bg"
                    : "bg-gold text-bg hover:bg-gold-hover"
                )}
              >
                {added ? "Added to bag ✓" : "Add to Bag"}
              </button>
            </div>

            <button
              type="button"
              className="mt-3 inline-flex items-center justify-center gap-2 w-full border border-hairline text-ink/80 label-cap py-3 hover:border-ink hover:text-ink transition-colors"
            >
              <Heart className="w-3.5 h-3.5" strokeWidth={1.5} />
              Save to Wishlist
            </button>

            {/* Reassurance row */}
            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12px] text-ink/80">
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span>Free shipping over $75</span>
              </li>
              <li className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span>30-day returns</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span>Hypoallergenic</span>
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion items={accordions} defaultOpenIndex={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section ref={relatedRef} className="border-t border-hairline bg-bg">
        <div className="container-x py-16 md:py-24">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">
              You may also love
            </h2>
            <Link
              to="/shop"
              className="hidden md:inline label-cap text-ink/80 hover:text-ink border-b border-ink/40 hover:border-ink pb-1"
            >
              Shop all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
