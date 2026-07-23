import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/home/Footer";

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={12}
            className={s <= Math.round(rating) ? "fill-gold text-gold" : "text-divider fill-divider"}
          />
        ))}
      </div>
      <span className="text-xs font-sans text-stone">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans uppercase tracking-widest text-espresso">{title}</span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-stone flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-stone flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="text-sm font-sans text-charcoal leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-2">
            You May Also Like
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-espresso font-light">
            Complete Your Look
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p
                id={`related-${product.titleId}`}
                className="font-serif text-xs uppercase tracking-widest text-espresso group-hover:text-gold transition-colors"
              >
                {product.name}
              </p>
              <p className="text-xs font-sans text-stone mt-0.5">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState("Gold Tone");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setSelectedVariant("Gold Tone");
    setQuantity(1);
    setAdded(false);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-espresso mb-4">Product not found</p>
          <Link to="/shop" className="text-xs font-sans uppercase tracking-widest text-gold hover:text-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { imgId: product.imgId, label: "main" },
    { imgId: product.imgId2, label: "detail" },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-stone hover:text-espresso transition-colors"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back
        </button>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-parchment aspect-[4/5]">
              <img
                data-strk-img-id={`pdp-main-${images[activeImage].imgId}`}
                data-strk-img={`[pdp-${product.descId}] [pdp-${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tags.includes("bestseller") && (
                <div className="absolute top-4 left-4">
                  <span className="bg-espresso text-cream text-[9px] uppercase tracking-widest font-sans px-2 py-1">
                    Bestseller
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative overflow-hidden bg-parchment aspect-square w-16 md:w-20 flex-shrink-0 border-2 transition-colors ${
                    activeImage === i ? "border-gold" : "border-transparent"
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.imgId}-${i}`}
                    data-strk-img={`[pdp-${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={`pdp-${product.titleId}`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-espresso font-light mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <p className="font-serif text-3xl text-espresso mt-4 mb-6">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={`pdp-${product.descId}`}
              className="font-sans text-sm text-charcoal leading-relaxed mb-8 border-t border-divider pt-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-widest text-stone mb-3">
                Finish: <span className="text-espresso">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-sans uppercase tracking-widest border transition-colors ${
                      selectedVariant === v
                        ? "border-espresso bg-espresso text-cream"
                        : "border-divider text-charcoal hover:border-espresso"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-sans uppercase tracking-widest text-stone mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-parchment transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm font-sans text-espresso">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-parchment transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs uppercase tracking-widest font-sans transition-colors duration-300 ${
                added
                  ? "bg-gold text-espresso"
                  : "bg-espresso text-cream hover:bg-charcoal"
              }`}
            >
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {["Free Worldwide Shipping", "30-Day Returns", "Hypoallergenic"].map((t) => (
                <span key={t} className="text-[10px] font-sans uppercase tracking-widest text-stone flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-2">{product.materials}</span>
                <span>{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={id} />

      <Footer />
    </div>
  );
}
