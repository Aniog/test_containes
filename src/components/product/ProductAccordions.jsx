import { useState } from "react";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { key: "description", label: "Description" },
  { key: "materials", label: "Materials & Care" },
  { key: "shipping", label: "Shipping & Returns" },
];

export default function ProductAccordions({ product }) {
  const [open, setOpen] = useState("description");

  return (
    <div className="border-t border-sand/40">
      {items.map((item) => {
        const isOpen = open === item.key;
        return (
          <div key={item.key} className="border-b border-sand/40">
            <button
              onClick={() => setOpen(isOpen ? null : item.key)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-[11px] uppercase tracking-widest2 text-ink font-medium">
                {item.label}
              </span>
              <ChevronDown
                size={16}
                className={cn(
                  "text-ink transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-sm text-ink/75 leading-relaxed pr-6">
                  {product[item.key]}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
