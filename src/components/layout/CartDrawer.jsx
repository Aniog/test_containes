import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-velmora-charcoal hover:text-velmora-gold transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-velmora-gold mb-4" />
                <p className="font-serif text-xl mb-2">Your cart is empty</p>
                <p className="text-sm text-gray-600 mb-6">Discover our collection of demi-fine jewelry</p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-primary"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.addedAt} className="flex space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wider uppercase mb-1">{item.name}</h3>
                      {item.variant && (
                        <p className="text-xs text-gray-600 mb-2">Variant: {item.variant}</p>
                      )}
                      <p className="font-serif text-lg mb-3">${item.price}</p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.addedAt, item.quantity - 1)}
                          className="p-1 border border-velmora-border hover:border-velmora-gold transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.addedAt, item.quantity + 1)}
                          className="p-1 border border-velmora-border hover:border-velmora-gold transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.addedAt)}
                          className="ml-auto text-sm text-gray-500 hover:text-red-500 transition-colors"
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
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-velmora-border">
              <div className="flex justify-between mb-4">
                <span className="font-sans text-sm uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-600 mb-4">Shipping & taxes calculated at checkout</p>
              <button className="w-full btn-gold mb-3">Checkout</button>
              <button
                onClick={clearCart}
                className="w-full text-sm text-gray-600 hover:text-red-500 transition-colors"
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
