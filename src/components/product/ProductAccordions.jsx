import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "description", label: "Description" },
  { id: "materials", label: "Materials & Care" },
  { id: "shipping", label: "Shipping & Returns" },
];

export default function ProductAccordions({ product }) {
  const [open, setOpen] = useState("description");

  const body = {
    description: (
      <div className="space-y-4">
        <p className="text-[15px] leading-[1.85] text-ink-soft">
          {product.description}
        </p>
        <ul className="space-y-2 text-[14px] text-ink">
          {product.details.map((d) => (
            <li
              key={d}
              className="flex items-start gap-3 pb-2 border-b border-line last:border-b-0"
            >
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-1 w-1 rounded-full bg-gold shrink-0"
              />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    materials: (
      <p className="text-[15px] leading-[1.85] text-ink-soft">
        {product.materials}
        <br />
        <br />
        <strong className="font-medium text-ink">Care — </strong>
        {product.care}
      </p>
    ),
    shipping: (
      <p className="text-[15px] leading-[1.85] text-ink-soft">
        {product.shipping}
      </p>
    ),
  };

  return (
    <section
      aria-label="Product details"
      className="border-t border-line"
    >
      <ul>
        {SECTIONS.map((s) => {
          const isOpen = open === s.id;
          return (
            <li key={s.id} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : s.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-display text-xl md:text-2xl text-ink">
                  {s.label}
                </span>
                <span
                  className={cn(
                    "inline-flex h-8 w-8 items-center justify-center text-ink transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" strokeWidth={1.5} />
                  ) : (
                    <Plus className="h-4 w-4" strokeWidth={1.5} />
                  )}
                </span>
              </button>
              <div className={cn("accordion-body", isOpen && "open")}>
                <div>
                  <div className="pb-6 pr-2">{body[s.id]}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
