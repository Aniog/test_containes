import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const primary = product.images[0];
  const secondary = product.images[1] || primary;

  return (
    <div className="group">
      <div className="relative overflow-hidden bg-cream aspect-[3x4]">
        <Link to={`/product/${product.id}`}>
          <img
            alt={product.name}
            data-strk-img-id={`${primary.imgId}-card`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            alt={product.name}
            data-strk-img-id={`${secondary.imgId}-card`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn on model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-espresso/90 backdrop-blur-sm text-ivory text-[11px] uppercase tracking-widest2 py-3 flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <Plus size={14} /> Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-widest2 text-sand mb-1">
          {product.type}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg uppercase tracking-widest3 text-ink hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-sand">({product.reviews})</span>
        </div>
        <p className="text-sm text-ink mt-1.5">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
