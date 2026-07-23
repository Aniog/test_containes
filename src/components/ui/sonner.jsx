import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Tiny self-contained toast system. We avoid pulling sonner as an extra
 * dependency — the API is intentionally similar so it's a one-line swap later.
 *
 * Usage:
 *   import { Toaster, toast } from "@/components/ui/sonner";
 *   <Toaster />
 *   toast.success("Saved.");
 */

const ToastContext = createContext({ push: () => {} });
export const useToast = () => useContext(ToastContext);

let _id = 0;
const subs = new Set();
function emit(toast) {
  subs.forEach((fn) => fn(toast));
}

export const toast = {
  success(message, opts = {}) {
    emit({ id: ++_id, type: "success", message, ...opts });
  },
  error(message, opts = {}) {
    emit({ id: ++_id, type: "error", message, ...opts });
  },
  info(message, opts = {}) {
    emit({ id: ++_id, type: "info", message, ...opts });
  },
};

export function Toaster({ position = "top-right" }) {
  const [items, setItems] = useState([]);

  const remove = useCallback((id) => {
    setItems((arr) => arr.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    const fn = (t) => {
      setItems((arr) => [...arr, t]);
      const duration = t.duration ?? 3200;
      setTimeout(() => remove(t.id), duration);
    };
    subs.add(fn);
    return () => { subs.delete(fn); };
  }, [remove]);

  const posClass = {
    "top-right":  "top-20 right-4 sm:right-6",
    "top-left":   "top-20 left-4 sm:left-6",
    "bottom-right": "bottom-4 right-4",
    "bottom-left":  "bottom-4 left-4",
  }[position] || "top-20 right-4 sm:right-6";

  return (
    <ToastContext.Provider value={{ push: emit }}>
      <div
        aria-live="polite"
        aria-atomic="true"
        className={cn(
          "fixed z-[80] flex flex-col gap-2 max-w-[calc(100vw-2rem)] sm:max-w-sm pointer-events-none",
          posClass,
        )}
      >
        {items.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => remove(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onClose }) {
  const Icon = toast.type === "error" ? AlertCircle : CheckCircle2;
  return (
    <div
      role="status"
      className={cn(
        "pointer-events-auto min-w-[260px] sm:min-w-[320px] max-w-sm",
        "flex items-start gap-3 px-4 py-3 shadow-card",
        "border border-bone-50/10",
        toast.type === "error"
          ? "bg-espresso text-bone-50 border-red-500/40"
          : "bg-espresso text-bone-50",
      )}
      style={{
        animation: "fadeIn 280ms ease-out both",
      }}
    >
      <Icon
        size={16}
        strokeWidth={1.5}
        className={cn(
          "mt-0.5 flex-shrink-0",
          toast.type === "error" ? "text-red-300" : "text-gold-300",
        )}
      />
      <p className="flex-1 text-sm leading-snug text-bone-50/95 font-sans">
        {toast.message}
      </p>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={onClose}
        className="text-bone-50/55 hover:text-bone-50 transition-colors"
      >
        <X size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
}
