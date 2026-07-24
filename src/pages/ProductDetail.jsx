import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";
import { ChevronDown, Check } from "lucide-react";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-stone">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm uppercase tracking-widest font-medium">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <div className="text-sm text-charcoal/80 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImage(0);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="pt-24 text-center">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Link to="/shop" className="text-sm text-champagne mt-2 inline-block">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="text-xs text-taupe mb-6 md:mb-8 tracking-wide">
          <Link to="/" className="hover:text-champagne transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-champagne transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.displayName}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-stone/30 overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-detail-${activeImage}`}
                data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] ${product.category} jewelry gold elegant detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.displayName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 mt-3">
              {Array.from({ length: product.images }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors ${
                    activeImage === i
                      ? "border-charcoal"
                      : "border-stone hover:border-taupe"
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${i}`}
                    data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] ${product.category} jewelry gold elegant`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.displayName} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <span id={`product-${product.id}-title`} className="sr-only">
              {product.displayName}
            </span>
            <span id={`product-${product.id}-desc`} className="sr-only">
              {product.description}
            </span>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="self-start bg-champagne/20 text-charcoal text-[10px] uppercase tracking-widest px-2.5 py-1 mb-3">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <StarRating rating={product.rating} />
              <span className="text-xs text-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-xl md:text-2xl font-medium mt-4">
              ${product.price}
            </p>
            <p className="text-sm text-charcoal/80 leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-taupe mb-2">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-200 ${
                      selectedVariant === v
                        ? "border-charcoal bg-charcoal text-ivory"
                        : "border-stone text-charcoal hover:border-charcoal"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {selectedVariant === v && <Check size={12} />}
                      {v}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-taupe mb-2">
                Quantity
              </p>
              <div className="flex items-center border border-stone w-fit">
                <button
                  className="px-3 py-2 hover:bg-stone/50 transition-colors text-sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-3 text-sm min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  className="px-3 py-2 hover:bg-stone/50 transition-colors text-sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="mt-8 w-full bg-champagne text-charcoal py-4 text-xs uppercase tracking-widest font-medium hover:bg-opacity-90 transition-colors"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            <div className="mt-6 text-xs text-taupe flex items-center gap-1.5">
              <Check size={12} className="text-champagne" />
              Free shipping on all orders
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
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

      {/* Related products */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-stone/30">
                <img
                  data-strk-img-id={`related-${p.id}`}
                  data-strk-img={`[related-${p.id}-desc] [related-${p.id}-title] ${p.category} jewelry gold elegant`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.displayName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span id={`related-${p.id}-title`} className="sr-only">
                {p.displayName}
              </span>
              <span id={`related-${p.id}-desc`} className="sr-only">
                {p.description}
              </span>
              <p className="font-serif text-xs tracking-widest uppercase mt-3">
                {p.name}
              </p>
              <p className="text-sm mt-0.5">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
