import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const push = useCallback((toast) => {
    const id = `t-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    setToasts((t) => [...t, { id, ...toast }]);
    setTimeout(() => dismiss(id), toast.duration || 2400);
  }, [dismiss]);

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[120] flex flex-col items-center gap-2 px-4"
        aria-live="polite"
        aria-atomic="true"
      >
        {toasts.map((t) => (
          <Toast key={t.id} toast={t} onClose={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function Toast({ toast, onClose }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const r = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(r);
  }, []);

  return (
    <div
      role="status"
      className={cn(
        'pointer-events-auto flex items-center gap-3 rounded-none border border-espresso/10 bg-bone px-5 py-3 shadow-[0_18px_40px_-20px_rgba(27,20,16,0.35)] transition-all duration-500 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      )}
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-bone">
        <Check className="h-3 w-3" strokeWidth={2} />
      </span>
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-espresso">
        {toast.title}
      </div>
      {toast.description && (
        <div className="hidden text-xs text-mink sm:block">{toast.description}</div>
      )}
      <button
        onClick={onClose}
        aria-label="Dismiss"
        className="ml-2 text-[10px] uppercase tracking-[0.2em] text-stone hover:text-espresso"
      >
        Close
      </button>
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    // Soft fallback so previews never crash if provider is missing
    return { push: (t) => console.log('[toast]', t) };
  }
  return ctx;
}
