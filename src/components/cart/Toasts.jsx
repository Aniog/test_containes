import { CheckCircle2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Toasts() {
  const { toasts } = useCart()
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[60] flex w-full max-w-sm -translate-x-1/2 flex-col items-center gap-2 px-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex w-full animate-fade-up items-center gap-3 bg-ink px-5 py-3.5 text-sm text-cream shadow-[0_18px_40px_-16px_rgba(34,27,20,0.5)]"
          role="status"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.5} />
          <span className="tracking-wide">{toast.message}</span>
        </div>
      ))}
    </div>
  )
}
