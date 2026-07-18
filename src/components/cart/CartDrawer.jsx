import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/components/cart/CartContext';
import { useEffect } from 'react';

export default function CartDrawer({ open, onClose }) {
  const { cart, itemCount, subtotal, removeItem, updateQuantity } = useCart();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-400 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-cream shadow-2xl transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
            <h2 className="font-serif text-xl tracking-wide text-espresso">
              Your Bag ({itemCount})
            </h2>
            <button onClick={onClose} className="p-2 text-espresso hover:text-bronze transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-stone text-sm mb-2">Your bag is empty.</p>
                <button onClick={onClose} className="text-xs tracking-widest uppercase text-bronze hover:text-espresso transition-colors underline underline-offset-4">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Product image placeholder */}
                    <div className="w-20 h-24 bg-sand-light flex-shrink-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gold/20" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wider uppercase text-espresso truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone mt-0.5">{item.variant} Tone</p>
                      <p className="text-sm font-medium text-espresso mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-sand text-espresso hover:bg-sand transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-sand text-espresso hover:bg-sand transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto p-1.5 text-stone hover:text-espresso transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-espresso-light">Subtotal</span>
                <span className="font-serif text-lg text-espresso">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">Checkout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
