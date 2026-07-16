import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, ShoppingBag, ChevronDown, ChevronLeft, Minus, Plus, Heart } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/shop/ProductCard";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone-light">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-espresso">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-stone transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <div className="font-inter text-sm text-stone leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductById(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || "Gold Tone");
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || "Gold Tone");
      setQuantity(1);
      setActiveImg(0);
    }
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl font-light text-espresso mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { imgId: `pdp-main-${product.id}-a1`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { imgId: `pdp-alt1-${product.id}-b2`, query: `[pdp-title-${product.id}] gold jewelry worn model close up` },
    { imgId: `pdp-alt2-${product.id}-c3`, query: `[pdp-title-${product.id}] gold jewelry detail texture` },
    { imgId: `pdp-alt3-${product.id}-d4`, query: `[pdp-title-${product.id}] gold jewelry flat lay` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 font-inter text-xs text-stone hover:text-espresso transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back
          </button>
          <span className="text-stone-light">/</span>
          <Link to="/shop" className="font-inter text-xs text-stone hover:text-espresso transition-colors">
            Shop
          </Link>
          <span className="text-stone-light">/</span>
          <span className="font-inter text-xs text-espresso uppercase tracking-wider">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? "border-espresso" : "border-transparent"
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-square md:aspect-[3/4] overflow-hidden bg-ivory-dark relative">
              {images.map((img, i) => (
                <img
                  key={i}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={img.imgId}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Hidden text for image queries */}
              <span id={`pdp-title-${product.id}`} className="sr-only">{product.name} gold jewelry</span>
              <span id={`pdp-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes("bestseller") && (
                <span className="font-inter text-[9px] uppercase tracking-widest bg-gold text-espresso px-2 py-0.5">
                  Bestseller
                </span>
              )}
              {product.tags?.includes("new") && (
                <span className="font-inter text-[9px] uppercase tracking-widest bg-espresso text-ivory px-2 py-0.5">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest font-medium text-espresso leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-stone-light"
                    }`}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-espresso mb-5">${product.price}</p>

            {/* Short description */}
            <p className="font-inter text-sm text-stone leading-relaxed mb-8 border-b border-stone-light pb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-espresso mb-3">
                Finish: <span className="text-stone normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs uppercase tracking-wider px-4 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-stone-light text-espresso hover:border-espresso"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-espresso mb-3">Quantity</p>
              <div className="flex items-center border border-stone-light w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-inter text-sm text-espresso">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-espresso text-ivory font-inter text-xs uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-espresso-light transition-colors duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
              <button
                className="w-12 h-12 border border-stone-light flex items-center justify-center text-stone hover:text-gold hover:border-gold transition-colors duration-300"
                aria-label="Save to wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-stone-light">
              {["Free Worldwide Shipping", "30-Day Returns", "Hypoallergenic"].map((t) => (
                <span key={t} className="font-inter text-xs text-stone flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-espresso">Materials:</strong> {product.materials}</p>
                <p><strong className="text-espresso">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28 pt-12 border-t border-stone-light">
            <div className="text-center mb-10">
              <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">Complete the Look</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
