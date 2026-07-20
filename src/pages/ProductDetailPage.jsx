import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { getProductBySlug, products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? "fill-gold text-gold" : "text-stone-light"}`}
          />
        ))}
      </div>
      <span className="font-inter text-xs text-stone">
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-light/40">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-[0.15em] text-espresso">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm font-light text-stone leading-relaxed">
            {children}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
      setAdded(false);
    }
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory pt-32 flex flex-col items-center justify-center gap-4">
        <p className="font-cormorant text-2xl text-stone">Product not found</p>
        <Link to="/shop" className="font-inter text-xs uppercase tracking-[0.15em] text-gold border-b border-gold pb-0.5">
          Back to Shop
        </Link>
      </div>
    );
  }

  const galleryImages = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgId2, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `${product.imgId}-3`, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-4`, query: `[${product.titleId}] gold jewelry lifestyle` },
  ];

  const related = products.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.tags.some((t) => product.tags.includes(t)))
  ).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-inter text-xs text-stone hover:text-espresso transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
          <span className="text-stone-light/50 text-xs">/</span>
          <Link to="/shop" className="font-inter text-xs text-stone hover:text-espresso transition-colors">
            Shop
          </Link>
          <span className="text-stone-light/50 text-xs">/</span>
          <span className="font-inter text-xs text-espresso">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border transition-colors ${
                    activeImg === i ? "border-espresso" : "border-stone-light/30 hover:border-stone"
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-ivory-dark">
              <img
                data-strk-img-id={`main-${galleryImages[activeImg].id}`}
                data-strk-img={galleryImages[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-espresso leading-tight mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center justify-between mb-5">
              <StarRating rating={product.rating} count={product.reviewCount} />
              <span className="font-cormorant text-2xl text-espresso">${product.price}</span>
            </div>

            <p
              id={product.descId}
              className="font-inter text-sm font-light text-stone leading-relaxed mb-8 border-b border-stone-light/30 pb-8"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-[0.15em] text-espresso mb-3">
                Finish: <span className="text-stone font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-stone-light text-stone hover:border-espresso hover:text-espresso"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-xs uppercase tracking-[0.15em] text-espresso mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-stone-light w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-stone hover:text-espresso transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-inter text-sm text-espresso w-10 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-stone hover:text-espresso transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-inter text-xs uppercase tracking-[0.2em] py-4 transition-colors duration-300 ${
                added
                  ? "bg-espresso-light text-ivory"
                  : "bg-espresso text-ivory hover:bg-espresso-light"
              }`}
            >
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>

            <p className="font-inter text-xs text-stone/60 text-center mt-3">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-stone-light/40">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} To care for your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Estimated delivery 3–7 business days. Returns accepted within 30 days of delivery for unworn items in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="bg-ivory-dark py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="mb-10">
              <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
                You May Also Like
              </p>
              <h2 className="font-cormorant text-3xl font-light text-espresso">
                Complete the Look
              </h2>
            </div>
            <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
