import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    id: "description",
    title: "Description",
  },
  {
    id: "materials",
    title: "Materials & Care",
    content:
      "Every Velmora piece is plated in a generous layer of 18k gold over recycled brass, finished with a protective e-coating. Hypoallergenic, nickel-free and tarnish-resistant. To keep your piece glowing: avoid perfume, lotions and chlorine; wipe gently with the enclosed soft cloth; store in your Velmora pouch.",
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    content:
      "Complimentary worldwide shipping on orders over $75 (flat $6 below). Orders ship within 1–2 business days in our signature gift packaging. Not quite right? Enjoy 30-day returns and exchanges — no questions, no restocking fees.",
  },
];

export default function ProductAccordions({ product }) {
  const [open, setOpen] = useState("description");

  return (
    <div className="mt-10 border-t border-line">
      {sections.map((section) => {
        const isOpen = open === section.id;
        return (
          <div key={section.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : section.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-espresso">
                {section.title}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-cocoa transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                strokeWidth={1.5}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen
                  ? "grid-rows-[1fr] pb-6 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                {section.id === "description" ? (
                  <div>
                    <p className="text-sm leading-relaxed text-cocoa">
                      {product.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {product.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2.5 text-sm text-cocoa"
                        >
                          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-bronze" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-cocoa">
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
