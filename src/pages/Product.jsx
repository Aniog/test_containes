import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { toast } from "sonner";
import {
  Minus,
  Plus,
  Star,
  ChevronDown,
  Truck,
  RotateCcw,
  Sparkles,
  ShoppingBag,
  Heart,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { getProductBySlug, getRelatedProducts, tones } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import ProductCard from "@/components/home/ProductCard";

function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-ink/10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.title} className="border-b border-ink/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="eyebrow text-ink">{it.title}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  isOpen && "rotate-180",
                )}
                strokeWidth={1.4}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-[14px] leading-relaxed text-muted max-w-prose">
                  {it.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const galleryPositions = [
  { id: "p-main", ratio: "4x5" },
  { id: "p-detail", ratio: "1x1" },
  { id: "p-lifestyle", ratio: "4x5" },
  { id: "p-scale", ratio: "1x1" },
];

export default function Product() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [tone, setTone] = useState(product?.tone || "gold");
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (!product) navigate("/shop", { replace: true });
  }, [product, navigate]);

  useEffect(() => {
    setActiveImg(0);
    setQty(1);
    setTone(product?.tone || "gold");
  }, [product?.id]);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) return null;

  const related = getRelatedProducts(product, 4);

  const handleAdd = (andBuyNow = false) => {
    setAdding(true);
    setTimeout(() => {
      addItem(product.id, qty, tone, product.imgIds.primary);
      toast.success(`${product.name} added to cart`);
      setAdding(false);
      if (andBuyNow) {
        // future: route to /checkout
      }
    }, 350);
  };

  return (
    <div ref={containerRef} className="bg-cream-100">
      <nav
        aria-label="Breadcrumb"
        className="max-w-editorial mx-auto px-5 lg:px-10 pt-28 lg:pt-36 pb-6 text-[11px] tracking-[0.2em] uppercase text-muted"
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/" className="hover:text-ink transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/shop" className="hover:text-ink transition-colors">
              Shop
            </Link>
          </li>
          <li>/</li>
          <li className="text-ink truncate">{product.name}</li>
        </ol>
      </nav>

      <div className="max-w-editorial mx-auto px-5 lg:px-10 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">
              <div className="hidden lg:flex lg:col-span-1 flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setActiveImg(0)}
                  className={cn(
                    "aspect-square overflow-hidden border transition-colors",
                    activeImg === 0
                      ? "border-ink"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                  aria-label="View image 1"
                >
                  <img
                    alt=""
                    data-strk-img-id={`${product.imgIds.primary}-thumb-0`}
                    data-strk-img={`[${product.textIds.short}] [${product.textIds.name}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImg(1)}
                  className={cn(
                    "aspect-square overflow-hidden border transition-colors",
                    activeImg === 1
                      ? "border-ink"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                  aria-label="View image 2"
                >
                  <img
                    alt=""
                    data-strk-img-id={`${product.imgIds.primary}-thumb-1`}
                    data-strk-img={`[${product.textIds.short}] [${product.textIds.name}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImg(2)}
                  className={cn(
                    "aspect-square overflow-hidden border transition-colors",
                    activeImg === 2
                      ? "border-ink"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                  aria-label="View image 3"
                >
                  <img
                    alt=""
                    data-strk-img-id={`${product.imgIds.primary}-thumb-2`}
                    data-strk-img={`[${product.textIds.short}] [${product.textIds.name}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImg(3)}
                  className={cn(
                    "aspect-square overflow-hidden border transition-colors",
                    activeImg === 3
                      ? "border-ink"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                  aria-label="View image 4"
                >
                  <img
                    alt=""
                    data-strk-img-id={`${product.imgIds.primary}-thumb-3`}
                    data-strk-img={`[${product.textIds.short}] [${product.textIds.name}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>

              <div className="lg:col-span-11 relative bg-cream-200 aspect-[4/5] overflow-hidden">
                <img
                  key={activeImg}
                  alt={product.name}
                  data-strk-img-id={
                    activeImg === 0
                      ? `${product.imgIds.primary}-main-0`
                      : activeImg === 1
                      ? `${product.imgIds.primary}-main-1`
                      : activeImg === 2
                      ? `${product.imgIds.primary}-main-2`
                      : `${product.imgIds.primary}-main-3`
                  }
                  data-strk-img={`[${product.textIds.short}] [${product.textIds.name}]`}
                  data-strk-img-ratio={
                    activeImg === 0
                      ? "4x5"
                      : activeImg === 1
                      ? "1x1"
                      : activeImg === 2
                      ? "4x5"
                      : "1x1"
                  }
                  data-strk-img-width="1200"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  type="button"
                  aria-label="Save to wishlist"
                  className="absolute top-4 right-4 w-10 h-10 grid place-items-center bg-cream-100/90 backdrop-blur-sm text-ink hover:text-gold transition-colors"
                >
                  <Heart className="w-4 h-4" strokeWidth={1.4} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 lg:hidden">
                  {galleryPositions.map((g, i) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setActiveImg(i)}
                      aria-label={`View image ${i + 1}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        activeImg === i
                          ? "w-6 bg-ink"
                          : "w-1.5 bg-ink/30",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <p className="text-[11px] tracking-[0.28em] uppercase text-muted">
              {product.category}
            </p>
            <h1 className="product-name text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1] mt-3">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="price text-[26px]">
                {formatPrice(product.price)}
              </span>
              <span className="flex items-center gap-1.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5"
                    strokeWidth={1.4}
                    fill="currentColor"
                  />
                ))}
              </span>
              <span className="text-[12px] text-muted">
                ({product.reviewCount})
              </span>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              {product.short}
            </p>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-ink">Tone</span>
                <span className="text-[12px] text-muted capitalize">
                  {tones.find((t) => t.id === tone)?.label}
                </span>
              </div>
              <div className="mt-3 flex gap-2.5">
                {tones.map((t) => {
                  const active = tone === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTone(t.id)}
                      className={cn(
                        "px-6 py-2.5 text-[12px] tracking-[0.2em] uppercase border transition-colors",
                        active
                          ? "border-ink bg-ink text-cream-100"
                          : "border-ink/25 text-ink hover:border-ink",
                      )}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <span className="eyebrow text-ink">Quantity</span>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex items-center border border-ink/20">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-ink hover:text-cream-100 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" strokeWidth={1.6} />
                  </button>
                  <span className="w-10 text-center text-[14px]">{qty}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-ink hover:text-cream-100 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />
                  </button>
                </div>
                <span className="text-[12px] text-muted">
                  Only 8 left — selling fast
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                disabled={adding}
                onClick={() => handleAdd(false)}
                className="btn-primary w-full disabled:opacity-60"
              >
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                {adding ? "Adding…" : "Add to Cart"}
              </button>
              <button
                type="button"
                onClick={() => handleAdd(true)}
                className="btn-outline w-full"
              >
                Buy It Now
              </button>
            </div>

            <ul className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: Truck, label: "Free Shipping" },
                { icon: RotateCcw, label: "30-Day Returns" },
                { icon: Sparkles, label: "18K Gold" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="bg-cream-50 py-4 flex flex-col items-center gap-2"
                >
                  <Icon className="w-4 h-4 text-gold" strokeWidth={1.4} />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Accordion
                items={[
                  {
                    title: "Description",
                    body: product.description,
                  },
                  {
                    title: "Materials & Care",
                    body: `${product.materials} To keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the soft pouch provided.`,
                  },
                  {
                    title: "Shipping & Returns",
                    body: product.shipping,
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="mt-24 lg:mt-32">
          <div className="text-center mb-10">
            <span className="eyebrow-gold">You may also love</span>
            <h2 className="font-serif text-ink mt-3 text-[28px] sm:text-[34px] lg:text-[40px]">
              Pairs beautifully with
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
