import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, Minus, Plus, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/ui/StrkImage";
import StarRating from "@/components/ui/StarRating";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";

const VARIANTS = [
  { id: "gold", label: "18K Gold" },
  { id: "silver", label: "Sterling Silver" },
];

export default function ProductDetail() {
  const { productId } = useParams();
  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [productId]
  );
  const { addItem, openCart } = useCart();
  const [variant, setVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const galleryRef = useRef(null);

  const galleryImages = useMemo(() => {
    if (!product) return [];
    return [
      product.imageQuery,
      product.imageQueryAlt || product.imageQuery,
      // Generate two additional editorial angles
      `editorial closeup of ${product.name.toLowerCase()} on cream linen, soft warm light, jewelry photography`,
      `lifestyle flat lay featuring ${product.name.toLowerCase()} with warm props, candles, linen, golden hour light`,
    ];
  }, [product]);

  // Reset state on product change
  useEffect(() => {
    setActiveImage(0);
    setQuantity(1);
    setVariant("gold");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [productId]);

  // Load gallery images when active image changes
  useEffect(() => {
    if (!galleryRef.current) return;
    const node = galleryRef.current;
    const frame = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, node);
      } catch {
        // ignore
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeImage, productId]);

  if (!product) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-ivory px-5 pt-32 text-center">
        <h1 className="font-serif text-4xl text-espresso">Piece not found</h1>
        <p className="max-w-sm text-sm text-espresso-soft">
          The piece you're looking for has wandered off. Return to the collection
          to find something new.
        </p>
        <Link
          to="/shop"
          className="mt-3 inline-flex items-center gap-2 bg-espresso px-7 py-3 text-[11px] font-medium uppercase tracking-widest2 text-ivory transition-colors hover:bg-espresso-soft"
        >
          Back to Shop
        </Link>
      </section>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product.id, variant, quantity);
  };

  const handleBuyNow = () => {
    addItem(product.id, variant, quantity);
    // In a real store this would route to checkout; we just keep the cart open.
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-cream bg-ivory-soft pt-24 md:pt-28">
        <div className="mx-auto flex max-w-container items-center gap-2 px-5 py-4 text-[11px] uppercase tracking-widest2 text-muted md:px-10 lg:px-16">
          <Link to="/" className="hover:text-espresso">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-espresso">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-espresso">{product.name}</span>
        </div>
      </div>

      <section
        ref={galleryRef}
        className="bg-ivory py-10 md:py-16"
      >
        <div className="mx-auto grid max-w-container grid-cols-1 gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10 lg:px-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
              <StrkImage
                query={galleryImages[activeImage]}
                ratio="4x5"
                width={1200}
                alt={product.name}
                className="h-full w-full"
                imgClassName="h-full w-full object-cover"
                priority
              />
              {product.badge ? (
                <span className="absolute left-4 top-4 bg-ivory/95 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest2 text-espresso">
                  {product.badge}
                </span>
              ) : null}
              {/* Gallery arrows */}
              <button
                type="button"
                aria-label="Previous image"
                onClick={() =>
                  setActiveImage((i) => (i - 1 + galleryImages.length) % galleryImages.length)
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-espresso shadow-soft transition hover:bg-ivory"
              >
                <ChevronLeft size={16} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => setActiveImage((i) => (i + 1) % galleryImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-espresso shadow-soft transition hover:bg-ivory"
              >
                <ChevronRight size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Thumbnails */}
            <ul className="mt-4 grid grid-cols-4 gap-3">
              {galleryImages.map((q, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "block w-full overflow-hidden border bg-cream transition-colors aspect-square",
                      activeImage === i ? "border-espresso" : "border-cream hover:border-muted/60"
                    )}
                    aria-label={`View image ${i + 1}`}
                  >
                    <StrkImage
                      query={q}
                      ratio="1x1"
                      width={200}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full"
                      imgClassName="h-full w-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="md:pt-2">
            <span className="text-[10.5px] font-medium uppercase tracking-widest2 text-gold-deep">
              {product.category}
            </span>
            <h1 className="mt-3 font-sans text-[26px] font-medium uppercase tracking-editorial text-espresso md:text-[32px]">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="font-sans text-xl font-medium tabular text-espresso">
                {formatPrice(product.price)}
              </span>
              <span className="text-[11px] uppercase tracking-widest2 text-muted">
                or 4 interest-free payments of {formatPrice(product.price / 4)}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-[12px] text-muted">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-espresso-soft">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <div className="mb-3 flex items-baseline justify-between">
                <span className="text-[11px] font-medium uppercase tracking-widest2 text-espresso">
                  Finish
                </span>
                <span className="text-[11px] uppercase tracking-wide text-muted">
                  {VARIANTS.find((v) => v.id === variant)?.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {VARIANTS.map((v) => {
                  const active = variant === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v.id)}
                      className={cn(
                        "rounded-full border px-5 py-2.5 text-[12px] font-medium uppercase tracking-widest2 transition-colors",
                        active
                          ? "border-espresso bg-espresso text-ivory"
                          : "border-cream bg-transparent text-espresso hover:border-espresso"
                      )}
                    >
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="text-[11px] font-medium uppercase tracking-widest2 text-espresso">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-cream">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center text-espresso transition hover:bg-cream/60 disabled:opacity-40"
                  disabled={quantity <= 1}
                >
                  <Minus size={14} strokeWidth={1.6} />
                </button>
                <span className="w-10 text-center text-[14px] tabular text-espresso">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  className="flex h-11 w-11 items-center justify-center text-espresso transition hover:bg-cream/60"
                >
                  <Plus size={14} strokeWidth={1.6} />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAdd}
                className="group flex-1 bg-espresso py-4 text-[11px] font-medium uppercase tracking-widest2 text-ivory transition-colors hover:bg-espresso-soft"
              >
                Add to Bag
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="flex-1 border border-espresso bg-transparent py-4 text-[11px] font-medium uppercase tracking-widest2 text-espresso transition-colors hover:bg-espresso hover:text-ivory"
              >
                Buy Now
              </button>
              <button
                type="button"
                aria-label="Add to wishlist"
                className="inline-flex h-[52px] w-[52px] items-center justify-center border border-cream text-espresso transition-colors hover:border-espresso hover:bg-cream/40 sm:flex-none"
              >
                <Heart size={16} strokeWidth={1.4} />
              </button>
            </div>

            {/* Reassurance row */}
            <ul className="mt-8 grid grid-cols-1 gap-3 border-t border-cream pt-6 sm:grid-cols-3">
              {[
                { Icon: Truck, label: "Free worldwide shipping over $75" },
                { Icon: RefreshCw, label: "30-day easy returns" },
                { Icon: ShieldCheck, label: "Hypoallergenic, lead-free" },
              ].map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-muted"
                >
                  <Icon size={14} strokeWidth={1.4} className="text-gold-deep" />
                  {label}
                </li>
              ))}
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                items={[
                  { title: "Description", content: <p>{product.description}</p> },
                  { title: "Materials & Care", content: <p>{product.materials}<br /><br />{product.care}</p> },
                  { title: "Shipping & Returns", content: <p>{product.shipping}</p> },
                ]}
                defaultOpen={0}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-cream bg-ivory-soft py-20 md:py-24">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
          <div className="mb-10 flex flex-col items-center text-center md:mb-14">
            <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold-deep">
              You may also love
            </span>
            <h2 className="mt-3 font-serif text-3xl font-light text-espresso sm:text-4xl md:text-[40px]">
              Pairs Beautifully With
            </h2>
          </div>
          <Reveal className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-14">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
