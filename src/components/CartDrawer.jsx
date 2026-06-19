import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-md bg-ivory transform transition-transform duration-300 shadow-2xl ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-divider">
              <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
              <button onClick={onClose} aria-label="Close cart">
                <X className="w-5 h-5 text-charcoal/60 hover:text-charcoal transition-colors" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-10 h-10 text-warm-gray mb-4" />
                  <p className="text-warm-gray font-sans text-sm">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="mt-6 btn-outline text-xs"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {items.map((item) => (
                    <div key={item.cartId} className="flex gap-4 pb-5 border-b border-divider/50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={onClose}
                          className="block product-name truncate hover:text-gold transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-warm-gray font-sans mt-1">{item.variant}</p>
                        <p className="text-sm font-sans text-charcoal mt-1">${item.price}</p>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3 border border-divider px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              className="text-charcoal/60 hover:text-charcoal"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-sans w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              className="text-charcoal/60 hover:text-charcoal"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.cartId)}
                            className="text-xs text-warm-gray hover:text-charcoal font-sans transition-colors"
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
              <div className="border-t border-divider px-6 py-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-charcoal">Subtotal</span>
                  <span className="font-serif text-lg text-charcoal">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-warm-gray font-sans">Free shipping on all orders</p>
                <button className="btn-primary w-full text-center text-xs">
                  Checkout — ${totalPrice.toFixed(2)}
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-center text-xs uppercase tracking-[0.15em] text-warm-gray hover:text-charcoal font-sans transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}