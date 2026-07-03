import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";
import Accordion from "@/components/ui/Accordion";
import ProductCard from "@/components/product/ProductCard";
import { useStrkImages } from "@/lib/useStrkImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const containerRef = useStrkImages([id]);

  const [tone, setTone] = useState(product?.tones?.[0] || "Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Link to="/shop" className="mt-6 text-gold underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAdd = () => {
    addItem(product, { tone, quantity });
  };

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.details} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in 3–7 days depending on location. Enjoy 30-day returns on unworn pieces in their original packaging.",
    },
  ];

  const thumbClass = (i) =>
    cn(
      "relative aspect-[4/5] w-20 overflow-hidden bg-sand transition-all md:w-24",
      activeImage === i ? "ring-1 ring-gold" : "opacity-60 hover:opacity-100"
    );

  const mainClass = (i) =>
    cn(
      "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
      activeImage === i ? "opacity-100" : "opacity-0"
    );

  return (
    <div ref={containerRef} className="bg-cream pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-editorial px-5 py-5 md:px-10">
        <nav className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-wider text-stone">
          <Link to="/" className="transition-colors hover:text-ink">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="transition-colors hover:text-ink">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-editorial gap-10 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-10 lg:gap-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            <button type="button" onClick={() => setActiveImage(0)} className={thumbClass(0)}>
              <img
                alt={`${product.name} view 1`}
                data-strk-img-id={`${product.imgId}-gallery-main-thumb`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="200"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
            </button>
            <button type="button" onClick={() => setActiveImage(1)} className={thumbClass(1)}>
              <img
                alt={`${product.name} view 2`}
                data-strk-img-id={`${product.imgId}-gallery-alt-thumb`}
                data-strk-img={`[${product.titleId}] worn styling ${product.subtitle}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="200"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
            </button>
            <button type="button" onClick={() => setActiveImage(2)} className={thumbClass(2)}>
              <img
                alt={`${product.name} view 3`}
                data-strk-img-id={`${product.imgId}-gallery-detail-thumb`}
                data-strk-img={`[${product.descId}] detail closeup gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="200"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
            </button>
          </div>
          {/* Main image */}
          <div className="relative flex-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <img
                alt={product.name}
                data-strk-img-id={`${product.imgId}-gallery-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                className={mainClass(0)}
              />
              <img
                alt={product.name}
                data-strk-img-id={`${product.imgId}-gallery-alt`}
                data-strk-img={`[${product.titleId}] worn styling ${product.subtitle}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                className={mainClass(1)}
              />
              <img
                alt={product.name}
                data-strk-img-id={`${product.imgId}-gallery-detail`}
                data-strk-img={`[${product.descId}] detail closeup gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                className={mainClass(2)}
              />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badge && (
            <span className="inline-block bg-sand px-3 py-1 font-sans text-[10px] uppercase tracking-widest2 text-ink">
              {product.badge}
            </span>
          )}
          <h1
            id={product.titleId}
            className="mt-4 font-serif text-3xl uppercase tracking-widest2 text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="mt-2 font-sans text-sm text-stone">
            {product.subtitle}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={14} />
            <span className="font-sans text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 font-sans text-sm leading-relaxed text-stone">
            {product.description}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
              Tone: <span className="text-stone">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={cn(
                    "min-w-16 border px-5 py-2.5 font-sans text-[11px] uppercase tracking-widest2 transition-all duration-300",
                    tone === t
                      ? "border-ink bg-ink text-cream"
                      : "border-hairline text-ink hover:border-ink"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-ink">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-hairline">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="min-w-10 text-center font-sans text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 font-sans text-xs uppercase tracking-widest2 text-cream transition-all duration-300 ease-luxury hover:bg-gold-deep"
          >
            <ShoppingBag size={16} />
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-center font-sans text-[11px] text-stone">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-hairline bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-editorial px-5 md:px-10">
          <h2 className="mb-10 text-center font-serif text-3xl text-ink md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
