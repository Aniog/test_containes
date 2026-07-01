import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export default function AddToCartButton({ onClick, full = false, size = "md", className, label = "Add to bag", addedLabel = "Added" }) {
  const [justAdded, setJustAdded] = useState(false);
  const handle = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    onClick?.(e);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };
  const sizing = size === "sm" ? "px-3 py-2 text-[10px]" : "px-5 py-3 text-[11px]";
  return (
    <button
      type="button"
      onClick={handle}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans tracking-wider2 uppercase border transition-all duration-300 ease-editorial",
        full && "w-full",
        justAdded
          ? "bg-gold-300 border-gold-300 text-espresso-200"
          : "bg-espresso-200 border-espresso-200 text-ivory-50 hover:bg-gold-300 hover:border-gold-300",
        sizing,
        className,
      )}
      aria-label={justAdded ? addedLabel : label}
    >
      {justAdded ? <Check className="w-3.5 h-3.5" strokeWidth={1.6} /> : <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />}
      {justAdded ? addedLabel : label}
    </button>
  );
}
