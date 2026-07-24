import React, { useEffect } from "react";
import { Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function Toast() {
  const { toast, dismissToast } = useCart();

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => dismissToast(), 3200);
    return () => clearTimeout(t);
  }, [toast, dismissToast]);

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div
        key={toast?.id}
        className={cn(
          "pointer-events-auto flex items-center gap-3 px-5 py-3 bg-ink text-bone shadow-lift transition-all duration-500 ease-elegant",
          toast
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3"
        )}
      >
        <span className="w-5 h-5 rounded-full bg-gold/90 flex items-center justify-center flex-shrink-0">
          <Check className="w-3 h-3 text-ink" strokeWidth={2.5} />
        </span>
        <p className="text-[12px] tracking-wide-2 uppercase">
          {toast ? <>Added — <span className="text-gold-light font-serif text-sm tracking-wide-2">{toast.name}</span></> : ""}
        </p>
      </div>
    </div>
  );
}
