import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Minus, Plus } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, total, removeItem, updateQuantity, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-xl">Your Cart</h2>
            <button onClick={closeCart} className="hover:text-[#C9A96E] transition-premium">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <p className="text-center text-[#6B6B6B] mt-8">Your cart is empty</p>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wider uppercase">{item.name}</h3>
                      <p className="text-xs text-[#6B6B6B] mt-1">{item.variant}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-[#E5E5E5]">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-1 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-[#6B6B6B] hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-serif">Total</span>
                <span className="font-serif">${total.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-[#6B6B6B] mt-4 hover:text-[#1A1A1A]"
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
