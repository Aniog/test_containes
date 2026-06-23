import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function CartDrawer() {
  const { 
    items, 
    isOpen, 
    total, 
    itemCount, 
    toggleCart, 
    closeCart, 
    removeFromCart, 
    updateQuantity 
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Cart Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-serif uppercase tracking-widest">
              Cart ({itemCount})
            </h2>
            <button 
              onClick={closeCart}
              className="text-2xl hover:text-velmora-gold transition-colors"
            >
              ×
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link 
                  to="/shop" 
                  onClick={closeCart}
                  className="text-velmora-gold hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.cartId} className="flex gap-4 border-b pb-6">
                    <div className="w-20 h-20 bg-velmora-beige rounded-md flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-velmora-gray">IMG</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wide mb-1">{item.name}</h3>
                      <p className="text-xs text-gray-600 mb-2">Material: {item.variant}</p>
                      <p className="text-velmora-gold font-semibold">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-velmora-gold"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-velmora-gold"
                        >
                          +
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="ml-auto text-sm text-gray-500 hover:text-red-500"
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
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-velmora-gold">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-velmora-charcoal text-white py-3 uppercase tracking-wider hover:bg-velmora-gold transition-colors">
                Checkout
              </button>
              <button 
                onClick={closeCart}
                className="w-full border border-velmora-charcoal text-velmora-charcoal py-3 uppercase tracking-wider hover:bg-velmora-charcoal hover:text-white transition-colors"
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

export default CartDrawer;
