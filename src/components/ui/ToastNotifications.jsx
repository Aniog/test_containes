import { useCart } from '@/context/CartContext';
import { CheckCircle } from 'lucide-react';

export default function ToastNotifications() {
  const { toasts } = useCart();

  return (
    <div className="fixed bottom-6 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="toast-enter bg-charcoal text-cream px-4 py-3 flex items-center gap-3 shadow-lg min-w-[240px] max-w-xs"
        >
          <CheckCircle size={14} strokeWidth={1.5} className="text-gold flex-shrink-0" />
          <span
            className="text-xs"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {toast.message}
          </span>
        </div>
      ))}
    </div>
  );
}
