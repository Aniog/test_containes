import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ui/ProductCard";

const accordionData = (product) => [
  {
    id: "description",
    title: "Description",
    content: product.description,
  },
  {
    id: "materials",
    title: "Materials & Care",
    content: product.materials,
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    content: product.shipping,
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || "Gold Tone"
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-espresso font-light mb-4">
            Product not found
          </p>
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { imgId: product.imgId, imgId2: product.imgId2 },
    { imgId: product.imgId2, imgId2: product.imgId },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const accordions = accordionData(product);

  return (
    <div className="bg-ivory min-h-screen pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-warm-gray hover:text-espresso transition-colors duration-200"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back
        </button>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-cream" style={{ aspectRatio: "3/4" }}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={activeImage === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[9px] uppercase tracking-widest bg-gold text-espresso px-2.5 py-1">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {[product.imgId, product.imgId2].map((imgId, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    activeImage === i
                      ? "ring-1 ring-espresso"
                      : "ring-1 ring-warm-gray-light opacity-60 hover:opacity-100"
                  }`}
                  style={{ width: 72, height: 96 }}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`${imgId}-thumb-${i}`}
                    data-strk-img={`[${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    alt={`${product.name} view ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <span id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] text-espresso block mb-2 font-light">
                {product.name}
              </span>
              <span id={product.descId} className="font-sans text-sm text-warm-gray block mb-4">
                {product.subtitle}
              </span>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={i < Math.floor(product.rating) ? "#C9A96E" : "none"}
                      stroke={i < Math.floor(product.rating) ? "none" : "#C9A96E"}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-warm-gray">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <span className="font-sans text-2xl text-espresso font-medium">
                ${product.price}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-warm-gray-light mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[10px] uppercase tracking-widest text-warm-gray mb-3">
                Finish: <span className="text-espresso">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`font-sans text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === variant
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-warm-gray-light text-warm-gray hover:border-espresso hover:text-espresso"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[10px] uppercase tracking-widest text-warm-gray mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-warm-gray-light w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-espresso transition-colors duration-200 font-sans text-lg"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-espresso border-x border-warm-gray-light">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-espresso transition-colors duration-200 font-sans text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-sans text-xs uppercase tracking-widest py-4 transition-all duration-200 font-medium ${
                addedToCart
                  ? "bg-espresso text-ivory"
                  : "bg-gold text-espresso hover:bg-gold-dark"
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {addedToCart ? "Added to Bag ✓" : "Add to Bag"}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap gap-4">
              {["Free Shipping", "30-Day Returns", "Hypoallergenic"].map((t) => (
                <span key={t} className="font-sans text-[10px] uppercase tracking-widest text-warm-gray">
                  ✦ {t}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-warm-gray-light mt-8 mb-0" />

            {/* Accordions */}
            <div>
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-warm-gray-light">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs uppercase tracking-widest text-espresso">
                      {acc.title}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp size={14} strokeWidth={1.5} className="text-warm-gray flex-shrink-0" />
                    ) : (
                      <ChevronDown size={14} strokeWidth={1.5} className="text-warm-gray flex-shrink-0" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-5">
                      <p className="font-sans text-sm text-warm-gray leading-relaxed">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-warm-gray-light bg-ivory-dark py-16 md:py-20" ref={relatedRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
              You May Also Like
            </p>
            <h2 className="font-serif text-3xl text-espresso font-light">
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
