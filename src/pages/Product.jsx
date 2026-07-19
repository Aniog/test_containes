import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Minus, Plus, Truck, RefreshCcw, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { getProductBySlug, getRelated } from "@/data/products";
import Stars from "@/components/ui/Stars";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { useImageLoader } from "@/hooks/useImageLoader";

function formatPrice(n) {
  return `$${n.toFixed(0)}`;
}

export default function Product() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [variant, setVariant] = useState(product?.variants?.[0]);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  useImageLoader(containerRef, [slug, activeImg]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  useEffect(() => {
    setActiveImg(0);
    setQty(1);
    setVariant(product?.variants?.[0]);
  }, [product]);

  const related = useMemo(() => (product ? getRelated(product, 4) : []), [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-24 text-center">
        <p className="font-serif text-3xl text-espresso">Piece not found.</p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 border-b border-espresso pb-1 font-sans text-[11px] uppercase tracking-wider-2 text-espresso"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const onAdd = () => {
    addItem(product, variant, qty);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div ref={containerRef} className="bg-ivory page-fade">
      {/* Breadcrumb */}
      <div className="border-b border-line bg-bone/50">
        <div className="mx-auto max-w-7.5xl px-6 sm:px-10 py-4">
          <nav className="font-sans text-[10px] uppercase tracking-wider-2 text-stone">
            <Link to="/" className="hover:text-espresso">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-espresso">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-espresso">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7.5xl px-6 sm:px-10 py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-bone">
              <img
                alt={product.name}
                data-strk-img-id={`${product.id}-detail-${activeImg}`}
                data-strk-img={product.images[activeImg].query}
                data-strk-img-ratio={product.images[activeImg].ratio}
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImg((i) => (i - 1 + product.images.length) % product.images.length)
                    }
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/80 text-espresso backdrop-blur-sm transition-colors hover:bg-ivory"
                  >
                    <ChevronLeft size={18} strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImg((i) => (i + 1) % product.images.length)
                    }
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/80 text-espresso backdrop-blur-sm transition-colors hover:bg-ivory"
                  >
                    <ChevronRight size={18} strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.concat(product.images).slice(0, 4).map((img, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setActiveImg(i % product.images.length)}
                    className={`relative aspect-[4/5] overflow-hidden bg-bone border transition-colors ${
                      i % product.images.length === activeImg
                        ? "border-espresso"
                        : "border-line hover:border-stone"
                    }`}
                  >
                    <img
                      alt=""
                      data-strk-img-id={`${product.id}-thumb-${i}`}
                      data-strk-img={img.query}
                      data-strk-img-ratio={img.ratio}
                      data-strk-img-width="240"
                      loading="lazy"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:pt-2">
            {product.badge && (
              <p className="font-sans text-[10px] uppercase tracking-wider-3 text-gold-deep">
                {product.badge}
              </p>
            )}
            <h1 className="mt-3 font-serif text-4xl uppercase tracking-wider-2 text-espresso sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <Stars value={product.rating} size={14} className="text-gold" />
              <span className="font-sans text-xs text-stone">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>
            <p className="mt-5 font-sans text-2xl text-espresso">
              {formatPrice(product.price)}
            </p>
            <p className="mt-5 font-sans text-sm leading-relaxed text-stone-dark">
              {product.description}
            </p>

            {/* Variant pills */}
            {product.variants.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-wider-3 text-stone">
                    Finish: <span className="text-espresso">{variant?.label}</span>
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v)}
                      className={`inline-flex h-10 items-center gap-2 border px-4 font-sans text-[11px] uppercase tracking-wider-2 transition-colors ${
                        v.id === variant?.id
                          ? "border-espresso bg-espresso text-ivory"
                          : "border-line text-espresso hover:border-espresso"
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 rounded-full ${
                          v.tone === "gold" ? "bg-gold" : "bg-stone"
                        }`}
                      />
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <span className="font-sans text-[10px] uppercase tracking-wider-3 text-stone">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="inline-flex h-11 w-11 items-center justify-center text-espresso transition-colors hover:bg-bone"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="inline-flex h-11 w-12 items-center justify-center font-sans text-sm text-espresso">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="inline-flex h-11 w-11 items-center justify-center text-espresso transition-colors hover:bg-bone"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={onAdd}
              className="mt-8 inline-flex w-full items-center justify-center bg-espresso px-8 py-5 font-sans text-[11px] uppercase tracking-wider-2 text-ivory transition-colors hover:bg-mocha"
            >
              Add to Bag — {formatPrice(product.price * qty)}
            </button>

            <p className="mt-3 text-center font-sans text-[11px] text-stone">
              Or 4 interest-free payments of {formatPrice((product.price * qty) / 4)}.
            </p>

            {/* Reassurance */}
            <ul className="mt-10 grid grid-cols-1 gap-3 border-t border-line pt-8 sm:grid-cols-3">
              <li className="flex items-start gap-3">
                <Truck size={18} strokeWidth={1.5} className="mt-0.5 text-gold-deep" />
                <span className="font-sans text-[11px] leading-relaxed text-stone-dark">
                  Free worldwide shipping on orders $80+
                </span>
              </li>
              <li className="flex items-start gap-3">
                <RefreshCcw size={18} strokeWidth={1.5} className="mt-0.5 text-gold-deep" />
                <span className="font-sans text-[11px] leading-relaxed text-stone-dark">
                  30-day returns, unworn
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck size={18} strokeWidth={1.5} className="mt-0.5 text-gold-deep" />
                <span className="font-sans text-[11px] leading-relaxed text-stone-dark">
                  18K gold plated · hypoallergenic
                </span>
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                items={[
                  { title: "Description", content: <p>{product.description}</p> },
                  { title: "Materials & Care", content: <p>{product.materials}</p> },
                  { title: "Shipping & Returns", content: <p>{product.shipping}</p> },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line bg-bone/40">
          <div className="mx-auto max-w-7.5xl px-6 sm:px-10 py-20">
            <div className="mb-10 flex items-end justify-between gap-6">
              <h2 className="font-serif text-3xl text-espresso sm:text-4xl">
                You may also love
              </h2>
              <Link
                to="/shop"
                className="hidden sm:inline-flex items-center gap-2 border-b border-espresso pb-1 font-sans text-[11px] uppercase tracking-wider-2 text-espresso"
              >
                Shop All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
