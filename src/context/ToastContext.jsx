import { createContext, useCallback, useContext, useState } from "react";
import { Check, X } from "lucide-react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const push = useCallback(
    (message) => {
      const id = Math.random().toString(36).slice(2, 9);
      setToasts((t) => [...t, { id, message }]);
      window.setTimeout(() => dismiss(id), 2400);
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-6 left-1/2 z-[120] flex -translate-x-1/2 flex-col items-center gap-2"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className="pointer-events-auto flex items-center gap-3 border border-hairline bg-cream px-5 py-3 text-[12px] tracking-[0.22em] uppercase text-ink shadow-soft"
          >
            <Check className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
            <span>{t.message}</span>
            <button
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss"
              className="ml-2 text-taupe transition-colors hover:text-ink"
            >
              <X className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
