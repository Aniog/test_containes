import { useEffect, useRef, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { StarRating } from "@/components/ui/StarRating";
import { Accordion } from "@/components/ui/Accordion";
import { ProductCardById } from "@/components/ui/ProductCardById";
import { ProductGallery } from "@/components/product/ProductGallery";
import { Footer } from "@/components/Footer";
import { Minus, Plus, Check, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const toneOptions = [
  { value: "gold", label: "Gold" },
  { value: "silver", label: "Silver" },
];

export function ProductDetail() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [variant, setVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [productId]
  );

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-espresso mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold hover:underline">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    { title: "Shipping & Returns", content: product.shipping },
  ];

  const handleAdd = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone hover:text-espresso transition-colors mb-6 md:mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <ProductGallery productId={product.id} />

          {/* Details */}
          <div className="md:pt-8">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest-xl text-espresso mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={product.rating} size={14} />
              <span className="text-sm text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl md:text-3xl text-espresso mb-6">
              ${product.price}
            </p>

            <p className="text-base text-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-stone mb-3">Metal Tone</p>
              <div className="flex gap-3">
                {toneOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setVariant(option.value)}
                    className={cn(
                      "px-6 py-3 text-xs uppercase tracking-widest border transition-colors",
                      variant === option.value
                        ? "border-espresso bg-espresso text-cream"
                        : "border-taupe text-espresso hover:border-espresso"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-stone mb-3">Quantity</p>
              <div className="inline-flex items-center border border-taupe">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center text-espresso hover:bg-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-12 h-12 flex items-center justify-center text-espresso hover:bg-sand transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className={cn(
                "w-full flex items-center justify-center gap-2 py-4 uppercase text-xs tracking-[0.2em] transition-colors",
                added
                  ? "bg-espresso text-cream"
                  : "bg-gold text-white hover:bg-gold-dark"
              )}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Cart
                </>
              ) : (
                "Add to Cart — $" + (product.price * quantity).toFixed(2)
              )}
            </button>

            <p className="text-xs text-stone text-center mt-4">
              Free shipping on orders over $50. 30-day returns.
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-8 md:mb-12 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {product.id !== "vivid-aura-jewels" && (
              <ProductCardById productId="vivid-aura-jewels" />
            )}
            {product.id !== "majestic-flora-nectar" && (
              <ProductCardById productId="majestic-flora-nectar" />
            )}
            {product.id !== "golden-sphere-huggies" && (
              <ProductCardById productId="golden-sphere-huggies" />
            )}
            {product.id !== "amber-lace-earrings" && (
              <ProductCardById productId="amber-lace-earrings" />
            )}
            {product.id !== "royal-heirloom-set" && (
              <ProductCardById productId="royal-heirloom-set" />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
