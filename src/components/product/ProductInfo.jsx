import React, { useState } from "react";
import { ShoppingBag, Heart, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatCurrency, cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import StarRating from "@/components/ui/StarRating";
import Accordion from "@/components/ui/Accordion";
import Badge from "@/components/ui/Badge";

export default function ProductInfo({ product }) {
  const { addItem } = useCart();
  const [variantId, setVariantId] = useState(product.variants[0]?.id);
  const [qty, setQty] = useState(1);

  const onAdd = () => {
    for (let i = 0; i < qty; i += 1) {
      addItem(product.id, variantId, 1);
    }
  };

  const accordions = [
    {
      title: "Description",
      content: <p>{product.description}</p>,
    },
    {
      title: "Materials & Care",
      content: (
        <ul className="space-y-2 list-disc pl-5 marker:text-champagne">
          {product.details.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
          {product.care.length > 0 && (
            <li className="mt-4">
              <span className="font-medium text-espresso">Care —</span>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                {product.care.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <div className="space-y-3">
          <p>
            Complimentary worldwide shipping on every order. Most pieces ship
            within 2 business days from our Lisbon studio.
          </p>
          <p>
            Not the one? Return any unworn piece within 30 days for a full
            refund. We even include a prepaid return label.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      {product.badge && (
        <div className="mb-4">
          <Badge tone="champagne">{product.badge}</Badge>
        </div>
      )}
      <p className="text-label text-muted">{product.material}</p>
      <h1 className="mt-3 font-serif text-3xl md:text-5xl text-espresso uppercase tracking-[0.15em] leading-[1.1]">
        {product.name}
      </h1>
      <div className="mt-5 flex items-center gap-4">
        <span className="font-serif text-2xl md:text-3xl text-espresso tabular-nums">
          {formatCurrency(product.price)}
        </span>
        <span className="text-xs text-muted">or 4 payments of {formatCurrency(product.price / 4)}</span>
      </div>
      <div className="mt-3">
        <StarRating rating={product.rating} count={product.reviews} size="sm" />
      </div>

      <p className="mt-7 text-base text-espresso-soft leading-relaxed">
        {product.description}
      </p>

      {/* Variants */}
      {product.variants.length > 1 && (
        <div className="mt-9">
          <p className="text-label text-muted mb-3">
            Finish — <span className="text-espresso">{product.variants.find((v) => v.id === variantId)?.label}</span>
          </p>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((v) => (
              <Pill
                key={v.id}
                selected={v.id === variantId}
                onClick={() => setVariantId(v.id)}
              >
                {v.label}
              </Pill>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="mt-9">
        <p className="text-label text-muted mb-3">Quantity</p>
        <div className="inline-flex items-center border border-line">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-11 h-11 flex items-center justify-center text-espresso hover:bg-taupe disabled:opacity-30"
            disabled={qty <= 1}
          >
            <span className="text-lg leading-none">−</span>
          </button>
          <span className="w-12 text-center text-base tabular-nums">{qty}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty(Math.min(99, qty + 1))}
            className="w-11 h-11 flex items-center justify-center text-espresso hover:bg-taupe"
          >
            <span className="text-lg leading-none">+</span>
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Button
          variant="primary"
          size="lg"
          className="flex-1"
          onClick={onAdd}
        >
          <ShoppingBag strokeWidth={1.25} className="w-4 h-4 mr-2" />
          Add to Bag — {formatCurrency(product.price * qty)}
        </Button>
        <button
          type="button"
          aria-label="Save to wishlist"
          className="w-12 h-12 inline-flex items-center justify-center border border-line text-espresso hover:bg-taupe transition-colors"
        >
          <Heart strokeWidth={1.25} className="w-5 h-5" />
        </button>
      </div>

      {/* Reassurance row */}
      <ul className="mt-8 grid grid-cols-3 gap-3 text-center border-y border-line py-5">
        {[
          { Icon: Truck, label: "Free Worldwide Shipping" },
          { Icon: RefreshCw, label: "30-Day Returns" },
          { Icon: ShieldCheck, label: "Hypoallergenic" },
        ].map(({ Icon, label }) => (
          <li key={label} className="flex flex-col items-center gap-2 text-muted">
            <Icon strokeWidth={1.25} className="w-5 h-5 text-espresso" />
            <span className="text-[10px] uppercase tracking-label leading-tight">
              {label}
            </span>
          </li>
        ))}
      </ul>

      {/* Accordions */}
      <div className="mt-10">
        <Accordion items={accordions} defaultOpen={0} />
      </div>
    </div>
  );
}