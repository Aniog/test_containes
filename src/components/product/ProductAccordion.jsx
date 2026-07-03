import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  {
    id: "description",
    label: "Description",
    body: (product) => (
      <div className="space-y-3 text-ink/80 leading-relaxed">
        <p>{product.description}</p>
        <p>
          Each piece is hand-finished by a small team in our atelier. Subtle
          variation is part of the character — and a sign that real hands
          shaped it.
        </p>
      </div>
    ),
  },
  {
    id: "materials",
    label: "Materials & Care",
    body: () => (
      <div className="space-y-3 text-ink/80 leading-relaxed">
        <p>
          Solid brass core, plated in 18K gold to a 2.5 micron thickness —
          roughly five times industry standard. Hypoallergenic and
          nickel-free.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Remove before showering, swimming, or applying lotions</li>
          <li>Store in the linen pouch provided to slow oxidation</li>
          <li>Polish gently with the included cloth — never harsh chemicals</li>
        </ul>
      </div>
    ),
  },
  {
    id: "shipping",
    label: "Shipping & Returns",
    body: () => (
      <div className="space-y-3 text-ink/80 leading-relaxed">
        <p>
          Free worldwide shipping on orders over $80. Most pieces ship within
          1–2 business days from our studio in Florence.
        </p>
        <p>
          Not quite right? Return unworn pieces within 30 days for a full
          refund. We pay return shipping in the US, EU, and UK.
        </p>
      </div>
    ),
  },
];

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState("description");

  return (
    <div className="border-t border-hairline">
      {SECTIONS.map((s) => {
        const isOpen = open === s.id;
        return (
          <div key={s.id} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : s.id)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="product-name text-xs font-medium group-hover:text-gold transition-colors">
                {s.label}
              </span>
              {isOpen ? (
                <Minus className="w-4 h-4 text-ink" strokeWidth={1.5} />
              ) : (
                <Plus className="w-4 h-4 text-ink" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">{s.body(product)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
