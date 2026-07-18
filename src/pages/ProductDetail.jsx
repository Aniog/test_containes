import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ChevronLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { Accordion } from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-hairline">
      <div className="mb-10">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">You May Also Like</p>
        <h2 className="font-serif text-3xl font-light text-ink">Complete the Look</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group">
            <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-3">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-${product.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 id={`related-${product.titleId}`} className="font-serif text-sm tracking-wider uppercase text-ink group-hover:text-gold transition-colors duration-200 mb-1">
              {product.name}
            </h3>
            <p className="font-sans text-sm font-medium text-ink">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.slug === slug) || products[0];

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    setAdded(false);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    {
      title: "Description",
      content: product.description,
    },
    {
      title: "Materials & Care",
      content: `${product.materials} — ${product.care}`,
    },
    {
      title: "Shipping & Returns",
      content: product.shipping,
    },
  ];

  const images = [
    { id: product.imgId, label: "Main" },
    { id: product.img2Id, label: "Alt" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-sans text-xs text-stone-warm hover:text-gold transition-colors">Home</Link>
          <span className="text-stone-warm text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-stone-warm hover:text-gold transition-colors">Shop</Link>
          <span className="text-stone-warm text-xs">/</span>
          <span className="font-sans text-xs text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-all duration-200",
                    activeImg === i ? "border-ink" : "border-hairline hover:border-taupe"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${product.titleId}] gold jewelry detail`}
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
            <div className="flex-1 relative overflow-hidden bg-parchment aspect-[3/4]">
              <img
                data-strk-img-id={activeImg === 0 ? product.imgId : product.img2Id}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <Badge variant={product.badge === "New" ? "dark" : "gold"}>{product.badge}</Badge>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <h1
                id={product.titleId}
                className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-ink mb-2 leading-tight"
              >
                {product.name}
              </h1>
              <p id={product.descId} className="font-sans text-xs text-stone-warm mb-3">
                {product.shortDescription}
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-2xl font-light text-ink">${product.price}</span>
                <StarRating rating={product.rating} count={product.reviewCount} size="md" />
              </div>
              <div className="w-8 h-px bg-gold" />
            </div>

            {/* Short description */}
            <p className="font-sans text-sm text-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-3">
                  Finish: <span className="text-ink">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={cn(
                        "px-4 py-2 font-sans text-xs tracking-wider border transition-all duration-200",
                        selectedVariant === v
                          ? "border-ink bg-ink text-cream"
                          : "border-hairline text-taupe hover:border-ink hover:text-ink"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-3">Quantity</p>
              <div className="flex items-center border border-hairline w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              variant="gold"
              onClick={handleAddToCart}
              className="w-full justify-center py-4 text-sm mb-3"
            >
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </Button>
            <Button variant="secondary" className="w-full justify-center py-4 text-sm">
              Add to Wishlist
            </Button>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-hairline">
              <div className="flex items-center gap-1.5">
                <span className="text-gold text-xs">✦</span>
                <span className="font-sans text-xs text-stone-warm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-gold text-xs">✦</span>
                <span className="font-sans text-xs text-stone-warm">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-gold text-xs">✦</span>
                <span className="font-sans text-xs text-stone-warm">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}
