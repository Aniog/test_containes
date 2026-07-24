import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, toggleDrawer } = useCart();
  const images = product.images?.gold || product.images || [];
  const primaryImage = images[0];
  const secondaryImage = images[1] || primaryImage;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      tone: product.tone || "gold",
      image: primaryImage,
    });
    toggleDrawer();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4]">
        <img
          src={hovered ? secondaryImage : primaryImage}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&q=80';
          }}
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium tracking-wide text-gray-900">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full bg-white/95 py-2.5 text-xs font-medium text-gray-900 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-gold-700 hover:text-white"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium tracking-wide text-gray-900 uppercase">{product.name}</h3>
        <p className="text-sm text-gray-600">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
