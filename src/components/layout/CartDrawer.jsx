import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-velmora-cream z-50 animate-slide-in-right shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-warm">
            <h2 className="font-serif text-xl tracking-wide">
              YOUR BAG ({totalItems})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-velmora-warm rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-velmora-stone-light mb-4" />
                <p className="font-serif text-lg text-velmora-charcoal mb-2">Your bag is empty</p>
                <p className="text-velmora-stone text-sm">Discover our collection of demi-fine jewelry</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wide text-velmora-charcoal">
                        {item.name}
                      </h3>
                      <p className="text-velmora-stone text-xs mt-1">{item.variant}</p>
                      <p className="text-velmora-charcoal font-medium mt-2">${item.price}</p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-stone-light rounded hover:bg-velmora-warm transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-stone-light rounded hover:bg-velmora-warm transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-velmora-stone hover:text-velmora-base text-xs underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-velmora-warm p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-stone">Subtotal</span>
                <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-velmora-stone text-xs mb-4">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-velmora-base text-white py-4 text-xs tracking-ultra-wide uppercase hover:bg-velmora-charcoal transition-colors duration-300">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full mt-3 text-velmora-stone hover:text-velmora-base text-xs tracking-wide uppercase underline transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
