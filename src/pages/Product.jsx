import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  ChevronDown,
  Heart,
  Minus,
  Plus,
  Shield,
  Truck,
  RefreshCcw,
  Star,
} from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import ProductCard from "@/components/product/ProductCard";

const TONES = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
  { id: "rose", label: "Rose Gold" },
];

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem, openCart } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [tone, setTone] = useState(TONES[0].id);
  const [qty, setQty] = useState(1);
  const [openSection, setOpenSection] = useState("description");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setActiveImage(0);
    setQty(1);
  }, [id]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const root = document.getElementById("pdp-root");
      if (root) ImageHelper.loadImages(strkImgConfig, root);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="bg-cream min-h-screen pt-32 pb-20">
        <div className="container-shell text-center">
          <h1 className="font-display text-4xl text-ink">Piece not found</h1>
          <p className="mt-4 text-ink-soft">
            The piece you are looking for is no longer in the atelier.
          </p>
          <Link to="/shop" className="btn-primary mt-8 inline-flex">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.related);
  const galleryImages = [product.imgIds.primary, product.imgIds.secondary];

  const handleAdd = () => {
    addItem({ ...product, tone }, qty);
  };

  const handleBuyNow = () => {
    addItem({ ...product, tone }, qty);
    // In a real app, navigate to /checkout
  };

  return (
    <div id="pdp-root" className="bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-shell py-5 border-b border-ink/10">
        <nav className="text-[10px] tracking-wider-3 uppercase text-mute">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2 text-ink/30">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2 text-ink/30">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="container-shell py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7 flex gap-4">
            {/* Vertical thumbnails (desktop) */}
            <div className="hidden md:flex flex-col gap-3 w-20 flex-shrink-0">
              {galleryImages.map((imgId, i) => (
                <button
                  key={imgId}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "aspect-square bg-blush overflow-hidden border transition-colors duration-300",
                    activeImage === i
                      ? "border-ink"
                      : "border-transparent hover:border-ink/30"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    data-strk-img-id={`pdp-thumb-${imgId}`}
                    data-strk-img={`${product.name} gold jewelry editorial warm`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 min-w-0 aspect-[3/4] bg-blush overflow-hidden relative">
              <img
                key={galleryImages[activeImage]}
                alt={product.name}
                data-strk-img-id={`pdp-main-${galleryImages[activeImage]}`}
                data-strk-img={
                  activeImage === 0
                    ? `${product.name} gold jewelry editorial warm`
                    : `${product.name} model wearing editorial portrait warm`
                }
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover animate-fade-in"
              />

              {product.badge && (
                <span
                  className={cn(
                    "absolute top-4 left-4 text-[9px] font-medium tracking-wider-3 uppercase px-2 py-1",
                    product.badge === "Bestseller" && "bg-espresso text-cream",
                    product.badge === "New" && "bg-champagne text-espresso",
                    product.badge === "Limited" && "bg-cocoa text-cream",
                    product.badge === "Gift" && "bg-ivory text-ink"
                  )}
                >
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <span className="eyebrow">
                {product.category === "sets" ? "Gift Set" : product.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl mt-3 text-ink leading-[1.05]">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-1 text-champagne">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-3.5 h-3.5",
                        i < Math.floor(product.rating)
                          ? "fill-current"
                          : "fill-transparent stroke-current"
                      )}
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <span className="text-xs text-ink-soft tabular-nums">
                  {product.rating.toFixed(1)} · {product.reviewCount} reviews
                </span>
              </div>

              <p className="mt-6 text-2xl font-display text-ink tabular-nums">
                {formatPrice(product.price)}
              </p>

              <p className="mt-5 text-ink-soft leading-relaxed">
                {product.short}
              </p>

              <div className="my-8 h-px bg-ink/10" />

              {/* Variant selector */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] tracking-wider-3 uppercase text-ink">
                    Tone
                  </h3>
                  <span className="text-[10px] tracking-wider-2 uppercase text-mute">
                    {TONES.find((t) => t.id === tone)?.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {TONES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTone(t.id)}
                      className={cn(
                        "px-5 py-2.5 text-[11px] tracking-wider-2 uppercase font-medium border transition-colors duration-300",
                        tone === t.id
                          ? "border-ink bg-ink text-cream"
                          : "border-ink/20 text-ink hover:border-ink/50"
                      )}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-8 flex items-stretch gap-3">
                <div className="inline-flex items-center border border-ink/20">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    aria-label="Decrease quantity"
                    className="w-11 h-12 flex items-center justify-center text-ink-soft hover:text-ink"
                  >
                    <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    aria-label="Increase quantity"
                    className="w-11 h-12 flex items-center justify-center text-ink-soft hover:text-ink"
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                </div>
                <button
                  onClick={handleAdd}
                  className="btn-accent flex-1"
                >
                  Add to Cart · {formatPrice(product.price * qty)}
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="w-12 border border-ink/20 flex items-center justify-center text-ink-soft hover:text-ink hover:border-ink/50 transition-colors duration-300"
                >
                  <Heart className="w-4 h-4" strokeWidth={1.25} />
                </button>
              </div>

              {/* Trust row */}
              <ul className="mt-8 grid grid-cols-3 gap-3 text-[10px] tracking-wider-3 uppercase text-ink-soft border-t border-ink/10 pt-6">
                <li className="flex flex-col items-center text-center gap-2">
                  <Truck className="w-4 h-4 text-champagne-deep" strokeWidth={1.25} />
                  Free Shipping
                </li>
                <li className="flex flex-col items-center text-center gap-2">
                  <RefreshCcw className="w-4 h-4 text-champagne-deep" strokeWidth={1.25} />
                  30-Day Returns
                </li>
                <li className="flex flex-col items-center text-center gap-2">
                  <Shield className="w-4 h-4 text-champagne-deep" strokeWidth={1.25} />
                  Hypoallergenic
                </li>
              </ul>

              {/* Accordions */}
              <div className="mt-10 border-t border-ink/10">
                <Accordion
                  open={openSection === "description"}
                  onToggle={() =>
                    setOpenSection(openSection === "description" ? null : "description")
                  }
                  title="Description"
                >
                  <p className="text-ink-soft leading-relaxed">{product.description}</p>
                </Accordion>
                <Accordion
                  open={openSection === "materials"}
                  onToggle={() =>
                    setOpenSection(openSection === "materials" ? null : "materials")
                  }
                  title="Materials & Care"
                >
                  <p className="text-ink-soft leading-relaxed">{product.materialCare}</p>
                </Accordion>
                <Accordion
                  open={openSection === "shipping"}
                  onToggle={() =>
                    setOpenSection(openSection === "shipping" ? null : "shipping")
                  }
                  title="Shipping & Returns"
                >
                  <p className="text-ink-soft leading-relaxed">{product.shipping}</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-ink/10 py-20 md:py-28">
          <div className="container-shell">
            <div className="text-center mb-12 md:mb-16">
              <span className="eyebrow">Pair With</span>
              <h2 className="font-display text-3xl md:text-4xl mt-3 text-ink">
                You may also love
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
              {related.slice(0, 3).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Accordion({ open, onToggle, title, children }) {
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] tracking-wider-3 uppercase font-medium text-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-ink-soft transition-transform duration-300",
            open && "rotate-180"
          )}
          strokeWidth={1.25}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out-soft",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
