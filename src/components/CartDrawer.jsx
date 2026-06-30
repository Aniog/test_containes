import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
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
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-medium">
              Your Cart ({getCartCount()})
            </h2>
            <button
              onClick={onClose}
              className="text-velmora-gray-500 hover:text-velmora-charcoal transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-velmora-gray-300 mb-4" />
                <p className="text-velmora-gray-500">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="inline-block mt-6 text-sm text-velmora-gold hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-velmora-cream"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-sm text-velmora-gray-500">${item.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-velmora-gray-400 hover:text-red-500 transition-colors"
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
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <button
                onClick={clearCart}
                className="text-sm text-velmora-gray-500 hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                onClick={onClose}
                className="block w-full bg-velmora-charcoal text-white text-center py-4 text-sm tracking-widest uppercase hover:bg-black transition-colors"
              >
                Proceed to Checkout
              </Link>
              <Link
                to="/shop"
                onClick={onClose}
                className="block text-center text-sm text-velmora-gray-500 hover:text-velmora-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
