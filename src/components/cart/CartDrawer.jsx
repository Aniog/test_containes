import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button onClick={onClose} className="hover:opacity-70 transition-opacity">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="w-16 h-16 mx-auto text-velmora-warm-gray mb-4" />
                <p className="text-velmora-warm-gray">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="inline-block mt-4 text-velmora-gold hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-velmora-cream"
                    />
                    <div className="flex-1 space-y-2">
                      <h3 className="text-sm uppercase tracking-wider">{item.name}</h3>
                      {item.variant && (
                        <p className="text-xs text-velmora-warm-gray">{item.variant}</p>
                      )}
                      <p className="text-lg font-light">${item.price}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                          className="p-1 hover:opacity-70"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                          className="p-1 hover:opacity-70"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="self-start hover:opacity-70"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-velmora-border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-wider">Total</span>
                <span className="text-2xl font-light">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-velmora-black text-white py-4 text-sm uppercase tracking-wider font-medium hover:bg-velmora-charcoal transition-colors">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-sm text-velmora-warm-gray hover:text-velmora-black transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
