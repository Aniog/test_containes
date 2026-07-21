import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-serif text-2xl uppercase tracking-wider">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 250px)' }}>
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 uppercase tracking-wider">Your cart is empty</p>
              <Link
                to="/shop"
                className="btn-primary inline-block mt-6"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div key={index} className="flex gap-4 pb-6 border-b border-gray-200">
                  {/* Product Image */}
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                      {item.product.name}
                    </h3>
                    {item.variant && (
                      <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">
                        {item.variant}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 mb-3">${item.product.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="p-1 hover:text-velmora-gold transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="p-1 hover:text-velmora-gold transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(index)}
                    className="p-1 hover:text-red-500 transition-colors self-start"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex items-center justify-between font-serif text-xl">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full btn-primary text-center">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-center text-sm uppercase tracking-wider hover:text-velmora-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}