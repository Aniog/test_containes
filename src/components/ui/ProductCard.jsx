import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import RatingStars from "@/components/ui/RatingStars";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const firstImage = product.images[0];
  const secondImage = product.images[1] || firstImage;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, product.toneOptions[0], 1);
    toast.success(`${product.name} added to your bag`, {
      description: `Tap "View bag" to checkout.`,
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block reveal"
      id={`product-${product.id}`}
    >
      <div className="relative overflow-hidden bg-espresso stock-skeleton">
        <StockImage
          query={`[${product.images[0]?.query}] [product-${product.id}-title]`}
          imageId={firstImage.id}
          ratio="3x4"
          width={900}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.03]"
        />
        {secondImage && secondImage.id !== firstImage.id && (
          <StockImage
            query={`[${secondImage.query}] [product-${product.id}-title]`}
            imageId={secondImage.id}
            ratio="3x4"
            width={900}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-widest3 uppercase bg-bone/90 text-espresso">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute left-1/2 -translate-x-1/2 bottom-4 inline-flex items-center gap-2 px-5 py-2.5 bg-bone/95 text-espresso text-[11px] uppercase tracking-widest2 font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-bone"
          aria-label={`Quick add ${product.name}`}
        >
          <Plus size={14} strokeWidth={1.5} />
          Quick add
        </button>
      </div>

      <div className="pt-5 pb-2 text-center">
        <h3
          id={`product-${product.id}-title`}
          className="product-name"
        >
          {product.name}
        </h3>
        <p className="mt-2 text-[13px] tracking-wide text-charcoal">
          {formatPrice(product.price)}
        </p>
        <div className="mt-2 flex justify-center">
          <RatingStars value={product.rating} size={11} />
        </div>
      </div>
    </Link>
  );
}