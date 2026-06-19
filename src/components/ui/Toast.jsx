import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useUI } from "@/context/CartContext";

export default function Toast() {
  const { toast, setCartOpen } = useUI();
  const [visibleId, setVisibleId] = useState(null);

  useEffect(() => {
    if (!toast) return;
    setVisibleId(toast.id);
    const t = setTimeout(() => setVisibleId(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  if (!toast || visibleId !== toast.id) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      key={toast.id}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] px-5 py-3 bg-ink text-cream shadow-lift flex items-center gap-3 max-w-[92vw] animate-fade-up"
      style={{ borderRadius: 2 }}
    >
      <span className="w-6 h-6 grid place-items-center rounded-full bg-gold text-cream">
        <Check className="w-3.5 h-3.5" strokeWidth={2} />
      </span>
      <span className="text-sm">{toast.message}</span>
      <button
        type="button"
        onClick={() => setCartOpen(true)}
        className="vm-eyebrow text-cream/80 hover:text-gold-soft pl-3 border-l border-cream/20"
      >
        View Bag
      </button>
    </div>
  );
}
