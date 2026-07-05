import { useState, useMemo, useEffect, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, Check, ArrowLeft } from "lucide-react";
import { getProductById, getRelatedProducts, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";
import Accordion from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => getProductById(id), [id]);
  const related = useMemo(() => getRelatedProducts(id), [id]);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product ? product.variants.find((v) => v.inStock)?.name || "" : ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (product) {
      setSelectedVariant(product.variants.find((v) => v.inStock)?.name || "");
      setSelectedImage(0);
      setQuantity(1);
      setAdded(false);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="pt-32 text-center bg-ivory min-h-screen">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: product.materials },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders over $50. Standard delivery arrives within 5–10 business days. Enjoy 30-day hassle-free returns on unworn pieces in original packaging.",
    },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 bg-ivory min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <Link
          to="/shop"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-taupe hover:text-espresso transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] bg-stone-100 overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "w-20 h-24 flex-shrink-0 overflow-hidden border-2 transition-colors",
                    selectedImage === index
                      ? "border-espresso"
                      : "border-transparent"
                  )}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-6">
            {product.badge && (
              <span className="text-xs uppercase tracking-[0.2em] text-accent mb-3 block">
                {product.badge}
              </span>
            )}
            <h1 className="product-name text-3xl md:text-4xl mb-3">
              {product.name}
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-espresso mb-4">
              {formatPrice(product.price)}
            </p>
            <div className="mb-6">
              <StarRating
                rating={product.rating}
                count={product.reviewCount}
              />
            </div>
            <p className="text-taupe leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-taupe block mb-3">
                Metal Tone
              </span>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.name}
                    type="button"
                    disabled={!variant.inStock}
                    onClick={() => setSelectedVariant(variant.name)}
                    className={cn(
                      "px-5 py-2.5 text-sm border transition-all",
                      selectedVariant === variant.name
                        ? "border-espresso bg-espresso text-cream"
                        : "border-stonehair text-espresso hover:border-espresso",
                      !variant.inStock && "opacity-40 cursor-not-allowed line-through"
                    )}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-taupe block mb-3">
                Quantity
              </span>
              <div className="flex items-center border border-stonehair w-fit">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={cn(
                "btn-primary w-full mb-4 transition-all",
                added && "bg-green-700 border-green-700"
              )}
            >
              {added ? (
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4" /> Added to Bag
                </span>
              ) : (
                "Add to Cart"
              )}
            </button>

            <div className="text-center mb-10">
              <p className="text-xs text-warmgray">
                Free shipping over $50 · 30-day returns
              </p>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-4xl tracking-tight mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
