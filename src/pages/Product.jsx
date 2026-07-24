import React, { useMemo, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Star, Minus, Plus, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { findProduct, relatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { useStrkImages } from "@/lib/useStrkImages";
import ProductGallery from "@/components/product/ProductGallery";
import ProductAccordion from "@/components/product/ProductAccordion";
import ProductCard from "@/components/product/ProductCard";
import Newsletter from "@/components/layout/Newsletter";

export default function Product() {
  const { slug } = useParams();
  const product = findProduct(slug);
  const { addItem } = useCart();
  const pageRef = useRef(null);
  useStrkImages(pageRef, [slug]);

  const [variantId, setVariantId] = useState(product?.variants?.[0]?.id || "gold");
  const [qty, setQty] = useState(1);

  const related = useMemo(() => relatedProducts(slug, 4), [slug]);
  const sections = useMemo(() => {
    if (!product) return [];
    return [
      { title: "Description", body: product.description },
      { title: "Materials & Care", body: (
          <div className="space-y-3">
            <p>{product.materials}</p>
            <p>{product.care}</p>
          </div>
        ),
      },
      { title: "Shipping & Returns", body: product.shipping },
    ];
  }, [product]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const onAdd = () => {
    addItem(product.slug, variantId, qty);
  };

  return (
    <div ref={pageRef} className="bg-ivory-50">
      {/* Crumb */}
      <div className="mx-auto max-w-7xl px-5 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <nav className="text-[11px] font-sans uppercase tracking-widest2 text-ink-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold-500">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold-500">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/collections/${product.category}`} className="hover:text-gold-500">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-800">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Detail panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">{product.eyebrow}</p>
            <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-ink-800">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="inline-flex items-center gap-0.5 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              <span className="text-[12px] font-sans text-ink-500">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>
            <p className="mt-6 font-sans text-xl text-ink-800">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 max-w-prose text-ink-600 leading-relaxed text-pretty">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants?.length > 0 && (
              <div className="mt-8">
                <p className="font-sans uppercase tracking-widest2 text-[11px] text-ink-500">
                  Finish
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.variants.map((v) => {
                    const selected = v.id === variantId;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVariantId(v.id)}
                        aria-pressed={selected}
                        className={cn(
                          "rounded-full border px-5 py-2 font-sans uppercase tracking-widest2 text-[11px] transition-all duration-300",
                          selected
                            ? "border-ink-800 bg-ink-800 text-ivory-50"
                            : "border-ink-800/25 text-ink-800 hover:border-ink-800"
                        )}
                      >
                        {v.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity + Add */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <div className="inline-flex items-center border border-ink-800/20 sm:w-auto">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="h-12 w-12 inline-flex items-center justify-center text-ink-800 hover:text-gold-500"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-sans text-[14px]">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  className="h-12 w-12 inline-flex items-center justify-center text-ink-800 hover:text-gold-500"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={onAdd}
                className="btn-primary flex-1 sm:flex-none sm:px-12"
              >
                Add to Cart · {formatPrice(product.price * qty)}
              </button>
            </div>

            {/* Quick promises */}
            <ul className="mt-8 grid grid-cols-1 gap-3 text-[12px] text-ink-600 sm:grid-cols-3">
              <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold-500" /> Free shipping over $75</li>
              <li className="flex items-center gap-2"><RefreshCw className="h-4 w-4 text-gold-500" /> 30-day returns</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold-500" /> Hypoallergenic</li>
            </ul>

            {/* Accordions */}
            <div className="mt-12">
              <ProductAccordion sections={sections} />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-ink-800/10 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-800">
              You may also love
            </h2>
            <Link
              to="/shop"
              className="link-underline hidden sm:inline-block font-sans uppercase tracking-widest2 text-[11px] text-ink-800"
            >
              View all
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
