import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { 
    isOpen, 
    items, 
    totalItems, 
    totalPrice, 
    closeCart, 
    removeFromCart, 
    updateQuantity 
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl animate-slide-down">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-border">
            <h2 className="font-serif text-2xl font-medium">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="text-charcoal hover:text-gold transition-colors duration-300"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-gray-warm mb-4" />
                <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
                <p className="font-sans text-sm text-gray-warm mb-8">
                  Discover our collection and find your perfect piece
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-primary"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-light rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-serif text-sm font-medium">{item.name}</h3>
                          <p className="font-sans text-xs text-gray-warm capitalize">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-gray-warm hover:text-charcoal transition-colors duration-300"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Selector */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-border flex items-center justify-center hover:border-gold transition-colors duration-300"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-sans text-sm w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-border flex items-center justify-center hover:border-gold transition-colors duration-300"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-serif text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-border p-6 space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-gray-warm">Subtotal</span>
                <span className="font-serif text-lg font-medium">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="font-sans text-xs text-gray-warm">
                Shipping & taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full text-center block"
              >
                Proceed to Checkout
              </Link>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full font-sans text-sm text-gray-warm hover:text-charcoal transition-colors duration-300"
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