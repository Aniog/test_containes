import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={12}
            strokeWidth={0}
            fill={s <= Math.round(rating) ? "#C9A96E" : "#E8E0D0"}
          />
        ))}
      </div>
      <span className="font-inter text-xs text-stone-warm">
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-espresso">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-stone-warm" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-stone-warm" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <div className="font-inter text-sm text-umber leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const product = products.find((p) => p.id === id) || products[0];
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] || "Gold Tone"
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();

  const images = [
    { id: `pdp-img-0-${product.id}`, imgId: product.imgId, titleId: product.titleId, descId: product.descId },
    { id: `pdp-img-1-${product.id}`, imgId: product.img2Id, titleId: product.titleId, descId: product.descId },
  ];

  useEffect(() => {
    setSelectedVariant(product.variants?.[0] || "Gold Tone");
    setQuantity(1);
    setActiveImg(0);
  }, [id, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    console.log("[PDP] Added to cart:", product.name, selectedVariant, quantity);
  };

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="flex items-center gap-1 font-inter text-xs text-stone-warm hover:text-gold transition-colors uppercase tracking-widest"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-linen">/</span>
          <span className="font-inter text-xs text-espresso uppercase tracking-widest">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? "border-gold" : "border-transparent"
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-parchment">
              <img
                data-strk-img-id={images[activeImg].imgId}
                data-strk-img={`[${images[activeImg].descId}] [${images[activeImg].titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Badge */}
            {product.badge && (
              <span className="self-start bg-gold-light text-umber font-inter text-[10px] uppercase tracking-widest px-2 py-0.5 mb-3">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-espresso font-light leading-tight"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-inter text-2xl font-light text-espresso mt-3">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="mt-2">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Divider */}
            <div className="border-t border-linen my-5" />

            {/* Short description */}
            <p
              id={product.descId}
              className="font-inter text-sm text-umber leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-6">
                <p className="font-inter text-xs uppercase tracking-widest text-espresso mb-3">
                  Finish:{" "}
                  <span className="text-stone-warm">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-inter text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${
                        selectedVariant === v
                          ? "border-espresso bg-espresso text-ivory"
                          : "border-linen text-espresso hover:border-espresso"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-5">
              <p className="font-inter text-xs uppercase tracking-widest text-espresso mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-espresso hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} strokeWidth={2} />
                </button>
                <span className="font-inter text-sm text-espresso w-10 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-espresso hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-gold text-white font-inter text-xs uppercase tracking-widest py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Material badge */}
            <div className="mt-4 flex items-center gap-2">
              <span className="bg-gold-light text-umber font-inter text-[10px] uppercase tracking-widest px-2 py-0.5">
                {product.material}
              </span>
              <span className="font-inter text-[10px] text-stone-warm uppercase tracking-wider">
                · Hypoallergenic
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>18K gold plating over 925 sterling silver</li>
                  <li>Hypoallergenic — safe for sensitive skin</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5–7 business days</li>
                  <li>Express delivery: 2–3 business days</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="border-t border-linen mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso mb-10">
            You May Also Like
          </h2>
          <div
            ref={relatedRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-parchment mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  id={`related-${p.id}-title`}
                  className="font-cormorant text-sm uppercase tracking-widest text-espresso group-hover:text-gold transition-colors"
                >
                  {p.name}
                </h3>
                <p
                  id={`related-${p.id}-desc`}
                  className="font-inter text-xs text-stone-warm mt-0.5"
                >
                  {p.shortDesc}
                </p>
                <p className="font-inter text-sm font-medium text-espresso mt-1">
                  ${p.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
