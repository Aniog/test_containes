import { useRef, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { open, setDrawer, items, removeItem, updateQty, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setDrawer(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setDrawer]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={() => setDrawer(false)}
        />
      )}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-paper z-[70] shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink-100">
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <button
              onClick={() => setDrawer(false)}
              className="p-1 hover:bg-ink-100 rounded transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <ShoppingBag className="w-10 h-10 text-ink-300" />
                <p className="text-ink-500 text-sm">Your cart is empty.</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-ink-100 rounded overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-wider uppercase truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-ink-500 mt-0.5">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-ink-200 rounded">
                        <button
                          className="px-2 py-1 hover:bg-ink-50 transition-colors"
                          onClick={() =>
                            updateQty({ id: item.id, variant: item.variant, qty: item.qty - 1 })
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium">{item.qty}</span>
                        <button
                          className="px-2 py-1 hover:bg-ink-50 transition-colors"
                          onClick={() =>
                            updateQty({ id: item.id, variant: item.variant, qty: item.qty + 1 })
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        ${(item.price * item.qty).toFixed(0)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem({ id: item.id, variant: item.variant })}
                    className="self-start p-1 text-ink-400 hover:text-ink-700 transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-ink-100 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-ink-500">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-brand-800 text-white py-3.5 text-sm font-medium tracking-wider uppercase hover:bg-brand-900 transition-colors rounded">
                Checkout
              </button>
              <button
                onClick={() => setDrawer(false)}
                className="w-full text-center text-xs text-ink-500 hover:text-ink-800 underline underline-offset-4 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
