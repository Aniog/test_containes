import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartToast() {
  const { toast, openCart } = useCart();

  return (
    <div
      className={`pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-500 ${
        toast ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      {toast && (
        <button
          type="button"
          onClick={openCart}
          className="pointer-events-auto flex items-center gap-3 border border-espresso/10 bg-espresso px-6 py-4 text-left shadow-[0_20px_50px_-20px_rgba(43,33,24,0.6)]"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-soft" strokeWidth={1.5} />
          <span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-ivory/70">
              {toast.title}
            </span>
            <span className="block font-serif text-base font-medium uppercase tracking-[0.12em] text-ivory">
              {toast.message}
            </span>
          </span>
          <span className="ml-3 border-l border-ivory/20 pl-3 text-[10px] uppercase tracking-[0.2em] text-gold-soft">
            View
          </span>
        </button>
      )}
    </div>
  );
}
