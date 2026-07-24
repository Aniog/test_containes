import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    count,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]" aria-modal="true" role="dialog">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-stone-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-2xl tracking-wide">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart">
            <X size={22} className="text-velmora-dark hover:text-amber-700 transition-colors" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="font-serif text-xl text-velmora-dark mb-2">Your cart is empty</p>
            <p className="text-sm text-velmora-muted mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <button onClick={closeCart} className="btn-outline">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-stone-200 flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-widest truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-muted capitalize mt-0.5">
                      Tone: {item.tone}
                    </p>
                    <p className="text-sm text-velmora-dark mt-1">${item.price}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-stone-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-stone-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-sm min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-stone-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.tone)}
                        className="text-stone-400 hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 px-6 py-6 space-y-4 bg-white">
              <div className="flex items-center justify-between text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="btn-primary w-full">Checkout</button>
              <button onClick={closeCart} className="btn-outline w-full">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
