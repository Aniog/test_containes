import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Plus } from "lucide-react";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-muted aspect-square">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal px-4 py-2 text-xs tracking-velmora uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-charcoal hover:text-white"
        >
          <Plus size={14} className="inline mr-1" />
          Add to Cart
        </button>

        {/* Bestseller badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs px-2 py-1 tracking-wide uppercase">
            Bestseller
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="product-name text-sm">{product.name}</h3>
        <div className="flex items-center gap-2">
          <div className="flex text-accent">
            {"★".repeat(Math.round(product.rating))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
}
