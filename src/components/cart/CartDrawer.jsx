import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
            <h2 className="font-serif text-2xl text-velmora-charcoal">
              Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-velmora-taupe mb-4" />
                <p className="font-serif text-xl text-velmora-charcoal mb-2">
                  Your cart is empty
                </p>
                <p className="font-sans text-sm text-velmora-muted">
                  Discover our collection and find your perfect piece
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={`${item.product.id}-${item.variant}-${index}`} className="flex space-x-4">
                    {/* Product Image */}
                    <div className="w-24 h-32 bg-velmora-cream flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal mb-1">
                        {item.product.name}
                      </h3>
                      {item.variant && (
                        <p className="font-sans text-xs text-velmora-muted mb-2">
                          {item.variant}
                        </p>
                      )}
                      <p className="font-serif text-lg text-velmora-charcoal mb-3">
                        ${item.product.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 border border-velmora-taupe flex items-center justify-center hover:border-velmora-gold transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-sans text-sm w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 border border-velmora-taupe flex items-center justify-center hover:border-velmora-gold transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="font-sans text-xs text-velmora-muted hover:text-red-500 transition-colors mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with Total & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-velmora-sand">
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-velmora-charcoal">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="font-sans text-xs text-velmora-muted mb-4 text-center">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full bg-velmora-gold text-white py-4 font-sans text-sm uppercase tracking-wider hover:bg-velmora-gold-dark transition-colors mb-3">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full border border-velmora-charcoal text-velmora-charcoal py-4 font-sans text-sm uppercase tracking-wider hover:bg-velmora-charcoal hover:text-white transition-colors"
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
