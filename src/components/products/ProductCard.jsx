import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { dispatch } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        images: product.images,
        variant: product.variants[0],
      },
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm bg-surface-alt">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleAddToCart}
            className="inline-flex items-center gap-2 bg-white/95 px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase text-ink shadow-sm hover:bg-white"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <p className="product-name text-xs">{product.name}</p>
        <p className="text-sm text-ink-secondary">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
