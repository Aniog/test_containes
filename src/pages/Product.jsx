import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Plus, Minus, ChevronDown, Heart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProductById, getRelated } from "@/data/products";
import { useCart } from "@/context/CartContext";
import JewelImage from "@/components/ui/JewelImage";
import Stars from "@/components/ui/Stars";
import ProductCard from "@/components/ui/ProductCard";

const SHAPES = {
  "vivid-aura-jewels": "cuff",
  "majestic-flora-nectar": "pendant",
  "golden-sphere-huggies": "huggie",
  "amber-lace-earrings": "drop",
  "royal-heirloom-set": "set",
};
const BGS = {
  "vivid-aura-jewels": "velvet",
  "majestic-flora-nectar": "dusk",
  "golden-sphere-huggies": "warm",
  "amber-lace-earrings": "glow",
  "royal-heirloom-set": "cream",
};
const GALLERY_VARIANTS = ["warm", "velvet", "dusk", "glow"];

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelated(id);
  const { addItem } = useCart();

  const galleryRef = useRef(null);
  const [variant, setVariant] = useState(product?.variants?.[0]?.id || null);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAcc, setOpenAcc] = useState("description");

  useEffect(() => {
    if (!galleryRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, galleryRef.current);
  }, [id]);

  useEffect(() => {
    setVariant(product?.variants?.[0]?.id || null);
    setQty(1);
    setActiveImage(0);
  }, [id, product]);

  if (!product) {
    return (
      <main className="pt-32 pb-24 min-h-screen mx-auto max-w-editorial px-5 md:px-10">
        <p className="text-muted">Piece not found.</p>
        <Link to="/shop" className="text-ink link-underline eyebrow mt-4 inline-block">Back to shop</Link>
      </main>
    );
  }

  const shape = SHAPES[product.id] || "cuff";
  const bg = BGS[product.id] || "warm";
  const taglineId = `pdp-${product.id}-tagline`;
  const titleId = `pdp-${product.id}-title`;

  return (
    <main className="page-fade pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted py-5 flex items-center gap-2" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span>/</span>
          <span className="text-ink truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14">
          {/* Gallery */}
          <div ref={galleryRef} className="md:col-span-7 flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="order-2 md:order-1 flex md:flex-col gap-3">
              {GALLERY_VARIANTS.map((g, i) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 flex-none overflow-hidden border transition-colors ${
                    activeImage === i ? "border-ink" : "border-hairline hover:border-ink/40"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <JewelImage shape={shape} bg={g} alt="" className="w-full h-full" />
                </button>
              ))}
            </div>
            <div className="order-1 md:order-2 flex-1 relative aspect-[4/5] overflow-hidden bg-cream-warm">
              <JewelImage shape={shape} bg={GALLERY_VARIANTS[activeImage]} alt={product.alt} className="absolute inset-0" />
              <img
                data-strk-img-id={`pdp-${product.id}-main`}
                data-strk-img={`[${taglineId}] [${titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badges?.[0] && (
                <span className="absolute top-4 left-4 eyebrow text-[0.6rem] bg-cream/95 text-ink px-2.5 py-1 rounded-full">
                  {product.badges[0]}
                </span>
              )}
              <button
                type="button"
                aria-label="Save to wishlist"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center text-ink hover:text-champagne-dark"
              >
                <Heart size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 flex flex-col">
            <span className="eyebrow text-taupe">{product.category}</span>
            <h1 id={titleId} className="font-display text-4xl md:text-5xl text-ink mt-3 leading-[1.05]">
              {product.name}
            </h1>
            <p id={taglineId} className="text-muted text-sm md:text-base mt-3 leading-relaxed">
              {product.tagline}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Stars value={Math.round(product.rating)} size={14} />
              <span className="text-xs text-muted">{product.rating} · {product.reviews} reviews</span>
            </div>
            <p className="mt-5 text-2xl text-ink">${product.price}</p>

            {/* Variants */}
            {product.variants?.length > 0 && (
              <div className="mt-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="eyebrow text-ink">Finish</span>
                  <span className="text-xs text-muted">
                    {product.variants.find((v) => v.id === variant)?.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v.id)}
                      className={`inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 border rounded-full transition-colors ${
                        variant === v.id ? "border-ink bg-ink/5" : "border-hairline hover:border-ink/40"
                      }`}
                      aria-pressed={variant === v.id}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-hairline"
                        style={{ background: v.swatch }}
                      />
                      <span className="text-xs text-ink">{v.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-7">
              <span className="eyebrow text-ink">Quantity</span>
              <div className="mt-3 inline-flex items-center border border-hairline">
                <button
                  type="button"
                  aria-label="Decrease"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink hover:text-champagne-dark"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink hover:text-champagne-dark"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={() => addItem(product, variant, qty)}
              className="btn-base btn-primary w-full mt-7"
            >
              Add to Bag · ${product.price * qty}
            </button>
            <button type="button" className="btn-base btn-outline w-full mt-3">
              Buy It Now
            </button>

            {/* Reassurance row */}
            <ul className="mt-7 grid grid-cols-3 gap-3 text-xs text-muted">
              <li className="flex flex-col items-center text-center gap-1.5">
                <Truck size={16} strokeWidth={1.4} className="text-champagne-dark" />
                <span>Free shipping over $80</span>
              </li>
              <li className="flex flex-col items-center text-center gap-1.5">
                <RotateCcw size={16} strokeWidth={1.4} className="text-champagne-dark" />
                <span>30-day returns</span>
              </li>
              <li className="flex flex-col items-center text-center gap-1.5">
                <ShieldCheck size={16} strokeWidth={1.4} className="text-champagne-dark" />
                <span>Hypoallergenic</span>
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              <Accordion
                id="description"
                title="Description"
                open={openAcc === "description"}
                onToggle={() => setOpenAcc(openAcc === "description" ? null : "description")}
              >
                {product.description}
              </Accordion>
              <Accordion
                id="materials"
                title="Materials & Care"
                open={openAcc === "materials"}
                onToggle={() => setOpenAcc(openAcc === "materials" ? null : "materials")}
              >
                <p>{product.materials}</p>
                <p className="mt-3">{product.care}</p>
              </Accordion>
              <Accordion
                id="shipping"
                title="Shipping & Returns"
                open={openAcc === "shipping"}
                onToggle={() => setOpenAcc(openAcc === "shipping" ? null : "shipping")}
              >
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="mt-24 md:mt-32">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-display text-3xl md:text-4xl text-ink">You may also love</h2>
            <Link to="/shop" className="eyebrow text-[0.7rem] text-ink link-underline">View all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Accordion({ title, children, open, onToggle }) {
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="eyebrow text-ink">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-ink transition-transform duration-500 ease-velvet ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`acc-content ${open ? "open" : ""}`}>
        <div>
          <div className="pb-6 text-sm text-muted leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
