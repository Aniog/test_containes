import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTIONS = (product) => [
  {
    id: "description",
    title: "Description",
    content: product.description,
  },
  {
    id: "materials",
    title: "Materials & Care",
    content: `${product.materials}\n\n${product.care}`,
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    content:
      "Free worldwide shipping on orders over $75. Standard delivery is 5–7 business days. We offer 30-day returns on unworn items in original packaging.",
  },
];

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState("description");

  return (
    <div className="border-t border-velmora-border">
      {SECTIONS(product).map((section) => {
        const isOpen = open === section.id;
        return (
          <div
            key={section.id}
            className="border-b border-velmora-border"
          >
            <button
              onClick={() => setOpen(isOpen ? null : section.id)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                {section.title}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96 pb-5" : "max-h-0"
              )}
            >
              <p className="whitespace-pre-line text-sm leading-relaxed text-velmora-muted">
                {section.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
