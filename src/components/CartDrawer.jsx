import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="cart-drawer open">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl font-light tracking-wider">
              Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button onClick={closeCart} className="hover:text-velmora-gold transition-colors duration-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-velmora-border mb-4" />
                <p className="font-serif text-lg text-velmora-charcoal-light mb-2">Your cart is empty</p>
                <p className="font-sans text-sm text-gray-500">Discover our collection and find something you love</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={`${item.product.id}-${item.variant}-${index}`} className="flex gap-4">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm font-medium tracking-wide uppercase mb-1">
                        {item.product.name}
                      </h3>
                      <p className="font-sans text-xs text-velmora-charcoal-light mb-2">
                        {item.variant}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-border">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-velmora-cream transition-colors duration-300"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 font-sans text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-velmora-cream transition-colors duration-300"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.product.id, item.variant)}
                          className="font-sans text-xs text-velmora-charcoal-light hover:text-red-500 transition-colors duration-300"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="font-serif text-sm font-medium mt-2">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-velmora-border">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm tracking-wide uppercase">Total</span>
                <span className="font-serif text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <Link 
                to="/checkout"
                className="btn-primary w-full text-center block"
                onClick={closeCart}
              >
                Proceed to Checkout
              </Link>
              <button 
                onClick={closeCart}
                className="w-full mt-3 font-sans text-sm text-velmora-charcoal-light hover:text-velmora-charcoal transition-colors duration-300"
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
