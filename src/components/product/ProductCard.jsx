import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useState } from "react";
import { JewelryImage } from "@/components/ui/JewelryImage";
import { useCart } from "@/context/CartContext";
import { formatPrice, slugify } from "@/lib/utils";

export function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);

  const slug = slugify(product.name);
  // Choose a second art / palette combination for hover if available
  const hoverVariant = product.id === "vivid-aura-jewels"
    ? { art: "huggies", palette: "honey" }
    : product.id === "golden-sphere-huggies"
      ? { art: "earcuff", palette: "amber" }
      : product.id === "amber-lace-earrings"
        ? { art: "huggies", palette: "champagne" }
        : product.id === "majestic-flora-nectar"
          ? { art: "set", palette: "champagne" }
          : { art: "earcuff", palette: "honey" };

  const onAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${slug}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-canvas-soft">
        <JewelryImage
          art={product.art}
          palette={product.palette}
          ratio="3/4"
          className="w-full transition-opacity duration-500"
          alt={product.name}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <JewelryImage
            art={hoverVariant.art}
            palette={hoverVariant.palette}
            ratio="3/4"
            className="w-full h-full"
            alt=""
          />
        </div>
        {product.badge && (
          <span className="absolute left-3 top-3 bg-canvas/95 px-2.5 py-1 text-[10px] uppercase tracking-wider2 text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          type="button"
          onClick={onAdd}
          className={`absolute bottom-3 left-3 right-3 inline-flex items-center justify-center gap-2 bg-ink-onDark/95 py-3 text-[11px] uppercase tracking-wider2 text-ink transition-all duration-500 hover:bg-ink-onDark ${
            hover ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <Plus size={14} strokeWidth={1.6} /> Add to Bag
        </button>
      </div>

      <div className="pt-4 text-center">
        <h3 className="product-name text-sm text-ink">{product.name}</h3>
        <p className="mt-1.5 text-sm text-ink-secondary">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
