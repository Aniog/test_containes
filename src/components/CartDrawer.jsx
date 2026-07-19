import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2, Gem } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, itemCount } = useCart();
  const drawerRef = useRef(null);
  const firstFocusableRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);
    firstFocusableRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl transform transition-transform duration-500 ease-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
            <h2 className="font-serif text-2xl">Your Cart ({itemCount})</h2>
            <button
              ref={firstFocusableRef}
              onClick={closeCart}
              className="p-2 -mr-2 text-warmgray-500 hover:text-ink transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-hairline mb-4" strokeWidth={1} />
              <p className="font-serif text-xl">Your cart is empty</p>
              <p className="mt-2 text-sm text-warmgray-500">
                Discover pieces crafted to be treasured.
              </p>
              <button
                onClick={closeCart}
                className="mt-8 px-8 py-3 bg-ink text-cream-50 text-sm font-medium tracking-widest uppercase hover:bg-ink-light transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {items.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    <div className="w-24 h-28 flex-shrink-0 bg-cream-200 flex items-center justify-center">
                      <Gem className="w-8 h-8 text-gold" strokeWidth={1.2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="product-name text-sm leading-tight pr-2">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-warmgray-400 hover:text-red-600 transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="mt-1 text-xs text-warmgray-500 capitalize">
                        {item.variant} tone
                      </p>
                      <p className="mt-1 text-sm text-warmgray-600">
                        {formatPrice(item.price)}
                      </p>
                      <div className="mt-3 inline-flex items-center border border-hairline">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-2 hover:bg-cream-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-2 hover:bg-cream-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-hairline px-6 py-6 bg-cream-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-warmgray-600">Subtotal</span>
                  <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-warmgray-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full py-4 bg-gold text-white text-sm font-medium tracking-widest uppercase hover:bg-gold-dark transition-colors">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full mt-3 py-3 border border-ink text-ink text-sm font-medium tracking-widest uppercase hover:bg-ink hover:text-cream-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
