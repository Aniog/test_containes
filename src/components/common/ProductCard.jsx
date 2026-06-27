import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "gold", 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-linen">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        {/* Quick add */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-0 left-0 right-0 bg-charcoal/90 text-cream py-2.5 text-xs uppercase tracking-[0.15em] font-medium opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="mt-3 text-center">
        <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-ink">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-stone">${product.price}</p>
      </div>
    </Link>
  );
}
