import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-warm-900/40 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-cream-500">
            <h2 className="font-serif text-xl tracking-wide">
              Your Bag {itemCount > 0 && <span className="text-warm-400 text-sm font-sans">({itemCount})</span>}
            </h2>
            <button onClick={closeCart} className="text-warm-400 hover:text-warm-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
              <p className="text-warm-400 text-sm mb-4 tracking-wide">Your bag is empty</p>
              <button onClick={closeCart} className="btn-outline text-xs">
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-cream-300 last:border-0">
                    <div className="w-20 h-20 bg-cream-300 flex-shrink-0 overflow-hidden">
                      <img
                        alt={item.name}
                        data-strk-img-id={`cart-${item.id}-${item.variant}`}
                        data-strk-img={`velmora ${item.name} gold jewelry`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="product-title text-xs mb-1">{item.name}</p>
                      <p className="text-[11px] text-warm-400 mb-2 tracking-wide">
                        {item.variant === 'gold' ? '18K Gold' : 'Silver Tone'}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-cream-500">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-warm-400 hover:text-warm-900 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 h-7 flex items-center justify-center text-xs font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-warm-400 hover:text-warm-900 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">${item.price * item.quantity}</span>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-warm-400 hover:text-warm-900 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-cream-500 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-warm-500">Subtotal</span>
                  <span className="font-serif text-lg">${subtotal}</span>
                </div>
                <p className="text-[11px] text-warm-400 tracking-wide">Shipping & taxes calculated at checkout</p>
                <button className="btn-primary w-full text-xs">
                  Checkout
                </button>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="block text-center text-xs text-warm-400 hover:text-warm-900 transition-colors tracking-wide underline underline-offset-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}