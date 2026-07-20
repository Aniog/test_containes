import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={12}
            className={s <= Math.round(rating) ? "text-gold fill-gold" : "text-taupe-light"}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-taupe">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ivory-dark">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 bg-transparent border-0 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-obsidian font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} className="text-taupe" />
        ) : (
          <ChevronDown size={14} className="text-taupe" />
        )}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-text-secondary leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ current }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== current.id).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="font-serif text-2xl md:text-3xl text-obsidian font-light text-center mb-10">
          You May Also Like
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group flex flex-col">
              <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4]">
                <img
                  data-strk-img-id={`related-${p.imgId}`}
                  data-strk-img={`[related-desc-${p.id}] [related-title-${p.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                />
              </div>
              <p id={`related-title-${p.id}`} className="font-serif text-sm uppercase tracking-widest2 text-obsidian mt-3 leading-tight">
                {p.name}
              </p>
              <p id={`related-desc-${p.id}`} className="font-sans text-xs text-taupe mt-0.5">{p.subtitle}</p>
              <p className="font-sans text-sm font-semibold text-obsidian mt-1">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
      setQty(1);
      setAdded(false);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs uppercase tracking-widest text-gold underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const imgIds = [product.imgId, product.img2Id];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-ivory min-h-screen pt-16 md:pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 font-sans text-xs text-taupe hover:text-gold transition-colors bg-transparent border-0 p-0"
          >
            <ArrowLeft size={12} />
            Back
          </button>
          <span className="text-taupe-light text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-taupe hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-taupe-light text-xs">/</span>
          <span className="font-sans text-xs text-obsidian">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4]">
              <img
                data-strk-img-id={imgIds[activeImg]}
                data-strk-img={`[pdp-desc] [pdp-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-obsidian text-ivory font-sans text-[10px] uppercase tracking-widest px-2 py-1">
                  {product.badge}
                </span>
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {imgIds.map((imgId, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-ivory-dark aspect-square w-16 md:w-20 border-0 p-0 ${
                    activeImg === i ? "ring-1 ring-gold" : "opacity-60 hover:opacity-100"
                  } transition-opacity`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={`thumb-${imgId}`}
                    data-strk-img={`[pdp-desc] [pdp-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-2">
              {product.material}
            </p>
            <h1
              id="pdp-title"
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest2 text-obsidian font-light leading-tight mb-1"
            >
              {product.name}
            </h1>
            <p className="font-sans text-sm text-taupe mb-3">{product.subtitle}</p>
            <StarRating rating={product.rating} count={product.reviewCount} />
            <p className="font-sans text-2xl font-semibold text-obsidian mt-4 mb-5">
              ${product.price}
            </p>

            <p id="pdp-desc" className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-obsidian mb-3">
                Finish: <span className="text-taupe">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? "bg-obsidian text-ivory border-obsidian"
                        : "bg-transparent text-obsidian border-ivory-dark hover:border-obsidian"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-obsidian">Qty</p>
              <div className="flex items-center border border-ivory-dark">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center text-obsidian hover:bg-ivory-dark transition-colors bg-transparent border-0"
                  aria-label="Decrease"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-obsidian">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center text-obsidian hover:bg-ivory-dark transition-colors bg-transparent border-0"
                  aria-label="Increase"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs uppercase tracking-widest transition-colors border-0 ${
                added
                  ? "bg-gold text-obsidian"
                  : "bg-obsidian text-ivory hover:bg-obsidian-soft"
              }`}
            >
              {added ? "Added to Bag ✓" : "Add to Bag"}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5 pt-5 border-t border-ivory-dark">
              {["Free Shipping", "30-Day Returns", "Hypoallergenic"].map((t) => (
                <span key={t} className="font-sans text-[10px] uppercase tracking-widest text-taupe">
                  ✦ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion title="Description">
                <p>{product.description}</p>
                <ul className="mt-3 flex flex-col gap-1">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivered in 3–7 business days. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts current={product} />
    </div>
  );
}
