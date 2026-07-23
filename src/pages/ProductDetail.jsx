import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById, getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/common/ProductCard";
import { useCart } from "@/context/CartContext";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-champagne">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velvet">{title}</span>
        {open ? (
          <ChevronUp size={14} className="text-driftwood flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-driftwood flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <div className="font-sans text-sm text-bark leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductById(slug);
  const related = getRelatedProducts(slug, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || "Gold Tone"
  );
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setQty(1);
    setSelectedVariant(product?.variants?.[0] || "Gold Tone");
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeImg]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="bg-parchment min-h-screen pt-32 flex flex-col items-center justify-center gap-4">
        <p className="font-serif text-2xl text-driftwood">Product not found</p>
        <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
          Back to Shop
        </Link>
      </div>
    );
  }

  // Build gallery images array
  const galleryImages = [
    { id: product.imgId, titleId: product.titleId, descId: product.descId, label: "main" },
    ...product.galleryImgIds.map((imgId, i) => ({
      id: imgId,
      titleId: product.titleId,
      descId: product.descId,
      label: `view-${i + 1}`,
    })),
  ];

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-driftwood">
          <Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors duration-300">Shop</Link>
          <span>/</span>
          <span className="text-velvet">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border transition-colors duration-300 ${
                    activeImg === i ? "border-gold" : "border-champagne hover:border-driftwood"
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-linen overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`main-${galleryImages[activeImg]?.id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Badge */}
            {product.badge && (
              <span className="self-start bg-velvet text-champagne font-sans text-[10px] tracking-widest uppercase px-2.5 py-1 mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <span id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-widest2 uppercase text-velvet leading-snug mb-2">
              {product.name}
            </span>
            <span id={product.descId} className="sr-only">{product.shortDesc}</span>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-champagne"}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-driftwood">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-light text-velvet mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="font-sans text-sm text-bark leading-relaxed mb-6">
              {product.shortDesc}
            </p>

            <hr className="hairline mb-6" />

            {/* Variant selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs tracking-widest uppercase text-velvet mb-3">
                  Finish: <span className="text-driftwood normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs px-4 py-2 border transition-colors duration-300 ${
                        selectedVariant === v
                          ? "border-gold bg-gold text-velvet"
                          : "border-champagne text-driftwood hover:border-velvet hover:text-velvet"
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
              <p className="font-sans text-xs tracking-widest uppercase text-velvet mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-champagne w-fit">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velvet hover:bg-linen transition-colors duration-300"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-velvet border-x border-champagne">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velvet hover:bg-linen transition-colors duration-300"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, qty)}
              className="w-full bg-gold hover:bg-gold-light text-velvet font-sans text-xs tracking-widest2 uppercase py-4 transition-colors duration-300 mb-3"
            >
              Add to Cart — ${(product.price * qty).toFixed(2)}
            </button>

            <button className="w-full border border-velvet text-velvet hover:bg-velvet hover:text-parchment font-sans text-xs tracking-widest2 uppercase py-3.5 transition-colors duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {["Free Shipping", "30-Day Returns", "Hypoallergenic"].map((t) => (
                <span key={t} className="font-sans text-[10px] tracking-widest uppercase text-driftwood flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
                <p>We accept returns within 30 days of delivery. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="bg-linen py-16 md:py-20 mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-velvet tracking-wide mb-10">
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
