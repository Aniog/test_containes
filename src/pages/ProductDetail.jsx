import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Star, Plus, Minus, ChevronDown, Truck, RotateCcw, Heart, ChevronRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { PLACEHOLDER_SRC, formatPrice } from "@/lib/utils";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || "Gold");
  const [qty, setQty] = useState(1);
  const [openAcc, setOpenAcc] = useState("description");
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [slug, activeImg]);

  // Reset state when slug changes
  useEffect(() => {
    setActiveImg(0);
    setQty(1);
    if (product) setVariant(product.variants[0]);
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  const related = useMemo(
    () => (product ? getRelatedProducts(product.id, product.category, 4) : []),
    [product],
  );

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const accordions = [
    { id: "description", title: "Description", body: product.description },
    { id: "materials", title: "Materials & Care", body: product.materials },
    { id: "shipping", title: "Shipping & Returns", body: product.shipping },
  ];

  return (
    <div ref={containerRef} className="pt-24 lg:pt-28">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-5 lg:px-10 pb-6 lg:pb-10">
        <ol className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#8A7A66]">
          <li><Link to="/" className="hover:text-[#13100E] transition">Home</Link></li>
          <li><ChevronRight size={12} strokeWidth={1.5} className="text-[#C6BFB0]" /></li>
          <li><Link to="/shop" className="hover:text-[#13100E] transition">Shop</Link></li>
          <li><ChevronRight size={12} strokeWidth={1.5} className="text-[#C6BFB0]" /></li>
          <li><Link to={`/shop?category=${product.category}`} className="hover:text-[#13100E] transition">{product.category}</Link></li>
          <li><ChevronRight size={12} strokeWidth={1.5} className="text-[#C6BFB0]" /></li>
          <li className="text-[#13100E] truncate max-w-[200px]">{product.name}</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="grid grid-cols-[80px_1fr] lg:grid-cols-[88px_1fr] gap-4 lg:gap-5">
              <div className="hidden md:flex flex-col gap-3 order-1">
                {product.images.map((img, idx) => (
                  <button
                    type="button"
                    key={img.id}
                    onClick={() => setActiveImg(idx)}
                    aria-label={`Show image ${idx + 1}`}
                    className={`aspect-[4/5] overflow-hidden bg-[#F2EDE5] border transition ${activeImg === idx ? "border-[#B8935C]" : "border-transparent hover:border-[#E5DCCD]"}`}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      width="80"
                      height="100"
                      data-strk-img-id={`pdp-thumb-${img.id}`}
                      data-strk-img={img.q}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src={PLACEHOLDER_SRC}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="col-span-full md:col-span-1 order-0 md:order-2">
                <div className="aspect-[4/5] overflow-hidden bg-[#F2EDE5] relative">
                  <img
                    alt={product.name}
                    width="900"
                    height="1125"
                    data-strk-img-id={`pdp-main-${product.images[activeImg].id}-${activeImg}`}
                    data-strk-img={product.images[activeImg].q}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="1000"
                    src={PLACEHOLDER_SRC}
                    className="w-full h-full object-cover fade-in"
                    key={activeImg}
                  />
                  <button
                    type="button"
                    aria-label={wishlisted ? "Remove from wishlist" : "Save to wishlist"}
                    onClick={() => setWishlisted((v) => !v)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition"
                  >
                    <Heart size={16} strokeWidth={1.5} className={wishlisted ? "fill-[#B8935C] text-[#B8935C]" : "text-[#2A211B]"} />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile thumbnail row */}
            <div className="md:hidden flex gap-2 mt-3 overflow-x-auto no-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  type="button"
                  key={img.id}
                  onClick={() => setActiveImg(idx)}
                  aria-label={`Show image ${idx + 1}`}
                  className={`w-16 aspect-[4/5] flex-shrink-0 overflow-hidden bg-[#F2EDE5] border transition ${activeImg === idx ? "border-[#B8935C]" : "border-transparent"}`}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    width="64"
                    height="80"
                    data-strk-img-id={`pdp-mthumb-${img.id}`}
                    data-strk-img={img.q}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="160"
                    src={PLACEHOLDER_SRC}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-4">
            <p className="eyebrow mb-4">{product.category}</p>
            <h1 className="product-name text-[#13100E] text-[20px] sm:text-[22px] leading-snug mb-3">
              {product.name}
            </h1>
            <p className="font-serif text-2xl text-[#2A211B] italic mb-5">{product.tagline}</p>

            <div className="flex items-center gap-4 mb-7">
              <span className="font-serif text-3xl text-[#13100E] tabular-nums">{formatPrice(product.price)}</span>
              <div className="h-4 w-px bg-[#E5DCCD]" />
              <div className="flex items-center gap-2">
                <div className="flex" aria-label={`${product.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      strokeWidth={1.2}
                      className={i < Math.round(product.rating) ? "text-[#B8935C] fill-[#B8935C]" : "text-[#E5DCCD]"}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#8A7A66]">{product.rating} ({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[#2A211B] leading-relaxed mb-9">
              {product.description}
            </p>

            {/* Variant pills */}
            <div className="mb-7">
              <p className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#13100E] mb-3">
                Tone — <span className="text-[#8A7A66] font-normal normal-case tracking-normal">{variant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] font-medium border transition ${
                      variant === v
                        ? "border-[#13100E] bg-[#13100E] text-white"
                        : "border-[#E5DCCD] text-[#2A211B] hover:border-[#13100E]"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mb-7">
              <p className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#13100E] mb-3">Quantity</p>
              <div className="flex items-stretch gap-3">
                <div className="inline-flex items-center border border-[#E5DCCD]">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-[#F2EDE5] transition disabled:opacity-30"
                    aria-label="Decrease quantity"
                    disabled={qty <= 1}
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-12 text-center text-sm tabular-nums" aria-live="polite">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-[#F2EDE5] transition"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => addItem(product, variant, qty)}
                  className="flex-1 bg-[#B8935C] text-white text-[12px] uppercase tracking-[0.25em] font-medium px-6 hover:bg-[#9A7A45] transition"
                >
                  Add to Bag · {formatPrice(product.price * qty)}
                </button>
              </div>
            </div>

            {/* Mini trust row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-5 border-y border-[#E5DCCD] mb-7">
              <div className="flex items-center gap-3">
                <Truck size={16} strokeWidth={1.4} className="text-[#B8935C]" />
                <span className="text-[12px] text-[#2A211B]">Free worldwide shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={16} strokeWidth={1.4} className="text-[#B8935C]" />
                <span className="text-[12px] text-[#2A211B]">30-day returns, on us</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-[#E5DCCD]">
              {accordions.map((acc) => {
                const isOpen = openAcc === acc.id;
                return (
                  <div key={acc.id} className="border-b border-[#E5DCCD]">
                    <button
                      type="button"
                      onClick={() => setOpenAcc(isOpen ? null : acc.id)}
                      aria-expanded={isOpen}
                      aria-controls={`acc-${acc.id}`}
                      className="w-full py-5 flex items-center justify-between text-left hover:text-[#B8935C] transition"
                    >
                      <span className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#13100E]">
                        {acc.title}
                      </span>
                      <ChevronDown
                        size={16}
                        strokeWidth={1.5}
                        className={`text-[#2A211B] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      id={`acc-${acc.id}`}
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isOpen ? "400px" : "0px",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <p className="pb-5 pe-6 text-[#2A211B] text-sm leading-relaxed">
                        {acc.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#F2EDE5] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="text-center mb-10 lg:mb-14">
              <p className="eyebrow mb-3">You may also like</p>
              <h2 className="font-serif text-3xl lg:text-4xl text-[#13100E]">Pieces that pair beautifully.</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
