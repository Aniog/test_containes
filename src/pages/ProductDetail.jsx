import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { Heart, Share2, Truck, RotateCcw, ShieldCheck, Star } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import ImageGallery from "@/components/product/ImageGallery";
import VariantSelector from "@/components/product/VariantSelector";
import QuantitySelector from "@/components/product/QuantitySelector";
import Accordion from "@/components/product/Accordion";
import RelatedProducts from "@/components/product/RelatedProducts";
import { useCart } from "@/contexts/CartContext";
import { PRODUCTS } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";

const RELATED_FROM_IDS = [];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useMemo(
    () => PRODUCTS.find((p) => p.id === id),
    [id]
  );
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [variant, setVariant] = useState(
    product?.tone?.[0] || "gold"
  );
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  useEffect(() => {
    if (product) {
      setVariant(product.tone?.[0] || "gold");
      setQty(1);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="bg-cream min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="eyebrow text-gold-deep mb-3">Not found</p>
          <h1 className="display-md text-ink">We couldn't find that piece.</h1>
          <p className="mt-4 text-muted font-sans font-light">
            The link may be old, or the piece may have been retired.
          </p>
          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="btn-primary mt-8"
          >
            Back to shop
          </button>
        </div>
      </div>
    );
  }

  const onAdd = () => {
    setAdding(true);
    addItem(product, variant, qty);
    setTimeout(() => setAdding(false), 600);
  };

  const accordionItems = [
    { title: "Description", body: product.details.Description },
    { title: "Materials & Care", body: product.details["Materials & Care"] },
    { title: "Shipping & Returns", body: product.details["Shipping & Returns"] },
  ];

  return (
    <div ref={containerRef} className="bg-cream">
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 border-b border-line/60">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-3.5 flex items-center gap-2 text-[11px] uppercase tracking-wider-3 font-sans text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span>/</span>
          <span className="text-ink truncate">{product.name}</span>
        </div>
      </div>

      <section className="max-w-8xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ImageGallery product={product} />

          {/* Right column */}
          <div className="md:sticky md:top-28 self-start">
            {product.badge && (
              <p className="eyebrow text-gold-deep mb-3">{product.badge}</p>
            )}
            <h1 className="font-sans text-[15px] md:text-base uppercase tracking-wider-2 text-ink font-medium">
              {product.name}
            </h1>
            <p className="font-serif italic font-light text-2xl md:text-3xl text-ink mt-2">
              {product.subtitle}
            </p>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-serif text-3xl text-ink">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-muted font-sans font-light">
                · {product.material}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2 text-[12px] text-muted font-sans font-light">
              <span className="inline-flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    strokeWidth={0}
                    fill="currentColor"
                    className={cn(
                      "w-3.5 h-3.5",
                      i < Math.round(product.rating) ? "text-gold" : "text-line"
                    )}
                  />
                ))}
              </span>
              <span className="text-ink">{product.rating}</span>
              <span>· {product.reviews} reviews</span>
            </div>

            <p className="mt-6 text-[15px] text-ink-soft font-sans font-light leading-[1.75] max-w-md">
              {product.description}
            </p>

            <div className="mt-8">
              <VariantSelector
                options={product.tone}
                value={variant}
                onChange={setVariant}
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <QuantitySelector value={qty} onChange={setQty} />
              <button
                type="button"
                onClick={onAdd}
                className={cn(
                  "btn-primary flex-1 sm:flex-none sm:px-12 transition-all",
                  adding && "bg-gold-deep border-gold-deep"
                )}
              >
                {adding ? "Added to bag" : "Add to Bag"}
              </button>
              <button
                type="button"
                aria-label="Save to wishlist"
                className="w-12 h-12 rounded-full border border-line flex items-center justify-center text-ink hover:border-ink transition-colors"
              >
                <Heart strokeWidth={1.25} className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 text-[11px] uppercase tracking-wider-2 font-sans font-medium text-ink-soft">
              <div className="flex flex-col items-center text-center gap-2 py-3 border border-line/70">
                <Truck strokeWidth={1.25} className="w-4 h-4 text-ink" />
                <span>Free shipping<br />over $75</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 py-3 border border-line/70">
                <RotateCcw strokeWidth={1.25} className="w-4 h-4 text-ink" />
                <span>30-day<br />returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 py-3 border border-line/70">
                <ShieldCheck strokeWidth={1.25} className="w-4 h-4 text-ink" />
                <span>Hypo-<br />allergenic</span>
              </div>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts currentId={product.id} category={product.category} />
    </div>
  );
}
