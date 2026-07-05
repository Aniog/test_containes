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
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-xl animate-slide-down">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl">Your Cart ({cartItems.length})</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="hover:text-velmora-gold transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag size={48} className="mx-auto text-velmora-taupe mb-4" />
                <p className="text-velmora-text-light">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <h3 className="text-sm uppercase tracking-wider mb-1">{item.name}</h3>
                      <p className="text-sm text-velmora-text-light mb-2">${item.price}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                            className="p-1 hover:text-velmora-gold"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                            className="p-1 hover:text-velmora-gold"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-velmora-text-light hover:text-red-500"
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
                <span className="uppercase tracking-wider text-sm">Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="block w-full bg-velmora-gold text-white text-center py-3 uppercase tracking-wider text-sm hover:bg-velmora-gold-dark transition-colors"
                onClick={() => setIsCartOpen(false)}
              >
                Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center py-3 text-sm text-velmora-text-light hover:text-velmora-gold mt-2"
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
