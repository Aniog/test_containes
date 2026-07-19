import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import productImgConfig from "@/product-img-config.json";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-cream">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-base text-ink tracking-wide-heading">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-warm-gray" />
        ) : (
          <ChevronDown size={16} className="text-warm-gray" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-sm text-warm-gray leading-relaxed font-sans">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedTone, setSelectedTone] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const mainImgRef = useRef(null);
  const thumbRefs = useRef([]);

  useEffect(() => {
    const found = products.find((p) => p.id === id);
    setProduct(found || null);
    setSelectedTone("gold");
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [id]);

  // Set data-strk-img attributes at runtime and load images
  useEffect(() => {
    if (!product || !containerRef.current) return;
    const allImgs = product.images || [product.featuredImg];

    // Set main image attributes
    if (mainImgRef.current) {
      const mainImg = mainImgRef.current;
      mainImg.setAttribute("data-strk-img-id", `product-${product.id}-main-${activeImage}`);
      mainImg.setAttribute("data-strk-img", allImgs[activeImage] || product.featuredImg);
      mainImg.setAttribute("data-strk-img-ratio", "3x4");
      mainImg.setAttribute("data-strk-img-width", "800");
    }

    // Set thumbnail attributes
    thumbRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.setAttribute("data-strk-img-id", `product-${product.id}-thumb-${idx}`);
        ref.setAttribute("data-strk-img", allImgs[idx]);
        ref.setAttribute("data-strk-img-ratio", "3x4");
        ref.setAttribute("data-strk-img-width", "200");
      }
    });

    const mergedConfig = { ...strkImgConfig, ...productImgConfig };
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(mergedConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(raf);
  }, [product, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-parchment pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-ink">Product Not Found</h1>
          <Link to="/shop" className="text-gold text-sm mt-4 inline-block underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const allImages = product.images || [product.featuredImg];
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedTone);
    }
  };

  return (
    <div className="min-h-screen bg-parchment pt-20 md:pt-24" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-site mx-auto px-4 md:px-8 py-4">
        <nav className="text-xs text-warm-gray font-sans flex items-center gap-2">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Product layout */}
      <div className="max-w-site mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-sand overflow-hidden mb-3">
              <img
                ref={mainImgRef}
                className="w-full h-full object-cover"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt={product.name}
              />
            </div>
            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "w-16 h-20 md:w-20 md:h-24 bg-sand overflow-hidden border-2 transition-colors",
                      activeImage === idx ? "border-gold" : "border-transparent hover:border-cream"
                    )}
                  >
                    <img
                      ref={(el) => { thumbRefs.current[idx] = el; }}
                      className="w-full h-full object-cover"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt={`${product.name} thumbnail ${idx + 1}`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="md:sticky md:top-28 self-start">
            <h1 className="font-serif text-2xl md:text-3xl text-ink tracking-product uppercase leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <p className="font-serif text-2xl text-ink font-medium">
                ${product.price}
              </p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={cn(
                      i < Math.round(product.rating)
                        ? "fill-gold text-gold"
                        : "text-cream"
                    )}
                  />
                ))}
                <span className="text-xs text-warm-gray ml-1">
                  ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-warm-gray leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Tone selector */}
            {product.tone && product.tone.length > 1 && (
              <div className="mt-6">
                <p className="text-xs font-sans font-medium text-ink uppercase tracking-wider mb-2">
                  Tone
                </p>
                <div className="flex gap-2">
                  {product.tone.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTone(t)}
                      className={cn(
                        "px-5 py-2 text-xs font-sans font-medium uppercase tracking-wider border transition-all duration-200",
                        selectedTone === t
                          ? "bg-gold text-ink border-gold"
                          : "bg-transparent text-slate border-cream hover:border-gold"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-sans font-medium text-ink uppercase tracking-wider mb-2">
                Quantity
              </p>
              <div className="inline-flex items-center border border-cream">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-slate hover:text-ink transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 text-sm font-medium text-ink border-x border-cream min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-slate hover:text-ink transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-6 bg-gold hover:bg-gold-hover text-ink font-sans font-semibold text-sm uppercase tracking-[0.15em] py-4 transition-colors duration-200"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.details}</p>
                <p className="mt-2">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl text-ink font-light tracking-wide-heading text-center mb-10">
            You May Also Like
          </h2>
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
