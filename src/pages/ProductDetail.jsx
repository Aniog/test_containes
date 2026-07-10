import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ui/ProductCard";

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-warm-gray-light">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs tracking-widest uppercase text-espresso">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} className="text-warm-gray flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-warm-gray flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-warm-gray leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
};

const Stars = ({ rating, count }) => (
  <div className="flex items-center gap-2">
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          fill={i < Math.round(rating) ? "#C9A96E" : "none"}
          stroke={i < Math.round(rating) ? "none" : "#C9A96E"}
          strokeWidth={1.5}
        />
      ))}
    </div>
    <span className="font-inter text-xs text-warm-gray">
      {rating} ({count} reviews)
    </span>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] ?? null);
      setActiveImage(0);
      setAdded(false);
      setQuantity(1);
    }
  }, [id, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="bg-cream min-h-screen pt-32 flex flex-col items-center justify-center gap-4">
        <p className="font-cormorant text-3xl text-espresso">Product not found</p>
        <Link to="/shop" className="font-inter text-xs tracking-widest uppercase text-gold underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const allImages = product.images ?? [];

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-inter text-xs text-warm-gray hover:text-espresso transition-colors"
        >
          <ArrowLeft size={14} />
          Back
        </button>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {allImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border transition-colors duration-200 ${
                    activeImage === idx ? "border-gold" : "border-transparent"
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-warm-gray-pale" style={{ aspectRatio: "3/4" }}>
              <img
                data-strk-img-id={allImages[activeImage]?.id ?? product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-start pt-2">
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-2">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-espresso font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>

            <Stars rating={product.rating} count={product.reviewCount} />

            <p className="font-cormorant text-3xl text-espresso mt-4 mb-5">
              ${product.price}
            </p>

            <p className="font-inter text-sm text-warm-gray leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="font-inter text-xs tracking-widest uppercase text-espresso mb-3">
                  Finish: <span className="text-gold">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-inter text-xs tracking-wide px-5 py-2.5 border transition-colors duration-200 ${
                        selectedVariant === v
                          ? "border-gold bg-gold text-espresso"
                          : "border-warm-gray-light text-warm-gray hover:border-espresso hover:text-espresso"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-xs tracking-widest uppercase text-espresso mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-warm-gray-light w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-warm-gray hover:text-espresso transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="font-inter text-sm text-espresso w-10 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-warm-gray hover:text-espresso transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-inter text-xs tracking-widest uppercase py-4 transition-colors duration-300 ${
                added
                  ? "bg-gold-dark text-cream"
                  : "bg-espresso text-cream hover:bg-charcoal"
              }`}
            >
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-4">
              {["Free Worldwide Shipping", "30-Day Returns", "Hypoallergenic"].map((t) => (
                <span key={t} className="font-inter text-[10px] tracking-widest uppercase text-warm-gray">
                  · {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <AccordionItem title="Description">{product.description}</AccordionItem>
              <AccordionItem title="Materials & Care">
                {product.materials} {product.care}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">{product.shipping}</AccordionItem>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-warm-gray-light bg-warm-gray-pale py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl text-espresso font-light mb-8">
            You May Also Like
          </h2>
          <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
