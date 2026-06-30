import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal,
    clearCart 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 cart-backdrop"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-premium animate-slide-down flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-xl font-medium">
            Your Cart ({cartItems.length})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-velmora-text-muted mb-4" />
              <p className="font-serif text-lg text-velmora-text-secondary mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-velmora-text-muted mb-6">Discover our collection and find something you love</p>
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
                <div key={item.cartItemId} className="flex space-x-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-velmora-sand rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-serif text-sm font-medium leading-tight">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-velmora-text-muted hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {item.selectedVariant && (
                      <p className="font-sans text-xs text-velmora-text-secondary">
                        {item.selectedVariant}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-velmora-border rounded">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-velmora-sand transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 font-sans text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-velmora-sand transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-serif text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-velmora-border p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-velmora-text-secondary">Subtotal</span>
              <span className="font-serif text-lg font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-text-muted text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-primary">
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full font-sans text-sm text-velmora-text-muted hover:text-red-500 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
