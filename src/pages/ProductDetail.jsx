import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, Truck, Shield, Sparkles } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/product/ProductCard";
import GalleryRegistry from "@/components/product/GalleryRegistry";

const ACCORDIONS = [
  { id: "description", label: "Description", icon: Sparkles, key: "description" },
  { id: "care", label: "Materials & Care", icon: Shield, key: "care" },
  { id: "shipping", label: "Shipping & Returns", icon: Truck, key: "shipping" },
];

function Accordion({ section, content, isOpen, onToggle }) {
  const Icon = section.icon;
  return (
    <div className="border-b border-[#1A1410]/15">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 group"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-[#1A1410]">
          <Icon className="w-4 h-4 text-[#B8924A]" strokeWidth={1.25} />
          {section.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#1A1410] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.25}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[#3D332A] leading-relaxed text-[15px] max-w-prose">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const containerRef = useRef(null);

  const [activeImage, setActiveImage] = useState(0);
  const [tone, setTone] = useState(product?.tone?.[0] || "Gold");
  const [quantity, setQuantity] = useState(1);
  const [openAcc, setOpenAcc] = useState("description");
  const { addItem, openCart } = useCart();

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const related = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  // Build gallery using statically-defined IDs on the product.
  const gallery = product.galleryIds.map((galleryId, i) => ({
    id: galleryId,
    query:
      i === 0
        ? `${product.query} hero shot warm light`
        : i === 1
        ? `${product.query} on model close up`
        : i === 2
        ? `${product.query} macro texture detail`
        : `${product.query} flatlay linen warm light`,
  }));

  const handleAdd = () => {
    addItem(product, { tone, quantity });
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-[#F7F2EA]">
      <GalleryRegistry />
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="text-[11px] uppercase tracking-[0.3em] text-[#8B7D6B] mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[#1A1410]">Home</Link>
          <span aria-hidden>/</span>
          <Link to="/shop" className="hover:text-[#1A1410]">Shop</Link>
          <span aria-hidden>/</span>
          <span className="text-[#1A1410]">{product.categoryLabel}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:gap-4 md:w-20">
              {gallery.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-[#EFE7DA] transition-all ${
                    activeImage === i
                      ? "ring-1 ring-[#B8924A]"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt=""
                    data-strk-img-id={g.id}
                    data-strk-img={`${g.query}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[4/5] bg-[#EFE7DA] overflow-hidden">
              {gallery.map((g, i) => (
                <img
                  key={g.id}
                  alt={i === 0 ? product.name : ""}
                  data-strk-img-id={g.id}
                  data-strk-img={`[pdp-title] [pdp-short] ${g.query}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    activeImage === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#B8924A] mb-4">
              {product.categoryLabel}
            </p>
            <h1
              id="pdp-title"
              className="font-serif uppercase tracking-[0.18em] text-2xl md:text-3xl text-[#1A1410] leading-tight"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1 text-[#B8924A]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(product.rating) ? "fill-[#B8924A]" : ""
                    }`}
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-xs text-[#8B7D6B]">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-[#1A1410]">${product.price}</p>

            <p
              id="pdp-short"
              className="mt-6 text-[#3D332A] leading-relaxed max-w-md"
            >
              {product.short}
            </p>

            {/* Tone selector */}
            <div className="mt-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#1A1410] mb-3">
                Tone: <span className="text-[#8B7D6B]">{tone}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tone.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] border transition-colors duration-300 ${
                      tone === t
                        ? "bg-[#1A1410] text-[#F7F2EA] border-[#1A1410]"
                        : "bg-transparent text-[#1A1410] border-[#1A1410]/30 hover:border-[#1A1410]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add */}
            <div className="mt-8 flex items-stretch gap-3">
              <div className="flex items-stretch border border-[#1A1410]/25">
                <button
                  aria-label="Decrease quantity"
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-12 hover:bg-[#EFE7DA] flex items-center justify-center"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-12 flex items-center justify-center text-sm">
                  {quantity}
                </span>
                <button
                  aria-label="Increase quantity"
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-12 hover:bg-[#EFE7DA] flex items-center justify-center"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-[#B8924A] hover:bg-[#8E6E33] text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4 px-6 transition-colors duration-300"
              >
                Add to Bag — ${(product.price * quantity).toFixed(0)}
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                handleAdd();
                setTimeout(openCart, 100);
              }}
              className="mt-3 w-full border border-[#1A1410] text-[#1A1410] hover:bg-[#1A1410] hover:text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4 transition-colors duration-300"
            >
              Buy It Now
            </button>

            {/* Quick benefits */}
            <ul className="mt-8 space-y-2 text-xs text-[#8B7D6B]">
              <li>· Ships within 1–2 business days from our atelier</li>
              <li>· Arrives in our linen-lined keepsake box, ready to gift</li>
              <li>· 30-day returns · Lifetime repair service</li>
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#1A1410]/15">
              {ACCORDIONS.map((sec) => (
                <Accordion
                  key={sec.id}
                  section={sec}
                  content={product[sec.key]}
                  isOpen={openAcc === sec.id}
                  onToggle={() => setOpenAcc(openAcc === sec.id ? null : sec.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="bg-[#EFE7DA] py-20 md:py-28 mt-10">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1A1410] tracking-tight">
              You may also <em className="italic text-[#8E6E33]">love</em>
            </h2>
            <Link
              to="/shop"
              className="text-[11px] uppercase tracking-[0.3em] text-[#1A1410] hover:text-[#B8924A] transition-colors self-start md:self-auto"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
