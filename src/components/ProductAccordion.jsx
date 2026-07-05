import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  { key: "description", label: "Description" },
  { key: "materials", label: "Materials & Care" },
  { key: "shipping", label: "Shipping & Returns" },
];

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState("description");

  const getContent = (key) => {
    switch (key) {
      case "description":
        return product.description;
      case "materials":
        return product.material + ". " + product.care;
      case "shipping":
        return product.shipping;
      default:
        return "";
    }
  };

  return (
    <div className="border-t border-cream-200">
      {sections.map((s) => (
        <div key={s.key} className="border-b border-cream-200">
          <button
            onClick={() => setOpen(open === s.key ? null : s.key)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-overline uppercase text-charcoal-700 tracking-[0.1em] font-medium">
              {s.label}
            </span>
            <ChevronDown
              size={18}
              className={`text-charcoal-400 transition-transform duration-300 ${
                open === s.key ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 ${
              open === s.key ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-body-sm text-charcoal-600 pb-5 leading-relaxed">
              {getContent(s.key)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
