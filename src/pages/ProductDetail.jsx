import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingBag, ChevronLeft, Plus, Minus } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductAccordion from "@/components/product/ProductAccordion";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.id === slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0]?.value || "gold"
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Product not found</h2>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-[0.1em] text-accent hover:underline"
          >
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-content mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.1em] text-secondary hover:text-accent transition-colors mb-8"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        {/* Product */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] bg-light-accent overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "w-16 h-20 bg-light-accent overflow-hidden border-2 transition-colors",
                    selectedImage === idx
                      ? "border-accent"
                      : "border-transparent hover:border-border"
                  )}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block text-[10px] uppercase tracking-[0.1em] font-medium bg-accent/10 text-accent px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif uppercase tracking-[0.08em] text-primary">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(product.rating)
                        ? "fill-star text-star"
                        : "text-border"
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-secondary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-5">
              <span className="text-2xl font-serif text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-secondary line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-sm text-secondary leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <h4 className="text-[11px] uppercase tracking-[0.1em] font-medium text-secondary mb-3">
                Finish
              </h4>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => setSelectedVariant(v.value)}
                    className={cn(
                      "px-6 py-2.5 text-xs uppercase tracking-[0.08em] border transition-all duration-200",
                      selectedVariant === v.value
                        ? "border-primary bg-primary text-white"
                        : "border-border text-secondary hover:border-primary hover:text-primary"
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h4 className="text-[11px] uppercase tracking-[0.1em] font-medium text-secondary mb-3">
                Quantity
              </h4>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:bg-light-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-medium w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:bg-light-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={cn(
                "w-full py-4 text-xs uppercase tracking-[0.12em] font-medium transition-all duration-300 flex items-center justify-center gap-3 mt-8",
                added
                  ? "bg-accent text-white"
                  : "bg-primary text-white hover:bg-primary/90"
              )}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>

            {/* Accordion */}
            <div className="mt-10">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-24 pt-16 md:pt-20 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-primary text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group"
                >
                  <div className="aspect-[4/5] bg-light-accent overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-xs truncate">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}