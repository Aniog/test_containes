import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductAccordions({ product }) {
  const sections = [
    {
      id: "description",
      label: "Description",
      content: (
        <p className="text-sm md:text-base text-espresso/80 leading-relaxed font-light">
          {product.description}
        </p>
      ),
    },
    {
      id: "materials",
      label: "Materials & Care",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-taupe mb-3">
              Materials
            </h4>
            <ul className="space-y-2 text-sm text-espresso/80">
              {product.details.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="w-1 h-1 mt-2.5 bg-gold rounded-full shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-taupe mb-3">
              Care
            </h4>
            <ul className="space-y-2 text-sm text-espresso/80">
              {product.care.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="w-1 h-1 mt-2.5 bg-gold rounded-full shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "shipping",
      label: "Shipping & Returns",
      content: (
        <div className="space-y-3 text-sm text-espresso/80 leading-relaxed font-light">
          <p>
            <span className="text-espresso font-medium">Free worldwide shipping.</span>{" "}
            Orders ship within 1–2 business days from our studio in Lisbon,
            Portugal, in our signature velvet packaging.
          </p>
          <p>
            <span className="text-espresso font-medium">30-day returns.</span>{" "}
            If your piece doesn't feel like you, send it back within 30 days for
            a full refund. Items must be unworn and in original packaging.
          </p>
          <p>
            <span className="text-espresso font-medium">Need help?</span>{" "}
            Email hello@velmora.com — we typically reply within a few hours.
          </p>
        </div>
      ),
    },
  ];

  const [open, setOpen] = useState("description");

  return (
    <div className="border-t border-hairline">
      {sections.map((s) => {
        const isOpen = open === s.id;
        return (
          <div key={s.id} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : s.id)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-[11px] uppercase tracking-widest2 text-espresso">
                {s.label}
              </span>
              {isOpen ? (
                <Minus className="w-4 h-4 text-espresso" strokeWidth={1.5} />
              ) : (
                <Plus className="w-4 h-4 text-espresso" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-out",
                isOpen ? "max-h-[800px] pb-6 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              {s.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
