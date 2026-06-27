import React, { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getPlaceholderSvg } from '@/lib/utils';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal, count } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-velmora-charcoal/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-surface shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <h2 className="font-serif text-2xl">Your Cart ({count})</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-velmora-cream transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
                <p className="font-serif text-xl mb-2">Your cart is empty</p>
                <p className="text-sm text-velmora-muted mb-6">Discover something beautiful.</p>
                <button
                  onClick={closeCart}
                  className="bg-velmora-charcoal text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-velmora-warm transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variantId}`} className="flex gap-4">
                    <img
                      src={getPlaceholderSvg(item.id, item.name)}
                      alt={item.name}
                      className="w-20 h-24 bg-velmora-cream flex-shrink-0 object-cover"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="font-serif text-lg leading-tight">{item.name}</p>
                        <p className="text-xs text-velmora-muted uppercase tracking-wider mt-1">
                          {item.variantId} / Qty: {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.variantId, item.quantity - 1)}
                            className="p-2 hover:bg-velmora-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variantId, item.quantity + 1)}
                            className="p-2 hover:bg-velmora-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium">${item.price * item.quantity}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.variantId)}
                      className="self-start p-1 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-velmora-border px-6 py-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <p className="text-xs text-velmora-muted">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-velmora-gold text-white py-4 text-xs uppercase tracking-widest hover:bg-velmora-gold-hover transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-velmora-charcoal text-velmora-charcoal py-3 text-xs uppercase tracking-widest hover:bg-velmora-charcoal hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
