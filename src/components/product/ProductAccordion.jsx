import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = ["Description", "Materials & Care", "Shipping & Returns"];

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const content = {
    Description: product.description,
    "Materials & Care": (
      <div className="space-y-3">
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.1em] font-medium text-secondary mb-1">
            Materials
          </h4>
          <p className="text-sm">{product.materials}</p>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.1em] font-medium text-secondary mb-1">
            Care Instructions
          </h4>
          <p className="text-sm">{product.care}</p>
        </div>
      </div>
    ),
    "Shipping & Returns": (
      <div className="space-y-3">
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.1em] font-medium text-secondary mb-1">
            Shipping
          </h4>
          <p className="text-sm">{product.shipping}</p>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.1em] font-medium text-secondary mb-1">
            Returns
          </h4>
          <p className="text-sm">{product.returns}</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="border-t border-border divide-y divide-border">
      {sections.map((section, idx) => (
        <div key={section}>
          <button
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between py-4 text-left group"
          >
            <span className="text-xs uppercase tracking-[0.1em] font-medium text-primary group-hover:text-accent transition-colors">
              {section}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-secondary transition-transform duration-300",
                open === idx && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              open === idx ? "max-h-96 pb-5" : "max-h-0"
            )}
          >
            <div className="text-sm text-secondary leading-relaxed">
              {content[section]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}