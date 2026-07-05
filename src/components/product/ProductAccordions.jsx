import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { key: "description", title: "Description" },
  { key: "materials", title: "Materials & Care" },
  { key: "shipping", title: "Shipping & Returns" },
];

const ProductAccordions = ({ product }) => {
  const [open, setOpen] = useState("description");

  return (
    <div className="border-t border-ink/15">
      {SECTIONS.map((s) => {
        const isOpen = open === s.key;
        return (
          <div key={s.key} className="border-b border-ink/15">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : s.key)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="font-sans text-[11px] uppercase tracking-eyebrow text-ink">
                {s.title}
              </span>
              {isOpen ? (
                <Minus size={16} strokeWidth={1.5} className="text-ink" />
              ) : (
                <Plus size={16} strokeWidth={1.5} className="text-ink" />
              )}
            </button>
            <div
              className="accordion-content"
              style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}
            >
              <p className="pb-6 pr-8 text-ink/75 leading-relaxed text-[15px] max-w-3xl">
                {product[s.key]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductAccordions;
