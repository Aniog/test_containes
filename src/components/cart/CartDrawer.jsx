import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#faf8f5] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e5e0db]">
          <h2 className="serif-heading text-xl">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:text-[#c9a96e] transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-gray-300 mb-4" />
              <p className="text-gray-500 mb-2">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-wider uppercase text-[#c9a96e] hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-xs text-gray-500 capitalize mb-2">{item.variant} tone</p>
                    <p className="text-sm font-medium mb-3">${item.price}</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 border border-[#e5e0db] flex items-center justify-center hover:border-[#c9a96e] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 border border-[#e5e0db] flex items-center justify-center hover:border-[#c9a96e] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-gray-400 hover:text-red-500 transition-colors underline"
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
        {items.length > 0 && (
          <div className="border-t border-[#e5e0db] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm tracking-wider uppercase">Subtotal</span>
              <span className="serif-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500">Shipping & taxes calculated at checkout</p>
            <button className="btn-dark w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-sm tracking-wider uppercase text-center py-2 text-gray-500 hover:text-[#c9a96e] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
