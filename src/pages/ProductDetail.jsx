import { useState, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useImageLoader } from "@/hooks/useImageLoader";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { Accordion } from "@/components/ui/Accordion";
import { RelatedProducts } from "@/components/RelatedProducts";
import { cn, formatPrice } from "@/lib/utils";

export function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const containerRef = useRef(null);
  useImageLoader(containerRef, [slug]);

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl text-espresso">Product Not Found</h1>
        <Button className="mt-6" onClick={() => navigate("/shop")}>
          Back to Shop
        </Button>
      </div>
    );
  }

  const galleryImages = [product.imageQuery, product.hoverQuery, product.imageQuery];
  const related = getRelatedProducts(product.id, 4);

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: product.materialsCare },
    { title: "Shipping & Returns", content: product.shippingReturns },
  ];

  const handleAddToCart = () => {
    addToCart(product, selectedColor, quantity);
  };

  return (
    <div ref={containerRef}>
      <section className="bg-cream pb-16 pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-warm-gray transition-colors hover:text-gold focus-visible:outline-none"
          >
            <ChevronLeft size={14} /> Back
          </button>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
                <img
                  data-strk-img-id={`product-detail-${product.id}-${activeImage}`}
                  data-strk-img={`[product-detail-${product.id}-query] [product-detail-${product.id}-name]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveImage((i) => (i === 0 ? galleryImages.length - 1 : i - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-ivory/80 p-2 text-espresso transition-colors hover:bg-ivory focus-visible:outline-none md:hidden"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImage((i) => (i === galleryImages.length - 1 ? 0 : i + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-ivory/80 p-2 text-espresso transition-colors hover:bg-ivory focus-visible:outline-none md:hidden"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="hidden grid-cols-3 gap-4 md:grid">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "relative aspect-square overflow-hidden bg-parchment focus-visible:outline-none",
                      activeImage === idx ? "ring-2 ring-gold" : "opacity-70 hover:opacity-100"
                    )}
                  >
                    <img
                      data-strk-img-id={`product-thumb-${product.id}-${idx}`}
                      data-strk-img={`[product-detail-${product.id}-query] [product-detail-${product.id}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="300"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="lg:py-8">
              <div className="mb-2 flex items-center gap-3">
                {product.badge && (
                  <span className="bg-parchment px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-gold">
                    {product.badge}
                  </span>
                )}
                <span className="text-xs uppercase tracking-widest text-warm-gray">
                  {product.category}
                </span>
              </div>

              <h1
                id={`product-detail-${product.id}-name`}
                className="font-serif text-3xl uppercase tracking-widest text-espresso md:text-4xl"
              >
                {product.name}
              </h1>
              <span id={`product-detail-${product.id}-query`} className="sr-only">
                {product.imageQuery}
              </span>

              <div className="mt-3 flex items-center gap-3">
                <StarRating rating={product.rating} size={14} />
                <span className="text-xs text-warm-gray">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="mt-6 font-serif text-2xl text-espresso">
                {formatPrice(product.price)}
              </p>

              <p className="mt-6 leading-relaxed text-warm-gray">
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mt-8">
                <span className="mb-3 block text-xs uppercase tracking-widest text-espresso">
                  Color: {selectedColor}
                </span>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "rounded-full px-5 py-2 text-xs uppercase tracking-widest transition-all focus-visible:outline-none",
                        selectedColor === color
                          ? "bg-espresso text-ivory"
                          : "border border-stone-300 text-warm-gray hover:border-espresso hover:text-espresso"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <QuantitySelector value={quantity} onChange={setQuantity} />
                <Button fullWidth className="sm:flex-1" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="flex h-12 w-12 shrink-0 items-center justify-center border border-stone-300 text-warm-gray transition-colors hover:border-espresso hover:text-espresso focus-visible:outline-none"
                >
                  <Heart size={18} />
                </button>
              </div>

              <div className="mt-10">
                <Accordion items={accordionItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={related} />
    </div>
  );
}

export default ProductDetail;
