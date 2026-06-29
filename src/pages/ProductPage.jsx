import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-base tracking-[0.1em] uppercase text-velmora-cream">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-text-secondary" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-text-secondary" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-text-secondary leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedCard({ product }) {
  const { addItem } = useCart();
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-velmora-card overflow-hidden mb-3">
        <img
          data-strk-img-id={`bestseller-${product.id}-1`}
          data-strk-img={`[related-name-${product.id}] gold jewelry elegant`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span id={`related-name-${product.id}`} className="hidden">{product.name}</span>
      </div>
      <h4 className="font-serif text-sm tracking-[0.12em] uppercase text-velmora-cream group-hover:text-velmora-gold transition-colors">
        {product.name}
      </h4>
      <p className="text-velmora-gold text-sm mt-1">${product.price}</p>
    </Link>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [id, activeImage, selectedVariant]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-cream mb-4">Product not found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline text-sm uppercase tracking-wider">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <div className="py-5 flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-velmora-text-secondary hover:text-velmora-gold transition-colors text-xs uppercase tracking-wider">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
          <span className="text-velmora-muted text-xs mx-2">/</span>
          <Link to="/shop" className="text-velmora-text-secondary hover:text-velmora-gold transition-colors text-xs uppercase tracking-wider">
            Shop
          </Link>
          <span className="text-velmora-muted text-xs mx-2">/</span>
          <span className="text-velmora-text-secondary text-xs uppercase tracking-wider">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pb-16">
          {/* LEFT: Image Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-velmora-card overflow-hidden mb-4">
              <img
                data-strk-img-id={`bestseller-${product.id}-${activeImage === 2 ? 1 : activeImage + 1}`}
                data-strk-img={`[pdp-title] [pdp-variant] gold jewelry product photo elegant`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} - ${selectedVariant}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 1].map((imgIdx, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[3/4] bg-velmora-card overflow-hidden border-2 transition-colors ${
                    activeImage === i ? "border-velmora-gold" : "border-transparent hover:border-velmora-border"
                  }`}
                >
                  <img
                    data-strk-img-id={`bestseller-${product.id}-${imgIdx}`}
                    data-strk-img={`[pdp-title] gold jewelry angle ${i + 1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="lg:sticky lg:top-28 self-start">
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-velmora-gold/15 text-velmora-gold text-[10px] tracking-[0.2em] uppercase font-semibold mb-4">
                {product.badge}
              </span>
            )}

            <h1
              id="pdp-title"
              className="font-serif text-3xl md:text-4xl tracking-[0.08em] uppercase text-velmora-cream font-light leading-tight"
            >
              {product.name}
            </h1>

            <p id="pdp-variant" className="hidden">{selectedVariant}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? "fill-velmora-star text-velmora-star"
                        : "text-velmora-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-text-secondary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-gold mt-5 tracking-wide">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-velmora-text-secondary text-sm leading-relaxed mt-5 max-w-md">
              {product.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-velmora-border my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase text-velmora-text-secondary mb-3">
                Tone: <span className="text-velmora-cream font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-[0.1em] uppercase border transition-all duration-200 ${
                      selectedVariant === v
                        ? "bg-velmora-gold text-velmora-bg border-velmora-gold font-semibold"
                        : "border-velmora-border text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase text-velmora-text-secondary mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-border flex items-center justify-center text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-velmora-cream w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-border flex items-center justify-center text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-velmora-gold text-velmora-bg text-sm tracking-[0.2em] uppercase font-semibold hover:bg-velmora-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-velmora-gold/20"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <p><strong className="text-velmora-cream font-medium">Materials:</strong> {product.materials}</p>
                  <p><strong className="text-velmora-cream font-medium">Care:</strong> {product.care}</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-velmora-border py-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-cream font-light">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {related.map((p) => (
              <RelatedCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
