import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight, Minus, Plus, Heart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button";
import StarRating from "@/components/ui/StarRating";
import ProductGallery from "@/components/product/ProductGallery";
import ProductAccordion from "@/components/product/ProductAccordion";
import ProductCard from "@/components/product/ProductCard";
import ImagePreloader from "@/components/product/ImagePreloader";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart, formatPrice } from "@/context/CartContext";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [variant, setVariant] = useState(product?.variants?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  useEffect(() => {
    if (!product || !containerRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [product?.id]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addItem(product, { variant, quantity });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <Layout>
      <div ref={containerRef} className="bg-velmora-cream">
        <ImagePreloader />
        {/* Breadcrumb */}
        <nav className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 pt-6 md:pt-10">
          <ol className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-velmora-mocha">
            <li><Link to="/" className="hover:text-velmora-espresso">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li><Link to="/shop" className="hover:text-velmora-espresso">Shop</Link></li>
            <li><ChevronRight size={12} /></li>
            <li>
              <Link to={`/shop?category=${product.category}`} className="hover:text-velmora-espresso capitalize">
                {product.category}
              </Link>
            </li>
            <li><ChevronRight size={12} /></li>
            <li className="text-velmora-espresso truncate">{product.name}</li>
          </ol>
        </nav>

        {/* Product main */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <ProductGallery product={product} />

            {/* Info */}
            <div className="flex flex-col">
              {product.isNew && (
                <span className="self-start mb-4 px-3 py-1 bg-velmora-espresso text-velmora-cream text-[10px] uppercase tracking-[0.24em]">
                  New Arrival
                </span>
              )}
              <h1
                id={product.titleId}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-espresso font-light uppercase tracking-[0.08em] leading-tight"
              >
                {product.name}
              </h1>
              <p id={product.descId} className="mt-3 text-[14px] italic font-serif text-velmora-mocha">
                {product.tagline}
              </p>

              <div className="mt-5 flex items-center gap-5">
                <span className="font-serif text-3xl text-velmora-espresso">
                  {formatPrice(product.price)}
                </span>
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              </div>

              <div className="my-8 h-px bg-velmora-line" />

              <p className="text-[15px] text-velmora-ink leading-relaxed max-w-md">
                {product.description}
              </p>

              {/* Variant */}
              <div className="mt-8">
                <span className="text-[11px] uppercase tracking-[0.28em] text-velmora-mocha">
                  Tone — <span className="text-velmora-espresso">{variant}</span>
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVariant(v)}
                      className={cn(
                        "px-5 py-2.5 border text-[11px] uppercase tracking-[0.22em] transition-all duration-300",
                        variant === v
                          ? "border-velmora-espresso bg-velmora-espresso text-velmora-cream"
                          : "border-velmora-line text-velmora-espresso hover:border-velmora-espresso",
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-8 flex items-stretch gap-3">
                <div className="flex items-center border border-velmora-line">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-4 text-velmora-espresso hover:text-velmora-gold"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center text-[13px] tabular-nums text-velmora-espresso">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-4 text-velmora-espresso hover:text-velmora-gold"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
                <Button onClick={handleAddToCart} className="flex-1">
                  {justAdded ? "Added ✓" : `Add to Cart — ${formatPrice(product.price * quantity)}`}
                </Button>
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="px-4 border border-velmora-line text-velmora-espresso hover:border-velmora-espresso hover:text-velmora-gold transition-colors"
                >
                  <Heart size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Mini reassurance */}
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] uppercase tracking-[0.18em] text-velmora-mocha">
                <li className="flex items-center gap-2">
                  <Truck size={14} strokeWidth={1.5} className="text-velmora-gold" /> Free over $100
                </li>
                <li className="flex items-center gap-2">
                  <RotateCcw size={14} strokeWidth={1.5} className="text-velmora-gold" /> 30-Day Returns
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck size={14} strokeWidth={1.5} className="text-velmora-gold" /> Hypoallergenic
                </li>
              </ul>

              {/* Accordions */}
              <ProductAccordion product={product} />
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-20 md:py-28 bg-velmora-ivory">
            <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
              <div className="mb-10 md:mb-14 text-center">
                <span className="text-[11px] uppercase tracking-[0.32em] text-velmora-mocha">
                  The Pairing
                </span>
                <h2 className="mt-4 font-serif text-3xl md:text-5xl text-velmora-espresso font-light">
                  You May Also Like
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-6 gap-y-10">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
