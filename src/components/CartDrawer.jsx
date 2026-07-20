import React, { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useImageLoader } from '@/hooks/useImageLoader';
import Price from './ui/Price';

const CartDrawer = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, count } = useCart();
  const containerRef = useImageLoader([isOpen, items.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div ref={containerRef}>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-sm transition-opacity"
            onClick={closeCart}
            aria-hidden="true"
          />
        )}
        <div
          className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-lift transform transition-transform duration-500 ease-in-out-cubic ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-stone-200">
            <h2 className="font-serif text-2xl text-stone-900">Your Cart</h2>
            <button
              type="button"
              onClick={closeCart}
              className="p-1 text-stone-500 hover:text-stone-900 transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-8 gap-4">
              <ShoppingBag size={40} className="text-stone-300" />
              <p className="font-serif text-xl text-stone-900">Your cart is empty</p>
              <p className="text-sm text-stone-500">Discover pieces crafted to be treasured.</p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 px-8 py-3 bg-gold-500 text-white font-sans text-xs uppercase tracking-widest hover:bg-gold-600 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    <div className="w-20 h-24 bg-champagne flex-shrink-0 flex items-center justify-center">
                      <span className="font-serif text-lg text-stone-400">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-base text-stone-900">{item.name}</h3>
                        <button
                          type="button"
                          onClick={() => removeItem(item.cartItemId)}
                          className="text-stone-400 hover:text-stone-700"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-stone-500 uppercase tracking-wide mt-1">
                        {item.tone} tone
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="inline-flex items-center border border-stone-200 bg-white">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="h-8 w-8 flex items-center justify-center text-stone-500 hover:text-stone-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm text-stone-900">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="h-8 w-8 flex items-center justify-center text-stone-500 hover:text-stone-900"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <Price amount={item.price * item.quantity} className="text-sm" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-stone-200 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-sm uppercase tracking-widest text-stone-500">
                    Subtotal
                  </span>
                  <Price amount={subtotal} className="text-lg font-medium" />
                </div>
                <p className="text-xs text-stone-500 mb-5">Shipping & taxes calculated at checkout.</p>
                <button
                  type="button"
                  className="w-full py-4 bg-gold-500 text-white font-sans text-xs uppercase tracking-widest hover:bg-gold-600 transition-colors"
                >
                  Checkout — {count} item{count !== 1 ? 's' : ''}
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full mt-3 py-3 border border-stone-900 text-stone-900 font-sans text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
