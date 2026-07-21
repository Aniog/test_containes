import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    cartTotal, 
    cartCount,
    removeFromCart, 
    updateQuantity, 
    closeCart 
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-velmora-white z-50 transform transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-beige">
            <h2 className="font-serif text-xl tracking-wide">
              Your Cart ({cartCount})
            </h2>
            <button 
              onClick={closeCart}
              className="text-velmora-black hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-velmora-gray-light mb-4" />
                <p className="text-velmora-gray">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-4 text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wide">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velmora-gray mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-velmora-gray hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-velmora-beige p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-velmora-gold text-white py-3 font-sans text-sm tracking-wide uppercase hover:bg-velmora-gold-dark transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-velmora-gold text-velmora-gold py-3 font-sans text-sm tracking-wide uppercase hover:bg-velmora-gold hover:text-white transition-colors"
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
