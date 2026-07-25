import React from "react";
import { CheckCircle2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function CartToast() {
  const { toast, dismissToast, openCart } = useCart();

  return (
    <div
      className={cn(
        "fixed bottom-5 left-1/2 z-[90] w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 transition-all duration-500",
        toast
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
      )}
      role="status"
      aria-live="polite"
    >
      {toast && (
        <div className="flex items-center gap-3 border border-gold/30 bg-ink px-5 py-4 text-cream shadow-[0_20px_50px_-20px_rgba(33,27,20,0.6)]">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
          <p className="flex-1 text-sm">
            <span className="font-serif text-base uppercase tracking-[0.1em]">
              {toast.productName}
            </span>{" "}
            <span className="text-cream/70">added in {toast.variant} tone</span>
          </p>
          <button
            type="button"
            onClick={() => {
              dismissToast();
              openCart();
            }}
            className="shrink-0 border-b border-gold text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:text-cream"
          >
            View Bag
          </button>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={dismissToast}
            className="shrink-0 p-1 text-cream/60 transition-colors hover:text-cream"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
