import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, ShoppingBag, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Bestsellers from "@/components/home/Bestsellers";

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            className={s <= Math.round(rating) ? "fill-velmora-gold text-velmora-gold" : "text-velmora-sand"}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-velmora-text-muted">
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-sand">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-velmora-text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5 font-manrope text-sm text-velmora-text-mid leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const [selectedTone, setSelectedTone] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const product = products.find((p) => p.slug === slug) || products[0];
  const related = products.filter((p) => p.id !== product.id).slice(0, 5);

  useEffect(() => {
    setSelectedTone(product.tone[0]);
    setActiveImg(0);
    setAdded(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.img2Id, query: `[${product.titleId}] gold jewelry worn on model editorial` },
    { id: `${product.imgId}-3`, query: `[${product.titleId}] jewelry detail close up texture` },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <Link
          to="/shop"
          className="flex items-center gap-2 font-manrope text-xs tracking-widest-sm uppercase text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200"
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? "border-velmora-gold" : "border-transparent"
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
            <div className="flex-1 relative overflow-hidden bg-velmora-linen aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-velmora-gold text-velmora-obsidian font-manrope text-[10px] tracking-widest-sm uppercase px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
              {product.category}
            </p>

            <h1
              id={product.titleId}
              className="font-cormorant text-3xl lg:text-4xl uppercase tracking-widest-sm text-velmora-obsidian font-medium mb-3 leading-tight"
            >
              {product.name}
            </h1>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="mt-4 mb-6">
              <span className="font-cormorant text-3xl text-velmora-obsidian font-medium">
                ${product.price}
              </span>
            </div>

            <p
              id={product.descId}
              className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-8"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            {product.tone.length > 1 && (
              <div className="mb-6">
                <p className="font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid mb-3">
                  Tone: <span className="text-velmora-obsidian capitalize">{selectedTone}</span>
                </p>
                <div className="flex gap-2">
                  {product.tone.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTone(t)}
                      className={`font-manrope text-xs tracking-widest-sm uppercase px-5 py-2.5 border transition-all duration-200 capitalize ${
                        selectedTone === t
                          ? "border-velmora-obsidian bg-velmora-obsidian text-velmora-text-light"
                          : "border-velmora-sand text-velmora-text-mid hover:border-velmora-obsidian"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="w-10 text-center font-manrope text-sm text-velmora-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-manrope text-xs tracking-widest-md uppercase py-4 transition-all duration-300 ${
                added
                  ? "bg-velmora-gold-muted text-velmora-text-light"
                  : "bg-velmora-obsidian text-velmora-text-light hover:bg-velmora-stone"
              }`}
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              {added ? "Added to Cart" : "Add to Cart"}
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {["Free Shipping", "30-Day Returns", "Hypoallergenic"].map((t) => (
                <span key={t} className="font-manrope text-[10px] tracking-widest-sm uppercase text-velmora-text-muted border border-velmora-sand px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-velmora-gold mt-1">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-velmora-sand" />

      {/* Related products */}
      <Bestsellers products={related} />
    </div>
  );
}
