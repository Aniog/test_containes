import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Star, Heart, Truck, RotateCcw, ShieldCheck, Minus, Plus, Check } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import ProductGallery from "@/components/product/ProductGallery";
import ProductAccordion from "@/components/product/ProductAccordion";
import ProductCard from "@/components/product/ProductCard";

export default function Product() {
  const { id } = useParams();
  const product = useMemo(() => PRODUCTS.find((p) => p.id === id), [id]);
  const { addItem } = useCart();

  const [toneId, setToneId] = useState(product?.toneOptions?.[0]?.id);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  // Reset state on product change
  useEffect(() => {
    if (product) {
      setToneId(product.toneOptions?.[0]?.id);
      setQty(1);
      setAdded(false);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12 pt-40 pb-32 text-center">
        <p className="font-display text-4xl text-cocoa-900 mb-4">
          Piece not found
        </p>
        <Link to="/shop" className="btn-link inline-flex items-center gap-2">
          Back to the collection
        </Link>
      </div>
    );
  }

  const selectedTone = product.toneOptions?.find((t) => t.id === toneId);

  const onAdd = () => {
    addItem(product, selectedTone, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  // Related products: same category, exclude self
  const related = useMemo(
    () =>
      PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4),
    [product.id, product.category]
  );

  const accordionItems = [
    {
      title: "Description",
      content: (
        <p>
          {product.description}{" "}
          <Link to="/about" className="link-quiet">
            Learn about our process
          </Link>
          .
        </p>
      ),
    },
    {
      title: "Materials & Care",
      content: (
        <>
          <p className="mb-3">{product.materials}</p>
          <p>{product.care}</p>
        </>
      ),
    },
    {
      title: "Shipping & Returns",
      content: <p>{product.shipping}</p>,
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-editorial-alt pt-28 md:pt-32 pb-4">
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex items-center text-[11px] tracking-button uppercase text-taupe-500">
            <Link to="/" className="hover:text-cocoa-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 mx-2" strokeWidth={1.6} />
            <Link to="/shop" className="hover:text-cocoa-900 transition-colors">
              Shop
            </Link>
            <ChevronRight className="w-3 h-3 mx-2" strokeWidth={1.6} />
            <span className="text-cocoa-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main product section */}
      <section className="bg-editorial pb-16 md:pb-24">
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 pt-8 md:pt-12">
            {/* Gallery */}
            <ProductGallery product={product} />

            {/* Detail */}
            <div className="md:pt-2">
              <p className="eyebrow mb-3">{product.category}</p>
              <h1
                id={`product-${product.id}-name`}
                className="font-display text-cocoa-900 text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.01em] uppercase font-medium"
              >
                {product.name}
              </h1>
              <p
                id={`product-${product.id}-short`}
                className="mt-4 text-cocoa-700 text-[15px] md:text-base leading-relaxed max-w-md"
              >
                {product.shortDescription}
              </p>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-2">
                <div className="flex items-center gap-0.5" aria-label={`${product.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 fill-champagne-500 text-champagne-500"
                    />
                  ))}
                </div>
                <span className="text-sm text-cocoa-700">{product.rating.toFixed(1)}</span>
                <span className="text-sm text-taupe-500">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-3">
                <p className="font-display text-cocoa-900 text-3xl md:text-4xl">
                  {formatPrice(product.price)}
                </p>
                <p className="text-xs text-taupe-500 uppercase tracking-button">
                  or 4 payments of {formatPrice(product.price / 4)}
                </p>
              </div>

              <div className="hairline mt-8 mb-8" />

              {/* Tone variant */}
              {product.toneOptions && product.toneOptions.length > 0 && (
                <div className="mb-7">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[12px] tracking-button uppercase text-cocoa-900 font-medium">
                      Tone
                    </p>
                    <p className="text-xs text-taupe-500">
                      {selectedTone?.label}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {product.toneOptions.map((tone) => (
                      <button
                        key={tone.id}
                        type="button"
                        onClick={() => setToneId(tone.id)}
                        className={cn("pill", toneId === tone.id && "is-active")}
                        aria-pressed={toneId === tone.id}
                      >
                        <span
                          className="inline-block w-2.5 h-2.5 rounded-full mr-2"
                          style={{ backgroundColor: tone.swatch }}
                          aria-hidden="true"
                        />
                        {tone.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-7">
                <p className="text-[12px] tracking-button uppercase text-cocoa-900 font-medium mb-3">
                  Quantity
                </p>
                <div className="qty-control">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    <Minus className="w-3.5 h-3.5" strokeWidth={1.6} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={qty}
                    onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                    aria-label="Quantity"
                  />
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={onAdd}
                  className={cn("btn-primary w-full transition-all", added && "bg-brass-700 border-brass-700")}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" strokeWidth={1.8} />
                      Added to Cart
                    </>
                  ) : (
                    <>Add to Cart · {formatPrice(product.price * qty)}</>
                  )}
                </button>
                <button
                  type="button"
                  className="btn-outline w-full"
                >
                  <Heart className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Save for Later
                </button>
              </div>

              {/* Trust micro-row */}
              <ul className="mt-8 grid grid-cols-3 gap-2 text-[11px] text-cocoa-700">
                <li className="flex flex-col items-center text-center gap-1.5">
                  <Truck className="w-4 h-4 text-brass-700" strokeWidth={1.4} />
                  <span className="leading-tight">Free shipping<br />over $80</span>
                </li>
                <li className="flex flex-col items-center text-center gap-1.5">
                  <RotateCcw className="w-4 h-4 text-brass-700" strokeWidth={1.4} />
                  <span className="leading-tight">30-day<br />returns</span>
                </li>
                <li className="flex flex-col items-center text-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brass-700" strokeWidth={1.4} />
                  <span className="leading-tight">Hypoallergenic<br />finish</span>
                </li>
              </ul>

              {/* Accordion */}
              <div className="mt-10">
                <ProductAccordion items={accordionItems} defaultOpen={0} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="section bg-editorial-alt">
          <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
              <div>
                <p className="eyebrow mb-3">You May Also Like</p>
                <h2 className="font-display text-cocoa-900 text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.01em]">
                  From the <em className="italic font-normal">same edit</em>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
