import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { StrkImg } from "@/components/ui/strk-img";
import { Rating } from "@/components/ui/rating";
import { formatPrice } from "@/data/products";

export function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, "gold", 1);
    toast.success(`${product.name} added to your bag`, {
      description: "18K Gold Tone · complimentary shipping",
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
      aria-label={`${product.name}, ${product.tagline}, ${formatPrice(product.price)}`}
    >
      <div className="relative overflow-hidden bg-shell aspect-[3/4]">
        <div className="absolute inset-0 transition-opacity duration-700 ease-luxe group-hover:opacity-0">
          <StrkImg
            imgId={`${product.id}-card-a`}
            query={`[card-${product.id}-name] [card-${product.id}-tagline]`}
            ratio="3x4"
            width="700"
            alt={product.name}
            loading={eager ? "eager" : "lazy"}
            className="transition-transform duration-700 ease-luxe group-hover:scale-[1.05]"
          />
        </div>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-luxe group-hover:opacity-100">
          <StrkImg
            imgId={`${product.id}-card-b`}
            query={`worn on model close-up [card-${product.id}-name] [card-${product.id}-tagline]`}
            ratio="3x4"
            width="700"
            alt={`${product.name} worn`}
            className="scale-[1.05]"
          />
        </div>

        {product.badge && (
          <span className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-medium uppercase tracking-luxe text-espresso">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={handleAdd}
          className="absolute inset-x-0 bottom-0 h-12 translate-y-full bg-espresso/95 text-cream text-[11px] font-medium uppercase tracking-luxe transition-all duration-300 ease-luxe group-hover:translate-y-0 hover:bg-bronze focus-visible:translate-y-0 focus-visible:outline-none max-md:translate-y-0 max-md:bg-espresso/85"
        >
          Add to Bag
        </button>
      </div>

      <div className="pt-5 pb-1 text-center">
        <h3
          id={`card-${product.id}-name`}
          className="font-serif text-base md:text-lg font-medium uppercase tracking-name text-espresso"
        >
          {product.name}
        </h3>
        <p
          id={`card-${product.id}-tagline`}
          className="mt-1 text-xs text-cocoa tracking-wide"
        >
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <Rating value={product.rating} starClass="h-3 w-3" />
          <span className="text-[11px] text-cocoa">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium tracking-widest text-espresso">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
