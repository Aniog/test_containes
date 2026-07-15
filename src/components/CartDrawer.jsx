import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-xl">Your Cart ({cartItems.length})</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="hover:text-velmora-gold transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedVariant}`} className="flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm uppercase tracking-wider font-light">{item.name}</h3>
                      {item.selectedVariant && (
                        <p className="text-xs text-gray-500 mt-1">{item.selectedVariant}</p>
                      )}
                      <p className="text-sm mt-2">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedVariant, item.quantity - 1)}
                          className="p-1 hover:text-velmora-gold"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedVariant, item.quantity + 1)}
                          className="p-1 hover:text-velmora-gold"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedVariant)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t">
              <div className="flex justify-between mb-4">
                <span className="text-sm uppercase tracking-wider">Total</span>
                <span className="font-light">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-velmora-charcoal text-white py-3 uppercase tracking-ultra-wide text-sm font-light hover:bg-velmora-gold-dark transition-colors">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-2 border border-velmora-charcoal text-velmora-charcoal py-3 uppercase tracking-ultra-wide text-sm font-light hover:bg-velmora-charcoal hover:text-white transition-colors"
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
