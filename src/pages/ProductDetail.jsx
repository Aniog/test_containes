import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ArrowLeft, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            style={s <= Math.round(rating) ? { color: "#C9A96E", fill: "#C9A96E" } : { color: "#B5A898" }}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="text-xs font-sans text-taupe">
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-taupe-light/25">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans uppercase tracking-widest font-semibold text-obsidian">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-taupe transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <div className="text-sm font-sans text-taupe leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find((p) => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || "Gold Tone"
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-taupe mb-4">Product not found</p>
          <Link to="/shop" className="text-xs uppercase tracking-widest font-sans text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.tags.includes("bestseller"))
  ).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-widest text-taupe-light">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-taupe">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative aspect-square overflow-hidden bg-ivory-dark">
              <img
                data-strk-img-id={`pdp-main-${product.imgId}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tags.includes("bestseller") && (
                <span className="absolute top-4 left-4 bg-gold text-obsidian text-[9px] uppercase tracking-widest font-sans font-bold px-2.5 py-1">
                  Bestseller
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[product.imgId, product.img2Id, `${product.imgId}-alt3`, `${product.imgId}-alt4`].map((imgId, i) => (
                <div key={i} className="aspect-square overflow-hidden bg-ivory-dark cursor-pointer border-2 border-transparent hover:border-gold transition-colors duration-300">
                  <img
                    data-strk-img-id={`pdp-thumb-${imgId}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-4">
              <h1
                id={`pdp-title-${product.id}`}
                className="font-serif text-2xl md:text-3xl uppercase tracking-widest2 text-obsidian font-light mb-3 leading-tight"
              >
                {product.name}
              </h1>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="hairline my-4" />

            <p className="font-serif text-3xl font-light text-obsidian mb-1">
              ${product.price}
            </p>
            <p className="text-xs font-sans text-taupe-light mb-6">
              Free shipping on orders over $50
            </p>

            {/* Short desc */}
            <p
              id={`pdp-desc-${product.id}`}
              className="text-sm font-sans text-taupe leading-relaxed mb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs font-sans uppercase tracking-widest text-obsidian font-semibold mb-3">
                  Finish: <span className="text-taupe font-normal normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 text-xs font-sans uppercase tracking-widest border transition-all duration-300 ${
                        selectedVariant === v
                          ? "border-obsidian bg-obsidian text-ivory"
                          : "border-taupe-light/40 text-taupe hover:border-obsidian hover:text-obsidian"
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
              <p className="text-xs font-sans uppercase tracking-widest text-obsidian font-semibold mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-taupe-light/40 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-sans font-medium text-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs uppercase tracking-widest font-sans font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                added
                  ? "bg-obsidian-light text-ivory"
                  : "bg-obsidian text-ivory hover:bg-gold hover:text-obsidian"
              }`}
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap gap-4">
              {["Free Returns", "Hypoallergenic", "Gift Wrapping Available"].map((t) => (
                <span key={t} className="text-[10px] font-sans uppercase tracking-widest text-taupe-light flex items-center gap-1">
                  <span className="text-gold">✦</span> {t}
                </span>
              ))}
            </div>

            <div className="hairline my-6" />

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-obsidian font-semibold">Material:</strong> {product.material}</p>
                <p className="mb-2">To keep your Velmora piece looking its best:</p>
                <ul className="list-disc list-inside space-y-1 text-taupe">
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Clean gently with a soft, dry cloth</li>
                  <li>Remove before swimming or exercising</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders over $50. Standard delivery 5–7 business days.</p>
                <p>We offer hassle-free 30-day returns on all unworn items in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      {related.length > 0 && (
        <div className="bg-ivory-dark py-16 md:py-20 px-4 md:px-8 mt-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-obsidian mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden bg-ivory mb-3">
                    <img
                      data-strk-img-id={`related-${p.imgId}`}
                      data-strk-img={`[related-title-${p.id}] gold jewelry`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    id={`related-title-${p.id}`}
                    className="font-serif text-sm uppercase tracking-widest text-obsidian group-hover:text-gold transition-colors duration-300 mb-1"
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm font-sans font-medium text-obsidian">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
