import React, { useState, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const ToastContext = createContext(null);

const Toast = ({ id, title, description, type = 'default', onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-white border-brand-border text-brand-charcoal';

  return (
    <div
      className={cn(
        'flex w-80 items-start gap-3 rounded-lg border p-4 shadow-lg transition-all duration-300',
        bgColor,
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      )}
    >
      <div className="flex-1">
        {title && <p className="text-sm font-medium">{title}</p>}
        {description && <p className="mt-1 text-xs opacity-80">{description}</p>}
      </div>
      <button onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }} className="opacity-60 hover:opacity-100">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export const Toaster = ({ children, position = 'bottom-right' }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (options) => {
    const id = Date.now();
    setToasts(prev => [...prev, { ...options, id }]);
    return id;
  };

  const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id));

  const toast = {
    success: (title, description) => addToast({ title, description, type: 'success' }),
    error: (title, description) => addToast({ title, description, type: 'error' }),
    info: (title, description) => addToast({ title, description, type: 'info' }),
  };

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {createPortal(
        <div className={cn('fixed z-50 flex flex-col gap-3', positionClasses[position])}>
          {toasts.map(t => (
            <Toast key={t.id} {...t} onClose={() => removeToast(t.id)} />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
