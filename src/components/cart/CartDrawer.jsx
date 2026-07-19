import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, totalItems, totalPrice, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-velmora-base/50 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone-lighter/30">
          <h2 className="font-serif text-xl tracking-wide">
            Shopping Bag ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-velmora-stone hover:text-velmora-base transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag size={48} className="text-velmora-stone-lighter mb-4" />
              <p className="font-serif text-lg text-velmora-stone mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-stone-light">Discover pieces you'll love</p>
              <button
                onClick={onClose}
                className="mt-6 bg-velmora-base text-velmora-cream px-8 py-3 text-xs tracking-ultra-wide uppercase font-medium hover:bg-velmora-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="divide-y divide-velmora-stone-lighter/20">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4 px-6 py-5">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-velmora-warm flex-shrink-0 flex items-center justify-center">
                    <span className="text-velmora-stone-light text-xs">Image</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-sm tracking-wide text-velmora-base">{item.name}</h3>
                      <p className="text-xs text-velmora-stone mt-0.5">{item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-velmora-stone-lighter/50">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1.5 text-velmora-stone hover:text-velmora-base transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm text-velmora-base">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 text-velmora-stone hover:text-velmora-base transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-velmora-base">${(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => removeItem(index)}
                          className="text-xs text-velmora-stone hover:text-red-500 transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-stone-lighter/30 px-6 py-5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-velmora-stone">Subtotal</span>
              <span className="font-serif text-lg text-velmora-base">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-stone-light mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-velmora-base py-3.5 text-xs tracking-ultra-wide uppercase font-medium hover:bg-velmora-gold-light transition-colors">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full mt-2 border border-velmora-base/30 text-velmora-base py-3 text-xs tracking-ultra-wide uppercase font-medium hover:border-velmora-base transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
