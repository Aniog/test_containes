import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

function Stars({ value = 0, size = 12 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={cn(
            "inline-block",
            i < Math.round(value) ? "text-gold-500" : "text-hairline"
          )}
          style={{ fontSize: size }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [imgError, setImgError] = useState({ a: false, b: false });
  const [imgLoaded, setImgLoaded] = useState({ a: false, b: false });

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`${product.name} — $${product.price}`}
    >
      {/* Image well */}
      <div className="relative aspect-[4/5] bg-hairline/40 overflow-hidden">
        {/* Primary image */}
        {!imgError.a && (
          <img
            src={product.images[0]}
            alt={product.name}
            loading={eager ? "eager" : "lazy"}
            onLoad={() => setImgLoaded((s) => ({ ...s, a: true }))}
            onError={() => setImgError((s) => ({ ...s, a: true }))}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-elegant",
              imgLoaded.a ? "opacity-100" : "opacity-0",
              "group-hover:opacity-0"
            )}
            style={{ filter: "sepia(0.18) saturate(1.15) brightness(0.97)" }}
          />
        )}
        {/* Hover image */}
        {!imgError.b && product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            loading="lazy"
            onLoad={() => setImgLoaded((s) => ({ ...s, b: true }))}
            onError={() => setImgError((s) => ({ ...s, b: true }))}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-elegant",
              imgLoaded.b ? "opacity-0 group-hover:opacity-100" : "opacity-0"
            )}
            style={{ filter: "sepia(0.15) saturate(1.1) brightness(0.98)" }}
          />
        )}
        {(imgError.a && imgError.b) && (
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <div className="font-serif text-lg text-taupe italic">{product.name}</div>
              <div className="text-[10px] uppercase tracking-widest2 text-taupe/60 mt-2">
                Velmora Fine Jewelry
              </div>
            </div>
          </div>
        )}

        {/* Wishlist — visible on touch, hover-revealed on desktop */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center text-ink hover:text-gold-600 transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <Heart className="w-4 h-4" strokeWidth={1.5} />
        </button>

        {/* Quick add bar — visible on touch (no hover), hover-revealed on desktop */}
        <div className="absolute left-3 right-3 bottom-3 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-elegant">
          <button
            type="button"
            onClick={handleQuickAdd}
            aria-label={`Add ${product.name} to bag`}
            className="w-full bg-ink text-cream py-2.5 text-[10px] uppercase tracking-widest2 font-medium flex items-center justify-center gap-2 hover:bg-gold-600 transition-colors"
          >
            <Plus className="w-3 h-3" strokeWidth={2} /> Add to bag
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="pt-4 pb-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="product-name text-ink truncate">{product.name}</div>
          <div className="flex items-center gap-2 mt-1.5">
            <Stars value={product.rating} />
            <span className="text-[10px] uppercase tracking-widest2 text-taupe">
              ({product.reviews})
            </span>
          </div>
        </div>
        <div className="text-sm text-ink font-medium tabular-nums whitespace-nowrap mt-0.5">
          ${product.price}
        </div>
      </div>
    </Link>
  );
}
