import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    cartTotal,
    removeFromCart,
    updateQuantity,
    closeCart
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#e8e3dd]">
            <h2 className="font-serif text-xl">Your Cart ({items.length})</h2>
            <button onClick={closeCart} className="text-[#2d2d2d] hover:text-[#c9a96e] transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-[#8a8a8a] mb-4" />
                <p className="text-[#8a8a8a]">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#8a8a8a] mb-2">${item.price}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-[#c9a96e]"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-[#c9a96e]"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[#8a8a8a] hover:text-red-500 mt-2"
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
          {items.length > 0 && (
            <div className="p-6 border-t border-[#e8e3dd]">
              <div className="flex justify-between mb-4">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#c9a96e] text-white py-4 uppercase tracking-wider text-sm hover:bg-[#b8945a] transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
