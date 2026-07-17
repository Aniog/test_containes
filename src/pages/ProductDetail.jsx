import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Plus, Minus, ChevronRight } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useStrkImages } from "@/hooks/useStrkImages";
import { useReveal } from "@/hooks/useReveal";
import { formatPrice, cn } from "@/lib/utils";
import Accordion from "@/components/product/Accordion";
import VariantSelector from "@/components/product/VariantSelector";
import ProductCard from "@/components/product/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const revealRef = useReveal();
  const ref = useStrkImages([id]);

  const [tone, setTone] = useState(product?.tone || "gold");
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const relatedRef = useStrkImages([id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-5 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Link to="/shop" className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-deep">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);
  const galleryIds = product.galleryIds || [product.imgId];

  const handleAdd = () => {
    addItem(product, { tone, quantity: qty });
  };

  const accordions = [
    { title: "Description", body: product.description },
    { title: "Materials & Care", body: `${product.materials} ${product.care}` },
    { title: "Shipping & Returns", body: product.shipping },
  ];

  return (
    <div ref={revealRef}>
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 bg-cream">
        <div className="max-w-content mx-auto px-5 md:px-8">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-stone py-4">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/shop" className="hover:text-gold">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main */}
      <section ref={ref} className="bg-cream pb-20 md:pb-28">
        <div className="max-w-content mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar">
              {galleryIds.map((gid, i) => (
                <button
                  key={gid}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-sand border transition-colors",
                    activeImg === i ? "border-ink" : "border-line hover:border-stone"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    data-strk-img-id={gid}
                    data-strk-img={`[${product.descId}] [${product.titleId}] ${product.type}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-sand">
              <img
                alt={product.name}
                data-strk-img-id={galleryIds[activeImg]}
                data-strk-img={`[${product.descId}] [${product.titleId}] ${product.type}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-cream/95 text-ink text-[10px] uppercase tracking-[0.16em] px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{product.category}</p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-[0.1em] text-ink leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.shortDesc}</p>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-3.5 h-3.5",
                      i < Math.round(product.rating) ? "fill-gold text-gold" : "text-line"
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-2xl text-ink">{formatPrice(product.price)}</p>

            <p className="mt-5 text-sm text-ink-soft leading-relaxed max-w-md">
              {product.shortDesc}
            </p>

            <div className="mt-8">
              <VariantSelector value={tone} onChange={setTone} />
            </div>

            {/* Quantity + add */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-12 h-12 flex items-center justify-center text-ink hover:text-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-ink">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-12 h-12 flex items-center justify-center text-ink hover:text-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-gold text-cream text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-deep transition-colors"
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
            </div>

            <p className="mt-5 text-xs text-stone">
              Free worldwide shipping over $50 · 30-day returns · Hypoallergenic
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section ref={relatedRef} className="py-20 md:py-28 bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-[0.24em] text-gold mb-3">Complete the Look</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
