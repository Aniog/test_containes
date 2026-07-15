import { useState } from "react";
import { ShoppingBag, Check, Heart } from "lucide-react";
import Stars from "@/components/ui/Stars";
import QuantityStepper from "@/components/ui/QuantityStepper";
import Accordion from "@/components/ui/Accordion";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

const TONES = [
  { id: "gold", label: "18K Gold", swatch: "#B08856" },
  { id: "silver", label: "Sterling Silver", swatch: "#C9CDD2" },
];

export default function ProductInfo({ product }) {
  const [tone, setTone] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product.id, { tone, quantity, openDrawer: true });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="md:pl-4 lg:pl-10">
      <div className="flex items-center gap-3">
        {product.badge && (
          <span
            className={cn(
              "inline-flex items-center px-2.5 py-1",
              "text-[10px] uppercase tracking-eyebrow font-medium",
              product.badge === "Gift-Ready"
                ? "bg-gold text-ivory"
                : "bg-ink text-ivory"
            )}
          >
            {product.badge}
          </span>
        )}
        <p className="text-[11px] uppercase tracking-eyebrow text-mauve">
          {product.material === "18k-gold-plated" ? "18K Gold Plated" : "Sterling Silver"}
        </p>
      </div>

      <h1 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-tight uppercase tracking-product">
        {product.name}
      </h1>
      <p className="mt-2 text-mauve text-[15px] md:text-base">
        {product.subtitle}
      </p>

      <div className="mt-5 flex items-center gap-4">
        <Stars value={product.rating} size={14} showValue />
        <span className="text-[12px] text-mauve">
          {product.reviewCount.toLocaleString()} reviews
        </span>
      </div>

      <p className="mt-6 font-serif text-3xl text-ink price">
        {formatPrice(product.price)}
      </p>

      <p className="mt-4 text-mauve text-[15px] leading-relaxed max-w-prose">
        {product.short}
      </p>

      {/* Tone selector */}
      <div className="mt-8">
        <p className="eyebrow text-mauve mb-3">
          Tone <span className="text-ink">· {TONES.find(t => t.id === tone).label}</span>
        </p>
        <div className="flex items-center gap-3">
          {TONES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTone(t.id)}
              data-active={tone === t.id}
              className="pill"
            >
              <span
                className="inline-block w-3 h-3 rounded-full mr-2 border border-ink/20"
                style={{ backgroundColor: t.swatch }}
              />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add */}
      <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
        <QuantityStepper value={quantity} onChange={setQuantity} />
        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            "btn-primary flex-1 h-12",
            added && "bg-gold-deep"
          )}
        >
          {added ? (
            <>
              <Check size={16} strokeWidth={1.6} />
              Added to Bag
            </>
          ) : (
            <>
              <ShoppingBag size={16} strokeWidth={1.6} />
              Add to Bag · {formatPrice(product.price * quantity)}
            </>
          )}
        </button>
        <button
          type="button"
          aria-label="Save to wishlist"
          className="hidden sm:inline-flex h-12 w-12 items-center justify-center border border-ink/20 text-ink hover:border-ink transition-colors"
        >
          <Heart size={16} strokeWidth={1.4} />
        </button>
      </div>

      <p className="mt-4 text-[11px] uppercase tracking-eyebrow text-mauve">
        Free shipping over $75 · 30-day returns
      </p>

      {/* Accordions */}
      <div className="mt-10">
        <Accordion
          items={[
            {
              title: "Description",
              content: <p className="max-w-prose">{product.description}</p>,
            },
            {
              title: "Materials & Care",
              content: <p className="max-w-prose">{product.materials}</p>,
            },
            {
              title: "Shipping & Returns",
              content: <p className="max-w-prose">{product.shipping}</p>,
            },
          ]}
          defaultOpenIndex={0}
        />
      </div>
    </div>
  );
}
