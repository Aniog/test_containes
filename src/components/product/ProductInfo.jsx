import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Minus, Plus, Check, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import VariantSelector from "@/components/product/VariantSelector";
import ProductAccordion from "@/components/product/ProductAccordion";
import { useCart } from "@/context/CartContext";

export default function ProductInfo({ product }) {
  const { addItem } = useCart();
  const [tone, setTone] = useState(product.tone?.[0] || "gold");
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const onAdd = () => {
    addItem(product.id, { tone, qty });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <div className="lg:pt-2">
      {/* Crumb */}
      <nav className="text-[11px] uppercase tracking-eyebrow text-taupe">
        <Link to="/shop" className="hover:text-espresso transition-colors">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-espresso-soft capitalize">
          {product.category}
        </span>
      </nav>

      <h1
        id={`pdp-name-${product.id}`}
        className="mt-4 font-serif text-3xl md:text-4xl lg:text-[40px] font-light text-espresso leading-[1.05] tracking-tight uppercase"
      >
        {product.name}
      </h1>
      <p
        id={`pdp-sub-${product.id}`}
        className="mt-3 text-sm md:text-base text-taupe leading-relaxed"
      >
        {product.subtitle}
      </p>

      <div className="mt-5 flex items-baseline gap-3">
        <span className="font-serif text-2xl text-espresso font-light">
          {formatPrice(product.price)}
        </span>
        {product.compareAt && (
          <span className="text-sm text-taupe line-through">
            {formatPrice(product.compareAt)}
          </span>
        )}
        {product.compareAt && (
          <span className="text-[11px] uppercase tracking-eyebrow text-success">
            Save {formatPrice(product.compareAt - product.price)}
          </span>
        )}
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-espresso-soft">
        <span className="inline-flex items-center gap-0.5 text-champagne">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < Math.round(product.rating) ? "fill-current" : "text-champagne/40",
              )}
              strokeWidth={0}
            />
          ))}
        </span>
        <span>{product.rating.toFixed(1)}</span>
        <span aria-hidden="true">·</span>
        <span>{product.reviews} reviews</span>
      </div>

      <p className="mt-6 text-[15px] text-espresso-soft leading-relaxed max-w-xl">
        {product.description}
      </p>

      <div className="mt-7">
        <VariantSelector
          options={product.tone}
          value={tone}
          onChange={setTone}
        />
      </div>

      <div className="mt-7 flex items-end gap-4">
        <div>
          <span className="block text-[11px] uppercase tracking-eyebrow text-espresso mb-2">
            Quantity
          </span>
          <div className="inline-flex items-center border border-espresso/20">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="h-12 w-12 flex items-center justify-center text-espresso hover:bg-espresso/5 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" strokeWidth={1.6} />
            </button>
            <span className="w-10 text-center text-sm text-espresso">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="h-12 w-12 flex items-center justify-center text-espresso hover:bg-espresso/5 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="flex-1">
          <span className="block text-[11px] uppercase tracking-eyebrow text-espresso mb-2 opacity-0">
            Add
          </span>
          <Button
            size="block"
            onClick={onAdd}
            className="h-12"
            aria-live="polite"
          >
            {justAdded ? (
              <>
                <Check className="h-3.5 w-3.5" strokeWidth={1.8} />
                Added to Bag
              </>
            ) : (
              <>Add to Bag · {formatPrice(product.price * qty)}</>
            )}
          </Button>
        </div>
      </div>

      <ul className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] uppercase tracking-eyebrow text-espresso-soft">
        <li className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 text-champagne" strokeWidth={1.4} />
          Free Shipping $75+
        </li>
        <li className="flex items-center gap-2">
          <RotateCcw className="h-3.5 w-3.5 text-champagne" strokeWidth={1.4} />
          30-Day Returns
        </li>
        <li className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-champagne" strokeWidth={1.4} />
          1-Year Guarantee
        </li>
      </ul>

      <div className="mt-10">
        <ProductAccordion
          sections={[
            { id: "desc", title: "Description", content: product.description },
            { id: "details", title: "Materials & Care", content: [...product.details, ...product.care] },
            { id: "ship", title: "Shipping & Returns", content: product.shipping },
          ]}
        />
      </div>
    </div>
  );
}
