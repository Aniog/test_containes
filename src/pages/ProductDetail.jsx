import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Minus, Plus, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import ProductGallery from "@/components/product/ProductGallery";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/ui/ProductCard";
import RatingStars from "@/components/ui/RatingStars";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { useStrkImages } from "@/lib/useStrkImages";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const containerRef = useRef(null);
  const { addItem, openCart } = useCart();
  const [tone, setTone] = useState(product?.toneOptions?.[0] || "gold");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product) setTone(product.toneOptions[0]);
    setQty(1);
  }, [product?.id]);

  const related = useMemo(() => {
    if (!product) return [];
    return product.related
      .map((rid) => products.find((p) => p.id === rid))
      .filter(Boolean);
  }, [product?.id]);

  useStrkImages(containerRef, [product?.id, related.length]);

  if (!product) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl text-espresso">Piece not found</h1>
        <p className="mt-3 text-sm text-charcoal">
          The piece you are looking for may have moved.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block text-[11px] tracking-[0.22em] uppercase text-accent hover:text-espresso transition-colors"
        >
          Back to the collection
        </Link>
      </section>
    );
  }

  const toneLabel = tone === "gold" ? "18K Gold" : "Sterling Silver";

  const handleAdd = () => {
    addItem(product.id, tone, qty);
    toast.success(`${product.name} added`, {
      description: `${qty} × ${toneLabel}`,
    });
    openCart();
  };

  return (
    <section ref={containerRef} className="bg-bone">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-10 pb-24">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] tracking-[0.22em] uppercase text-charcoal"
        >
          <Link to="/" className="hover:text-espresso transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Detail */}
          <div className="md:pt-4">
            <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal">
              {product.material}
            </p>
            <h1
              id={`product-${product.id}-name`}
              className="mt-3 product-name text-3xl md:text-4xl text-espresso"
            >
              {product.name}
            </h1>
            <p
              id={`product-${product.id}-material`}
              className="mt-4 text-lg text-charcoal"
            >
              {formatPrice(product.price)}
            </p>

            <div className="mt-3 flex items-center gap-2">
              <RatingStars value={product.rating} size={13} />
              <span className="text-xs text-charcoal">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-charcoal">
              {product.short}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] tracking-[0.22em] uppercase text-charcoal mb-3">
                Tone · <span className="text-espresso">{toneLabel}</span>
              </p>
              <div className="flex gap-2">
                {product.toneOptions.map((opt) => {
                  const isActive = tone === opt;
                  const label = opt === "gold" ? "18K Gold" : "Sterling Silver";
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setTone(opt)}
                      aria-pressed={isActive}
                      className={cn(
                        "px-5 py-2.5 rounded-full border text-xs tracking-[0.18em] uppercase transition-all",
                        isActive
                          ? "bg-espresso text-bone border-espresso"
                          : "bg-transparent text-espresso border-bone/80 hover:border-espresso"
                      )}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-[11px] tracking-[0.22em] uppercase text-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-bone/80">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-11 w-11 flex items-center justify-center text-espresso hover:bg-bone/40 transition-colors disabled:opacity-30"
                  aria-label="Decrease quantity"
                  disabled={qty <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span
                  className="w-12 text-center text-sm tabular-nums"
                  aria-live="polite"
                >
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  className="h-11 w-11 flex items-center justify-center text-espresso hover:bg-bone/40 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="mt-8 w-full bg-accent text-bone py-4 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-espresso transition-colors duration-300"
            >
              Add to Cart · {formatPrice(product.price * qty)}
            </button>

            {/* Reassurance row */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-[11px] tracking-[0.18em] uppercase text-charcoal">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-4 w-4 text-espresso" />
                <span>Free over $80</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="h-4 w-4 text-espresso" />
                <span>30-day returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="h-4 w-4 text-espresso" />
                <span>Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion
                items={[
                  { title: "Description", body: product.description },
                  { title: "Materials & Care", body: product.materials },
                  { title: "Shipping & Returns", body: product.shipping },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-12">
              <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal">
                You may also love
              </p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-espresso">
                Styled With
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}