import * as React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProductById, getRelatedProducts, CATEGORIES } from "@/data/products";
import { useCartDispatch, formatPrice } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { StarRating } from "@/components/ui/star-rating";
import { ProductCard } from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Plus, Minus, Truck, RotateCcw, Shield } from "lucide-react";

const TONES = [
  { id: "Gold", label: "Gold", note: "18K gold plated" },
  { id: "Silver", label: "Silver", note: "Sterling silver" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useCartDispatch();
  const [tone, setTone] = React.useState(product?.tone === "silver" ? "Silver" : "Gold");
  const [quantity, setQuantity] = React.useState(1);
  const [activeImage, setActiveImage] = React.useState(0);
  const [added, setAdded] = React.useState(false);

  React.useEffect(() => {
    // Reset when navigating between products
    setActiveImage(0);
    setQuantity(1);
    setAdded(false);
    setTone(product?.tone === "silver" ? "Silver" : "Gold");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) {
    return (
      <main className="pt-24 pb-32 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <p className="text-[11px] uppercase tracking-eyebrow font-medium text-ink-muted">
          Not Found
        </p>
        <h1 className="mt-4 font-serif text-4xl text-ink">This piece is no longer available.</h1>
        <Link to="/shop" className="mt-8">
          <Button variant="primary" size="md">Back to Shop</Button>
        </Link>
      </main>
    );
  }

  const categoryLabel =
    CATEGORIES.find((c) => c.id === product.category)?.label || product.category;

  const onAdd = () => {
    addItem(product, { variant: tone, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const related = getRelatedProducts(product, 4);
  const galleryImages = [
    product.imageQueries?.primary,
    product.imageQueries?.secondary,
    `${product.imageQueries?.primary} detail macro`,
    `${product.imageQueries?.primary} on model styling`,
  ];

  return (
    <main className="bg-ivory">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pt-24 md:pt-28 pb-2 max-w-[1280px] mx-auto px-6 md:px-10"
      >
        <ol className="flex items-center gap-2 text-[11px] uppercase tracking-button text-ink-muted">
          <li>
            <Link to="/" className="hover:text-ink transition-colors duration-300">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/shop" className="hover:text-ink transition-colors duration-300">
              Shop
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-ink transition-colors duration-300"
            >
              {categoryLabel}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-ink">{product.name}</li>
        </ol>
      </nav>

      {/* Product main */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-6 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-4">
            {/* Thumbnails (desktop) */}
            <ul className="hidden lg:flex lg:col-span-2 flex-col gap-3">
              {galleryImages.map((q, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "block w-full aspect-[3/4] overflow-hidden bg-cream border",
                      activeImage === i ? "border-cocoa" : "border-transparent hover:border-hairline",
                      "transition-colors duration-300"
                    )}
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt=""
                      aria-hidden="true"
                      data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                      data-strk-img={q}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="240"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* Main image */}
            <div className="col-span-12 lg:col-span-10">
              <div className="relative aspect-[3/4] bg-cream overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                  data-strk-img={galleryImages[activeImage]}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  loading={activeImage === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
                {/* Prev/Next arrows (desktop) */}
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => setActiveImage((i) => (i - 1 + galleryImages.length) % galleryImages.length)}
                  className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-ivory/80 text-ink hover:bg-ivory transition-colors duration-300"
                >
                  <ChevronLeft strokeWidth={1.25} className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setActiveImage((i) => (i + 1) % galleryImages.length)}
                  className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-ivory/80 text-ink hover:bg-ivory transition-colors duration-300"
                >
                  <ChevronRight strokeWidth={1.25} className="w-5 h-5" />
                </button>
              </div>
              {/* Dots (mobile) */}
              <div className="mt-4 flex lg:hidden items-center justify-center gap-2">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      activeImage === i ? "w-6 bg-cocoa" : "w-2 bg-hairline"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
              {product.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl text-ink leading-tight">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <span className="font-serif text-2xl text-ink">
                {formatPrice(product.price)}
              </span>
              <span className="text-ink-muted">·</span>
              <StarRating value={product.rating} count={product.reviewCount} size={12} />
            </div>

            <p className="mt-7 text-base text-ink-muted leading-relaxed">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-button font-medium text-ink">
                  Tone
                </p>
                <p className="text-xs text-ink-muted">
                  {TONES.find((t) => t.id === tone)?.note}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-3" role="radiogroup" aria-label="Tone">
                {TONES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="radio"
                    aria-checked={tone === t.id}
                    onClick={() => setTone(t.id)}
                    className={cn(
                      "h-11 px-6 text-xs uppercase tracking-button font-medium",
                      "border transition-colors duration-300",
                      tone === t.id
                        ? "border-cocoa bg-cocoa text-bone"
                        : "border-hairline text-ink hover:border-ink"
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 space-y-4">
              <p className="text-[11px] uppercase tracking-button font-medium text-ink">
                Quantity
              </p>
              <div className="flex items-stretch gap-3">
                <div className="inline-flex items-center border border-hairline">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="w-11 h-12 inline-flex items-center justify-center text-ink hover:text-gold-deep transition-colors duration-300"
                  >
                    <Minus strokeWidth={1.25} className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-sm text-ink tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="w-11 h-12 inline-flex items-center justify-center text-ink hover:text-gold-deep transition-colors duration-300"
                  >
                    <Plus strokeWidth={1.25} className="w-4 h-4" />
                  </button>
                </div>
                <Button
                  type="button"
                  onClick={onAdd}
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  {added ? "Added to Bag" : "Add to Bag"}
                </Button>
              </div>
            </div>

            {/* Reassurance row */}
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-ink-muted">
              <li className="flex items-center gap-2">
                <Truck strokeWidth={1.25} className="w-4 h-4 text-ink-muted" />
                <span>Free over $75</span>
              </li>
              <li className="flex items-center gap-2">
                <RotateCcw strokeWidth={1.25} className="w-4 h-4 text-ink-muted" />
                <span>30-day returns</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield strokeWidth={1.25} className="w-4 h-4 text-ink-muted" />
                <span>Hypoallergenic</span>
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion defaultIndex={0}>
                <AccordionItem title="Description">
                  <p>{product.description}</p>
                </AccordionItem>
                <AccordionItem title="Materials & Care">
                  <ul className="list-disc pl-5 space-y-1.5">
                    {product.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <p className="mt-5 font-medium text-ink">Care</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    {product.care.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </AccordionItem>
                <AccordionItem title="Shipping & Returns">
                  <p>{product.shipping}</p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
              You may also like
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-ink">
              Pair it with
            </h2>
            <div className="mt-6 mx-auto w-12 h-px bg-gold" />
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
