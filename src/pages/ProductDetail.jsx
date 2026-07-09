import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/product/ProductCard";
import ProductGallery from "@/components/product/ProductGallery";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-espresso">{title}</span>
        {open ? <ChevronUp size={14} className="text-stone" /> : <ChevronDown size={14} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-charcoal leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductById(slug);
  const related = getRelatedProducts(product);
  const { addItem } = useCart();

  // Gallery state — ProductGallery renders all images with static IDs
  const [activeImg, setActiveImg] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || "Gold Tone");
  const [qty, setQty] = useState(1);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
      if (relatedRef.current) ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-stone mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-espresso border-b border-espresso pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty);
  };

  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-[11px] text-stone hover:text-gold transition-colors">Home</Link>
          <span className="text-border text-xs">/</span>
          <Link to="/shop" className="font-sans text-[11px] text-stone hover:text-gold transition-colors">Shop</Link>
          <span className="text-border text-xs">/</span>
          <span className="font-sans text-[11px] text-espresso">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery — static IDs via ProductGallery */}
          <ProductGallery
            productId={product.id}
            activeImg={activeImg}
            onThumbClick={setActiveImg}
            productName={product.name}
          />

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Badge */}
            {product.badge && (
              <span className="font-sans text-[10px] tracking-widest uppercase bg-espresso text-cream px-2.5 py-1 self-start mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl tracking-widest uppercase font-light text-espresso mb-2 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-border fill-border"}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-light text-espresso mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-charcoal leading-relaxed mb-7 border-b border-border pb-7"
            >
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[11px] tracking-widest uppercase text-stone mb-3">
                Finish: <span className="text-espresso">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wide px-4 py-2 border transition-colors ${
                      selectedVariant === v
                        ? "border-espresso bg-espresso text-cream"
                        : "border-border text-charcoal hover:border-espresso"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[11px] tracking-widest uppercase text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-espresso">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-espresso text-cream font-sans text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-3 hover:bg-gold transition-colors duration-300 mb-3"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              Add to Cart — ${(product.price * qty).toFixed(2)}
            </button>

            <button className="w-full border border-border text-stone font-sans text-xs tracking-widest uppercase py-3.5 hover:border-espresso hover:text-espresso transition-colors duration-300 mb-8">
              Add to Wishlist
            </button>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} To care for your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Delivered in 3–7 business days. Returns accepted within 30 days of delivery — unworn items only. See our full returns policy for details.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-parchment py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-10">
              You May Also Like
            </h2>
            <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
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
