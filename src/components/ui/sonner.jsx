import React from 'react';
import { X } from 'lucide-react';

const TOAST_TYPES = {
  success: 'bg-green-50 text-green-900 border-green-200',
  error: 'bg-red-50 text-red-900 border-red-200',
  info: 'bg-blue-50 text-blue-900 border-blue-200',
  warning: 'bg-yellow-50 text-yellow-900 border-yellow-200',
};

export const Toaster = ({ position = 'bottom-right', richColors = false }) => {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const handler = (event) => {
      const data = event.detail;
      if (!data || data.channel !== 'sonner') return;
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, ...data }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, data.duration || 4000);
    };
    window.addEventListener('sonner-toast', handler);
    return () => window.removeEventListener('sonner-toast', handler);
  }, []);

  const posClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };

  return (
    <div className={`fixed z-[70] flex flex-col gap-2 ${posClasses[position] || posClasses['bottom-right']}`}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-start gap-3 rounded-xl border px-4 py-3 shadow-lg min-w-[280px] max-w-sm ${TOAST_TYPES[toast.type] || TOAST_TYPES.info}`}
        >
          <div className="flex-1 text-sm">{toast.message}</div>
          <button
            onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
            className="mt-0.5 text-current/70 hover:text-current"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export const toast = {
  success: (message) => {
    window.dispatchEvent(new CustomEvent('sonner-toast', { detail: { type: 'success', message } }));
  },
  error: (message) => {
    window.dispatchEvent(new CustomEvent('sonner-toast', { detail: { type: 'error', message } }));
  },
  info: (message) => {
    window.dispatchEvent(new CustomEvent('sonner-toast', { detail: { type: 'info', message } }));
  },
  warning: (message) => {
    window.dispatchEvent(new CustomEvent('sonner-toast', { detail: { type: 'warning', message } }));
  },
};

export default Toaster;