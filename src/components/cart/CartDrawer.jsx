import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, total, itemCount, removeItem, updateQuantity, closeCart, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-charcoal/10">
            <h2 className="font-serif text-xl tracking-wide uppercase">
              Cart ({itemCount})
            </h2>
            <button onClick={closeCart} className="text-velmora-charcoal hover:text-velmora-gold transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-velmora-warm-gray/30 mb-4" />
                <p className="text-velmora-warm-gray mb-2">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="text-velmora-gold hover:text-velmora-gold-dark transition-colors text-sm uppercase tracking-wide"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wide uppercase mb-1">{item.name}</h3>
                      <p className="text-sm text-velmora-warm-gray mb-2">${item.price}</p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-velmora-warm-gray hover:text-red-500 transition-colors mt-2"
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
          {items.length > 0 && (
            <div className="p-6 border-t border-velmora-charcoal/10">
              <div className="flex justify-between items-center mb-4">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">${total.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full bg-velmora-charcoal text-white text-center py-3 font-sans text-sm tracking-wider uppercase hover:bg-velmora-gold transition-colors duration-300"
              >
                Checkout
              </Link>
              <button
                onClick={clearCart}
                className="block w-full text-center py-3 text-sm text-velmora-warm-gray hover:text-velmora-charcoal transition-colors mt-2"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
