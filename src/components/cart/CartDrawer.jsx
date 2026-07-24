import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    items, 
    isOpen, 
    totalItems, 
    subtotal, 
    removeItem, 
    updateQuantity, 
    closeCart 
  } = useCart();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-espresso-900/50 backdrop-blur-sm"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream-50 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-cream-200">
            <h2 className="font-serif text-xl tracking-wider text-espresso-900 uppercase">
              Shopping Bag ({totalItems})
            </h2>
            <button 
              onClick={closeCart}
              className="p-2 -mr-2"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-espresso-700" />
            </button>
          </div>
          
          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-cream-400 mb-4" />
                <p className="text-espresso-500 mb-6">Your bag is empty</p>
                <Link 
                  to="/collections"
                  onClick={closeCart}
                  className="btn-primary"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-cream-200 rounded-md flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-cream-300 to-cream-400 rounded-md" />
                    </div>
                    
                    {/* Product details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-serif text-sm tracking-wider text-espresso-900 uppercase truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs text-espresso-500 mt-1">
                            {item.variantName}
                          </p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id, item.variant)}
                          className="p-1 -mr-1"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4 text-espresso-400" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-cream-300 rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 text-espresso-500 hover:text-espresso-700"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-sm font-medium text-espresso-900">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 text-espresso-500 hover:text-espresso-700"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <p className="font-medium text-espresso-900">
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
            <div className="border-t border-cream-200 px-6 py-4">
              <div className="flex justify-between mb-4">
                <span className="text-sm text-espresso-500">Subtotal</span>
                <span className="font-medium text-espresso-900">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-espresso-400 mb-6">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full btn-primary">
                Checkout
              </button>
              <button 
                onClick={closeCart}
                className="w-full mt-3 btn-outline"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
