import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

function Item({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left text-velmora-espresso hover:text-velmora-gold transition-colors duration-300"
        aria-expanded={open}
      >
        <span className="text-[11px] uppercase tracking-[0.28em]">{title}</span>
        {open ? (
          <Minus size={16} strokeWidth={1.5} />
        ) : (
          <Plus size={16} strokeWidth={1.5} />
        )}
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="text-[14px] text-velmora-mocha leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function ProductAccordion({ product }) {
  return (
    <div className="mt-10 border-t border-velmora-line">
      <Item title="Description" defaultOpen>
        <p>{product.description}</p>
      </Item>
      <Item title="Materials & Care">
        <ul className="space-y-2">
          <li>· Made from {product.material}.</li>
          <li>· Nickel-free and hypoallergenic.</li>
          <li>· Store dry in the velvet Velmora pouch when not in use.</li>
          <li>· Clean gently with a soft cloth. Avoid contact with perfumes, lotions and water.</li>
        </ul>
      </Item>
      <Item title="Shipping & Returns">
        <ul className="space-y-2">
          <li>· Complimentary worldwide shipping on orders over $100.</li>
          <li>· Ships within 1–2 business days from our atelier.</li>
          <li>· 30-day free returns. Items must be unworn and in original packaging.</li>
          <li>· Velvet gift packaging included with every order.</li>
        </ul>
      </Item>
    </div>
  );
}
