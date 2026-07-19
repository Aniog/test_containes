import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-velmora-charcoal/40" onClick={() => setIsCartOpen(false)} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-ivory flex flex-col animate-[slideInRight_0.3s_ease]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/50">
          <h2 className="font-serif text-xl tracking-wide text-velmora-espresso">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart" className="p-1">
            <X className="w-5 h-5 text-velmora-espresso" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-velmora-taupe mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-stone">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-sand/40 rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs tracking-widest uppercase font-medium text-velmora-espresso truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-velmora-taupe mt-0.5 capitalize">{item.variant} tone</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 border border-velmora-sand/60 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-velmora-espresso hover:bg-velmora-sand/30"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-velmora-espresso hover:bg-velmora-sand/30"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-1 text-velmora-stone hover:text-velmora-espresso"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-medium text-velmora-espresso">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-sand/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-taupe">Subtotal</span>
              <span className="font-serif text-lg text-velmora-espresso">${cartTotal}</span>
            </div>
            <p className="text-xs text-velmora-stone mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="w-full py-3.5 bg-velmora-espresso text-velmora-ivory text-xs tracking-widest uppercase font-medium hover:bg-velmora-charcoal transition-colors rounded-sm">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
