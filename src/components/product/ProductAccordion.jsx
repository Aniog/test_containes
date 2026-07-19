import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

function Panel({ title, open, onToggle, children }) {
  return (
    <div className="border-b border-taupe">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[12px] uppercase tracking-wider-2 font-medium text-espresso">
          {title}
        </span>
        {open ? (
          <Minus className="w-4 h-4 text-mocha" strokeWidth={1.4} />
        ) : (
          <Plus className="w-4 h-4 text-mocha" strokeWidth={1.4} />
        )}
      </button>
      <div
        className={cn(
          "grid transition-all duration-400 ease-out-soft",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden text-sm text-espresso/80 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState({ description: true, materials: false, shipping: false });
  const toggle = (key) => setOpen((o) => ({ ...o, [key]: !o[key] }));

  return (
    <div className="mt-12 md:mt-16">
      <Panel
        title="Description"
        open={open.description}
        onToggle={() => toggle("description")}
      >
        <p className="mb-3">{product.description}</p>
      </Panel>
      <Panel
        title="Materials & Care"
        open={open.materials}
        onToggle={() => toggle("materials")}
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="eyebrow mb-2">Materials</h4>
            <ul className="space-y-1.5">
              {product.details.map((d) => (
                <li key={d}>· {d}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-2">Care</h4>
            <ul className="space-y-1.5">
              {product.care.map((c) => (
                <li key={c}>· {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Panel>
      <Panel
        title="Shipping & Returns"
        open={open.shipping}
        onToggle={() => toggle("shipping")}
      >
        <p className="mb-3">
          Free worldwide shipping on orders over $75. Most orders ship within
          1–2 business days from our studio.
        </p>
        <p>
          We accept returns within 30 days of delivery, in unworn condition
          with original packaging. See our full policy for details.
        </p>
      </Panel>
    </div>
  );
}
