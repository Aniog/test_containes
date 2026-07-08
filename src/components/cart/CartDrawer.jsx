import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    cartCount,
    isCartOpen, 
    setIsCartOpen 
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
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl animate-[slideInRight_0.3s_ease-out]">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-xl">
              Your Cart ({cartCount})
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="hover:text-velmora-gold transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-velmora-border mb-4" />
                <p className="text-velmora-charcoal-light">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                      <p className="text-xs text-velmora-charcoal-light mt-1">{item.variant}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-medium">${item.price}</span>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:text-velmora-gold"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:text-velmora-gold"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-velmora-charcoal-light hover:text-red-500 mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <Link 
                to="/checkout"
                className="btn-primary w-full text-center block"
                onClick={() => setIsCartOpen(false)}
              >
                Checkout
              </Link>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center mt-3 text-sm text-velmora-charcoal-light hover:text-velmora-charcoal"
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
