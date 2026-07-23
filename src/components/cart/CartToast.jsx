import { Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function CartToast() {
  const { toast, openCart, dismissToast } = useCart();

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 transition-all duration-500 ease-out",
        toast
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
      role="status"
      aria-live="polite"
    >
      {toast && (
        <button
          type="button"
          onClick={() => {
            dismissToast();
            openCart();
          }}
          className="flex w-full items-center gap-3 border border-espresso/20 bg-espresso px-5 py-4 text-left text-cream shadow-[0_20px_50px_-20px_rgba(34,25,16,0.6)]"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold">
            <Check size={14} strokeWidth={3} className="text-cream" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-champagne">
              {toast.title}
            </span>
            <span className="block truncate text-sm text-cream/90">
              {toast.message}
            </span>
          </span>
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            View cart
          </span>
        </button>
      )}
    </div>
  );
}
