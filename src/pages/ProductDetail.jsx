import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-parchment">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-warm-gray flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-warm-gray flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            {children}
          </p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="font-serif text-2xl md:text-3xl font-light text-obsidian mb-10">
          You May Also Like
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-ivory-dark mb-4">
                <img
                  data-strk-img-id={`related-${p.imgId}`}
                  data-strk-img={`[related-${p.titleId}] [related-${p.descId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={`related-${p.titleId}`} className="font-sans text-[11px] tracking-widest uppercase text-obsidian font-medium">
                {p.name}
              </p>
              <p id={`related-${p.descId}`} className="font-sans text-xs text-text-muted mt-1">
                {p.subtitle}
              </p>
              <p className="font-serif text-base text-obsidian mt-1">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    setAdded(false);
  }, [id, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: `pdp-main-${product.imgId}`, imgId: product.imgId, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { id: `pdp-alt-${product.imgId2}`, imgId: product.imgId2, query: `[pdp-title-${product.id}] [pdp-desc-${product.id}]` },
  ];

  return (
    <div className="min-h-screen bg-ivory pt-16 md:pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            to="/shop"
            className="flex items-center gap-1.5 font-sans text-xs text-text-muted hover:text-gold transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Shop
          </Link>
          <span className="text-parchment">/</span>
          <span className="font-sans text-xs text-text-muted">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="aspect-[4/5] overflow-hidden bg-ivory-dark relative">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? "border-gold" : "border-transparent"
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="font-sans text-[10px] tracking-widest uppercase bg-gold text-obsidian px-3 py-1 self-start mb-4">
                {product.badge}
              </span>
            )}

            <h1
              id={`pdp-title-${product.id}`}
              className="font-sans text-sm md:text-base tracking-widest uppercase text-obsidian font-medium"
            >
              {product.name}
            </h1>
            <p
              id={`pdp-desc-${product.id}`}
              className="font-serif text-lg text-text-secondary font-light mt-1"
            >
              {product.subtitle}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(product.rating) ? "#C9A96E" : "none"}
                    stroke={i < Math.floor(product.rating) ? "none" : "#C9A96E"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-obsidian font-light mt-5">
              ${product.price}
            </p>

            <div className="w-full h-px bg-parchment my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[11px] tracking-widest uppercase text-text-secondary mb-3">
                Finish: <span className="text-obsidian">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wider px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? "border-gold bg-gold text-obsidian"
                        : "border-parchment text-text-secondary hover:border-gold hover:text-gold"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[11px] tracking-widest uppercase text-text-secondary mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-parchment w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 py-4 font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
                added
                  ? "bg-obsidian-light text-ivory"
                  : "bg-obsidian text-ivory hover:bg-gold hover:text-obsidian"
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              {["Free Shipping", "30-Day Returns", "Hypoallergenic"].map((t) => (
                <span key={t} className="font-sans text-[10px] tracking-wider text-text-muted">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <strong>Materials:</strong> {product.details}
                <br /><br />
                <strong>Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
