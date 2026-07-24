import { useEffect, useRef, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/ui/StarRating";
import AccentButton from "@/components/ui/AccentButton";
import Accordion from "@/components/product/Accordion";
import RelatedProducts from "@/components/product/RelatedProducts";
import { Minus, Plus, Check } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [id, selectedImage]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const titleId = `product-${product.id}-title`;
  const allImages = [product.images.primary, ...product.images.gallery];
  const related = getRelatedProducts(product.id);

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "We offer free worldwide shipping on all orders over $50. Orders are processed within 1–2 business days and delivered in 5–10 business days depending on your location. Not completely in love? Returns and exchanges are accepted within 30 days of delivery.",
    },
  ];

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-background pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-[#EDEAE4] overflow-hidden">
              <img
                key={selectedImage}
                data-strk-img-id={`product-gallery-${product.id}-${selectedImage}`}
                data-strk-img={`[${titleId}] ${allImages[selectedImage]}`.trim()}
                data-strk-img-ratio="4x5"
                data-strk-img-width={900}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-[#EDEAE4] overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-accent" : "border-transparent"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${index}`}
                    data-strk-img={`[${titleId}] ${img}`.trim()}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width={200}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-28 self-start">
            <nav className="text-xs text-muted mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
              <span className="mx-2">/</span>
              <span className="capitalize text-foreground">{product.category}</span>
            </nav>

            <h1
              id={titleId}
              className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase text-foreground"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-4 text-2xl font-serif text-foreground">${product.price}</p>

            <p className="mt-6 text-muted leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <span className="text-xs tracking-widest uppercase text-muted block mb-3">
                Metal Tone
              </span>
              <div className="flex gap-3">
                {["Gold", "Silver"].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setVariant(tone)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-all ${
                      variant === tone
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs tracking-widest uppercase text-muted block mb-3">
                Quantity
              </span>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-border transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-border transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <AccentButton
                variant="solid"
                className="w-full py-4"
                onClick={handleAddToCart}
              >
                {added ? (
                  <span className="inline-flex items-center gap-2">
                    <Check size={16} /> Added to Bag
                  </span>
                ) : (
                  `Add to Bag — $${(product.price * quantity).toFixed(2)}`
                )}
              </AccentButton>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts products={related} />
    </div>
  );
}
