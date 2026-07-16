import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="product-card bg-white">
        {/* Image with hover reveal */}
        <div className="image-container aspect-[4/3.5] bg-[#E5DFD6] relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="image-primary w-full h-full object-cover"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className="image-secondary w-full h-full object-cover"
            />
          )}
          
          {/* Quick Add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
            <Button
              onClick={handleAddToCart}
              variant="default"
              size="sm"
              className="w-full text-xs tracking-[1.5px]"
            >
              QUICK ADD
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 pt-5">
          <h3 className="product-name text-sm tracking-[1.5px] mb-1 pr-2">
            {product.name}
          </h3>
          <p className="text-xs text-[#9A8F82] mb-3">{product.shortDescription}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{formatPrice(product.price)}</span>
            
            {/* Mini variant dots */}
            <div className="flex gap-1.5">
              {product.variants.map((v, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedVariant(v);
                  }}
                  className={`w-3 h-3 rounded-full border transition-all ${
                    selectedVariant.id === v.id
                      ? "border-[#2C2522] scale-110"
                      : "border-[#E5DFD6]"
                  }`}
                  style={{
                    backgroundColor: v.id === "gold" ? "#C5A880" : "#C0C0C0"
                  }}
                  aria-label={v.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
