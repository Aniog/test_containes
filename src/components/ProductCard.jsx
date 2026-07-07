import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "Gold", 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-beige">
        <img
          data-strk-img-id={`product-${product.id}`}
          data-strk-img={`[product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-velmora-surface/90 px-2 py-1 text-[10px] uppercase tracking-widest font-medium">
            {product.tag}
          </span>
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-velmora-accent text-white text-xs uppercase tracking-widest font-medium py-3 text-center transition-transform duration-300 ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <p
          id={`product-name-${product.id}`}
          className="text-xs uppercase tracking-widest font-medium text-velmora-text"
        >
          {product.name}
        </p>
        <p className="text-sm text-velmora-muted">${product.price}</p>
      </div>
    </Link>
  );
}
