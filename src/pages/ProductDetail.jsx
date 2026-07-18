import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import StarRating from "@/components/ui/StarRating";
import ProductCard from "@/components/home/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]?.id || "");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-text-primary mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-gold uppercase tracking-widest-xl hover:text-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordionItems = [
    {
      title: "Description",
      content: product.fullDescription,
    },
    {
      title: "Materials & Care",
      content: `${product.materials}\n\n${product.careInstructions}`,
    },
    {
      title: "Shipping & Returns",
      content: "Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout. We offer a 30-day return policy for all unworn items in their original packaging. Contact our support team for any return inquiries.",
    },
  ];

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 animate-fade-in">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-text-tertiary">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-text-secondary">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-surface-alt rounded-sm overflow-hidden mb-4">
              <img
                alt={product.images[activeImage]?.alt}
                data-strk-img-id={`${product.images[activeImage]?.alt.replace(/\s+/g, "-").toLowerCase()}-pdp-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}] ${product.images[activeImage]?.query}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-200",
                    activeImage === index ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    alt={image.alt}
                    data-strk-img-id={`${image.alt.replace(/\s+/g, "-").toLowerCase()}-pdp-thumb-${index}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] ${image.query}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover bg-surface-alt"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs text-text-tertiary hover:text-gold transition-colors uppercase tracking-widest-xl mb-6"
            >
              <ArrowLeft size={14} />
              Back to Shop
            </Link>

            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest-xl text-text-primary mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={Math.round(product.rating)} size={14} />
              <span className="text-sm text-text-tertiary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-2xl font-medium text-text-primary mb-6">
              {formatPrice(product.price)}
            </p>

            <p
              id={product.descId}
              className="text-sm text-text-secondary leading-relaxed mb-8"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest-xl text-text-secondary mb-3">
                Tone: {product.variants.find((v) => v.id === selectedVariant)?.label}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={cn(
                      "px-5 py-2.5 text-sm border transition-all duration-200",
                      selectedVariant === variant.id
                        ? "border-gold bg-gold text-white"
                        : "border-border text-text-secondary hover:border-gold hover:text-gold"
                    )}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest-xl text-text-secondary mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm text-text-primary border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button variant="primary" size="full" onClick={handleAddToCart}>
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-text-primary text-center mb-3">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
