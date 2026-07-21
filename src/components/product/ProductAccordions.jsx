import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const sections = (product) => [
  {
    id: "description",
    title: "Description",
    body: (
      <div className="space-y-4">
        <p className="font-sans text-base text-ink-soft leading-relaxed">
          {product.description}
        </p>
        <ul className="font-sans text-sm text-ink-soft space-y-1.5 list-disc pl-5">
          {product.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "materials",
    title: "Materials & Care",
    body: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-espresso mb-3">
            Materials
          </h4>
          <ul className="font-sans text-sm text-ink-soft space-y-1.5 list-disc pl-5">
            {product.materials.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-espresso mb-3">
            Care
          </h4>
          <ul className="font-sans text-sm text-ink-soft space-y-1.5 list-disc pl-5">
            {product.care.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    body: (
      <div className="space-y-4 font-sans text-base text-ink-soft leading-relaxed">
        <p>
          We offer free worldwide shipping on orders over $75. Standard
          delivery takes 3–7 business days; express options are available at
          checkout.
        </p>
        <p>
          Not quite right? You have 30 days from delivery to return unworn
          pieces in their original packaging. Returns are free within the US;
          international returns are at the customer’s cost.
        </p>
      </div>
    ),
  },
];

export default function ProductAccordions({ product }) {
  const [openId, setOpenId] = useState("description");
  const items = sections(product);

  return (
    <div className="border-t border-sand">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className="border-b border-sand">
            <button
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-sans text-[11px] md:text-xs uppercase tracking-widest2 text-espresso">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-espresso transition-transform duration-500",
                  open && "rotate-180",
                )}
                strokeWidth={1.4}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out-soft",
                open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">{item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
