import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

// Static, statically-parseable product image specs.
// The strk-img plugin needs literal IDs and queries to resolve them.
// Each product's id maps to a primary/secondary strk-img entry.
const PRODUCT_IMG = {
  "vivid-aura-jewels": {
    primary: "vivid-aura-primary",
    secondary: "vivid-aura-secondary",
    primaryQuery:
      "vivid aura ear cuff crystal accent gold plated editorial product still life warm",
    secondaryQuery:
      "vivid aura ear cuff worn on ear close up warm editorial portrait",
  },
  "majestic-flora-nectar": {
    primary: "majestic-flora-primary",
    secondary: "majestic-flora-secondary",
    primaryQuery:
      "majestic flora floral multicolor crystal necklace gold plated editorial product still life",
    secondaryQuery:
      "majestic flora multicolor crystal necklace worn on neck close up editorial portrait",
  },
  "golden-sphere-huggies": {
    primary: "golden-sphere-primary",
    secondary: "golden-sphere-secondary",
    primaryQuery:
      "golden sphere chunky gold dome huggie earrings editorial product still life warm",
    secondaryQuery:
      "golden sphere chunky gold dome huggies worn on ear editorial portrait warm",
  },
  "amber-lace-earrings": {
    primary: "amber-lace-primary",
    secondary: "amber-lace-secondary",
    primaryQuery:
      "amber lace textured gold filigree drop earrings editorial product still life warm",
    secondaryQuery:
      "amber lace gold filigree drop earrings worn editorial portrait warm light",
  },
  "royal-heirloom-set": {
    primary: "royal-heirloom-primary",
    secondary: "royal-heirloom-secondary",
    primaryQuery:
      "royal heirloom gold earring and necklace gift set in ivory box editorial product still life",
    secondaryQuery:
      "royal heirloom gold earring and necklace set worn editorial portrait warm",
  },
};

const DEFAULT_IMG = {
  primary: "vivid-aura-primary",
  secondary: "vivid-aura-secondary",
  primaryQuery: "demi fine gold jewelry editorial product still life warm",
  secondaryQuery: "demi fine gold jewelry worn editorial portrait warm",
};

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const { name, id, price, rating, reviewCount, badge } = product;
  const spec = PRODUCT_IMG[id] || DEFAULT_IMG;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <Link
      to={`/product/${id}`}
      className="group block"
      aria-label={`${name} — ${formatPrice(price)}`}
    >
      <div className="relative overflow-hidden bg-blush aspect-[3/4]">
        <img
          alt={name}
          data-strk-img-id={spec.primary}
          data-strk-img={spec.primaryQuery}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-soft group-hover:opacity-0"
          loading={eager ? "eager" : "lazy"}
        />
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={spec.secondary}
          data-strk-img={spec.secondaryQuery}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out-soft group-hover:opacity-100"
          loading="lazy"
        />
        {badge && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-cream/95 text-ink text-[9px] font-medium tracking-wider-3 uppercase">
            {badge}
          </span>
        )}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 z-10 py-2.5 bg-cream/95 text-ink text-[10px] font-medium tracking-wider-3 uppercase opacity-0 translate-y-1 transition-all duration-300 ease-out-soft group-hover:opacity-100 group-hover:translate-y-0 hover:bg-espresso hover:text-cream"
          aria-label={`Add ${name} to cart`}
        >
          <span className="inline-flex items-center justify-center gap-2">
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            Quick add
          </span>
        </button>
      </div>
      <div className="pt-4 pb-2">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="product-name truncate">{name}</h3>
          <p className="text-sm text-ink whitespace-nowrap tabular-nums">
            {formatPrice(price)}
          </p>
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-ink-soft">
          <Star className="w-3 h-3 fill-champagne text-champagne" />
          <span className="tabular-nums">{rating.toFixed(1)}</span>
          <span aria-hidden="true">·</span>
          <span>{reviewCount} reviews</span>
        </div>
      </div>
    </Link>
  );
}
