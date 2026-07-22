import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.find((v) => v.available) || product.variants[0]
  );
  const [showSecondImage, setShowSecondImage] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="product-card">
        {/* Image Container */}
        <div
          className="product-card-image aspect-[4/3] relative"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          {/* First Image Placeholder - elegant warm gold jewelry visual (no text) */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showSecondImage ? "opacity-0" : "opacity-100"}`}
            style={{ background: "linear-gradient(135deg, #EDE8DF 0%, #D4C9B8 100%)" }}
          >
            <div className="relative w-20 h-20">
              {/* Simulated gold jewelry piece */}
              <div className="absolute inset-0 rounded-full border-[6px] border-[#C5A46E] opacity-60" />
              <div className="absolute inset-[6px] rounded-full border-[3px] border-[#A68B5B] opacity-40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#C5A46E] opacity-70" />
            </div>
          </div>
          
          {/* Second Image Placeholder (hover state) - on model view (no text) */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showSecondImage ? "opacity-100" : "opacity-0"}`}
            style={{ background: "linear-gradient(135deg, #D4C9B8 0%, #C5B8A3 100%)" }}
          >
            <div className="relative w-16 h-20">
              {/* Simulated ear/neck silhouette */}
              <div className="absolute right-1 top-2 w-8 h-14 bg-[#3A3530] opacity-20 rounded-full" />
              <div className="absolute right-3 top-6 w-4 h-4 rounded-full border-[2px] border-[#C5A46E] opacity-60" />
            </div>
          </div>

          {/* Quick Add Button */}
          {showQuickAdd && (
            <div className="product-card-hover absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <Button
                size="sm"
                onClick={handleQuickAdd}
                className="shadow-lg text-xs tracking-[1.5px] flex items-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                QUICK ADD
              </Button>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="pt-4 pb-2 px-1">
          <h3 className="product-name text-sm text-[#2C2823] tracking-[2px] leading-tight mb-1.5">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B6359]">{formatPrice(product.price)}</span>
            <span className="text-xs text-[#9A8F7E]">{product.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
