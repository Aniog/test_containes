import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProductById, getRelatedProducts, products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import ProductImage from "@/components/product/ProductImage";
import StarRating from "@/components/product/StarRating";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

const TONE_LABELS = {
  gold: "18K Gold",
  silver: "Sterling Silver",
  multicolor: "Multi-Tone",
};

const TONE_SWATCHES = {
  gold: "#B08855",
  silver: "#D4D4D2",
  multicolor: "linear-gradient(135deg, #B08855 0%, #D4D4D2 50%, #8A6A40 100%)",
};

function AccordionItem({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[11px] uppercase tracking-[0.25em] text-espresso font-medium">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-espresso transition-transform duration-300 ease-editorial",
            open && "rotate-180"
          )}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-editorial",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-muted leading-relaxed text-pretty max-w-prose">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { add } = useCart();
  const galleryRef = useRef(null);

  const [color, setColor] = useState(product?.colors?.[0] || "gold");
  const [size, setSize] = useState(product?.sizes?.[0] || "One Size");
  const [qty, setQty] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [added, setAdded] = useState(false);

  // Gallery uses the main image + alt as a two-frame gallery.
  const galleryImages = useMemo(() => {
    if (!product) return [];
    return [
      { imgId: product.imgId, query: product.imgQuery, alt: product.name, name: product.name },
      {
        imgId: product.imgIdAlt,
        query: product.imgQueryAlt,
        alt: `${product.name} alternate view`,
        name: product.name,
      },
      {
        imgId: `${product.imgId}-detail`,
        query: `[${product.name} detail] [velmora-section-title] gold jewelry texture detail close-up macro`,
        alt: `${product.name} detail`,
        name: product.name,
      },
      {
        imgId: `${product.imgId}-lifestyle`,
        query: `[${product.name} lifestyle] [velmora-section-title] gold jewelry on model editorial portrait warm light`,
        alt: `${product.name} lifestyle`,
        name: product.name,
      },
    ];
  }, [product]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) {
    return (
      <div className="container-velmora pt-40 pb-32 text-center">
        <h1 className="display-serif text-4xl text-espresso">Piece not found</h1>
        <p className="mt-3 text-muted">The piece you're looking for has moved on.</p>
        <Link to="/shop" className="btn-outline mt-8 inline-flex">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const onAdd = () => {
    add({ id: product.id, color, size, qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const goImage = (dir) => {
    setActiveImageIdx((i) => (i + dir + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="bg-ivory">
      {/* Breadcrumb */}
      <div className="container-velmora pt-28 md:pt-32">
        <nav className="text-[11px] uppercase tracking-[0.2em] text-muted flex items-center gap-2">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="text-hairline">/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <span className="text-hairline">/</span>
          <span className="text-espresso truncate">{product.name}</span>
        </nav>
      </div>

      <section className="container-velmora pt-8 md:pt-10 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div ref={galleryRef} className="lg:sticky lg:top-28 self-start">
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
              <ProductImage
                imgId={galleryImages[activeImageIdx].imgId}
                query={galleryImages[activeImageIdx].query}
                alt={galleryImages[activeImageIdx].alt}
                name={product.name}
                ratio="4x5"
                width={1200}
                priority
                parentRef={galleryRef}
              />
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => goImage(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-ivory/80 backdrop-blur-sm text-espresso hover:bg-ivory transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mx-auto" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => goImage(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-ivory/80 backdrop-blur-sm text-espresso hover:bg-ivory transition-colors"
              >
                <ChevronRight className="w-4 h-4 mx-auto" strokeWidth={1.5} />
              </button>
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory bg-espresso/85 backdrop-blur-sm">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {galleryImages.map((g, i) => (
                <button
                  type="button"
                  key={g.imgId}
                  onClick={() => setActiveImageIdx(i)}
                  aria-label={`View image ${i + 1}`}
                  className={cn(
                    "relative aspect-[4/5] overflow-hidden border transition-colors duration-300 ease-editorial",
                    activeImageIdx === i ? "border-espresso" : "border-hairline hover:border-espresso/50"
                  )}
                >
                  <ProductImage
                    imgId={g.imgId}
                    query={g.query}
                    alt={g.alt}
                    name={product.name}
                    ratio="4x5"
                    width={400}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:pt-2">
            <p className="eyebrow mb-3">{product.subcategory}</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso text-balance">
              {product.name}
            </h1>

            <div className="mt-4 flex items-baseline gap-3">
              <p className="font-serif text-2xl text-espresso">
                {formatPrice(product.price)}
              </p>
              {product.compareAt && (
                <p className="text-sm text-muted line-through">
                  {formatPrice(product.compareAt)}
                </p>
              )}
            </div>

            <div className="mt-3">
              <StarRating value={product.rating} count={product.reviews} size={14} />
            </div>

            <p className="mt-6 text-base text-muted leading-relaxed text-pretty">
              {product.short}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <p className="eyebrow">Tone</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  {TONE_LABELS[color]}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    aria-pressed={color === c}
                    className={cn(
                      "inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full border transition-colors duration-300 ease-editorial",
                      color === c
                        ? "border-espresso bg-ivory"
                        : "border-hairline hover:border-espresso/50"
                    )}
                  >
                    <span
                      className="w-6 h-6 rounded-full border border-espresso/10"
                      style={{
                        background: TONE_SWATCHES[c],
                      }}
                      aria-hidden
                    />
                    <span className="text-[11px] uppercase tracking-[0.2em] text-espresso">
                      {TONE_LABELS[c]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            {product.sizes.length > 1 || product.sizes[0] !== "One Size" ? (
              <div className="mt-7">
                <p className="eyebrow mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      aria-pressed={size === s}
                      className={cn(
                        "pill-toggle",
                        size === s && "pill-toggle-active"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Quantity + Add to cart */}
            <div className="mt-8 grid grid-cols-[auto_1fr] gap-3">
              <div className="inline-flex items-center border border-hairline h-[52px]">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-11 h-full flex items-center justify-center text-espresso hover:text-bronze-deep transition-colors"
                >
                  <span className="text-base leading-none">−</span>
                </button>
                <span className="w-10 text-center text-sm tabular-nums text-espresso">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  className="w-11 h-full flex items-center justify-center text-espresso hover:text-bronze-deep transition-colors"
                >
                  <span className="text-base leading-none">+</span>
                </button>
              </div>
              <button
                type="button"
                onClick={onAdd}
                className={cn(
                  "h-[52px] inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.25em] font-medium",
                  "transition-all duration-300 ease-editorial",
                  added
                    ? "bg-bronze text-espresso"
                    : "bg-espresso text-ivory hover:bg-espresso-soft"
                )}
              >
                {added ? "Added to Bag" : "Add to Cart"}
                <span className="opacity-80">·</span>
                <span>{formatPrice(product.price * qty)}</span>
              </button>
            </div>

            {/* Material line */}
            <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted">
              {product.material}
            </p>

            {/* Mini promises */}
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2">
              {[
                { icon: Truck, label: "Free shipping over $75" },
                { icon: RotateCcw, label: "30-day returns" },
                { icon: ShieldCheck, label: "Hypoallergenic" },
              ].map((p) => {
                const Icon = p.icon;
                return (
                  <li
                    key={p.label}
                    className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-espresso-soft"
                  >
                    <Icon className="w-4 h-4 text-bronze-deep" strokeWidth={1.5} />
                    {p.label}
                  </li>
                );
              })}
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionItem title="Description" defaultOpen>
                {product.description}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">{product.care}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                {product.shipping}
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-hairline bg-ivory-soft py-20 md:py-28">
        <div className="container-velmora">
          <div className="flex items-end justify-between mb-10 md:mb-12">
            <div>
              <p className="eyebrow mb-3">You may also like</p>
              <h2 className="display-serif text-3xl md:text-4xl text-espresso">
                Pairs well with
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-bronze-deep transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
