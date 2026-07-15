import { Link } from "react-router-dom";
import SmartImage from "@/components/ui/SmartImage";
import Stars from "@/components/ui/Stars";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

// Product card with a 2-image hover, optional Quick Add.
export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const hero = product.images[0];
  const alt = product.images[1] || hero;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, { tone: "gold", quantity: 1, openDrawer: true });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      <div className="relative overflow-hidden bg-ivory">
        {/* Hero image */}
        <div className="aspect-square w-full">
          <SmartImage
            alt={product.name}
            query={hero.query}
            ratio="1x1"
            width={800}
            imgId={`product-${product.id}-hero`}
            className="w-full h-full"
            imgClassName="transition-transform duration-[700ms] ease-out group-hover:scale-105"
            loading={eager ? "eager" : "lazy"}
            fetchpriority={eager ? "high" : undefined}
          />
        </div>

        {/* Hover image (absolute overlay, fades in) */}
        {alt !== hero && (
          <div className="absolute inset-0 aspect-square opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
            <SmartImage
              alt={`${product.name} alternate view`}
              query={alt.query}
              ratio="1x1"
              width={800}
              imgId={`product-${product.id}-alt`}
              className="w-full h-full"
              imgClassName="transition-transform duration-[700ms] ease-out group-hover:scale-105"
            />
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <span
            className={cn(
              "absolute top-3 left-3 inline-flex items-center px-2.5 py-1",
              "text-[10px] uppercase tracking-eyebrow font-medium",
              product.badge === "New" || product.badge === "Limited"
                ? "bg-ivory text-ink"
                : product.badge === "Gift-Ready"
                  ? "bg-gold text-ivory"
                  : "bg-ink text-ivory"
            )}
          >
            {product.badge}
          </span>
        )}

        {/* Quick add — desktop hover */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            "hidden md:flex absolute left-4 right-4 bottom-4",
            "h-10 items-center justify-center",
            "bg-ink text-ivory text-[11px] uppercase tracking-nav font-medium",
            "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
            "transition-all duration-300 ease-out",
            "hover:bg-gold-deep"
          )}
        >
          Quick Add
        </button>
      </div>

      <div className="pt-4 pb-2">
        <h3 className="product-name">{product.name}</h3>
        <p className="mt-1 text-[13px] text-mauve">{product.subtitle}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[14px] text-ink price font-medium">
            {formatPrice(product.price)}
          </span>
          <Stars value={product.rating} size={11} />
        </div>
      </div>
    </Link>
  );
}
