import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-sand aspect-[3/4]">
        <img
          src={`https://placehold.co/600x800/2D2D2D/BFA06B?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-velmora-ink/10 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product, "gold", 1);
          }}
          className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-velmora-ink py-3 text-xs tracking-widester uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-ink hover:text-white ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Quick Add
        </button>
      </Link>
      <div className="mt-4 text-center">
        <Link
          to={`/product/${product.slug}`}
          className="font-heading text-sm tracking-widester uppercase block"
        >
          {product.name}
        </Link>
        <p className="text-sm text-velmora-muted mt-1">${product.price}</p>
      </div>
    </div>
  );
}
