import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[70] shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
            <h2 className="font-serif text-xl tracking-[0.1em] text-warm-black">
              Your Bag
            </h2>
            <button
              onClick={onClose}
              className="text-warm-gray hover:text-warm-black transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-warm-gray/40 mb-4" />
                <p className="text-warm-gray font-sans text-sm">Your bag is empty</p>
                <button onClick={onClose} className="btn-primary mt-6 text-xs">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-6 border-b border-warm-border last:border-b-0">
                    <div className="w-20 h-20 bg-warm-light rounded flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name truncate">{item.name}</h3>
                      <p className="text-xs text-warm-gray mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium text-warm-black mt-1">${item.price}</p>

                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-warm-border rounded">
                          <button
                            className="p-1.5 hover:bg-warm-light transition-colors"
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            className="p-1.5 hover:bg-warm-light transition-colors"
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-xs text-warm-gray hover:text-warm-black underline transition-colors"
                          onClick={() => removeItem(index)}
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
          {cart.length > 0 && (
            <div className="border-t border-warm-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-warm-gray">Subtotal ({totalItems} items)</span>
                <span className="text-lg font-serif font-semibold text-warm-black">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-warm-gray">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-warm-gray hover:text-warm-black underline transition-colors"
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