import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Editorial accordion: only one open at a time.
 * The brief calls for Description / Materials & Care / Shipping & Returns.
 */
const SECTIONS = [
  {
    id: "description",
    title: "Description",
  },
  {
    id: "materials",
    title: "Materials & Care",
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
  },
];

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState("description");

  return (
    <div className="border-t border-taupe-light">
      {SECTIONS.map((s) => {
        const isOpen = open === s.id;
        return (
          <div key={s.id} className="border-b border-taupe-light">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${s.id}`}
              onClick={() => setOpen(isOpen ? null : s.id)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-[11px] uppercase tracking-widest2 text-espresso font-medium">
                {s.title}
              </span>
              <span className="text-espresso/70">
                {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
              </span>
            </button>
            <div
              id={`acc-panel-${s.id}`}
              className={cn(
                "grid transition-all duration-500 ease-out-soft",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-6 text-[15px] leading-[1.8] text-espresso/75 max-w-2xl">
                  <PanelContent id={s.id} product={product} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PanelContent({ id, product }) {
  if (id === "description") {
    return (
      <>
        <p>{product.description}</p>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-6 text-sm">
          <li>· <span className="text-espresso/60">Material:</span> {product.material}</li>
          <li>· <span className="text-espresso/60">Tone:</span> {product.color}</li>
          <li>· <span className="text-espresso/60">Closure:</span> Push-back post</li>
          <li>· <span className="text-espresso/60">Made in:</span> Small batch, BKK</li>
        </ul>
      </>
    );
  }
  if (id === "materials") {
    return (
      <>
        <p>
          Each piece is cast in recycled brass and plated in a thick layer of 18K gold
          for the warm, weighty finish demi-fine should have. Sterling silver posts keep
          sensitive ears happy.
        </p>
        <p className="mt-3">
          <strong className="text-espresso">Care —</strong> Remove before showering,
          swimming, or applying lotion. Store dry in the pouch provided. To revive
          shine, gently polish with the included cloth.
        </p>
      </>
    );
  }
  // shipping
  return (
    <>
      <p>
        <strong className="text-espresso">Shipping —</strong> Free worldwide on orders over $75.
        Most pieces ship within 1–2 business days from our studio in New York.
      </p>
      <p className="mt-3">
        <strong className="text-espresso">Returns —</strong> We want you to love it. 30 days
        to return unworn pieces in their original packaging for a full refund. We even
        include a prepaid label.
      </p>
    </>
  );
}
