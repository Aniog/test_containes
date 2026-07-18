import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart, useCartDispatch } from '@/context/CartContext';

export default function CartDrawer() {
  const cart = useCart();
  const { removeItem, updateQuantity, closeCart } = useCartDispatch();
  const panelRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeCart(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeCart]);

  useEffect(() => {
    document.body.style.overflow = cart.isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cart.isOpen]);

  const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-velmora-black/40 backdrop-blur-sm transition-opacity duration-400 ${
          cart.isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-velmora-cream shadow-2xl transform transition-transform duration-400 ease-out flex flex-col ${
          cart.isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/60">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" />
            <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
            <span className="text-xs text-velmora-muted">({cart.items.length})</span>
          </div>
          <button onClick={closeCart} className="p-1 hover:text-velmora-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-sand mb-4" />
              <p className="text-velmora-muted text-sm">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-4 text-xs tracking-[0.15em] uppercase border-b border-velmora-gold text-velmora-gold hover:text-velmora-gold-dark transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.items.map((item) => (
                <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-velmora-sand/50 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xs tracking-[0.12em] uppercase font-serif font-medium truncate">{item.name}</p>
                        <p className="text-[11px] text-velmora-muted mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="text-velmora-muted hover:text-velmora-black p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-velmora-sand">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-black transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-black transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-sand/60 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-velmora-muted">Subtotal</span>
              <span className="font-medium">${total.toFixed(0)}</span>
            </div>
            <p className="text-[11px] text-velmora-muted text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3 bg-velmora-espresso text-white text-xs tracking-[0.2em] uppercase hover:bg-velmora-gold-dark transition-all duration-300">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-velmora-muted tracking-[0.12em] uppercase hover:text-velmora-black transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
