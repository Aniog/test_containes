import { useState } from "react";
import { Plus, Minus, Check, Heart, Truck, RefreshCw, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Stars from "@/components/ui/Stars";
import Accordion from "@/components/product/Accordion";

export default function ProductInfo({ product }) {
  const { addItem } = useCart();
  const [color, setColor] = useState(product.colors[0].id);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    addItem(product, color, quantity);
    setAdding(true);
    setTimeout(() => setAdding(false), 1400);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="eyebrow">{product.material}</span>
        <h1 className="font-serif text-4xl md:text-5xl text-espresso uppercase tracking-label leading-[1.05]">
          {product.name}
        </h1>
        <p className="font-serif italic text-xl text-taupe">{product.tagline}</p>
        <div className="flex items-center gap-3 mt-1">
          <Stars value={product.rating} size={14} />
          <span className="text-sm text-taupe font-light">
            {product.rating.toFixed(1)} · {product.reviews} reviews
          </span>
        </div>
        <p className="font-serif text-2xl text-espresso mt-3">{formatPrice(product.price)}</p>
      </div>

      <p className="text-[15px] text-graphite leading-relaxed font-light">
        {product.description}
      </p>

      <div className="hairline" />

      {/* Color selector */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="label text-espresso">Finish</span>
          <span className="text-xs text-taupe font-light capitalize">{color}</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {product.colors.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setColor(c.id)}
              className={cn(
                "label text-[10px] px-5 py-2.5 border transition-all duration-300",
                color === c.id
                  ? "bg-espresso text-ivory border-espresso"
                  : "bg-ivory text-espresso border-hairline hover:border-espresso"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to bag */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center border border-hairline">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-11 h-12 flex items-center justify-center text-espresso/80 hover:text-espresso hover:bg-bone transition-colors"
              aria-label="Decrease"
            >
              <Minus size={14} />
            </button>
            <span className="w-10 text-center text-sm font-medium text-espresso">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-11 h-12 flex items-center justify-center text-espresso/80 hover:text-espresso hover:bg-bone transition-colors"
              aria-label="Increase"
            >
              <Plus size={14} />
            </button>
          </div>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleAdd}
            className="flex-1"
          >
            {adding ? (
              <>
                <Check size={14} strokeWidth={1.5} /> Added to bag
              </>
            ) : (
              <>Add to Bag · {formatPrice(product.price * quantity)}</>
            )}
          </Button>
        </div>
        <button
          type="button"
          className="label text-taupe hover:text-espresso inline-flex items-center justify-center gap-2 py-3 transition-colors"
        >
          <Heart size={14} strokeWidth={1.4} /> Save to Wishlist
        </button>
      </div>

      {/* Quick value props */}
      <ul className="grid grid-cols-3 gap-2 mt-2 text-center">
        {[
          { icon: Truck, label: "Free shipping" },
          { icon: RefreshCw, label: "30-day returns" },
          { icon: Sparkles, label: "Gift-ready box" },
        ].map(({ icon: Icon, label }) => (
          <li key={label} className="flex flex-col items-center gap-2 py-3 border border-hairline">
            <Icon size={16} strokeWidth={1.3} className="text-brass" />
            <span className="label text-[9px] text-taupe">{label}</span>
          </li>
        ))}
      </ul>

      <div className="hairline" />

      {/* Accordions */}
      <div className="flex flex-col">
        <Accordion title="Description" defaultOpen>
          <p className="text-[15px] text-graphite leading-relaxed font-light">{product.details}</p>
        </Accordion>
        <Accordion title="Materials & Care">
          <p className="text-[15px] text-graphite leading-relaxed font-light mb-3">
            <strong className="text-espresso font-medium">Materials.</strong> {product.materials}
          </p>
          <p className="text-[15px] text-graphite leading-relaxed font-light">
            <strong className="text-espresso font-medium">Care.</strong> {product.care}
          </p>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <p className="text-[15px] text-graphite leading-relaxed font-light">{product.shipping}</p>
        </Accordion>
      </div>
    </div>
  );
}
