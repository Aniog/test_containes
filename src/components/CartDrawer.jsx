import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

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
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-velmora-ivory z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="font-serif text-lg">
                Your Cart ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-velmora-warm-gray mb-4" />
                <p className="text-velmora-text-light mb-2">Your cart is empty</p>
                <p className="text-sm text-velmora-warm-gray">
                  Discover our collection and find something you love
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.material}`}
                    className="flex space-x-4"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-velmora-cream rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 space-y-1">
                      <h3 className="text-sm font-medium product-name">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-text-light">
                        {item.material}
                      </p>
                      <p className="text-sm font-medium">
                        ${item.price}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.material, item.quantity - 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.material, item.quantity + 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.material)}
                      className="p-1 hover:text-red-500 transition-colors self-start"
                      aria-label="Remove item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer with Total and Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-gray-200 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total</span>
                <span className="font-serif text-xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              
              <button
                onClick={() => {
                  alert('Checkout functionality would be implemented here!');
                  closeCart();
                }}
                className="w-full btn-primary"
              >
                Proceed to Checkout
              </button>
              
              <button
                onClick={closeCart}
                className="w-full text-sm text-velmora-text-light hover:text-velmora-gold transition-colors"
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
