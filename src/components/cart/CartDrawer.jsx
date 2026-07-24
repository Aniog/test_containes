import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-base z-50 transform transition-transform duration-400 ease-out shadow-2xl flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionDuration: '400ms' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wide">Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})</h2>
          <button onClick={closeDrawer} className="text-velmora-subtle hover:text-velmora-dark transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-subtle">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
              <p className="text-sm">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="mt-4 text-xs tracking-widest uppercase text-velmora-accent hover:text-velmora-accent-deep underline underline-offset-4"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-velmora-border">
                  {/* Thumbnail placeholder */}
                  <div className="w-20 h-20 flex-shrink-0 bg-velmora-muted rounded-sm" />

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-serif text-sm tracking-wider uppercase text-velmora-dark">{item.name}</p>
                        <p className="text-xs text-velmora-subtle mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-velmora-subtle hover:text-velmora-error transition-colors ml-2"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-body hover:text-velmora-dark transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-xs font-medium text-velmora-dark">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-body hover:text-velmora-dark transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-velmora-dark">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-border px-6 py-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-velmora-subtle">Subtotal</span>
              <span className="font-medium text-velmora-dark">${subtotal.toFixed(0)}</span>
            </div>
            <p className="text-xs text-velmora-subtle">Shipping & taxes calculated at checkout</p>
            <button className="btn-accent w-full text-xs tracking-widest uppercase">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full text-xs tracking-widest uppercase text-velmora-subtle hover:text-velmora-dark transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
