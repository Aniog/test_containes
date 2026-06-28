import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ui/ProductCard";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border-warm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-dark font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-stone-warm transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="font-inter text-sm text-stone-warm leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);

  const [selectedVariant, setSelectedVariant] = useState("Gold Tone");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-cormorant text-3xl text-dark">Product not found</p>
        <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5">
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

  const images = [
    { imgId: product.imgId, titleId: product.titleId, descId: product.descId, query: `[${product.descId}] [${product.titleId}] gold jewelry product` },
    { imgId: product.imgId2, titleId: product.titleId, descId: product.descId, query: `[${product.titleId}] gold jewelry worn model close up` },
    { imgId: `${product.imgId}-detail`, titleId: product.titleId, descId: product.descId, query: `[${product.titleId}] gold jewelry detail texture macro` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-border-warm">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-inter text-xs text-stone-warm hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>
          <span className="text-border-warm">/</span>
          <Link to="/shop" className="font-inter text-xs text-stone-warm hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-border-warm">/</span>
          <span className="font-inter text-xs text-dark">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-square bg-gold-pale overflow-hidden">
              {images.map((img, i) => (
                <img
                  key={img.imgId}
                  data-strk-img-id={img.imgId}
                  data-strk-img={img.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    activeImg === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-dark text-white font-inter text-[9px] uppercase tracking-widest px-2.5 py-1.5 z-10">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-20 bg-gold-pale overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    activeImg === i
                      ? "ring-1 ring-dark ring-offset-1"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Name & rating */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-gold mb-2">
                {product.category}
              </p>
              <h1
                id={product.titleId}
                className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-dark font-medium leading-tight mb-3"
              >
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? "fill-gold text-gold"
                          : "fill-border-warm text-border-warm"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-inter text-xs text-stone-warm">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-dark font-medium mb-6">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-inter text-sm text-stone-warm leading-relaxed mb-8 border-b border-border-warm pb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-dark mb-3">
                Finish:{" "}
                <span className="text-stone-warm normal-case tracking-normal">
                  {selectedVariant}
                </span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-inter text-xs uppercase tracking-widest transition-all duration-200 ${
                      selectedVariant === v
                        ? "bg-dark text-white"
                        : "border border-border-warm text-dark hover:border-dark"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-xs uppercase tracking-widest text-dark mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-border-warm w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 hover:bg-gold-pale transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5 text-dark" />
                </button>
                <span className="px-6 py-3 font-inter text-sm text-dark border-x border-border-warm min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 hover:bg-gold-pale transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5 text-dark" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-inter text-xs uppercase tracking-widest transition-colors duration-300 mb-3 ${
                added
                  ? "bg-gold text-white"
                  : "bg-dark text-white hover:bg-gold"
              }`}
            >
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>

            <button className="w-full py-4 border border-border-warm font-inter text-xs uppercase tracking-widest text-dark hover:border-dark transition-colors duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-8 pt-6 border-t border-border-warm space-y-2">
              {["Free worldwide shipping", "30-day returns", "Hypoallergenic & nickel-free"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-inter text-xs text-stone-warm">{item}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.details} {product.care}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-border-warm py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-dark mb-10">
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
