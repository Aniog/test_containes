import React from 'react';
import { createContext, useContext, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const Toaster = ({ position = 'bottom-right' }) => {
  const { toasts, removeToast } = useContext(ToastContext);

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };

  return (
    <div className={`fixed z-50 flex flex-col gap-2 ${positionClasses[position] || positionClasses['bottom-right']}`}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            'min-w-[300px] rounded-lg border border-[#e5e5e5] bg-white p-4 shadow-lg',
            'animate-in slide-in-from-right-full duration-300',
            toast.variant === 'destructive' && 'border-red-200 bg-red-50'
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              {toast.title && (
                <p className="font-medium text-[#1a1a1a] text-sm">{toast.title}</p>
              )}
              {toast.description && (
                <p className="mt-1 text-xs text-[#5c5c5c]">{toast.description}</p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#5c5c5c] hover:text-[#1a1a1a] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ title, description, variant = 'default' }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description, variant }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(({ title, description, variant = 'default' }) => {
    addToast({ title, description, variant });
  }, [addToast]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, toast }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  );
};
