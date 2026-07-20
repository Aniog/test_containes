import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import { PRODUCTS } from "@/data/products";

const FALLBACK_BY_PRODUCT = {
  "vivid-aura-jewels": {
    1: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=90&fit=max&fm=jpg",
  },
  "majestic-flora-nectar": {
    1: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=90&fit=max&fm=jpg",
  },
  "golden-sphere-huggies": {
    1: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=90&fit=max&fm=jpg",
  },
  "amber-lace-earrings": {
    1: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=90&fit=max&fm=jpg",
  },
  "royal-heirloom-set": {
    1: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=800&q=90&fit=max&fm=jpg",
  },
  "celeste-pearl-drops": {
    1: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?w=800&q=90&fit=max&fm=jpg",
  },
  "lumiere-chain-necklace": {
    1: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?w=800&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=90&fit=max&fm=jpg",
  },
  "siren-twisted-huggies": {
    1: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=90&fit=max&fm=jpg",
  },
};

function Stars({ value }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={cn(
            "w-3 h-3",
            i < Math.round(value) ? "fill-gold text-gold" : "fill-hairline text-hairline"
          )}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export function ProductCard({ product, eager = false }) {
  const { add } = useCart();
  const containerRef = useRef(null);
  const fallbacks = FALLBACK_BY_PRODUCT[product.id] || {};

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  const onQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    add(product.id, product.variants?.[0]?.id || "gold", 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div ref={containerRef} className="relative overflow-hidden bg-ivory aspect-square">
        <img
          data-strk-img-id={`prod-${product.id}-1`}
          src={fallbacks[1]}
          alt={product.name}
          loading={eager ? "eager" : "lazy"}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={`prod-${product.id}-2`}
          src={fallbacks[2]}
          alt=""
          loading={eager ? "eager" : "lazy"}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <button
            type="button"
            onClick={onQuickAdd}
            className="w-full bg-bone/95 text-ink text-[10px] uppercase tracking-wider2 font-medium py-3 hover:bg-gold hover:text-ink transition-colors border border-ink/10"
          >
            Quick add
          </button>
        </div>
        {product.new && (
          <span className="absolute top-3 left-3 bg-bone text-ink text-[10px] uppercase tracking-wider2 font-medium px-2.5 py-1">
            New
          </span>
        )}
        {product.bestSeller && !product.new && (
          <span className="absolute top-3 left-3 bg-ink text-bone text-[10px] uppercase tracking-wider2 font-medium px-2.5 py-1">
            Bestseller
          </span>
        )}
      </div>
      <div className="mt-5 flex flex-col items-center text-center">
        <h3 className="text-[12px] uppercase tracking-wider2 text-ink font-medium">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <Stars value={product.rating} />
          <span className="text-[11px] text-muted">({product.reviewCount})</span>
        </div>
        <p className="mt-1.5 text-[13px] text-ink font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
