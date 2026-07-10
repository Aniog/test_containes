import React, { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight, Heart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductAccordion from "@/components/product/ProductAccordion";
import ProductCard from "@/components/product/ProductCard";
import StarRating from "@/components/ui/StarRating";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

const TONES = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
  { id: "rose", label: "Rose Gold" },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [tone, setTone] = useState(product?.tone || "gold");
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  const related = useMemo(() => (product ? getRelatedProducts(product.id, 4) : []), [product]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const handleAdd = () => {
    addItem(product, qty);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-sand-50 border-b border-sand-200">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-textmute">
            <Link to="/" className="hover:text-ink-950 editorial-transition">Home</Link>
            <ChevronRight size={12} />
            <Link to="/shop" className="hover:text-ink-950 editorial-transition">Shop</Link>
            <ChevronRight size={12} />
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-ink-950 editorial-transition capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight size={12} />
            <span className="text-ink-950">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-sand-50">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <ProductGallery product={product} />
            </div>
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <span className="label-cap text-champagne-600 capitalize">{product.category}</span>
                <h1
                  id={`${product.id}-title`}
                  className="mt-3 font-sans text-2xl md:text-3xl uppercase tracking-wider1 font-medium text-ink-950"
                >
                  {product.name}
                </h1>
                <div className="mt-4 flex items-center gap-3">
                  <span className="font-sans text-xl text-ink-950">{formatPrice(product.price)}</span>
                  <span className="text-sand-300">·</span>
                  <StarRating value={product.rating} size={13} />
                  <span className="text-xs text-textmute">({product.reviews})</span>
                </div>
                <p
                  id={`${product.id}-short-desc`}
                  className="mt-6 text-base text-textmute leading-relaxed"
                >
                  {product.description}
                </p>

                {/* Variant */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="label-cap text-textmute">Finish</span>
                    <span className="label-cap text-ink-950 capitalize">{tone}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {TONES.map((t) => {
                      const selected = tone === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTone(t.id)}
                          className={cn(
                            "px-5 py-2.5 label-cap border editorial-transition",
                            selected
                              ? "border-ink-950 bg-ink-950 text-textondark"
                              : "border-sand-300 text-ink-950 hover:border-ink-950"
                          )}
                          aria-pressed={selected}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity + Add */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <div className="inline-flex items-center border border-ink-950 h-[50px]">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      aria-label="Decrease"
                      className="w-12 h-full inline-flex items-center justify-center text-ink-950 hover:text-champagne-600 editorial-transition"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-sm">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => q + 1)}
                      aria-label="Increase"
                      className="w-12 h-full inline-flex items-center justify-center text-ink-950 hover:text-champagne-600 editorial-transition"
                    >
                      +
                    </button>
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    className="flex-1"
                    onClick={handleAdd}
                  >
                    Add to Bag · {formatPrice(product.price * qty)}
                  </Button>
                </div>

                <button
                  type="button"
                  onClick={() => setWishlist((w) => !w)}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-textmute hover:text-ink-950 editorial-transition"
                  aria-pressed={wishlist}
                >
                  <Heart
                    size={16}
                    strokeWidth={1.4}
                    className={cn(wishlist && "fill-ink-950 text-ink-950")}
                  />
                  {wishlist ? "Saved to Wishlist" : "Add to Wishlist"}
                </button>

                {/* Mini trust */}
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <li className="flex items-center gap-2 text-xs text-textmute">
                    <Truck size={14} className="text-champagne-600" /> Free worldwide shipping
                  </li>
                  <li className="flex items-center gap-2 text-xs text-textmute">
                    <RotateCcw size={14} className="text-champagne-600" /> 30-day returns
                  </li>
                  <li className="flex items-center gap-2 text-xs text-textmute">
                    <ShieldCheck size={14} className="text-champagne-600" /> Hypoallergenic
                  </li>
                </ul>

                {/* Accordion */}
                <div className="mt-10">
                  <ProductAccordion
                    items={[
                      { title: "Description", body: product.details.description },
                      { title: "Materials & Care", body: product.details.materials },
                      { title: "Shipping & Returns", body: product.details.shipping },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-sand-100">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="mb-10 md:mb-14">
            <span className="label-cap text-champagne-600">You may also love</span>
            <h2
              id="related-title"
              className="mt-4 font-serif text-3xl md:text-4xl font-light text-ink-950"
            >
              Pairs quietly with this.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
