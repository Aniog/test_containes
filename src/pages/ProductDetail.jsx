import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/products/ProductCard";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-[0.15em] text-espresso">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-taupe" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-taupe" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-taupe leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState("Gold Tone");
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setQuantity(1);
    setAdded(false);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl font-light text-espresso mb-4">
            Product not found
          </p>
          <Link
            to="/shop"
            className="font-inter text-xs uppercase tracking-[0.15em] text-gold border-b border-gold pb-0.5"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, altId: product.img2Id },
    { id: product.img2Id, altId: product.imgId },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-cream min-h-screen pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-stone">
        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="flex items-center gap-1.5 font-inter text-xs text-taupe hover:text-gold transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-stone">/</span>
          <span className="font-inter text-xs text-taupe">{product.category}</span>
          <span className="text-stone">/</span>
          <span className="font-inter text-xs text-espresso uppercase tracking-[0.08em]">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors ${
                    activeImg === i ? "border-gold" : "border-stone hover:border-taupe"
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`pdp-thumb-${i}-${product.id}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-parchment aspect-[3/4]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`pdp-main-${activeImg}-${product.id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-espresso font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(product.rating) ? "#B8965A" : "none"}
                    stroke={i < Math.floor(product.rating) ? "none" : "#C4B8A8"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-espresso mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-inter text-sm text-taupe leading-relaxed mb-7 border-t border-stone pt-5"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-[0.15em] text-espresso mb-3">
                Finish:{" "}
                <span className="text-taupe normal-case tracking-normal">
                  {selectedVariant}
                </span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? "border-espresso bg-espresso text-cream"
                        : "border-stone text-taupe hover:border-taupe"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-[0.15em] text-espresso mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-stone w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-inter text-sm text-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-inter text-xs uppercase tracking-[0.2em] py-4 transition-colors mb-3 ${
                added
                  ? "bg-espresso text-cream"
                  : "bg-gold text-cream hover:bg-gold-light"
              }`}
            >
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>

            {/* Wishlist */}
            <button className="w-full border border-stone text-taupe font-inter text-xs uppercase tracking-[0.15em] py-3.5 hover:border-espresso hover:text-espresso transition-colors mb-8">
              Save to Wishlist
            </button>

            {/* Accordions */}
            <div>
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span>
                  <strong className="text-espresso">Materials:</strong>{" "}
                  {product.materials}
                  <br />
                  <br />
                  <strong className="text-espresso">Care:</strong> {product.care}
                </span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-stone py-16 md:py-20" ref={relatedRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
              You May Also Like
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
              Complete the Look
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
