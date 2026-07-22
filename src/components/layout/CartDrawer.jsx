import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { 
    cart, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    isLoading 
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream-100 shadow-hover transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
            <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
                <ShoppingBag className="w-16 h-16 text-taupe mb-6" strokeWidth={1} />
                <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
                <p className="text-charcoal-light text-sm mb-8">
                  Discover our collection of demi-fine jewelry
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-secondary text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-taupe">
                {cart.map((item) => (
                  <li key={`${item.id}-${item.selectedColor}`} className="p-6">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-white flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="product-name text-base mb-1">{item.name}</h3>
                        <p className="text-charcoal-light text-sm mb-3">
                          {item.selectedColor}
                        </p>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-taupe">
                            <button
                              onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                              className="p-2 text-charcoal hover:text-gold transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" strokeWidth={1.5} />
                            </button>
                            <span className="px-3 text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                              className="p-2 text-charcoal hover:text-gold transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" strokeWidth={1.5} />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="font-sans font-medium text-charcoal">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedColor)}
                        className="p-1 text-charcoal-light hover:text-gold transition-colors self-start"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-taupe px-6 py-6 bg-white">
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-sm text-charcoal-light">Subtotal</span>
                <span className="font-serif text-xl text-charcoal">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal-light mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button
                className="btn-primary w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Adding...' : 'Checkout'}
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 text-sm text-charcoal-light hover:text-gold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
