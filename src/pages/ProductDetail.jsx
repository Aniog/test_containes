import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../lib/utils";
import { StarRating } from "../components/ui/StarRating";
import { Accordion } from "../components/ui/Accordion";
import { ProductCard } from "../components/home/ProductCard";
import { ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[var(--color-text-muted)] mb-4">Product not found.</p>
        <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    {
      title: "Description",
      content: product.longDescription,
    },
    {
      title: "Materials & Care",
      content: "Crafted from 18K gold-plated brass with hypoallergenic posts. To maintain the finish, avoid contact with water, lotions, and harsh chemicals. Store in the provided pouch when not in use. Polish gently with a soft cloth.",
    },
    {
      title: "Shipping & Returns",
      content: "Free worldwide shipping on all orders. Ships within 1-2 business days. Returns accepted within 30 days of delivery for unworn items in original packaging. Contact us for return authorization.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase mb-8 hover:text-[var(--color-accent)]">
        <ArrowLeft size={14} /> Back to Collection
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-gradient-to-br from-[#EDE7DC] to-[#D4C9B8] mb-3 flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-[var(--color-gold)]/50 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/30" />
              </div>
              <span className="text-xs text-[var(--color-text-muted)] tracking-[0.2em]">EDITORIAL VIEW</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square bg-gradient-to-br from-[#D4C9B8] to-[#C5B8A3] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="text-[10px] text-[var(--color-text-muted)] tracking-widest">VIEW {idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <h1 className="product-name text-3xl tracking-[0.1em] mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} size={14} />
              <span className="text-sm text-[var(--color-text-muted)]">({product.reviewCount})</span>
            </div>
          </div>

          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-3">Tone</div>
            <div className="flex gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`variant-pill ${selectedVariant?.id === variant.id ? "active" : ""}`}
                  disabled={!variant.available}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-3">Quantity</div>
            <div className="flex items-center border border-[var(--color-border)] w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="qty-btn border-r"
              >
                −
              </button>
              <span className="qty-input border-x-0 pointer-events-none">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="qty-btn border-l"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="btn btn-primary w-full mb-4"
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Sold Out"}
          </button>

          <p className="text-center text-xs text-[var(--color-text-muted)] tracking-widest">
            Free shipping • 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-12">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <h3 className="heading-serif text-2xl mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
