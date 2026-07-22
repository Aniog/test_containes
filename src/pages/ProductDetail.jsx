import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, Truck, RotateCcw } from "lucide-react";
import ProductCard from "@/components/ProductCard.jsx";
import { useCart } from "@/context/CartContext.jsx";
import { useStrkImages } from "@/lib/use-strk-images.js";
import { products, formatPrice } from "@/data/products.js";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const galleryViews = [
  { suffix: "studio", query: "product still life warm neutral background studio light" },
  { suffix: "worn", query: "worn on model close up editorial warm light" },
  { suffix: "detail", query: "macro detail texture craftsmanship" },
  { suffix: "lifestyle", query: "flat lay lifestyle styling with silk fabric" },
];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-xs font-semibold uppercase tracking-luxe text-espresso">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-taupe transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-luxe ${
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm leading-relaxed text-taupe">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const [variant, setVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const containerRef = useStrkImages([product.id]);

  const related = useMemo(
    () => products.filter((p) => p.id !== product.id).slice(0, 4),
    [product.id]
  );

  const titleId = "pdp-title";
  const taglineId = "pdp-tagline";

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-10 md:pt-32">
      <nav className="mb-8 text-xs uppercase tracking-[0.18em] text-taupe">
        <Link to="/" className="hover:text-gold">Home</Link>
        <span className="mx-2 text-sand">/</span>
        <Link to="/shop" className="hover:text-gold">Shop</Link>
        <span className="mx-2 text-sand">/</span>
        <span className="text-espresso">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="overflow-hidden bg-cream">
            <img
              key={`${product.id}-${activeImage}`}
              alt={`${product.name} — view ${activeImage + 1}`}
              data-strk-img-id={`pdp-${product.id}-${galleryViews[activeImage].suffix}`}
              data-strk-img={`[${taglineId}] [${titleId}] ${galleryViews[activeImage].query}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={SVG_PLACEHOLDER}
              className="aspect-[3/4] w-full animate-overlay-in object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {galleryViews.map((view, i) => (
              <button
                key={view.suffix}
                onClick={() => setActiveImage(i)}
                aria-label={`View ${i + 1}`}
                className={`overflow-hidden border transition-colors ${
                  activeImage === i ? "border-gold" : "border-transparent hover:border-sand"
                }`}
              >
                <img
                  alt=""
                  data-strk-img-id={`pdp-thumb-${product.id}-${view.suffix}`}
                  data-strk-img={`[${taglineId}] [${titleId}] ${view.query}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src={SVG_PLACEHOLDER}
                  className="aspect-square w-full bg-cream object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
            {product.category === "sets" ? "Gift Set" : product.category}
          </p>
          <h1
            id={titleId}
            className="mt-3 font-serif text-3xl font-semibold uppercase tracking-wide2 text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={taglineId} className="mt-2 text-sm text-taupe">
            {product.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-medium text-espresso">{product.rating}</span>
            <span className="text-sm text-taupe">· {product.reviews} reviews</span>
          </div>

          <p className="mt-5 font-serif text-3xl font-medium text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-6 leading-relaxed text-taupe">{product.description}</p>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-luxe text-espresso">
              Finish — <span className="text-gold">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {["Gold", "Silver"].map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`rounded-full border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                    variant === v
                      ? "border-gold bg-gold text-ivory"
                      : "border-ink/20 text-espresso hover:border-gold hover:text-gold"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-luxe text-espresso">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-ink/20">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-espresso transition-colors hover:text-gold"
              >
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="min-w-10 text-center text-sm font-semibold text-ink">
                {quantity}
              </span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-espresso transition-colors hover:text-gold"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <button
            onClick={() => addItem(product, variant, quantity)}
            className="mt-8 w-full bg-gold py-4 text-xs font-semibold uppercase tracking-luxe text-ivory transition-all duration-300 hover:bg-gold-dark hover:shadow-[0_12px_32px_rgba(176,141,76,0.35)]"
          >
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <div className="mt-6 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.18em] text-taupe">
            <span className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-gold" strokeWidth={1.5} />
              Free Shipping
            </span>
            <span className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-gold" strokeWidth={1.5} />
              30-Day Returns
            </span>
          </div>

          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <ul className="list-disc space-y-1.5 pl-5">
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
                <li>Store in the Velmora pouch; avoid water, perfume, and lotions.</li>
              </ul>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>
                Complimentary worldwide shipping on all orders, dispatched within
                1–2 business days. Not in love? Return or exchange within 30 days
                — no questions asked.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
            Complete the Look
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-4xl">
            You May Also <span className="italic">Like</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {related.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
