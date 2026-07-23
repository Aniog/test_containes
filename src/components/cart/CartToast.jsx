import React from 'react';
import { Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartToast() {
  const { toast } = useCart();
  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 transition-all duration-500 ${
        toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <div className="flex items-center gap-2.5 border border-gold/40 bg-onyx/95 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold">
          <Check className="h-3 w-3 text-noir" strokeWidth={3} />
        </span>
        <p className="font-sans text-xs uppercase tracking-[0.16em] text-ivory">{toast}</p>
      </div>
    </div>
  );
}
