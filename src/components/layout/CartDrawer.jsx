import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartDrawer = () => {
  const { cartItems, isCartOpen, closeCart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    alert('Checkout functionality coming soon!');
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-velmora-cream z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="font-serif text-xl tracking-wider">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:text-velmora-gold transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-velmora-stone-light mb-4" />
                <p className="text-velmora-stone">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="mt-4 text-sm uppercase tracking-wider text-velmora-gold hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedMaterial}`} className="flex gap-4">
                    <img
                      src={item.images?.[0] || '/placeholder.jpg'}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-serif uppercase tracking-wider">{item.name}</h3>
                      <p className="text-xs text-velmora-stone mt-1">{item.selectedMaterial}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-medium">${item.price}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedMaterial, item.quantity - 1)}
                            className="p-1 hover:text-velmora-gold"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedMaterial, item.quantity + 1)}
                            className="p-1 hover:text-velmora-gold"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedMaterial)}
                        className="text-xs text-velmora-stone hover:text-red-500 mt-2"
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
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-between mb-4">
                <span className="text-sm uppercase tracking-wider">Total</span>
                <span className="text-lg font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-velmora-charcoal text-white py-3 uppercase tracking-wider text-sm hover:bg-velmora-charcoalLight transition-colors"
              >
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-2 text-sm text-velmora-stone hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
