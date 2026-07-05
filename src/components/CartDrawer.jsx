import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[rgb(var(--color-background))] z-50 shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[rgb(var(--color-border))]">
            <h2 className="text-lg tracking-wider uppercase" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Your Cart ({cartItems.length})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-[rgb(var(--color-muted))]">
                <ShoppingBag size={64} strokeWidth={1} />
                <p className="mt-4 text-lg">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm tracking-wider uppercase mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {item.name}
                      </h3>
                      <p className="text-sm text-[rgb(var(--color-muted))] mb-2">${item.price}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:opacity-70 transition-opacity"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:opacity-70 transition-opacity"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-foreground))] transition-colors mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[rgb(var(--color-border))]">
              <div className="flex justify-between mb-4">
                <span className="tracking-wider uppercase text-sm">Total</span>
                <span className="text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-[rgb(var(--color-foreground))] text-[rgb(var(--color-background))] py-3 tracking-wider uppercase text-sm hover:bg-[rgb(var(--color-accent))] transition-colors duration-300">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
