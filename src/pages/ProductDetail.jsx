import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronDown, Star, Truck, RotateCcw, Shield, Heart, Plus, Minus } from "lucide-react";
import { getProductById, getRelatedProducts, tones } from "@/data/products";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/product/ProductImage";
import ProductCard from "@/components/product/ProductCard";

const accordions = [
  { key: "description", label: "Description" },
  { key: "materials", label: "Materials & Care" },
  { key: "shipping", label: "Shipping & Returns" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem, openCart } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState(tones[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    setActiveImage(0);
    setQuantity(1);
    setVariant(tones[0]);
    setOpenAccordion("description");
  }, [id]);

  const related = useMemo(
    () => (product ? getRelatedProducts(product.id, 4) : []),
    [product]
  );

  if (!product) {
    return (
      <div className="container-editorial pt-32 md:pt-40 pb-32 text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="font-serif text-[44px] md:text-[56px] text-ink-900 mb-6">
          Piece not found
        </h1>
        <p className="text-ink-700 mb-8">
          The piece you’re looking for has moved — or perhaps it sold out.
        </p>
        <button type="button" onClick={() => navigate("/shop")} className="btn-primary">
          Back to shop
        </button>
      </div>
    );
  }

  const handleAdd = () => {
    setAdding(true);
    addItem(product, { quantity, variant: variant.id });
    setTimeout(() => {
      setAdding(false);
      openCart();
    }, 250);
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-editorial py-5">
        <nav className="text-[10px] uppercase tracking-btn text-ink-700">
          <Link to="/" className="hover:text-ink-900 transition-colors">Home</Link>
          <span className="mx-2 text-ink-700/40">/</span>
          <Link to="/shop" className="hover:text-ink-900 transition-colors">Shop</Link>
          <span className="mx-2 text-ink-700/40">/</span>
          <Link
            to={`/shop?cat=${product.category}`}
            className="hover:text-ink-900 transition-colors capitalize"
          >
            {product.category}
          </Link>
          <span className="mx-2 text-ink-700/40">/</span>
          <span className="text-ink-900">{product.name}</span>
        </nav>
      </div>

      {/* Main split */}
      <section className="container-editorial pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              {/* Thumbnails (left rail on desktop) */}
              <div className="hidden md:flex md:col-span-2 flex-col gap-3">
                {[0, 1].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setActiveImage(v)}
                    className={cn(
                      "relative aspect-[4/5] overflow-hidden bg-cream-100 border transition-colors duration-300",
                      activeImage === v ? "border-ink-900" : "border-transparent hover:border-cream-300"
                    )}
                    aria-label={`View image ${v + 1}`}
                  >
                    <ProductImage artwork={product.artwork} tone={variant.id} variant={v} />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="col-span-12 md:col-span-10">
                <div className="relative aspect-[4/5] bg-cream-100 overflow-hidden">
                  <ProductImage
                    artwork={product.artwork}
                    tone={variant.id}
                    variant={activeImage}
                  />
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="absolute top-4 right-4 w-10 h-10 inline-flex items-center justify-center bg-cream-50/90 backdrop-blur-sm text-ink-900 hover:text-gold-600 transition-colors"
                  >
                    <Heart className="w-4 h-4" strokeWidth={1.4} />
                  </button>
                </div>
                {/* Mobile dots */}
                <div className="md:hidden mt-4 flex items-center justify-center gap-1.5">
                  {[0, 1].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "h-px transition-all duration-500",
                        i === activeImage ? "w-8 bg-ink-900" : "w-4 bg-cream-300"
                      )}
                      aria-label={`View image ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <p className="eyebrow mb-3">{product.material}</p>
              <h1 className="font-serif text-[34px] md:text-[44px] leading-[1.05] text-ink-900">
                {product.name}
              </h1>
              <p className="mt-1 text-sm text-ink-700">{product.subtitle}</p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-0.5 text-gold-600" aria-label={`${product.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5"
                      strokeWidth={0}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-[11px] uppercase tracking-btn text-ink-700">
                  {product.rating} · {product.reviews} reviews
                </p>
              </div>

              <p className="mt-6 font-serif text-[28px] text-ink-900">
                {formatPrice(product.price)}
              </p>

              <p className="mt-6 text-ink-700 text-[15px] leading-relaxed">
                {product.description}
              </p>

              {/* Variant */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="eyebrow">Finish</p>
                  <p className="text-[11px] uppercase tracking-btn text-ink-700">
                    {variant.label}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {tones.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setVariant(t)}
                      className={cn(
                        "px-4 py-2.5 text-[11px] font-medium uppercase tracking-btn border rounded-sm transition-colors duration-300 flex items-center gap-2",
                        variant.id === t.id
                          ? "border-ink-900 bg-ink-900 text-cream-50"
                          : "border-cream-200 text-ink-900 hover:border-ink-900"
                      )}
                      aria-pressed={variant.id === t.id}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-cream-300"
                        style={{ background: t.swatch }}
                        aria-hidden="true"
                      />
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <p className="eyebrow mb-3">Quantity</p>
                <div className="inline-flex items-center border border-cream-200">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 inline-flex items-center justify-center text-ink-700 hover:text-ink-900 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center text-sm text-ink-900">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 inline-flex items-center justify-center text-ink-700 hover:text-ink-900 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  "btn-primary w-full mt-7",
                  adding && "opacity-80"
                )}
              >
                {adding ? "Added" : "Add to Bag"} · {formatPrice(product.price * quantity)}
              </button>

              <button
                type="button"
                className="mt-3 w-full text-[11px] uppercase tracking-btn text-ink-700 hover:text-ink-900 transition-colors py-3"
              >
                Pay in 4 interest-free installments of {formatPrice((product.price * quantity) / 4)}
              </button>

              {/* Trust micro-row */}
              <ul className="mt-6 grid grid-cols-3 gap-3 border-t border-cream-200 pt-6">
                <li className="flex flex-col items-center text-center gap-1.5">
                  <Truck className="w-4 h-4 text-gold-600" strokeWidth={1.4} />
                  <span className="text-[10px] uppercase tracking-btn text-ink-700">Free Shipping</span>
                </li>
                <li className="flex flex-col items-center text-center gap-1.5">
                  <RotateCcw className="w-4 h-4 text-gold-600" strokeWidth={1.4} />
                  <span className="text-[10px] uppercase tracking-btn text-ink-700">30-Day Returns</span>
                </li>
                <li className="flex flex-col items-center text-center gap-1.5">
                  <Shield className="w-4 h-4 text-gold-600" strokeWidth={1.4} />
                  <span className="text-[10px] uppercase tracking-btn text-ink-700">Hypoallergenic</span>
                </li>
              </ul>

              {/* Accordions */}
              <div className="mt-10 border-t border-cream-200">
                {accordions.map((acc) => {
                  const isOpen = openAccordion === acc.key;
                  return (
                    <div key={acc.key} className="border-b border-cream-200">
                      <button
                        type="button"
                        onClick={() => setOpenAccordion(isOpen ? null : acc.key)}
                        className="w-full flex items-center justify-between py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="eyebrow text-ink-900">{acc.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-ink-700 transition-transform duration-500 ease-luxury",
                            isOpen && "rotate-180"
                          )}
                          strokeWidth={1.4}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid transition-all duration-500 ease-luxury",
                          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="text-ink-700 text-[15px] leading-relaxed">
                            {acc.key === "description"
                              ? product.description
                              : acc.key === "materials"
                              ? product.materials
                              : product.shipping}
                          </p>
                          {acc.key === "description" && product.details?.length ? (
                            <ul className="mt-4 space-y-2">
                              {product.details.map((d) => (
                                <li
                                  key={d}
                                  className="flex items-start gap-3 text-sm text-ink-700"
                                >
                                  <span
                                    className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section className="border-t border-cream-200 bg-cream-100 py-20 md:py-28">
          <div className="container-editorial">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
              <div>
                <p className="eyebrow mb-3">You may also love</p>
                <h2 className="font-serif font-light text-ink-900 text-[32px] md:text-[44px] leading-tight">
                  Pairs <span className="italic">perfectly</span> with
                </h2>
              </div>
              <Link
                to="/shop"
                className="link-underline text-[11px] font-medium uppercase tracking-btn self-start md:self-end"
              >
                View all
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
