import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Plus, Minus, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { IMG_RUNTIME_BLANK } from "@/components/ui/ImageLoader";
import { Stars } from "@/components/ui/Stars";
import { formatPrice } from "@/lib/utils";
import ProductCard from "@/components/product/ProductCard";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sand">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-ink">{title}</span>
        <ChevronDown
          size={16}
          className={`text-ink transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-taupe leading-relaxed space-y-3">
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
  const { addItem } = useCart();
  const [tone, setTone] = useState(product?.tones?.[0] || "Gold");
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImg]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-ink">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const onAdd = () => {
    addItem(product, { tone, quantity: qty });
  };

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6">
        <nav className="text-[11px] uppercase tracking-[0.2em] text-taupe">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar">
            {product.galleryIds.map((gid, i) => (
              <button
                key={gid}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors ${
                  activeImg === i ? "border-gold" : "border-sand"
                }`}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                  data-strk-img-id={gid}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src={IMG_RUNTIME_BLANK}
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1 aspect-[4/5] bg-cream border border-sand overflow-hidden">
            <img
              alt={product.name}
              className="w-full h-full object-cover"
              data-strk-img-id={`${product.galleryIds[activeImg]}-main`}
              data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={IMG_RUNTIME_BLANK}
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            {product.material}
          </p>
          <h1
            id={product.titleId}
            className="font-serif text-4xl md:text-5xl text-ink uppercase tracking-[0.08em] leading-tight"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.blurb}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <Stars rating={product.rating} size={15} />
            <span className="text-xs text-taupe">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-sm text-taupe leading-relaxed">
            {product.description}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink mb-3">
              Tone: <span className="text-taupe">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={`px-6 py-2.5 rounded-full border text-xs uppercase tracking-[0.15em] transition-colors ${
                    tone === t
                      ? "border-ink bg-ink text-ivory"
                      : "border-sand text-ink hover:border-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink mb-3">
              Quantity
            </p>
            <div className="inline-flex items-center border border-sand">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink hover:bg-cream transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="px-5 text-sm text-ink w-12 text-center">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-3 text-ink hover:bg-cream transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={onAdd}
            className="mt-8 w-full py-4 bg-gold text-ivory uppercase tracking-[0.18em] text-xs hover:bg-gold-deep transition-colors"
          >
            Add to Cart — {formatPrice(product.price * qty)}
          </button>

          <p className="mt-4 text-xs text-taupe text-center">
            Free worldwide shipping · 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
              <p>
                Each piece arrives in a signature Velmora pouch, ready to be
                worn or gifted.
              </p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>18K gold plate over a hypoallergenic brass base.</p>
              <p>
                To keep your jewelry looking its best, avoid contact with
                water, perfume, and lotion. Store in the provided pouch away
                from direct sunlight.
              </p>
              <p>Crystal accents are handset and should be treated with care.</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>
                Free worldwide shipping on all orders. Orders are dispatched
                within 1–2 business days.
              </p>
              <p>
                Enjoy 30-day returns on unworn pieces in their original
                packaging.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 bg-cream border-t border-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
