import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, Truck, RotateCcw, Shield } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";
import PdpGallery from "@/components/product/PdpGallery";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const product = useMemo(() => PRODUCTS.find((p) => p.slug === slug), [slug]);

  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || "Gold");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setActiveImage(0);
    setVariant(product?.variants?.[0] || "Gold");
    setQuantity(1);
  }, [product]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [slug, activeImage]);

  if (!product) {
    return (
      <div className="pt-32 pb-32 text-center px-5">
        <p className="font-serif text-3xl mb-4">Product not found.</p>
        <Button as={Link} to="/shop" variant="outline">
          Back to Shop
        </Button>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, { variant, quantity });
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20 md:pb-28 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <nav className="mb-8 md:mb-10 text-[11px] uppercase tracking-[0.22em] text-taupe">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-ink transition-colors"
          >
            {product.categoryLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <PdpGallery
            productId={product.id}
            activeImage={activeImage}
            onSelect={setActiveImage}
          />

          {/* Info */}
          <div className="lg:pl-6">
            <p className="text-[11px] uppercase tracking-[0.32em] text-champagne mb-3">
              {product.categoryLabel}
            </p>
            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-3xl md:text-4xl tracking-tight text-ink mb-3 uppercase"
            >
              <span className="tracking-[0.08em]">{product.name}</span>
            </h1>

            <div className="flex items-center gap-4 mb-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={cn(
                      "transition-colors",
                      i < Math.round(product.rating)
                        ? "fill-champagne text-champagne"
                        : "text-hairline",
                    )}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-3xl text-ink mb-7">
              {formatPrice(product.price)}
            </p>

            <p
              id={`pdp-${product.id}-blurb`}
              className="text-base text-taupe leading-relaxed mb-8"
            >
              {product.blurb}
            </p>

            {/* Variant selector */}
            <div className="mb-7">
              <p className="text-[11px] uppercase tracking-[0.22em] font-medium mb-3">
                Tone:{" "}
                <span className="text-taupe font-normal tracking-normal normal-case">
                  {variant}
                </span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-medium rounded-full border transition-colors duration-300",
                      variant === v
                        ? "bg-ink text-ivory border-ink"
                        : "bg-transparent text-ink border-hairline hover:border-ink",
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.22em] font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  aria-label="Decrease"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* CTA */}
            <Button onClick={handleAdd} variant="primary" size="lg" className="w-full mb-3">
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>
            <button
              type="button"
              onClick={() => {
                addItem(product, { variant, quantity, openDrawer: false });
                navigate("/checkout");
              }}
              className="w-full text-center py-3 text-[11px] uppercase tracking-[0.22em] font-medium text-ink underline underline-offset-4 hover:text-champagne transition-colors"
            >
              Buy It Now
            </button>

            {/* Trust mini-bar */}
            <ul className="mt-8 pt-6 border-t border-hairline grid grid-cols-3 gap-4 text-center">
              <li className="flex flex-col items-center gap-2">
                <Truck size={18} strokeWidth={1.5} className="text-champagne" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-taupe leading-tight">
                  Free Shipping
                </span>
              </li>
              <li className="flex flex-col items-center gap-2">
                <RotateCcw size={18} strokeWidth={1.5} className="text-champagne" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-taupe leading-tight">
                  30-Day Returns
                </span>
              </li>
              <li className="flex flex-col items-center gap-2">
                <Shield size={18} strokeWidth={1.5} className="text-champagne" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-taupe leading-tight">
                  Lifetime Warranty
                </span>
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                items={[
                  { title: "Description", content: product.description },
                  { title: "Materials & Care", content: product.materials },
                  { title: "Shipping & Returns", content: product.shipping },
                ]}
                defaultOpen={0}
              />
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="mt-24 md:mt-32">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <h2 className="font-serif font-light text-3xl md:text-4xl text-ink">
              You may also like
            </h2>
            <Link
              to="/shop"
              className="hidden md:inline-block text-[11px] uppercase tracking-[0.22em] font-medium text-ink border-b border-ink pb-0.5 hover:text-champagne hover:border-champagne transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} idPrefix="related" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
