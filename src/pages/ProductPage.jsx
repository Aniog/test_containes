import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import {
  formatPrice,
  getProductById,
  getRelatedProducts,
  VARIANT_TONES,
} from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";
import ProductGallery from "../components/product/ProductGallery.jsx";
import ProductCard from "../components/product/ProductCard.jsx";
import ProductAccordion from "../components/product/ProductAccordion.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Rating from "../components/ui/Rating.jsx";
import Button from "../components/ui/Button.jsx";
import { cn } from "../lib/cn.js";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState(VARIANT_TONES[0].id);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  useEffect(() => {
    if (!product) navigate("/shop", { replace: true });
  }, [product, navigate]);

  if (!product) return null;

  const related = getRelatedProducts(product.id, 4);

  const onAdd = () => {
    addItem(product.id, variant, quantity);
    toast.success(`${product.name} added to your bag`);
  };

  const sections = [
    { title: "Description", body: product.description },
    { title: "Materials & Care", body: [...product.materials, ...product.care] },
    { title: "Shipping & Returns", body: product.shipping },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-ink-950 pt-24 md:pt-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <nav className="font-sans text-[11px] uppercase tracking-widest2 text-ink-400" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gold-300">Home</Link>
            <span className="mx-2 text-ink-600">/</span>
            <Link to="/shop" className="hover:text-gold-300">Shop</Link>
            <span className="mx-2 text-ink-600">/</span>
            <span className="text-ink-200">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-ink-950 pb-20 pt-10 md:pb-28">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
          <ProductGallery product={product} />

          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow tone="gold">{product.category}</Eyebrow>
            <h1
              id={`${product.id}-name`}
              className="mt-4 font-serif text-[28px] font-light uppercase leading-[1.1] tracking-wider2 text-ink-100 md:text-[36px]"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-3">
              <Rating value={product.rating} size={14} />
              <span className="font-sans text-[12px] text-ink-300">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>

            <p className="mt-7 font-serif text-[28px] font-light text-gold-300 md:text-[32px]">
              {formatPrice(product.price)}
            </p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-widest2 text-ink-500">
              Or 4 interest-free payments of {formatPrice(product.price / 4)}
            </p>

            <p className="mt-7 max-w-md font-sans text-[14px] leading-relaxed text-ink-300">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-9">
              <div className="flex items-center justify-between">
                <Eyebrow tone="gold">Finish</Eyebrow>
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink-300">
                  {VARIANT_TONES.find((t) => t.id === variant)?.label}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {VARIANT_TONES.map((tone) => (
                  <button
                    key={tone.id}
                    type="button"
                    onClick={() => setVariant(tone.id)}
                    className={cn(
                      "group inline-flex items-center gap-3 rounded-full border px-4 py-2.5 font-sans text-[12px] uppercase tracking-widest2 transition-all duration-300",
                      variant === tone.id
                        ? "border-gold-400 bg-ink-800 text-ink-100"
                        : "border-ink-700 text-ink-300 hover:border-gold-500 hover:text-ink-100"
                    )}
                    aria-pressed={variant === tone.id}
                  >
                    <span
                      className="inline-block h-4 w-4 rounded-full border border-ink-700"
                      style={{ background: tone.swatch }}
                      aria-hidden
                    />
                    {tone.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add */}
            <div className="mt-8 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-ink-700">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-12 w-12 items-center justify-center text-ink-200 hover:text-gold-300"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.8} />
                </button>
                <span className="w-10 text-center font-sans text-[14px] text-ink-100">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-12 w-12 items-center justify-center text-ink-200 hover:text-gold-300"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.8} />
                </button>
              </div>
              <Button
                type="button"
                onClick={onAdd}
                variant="primary"
                size="lg"
                fullWidth
                className="flex-1"
              >
                <ShoppingBag size={14} strokeWidth={1.8} />
                Add to Bag · {formatPrice(product.price * quantity)}
              </Button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center gap-1.5 border border-ink-800 px-3 py-3 text-center">
                <Truck size={14} strokeWidth={1.4} className="text-gold-300" />
                <span className="font-sans text-[10px] uppercase tracking-widest2 text-ink-300">
                  Free shipping
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5 border border-ink-800 px-3 py-3 text-center">
                <RotateCcw size={14} strokeWidth={1.4} className="text-gold-300" />
                <span className="font-sans text-[10px] uppercase tracking-widest2 text-ink-300">
                  30-day returns
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5 border border-ink-800 px-3 py-3 text-center">
                <ShieldCheck size={14} strokeWidth={1.4} className="text-gold-300" />
                <span className="font-sans text-[10px] uppercase tracking-widest2 text-ink-300">
                  Hypoallergenic
                </span>
              </div>
            </div>

            <div className="mt-10">
              <ProductAccordion sections={sections} />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ink-900 py-24 md:py-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="flex items-end justify-between">
            <div>
              <Eyebrow tone="gold">You may also love</Eyebrow>
              <h2 className="mt-4 font-serif text-[32px] font-light leading-[1.05] text-ink-100 md:text-[44px]">
                Pairs well with.
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden font-sans text-[11px] uppercase tracking-widest2 text-gold-300 hover:text-gold-200 md:inline"
            >
              View all →
            </Link>
          </div>
          <span id="velmora-product-card" className="sr-only">
            Velmora demi-fine jewelry
          </span>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} productId={p.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
