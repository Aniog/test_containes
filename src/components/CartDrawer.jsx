import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, items, total, itemCount, removeFromCart, updateQuantity, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-charcoal/50 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl tracking-ultra-wide uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Bag ({itemCount})
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
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
                <p className="font-sans text-sm text-velmora-warm-gray tracking-wide">
                  Your bag is empty
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-6 text-xs tracking-ultra-wide uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4 pb-6 border-b border-velmora-border">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-velmora-soft-beige flex-shrink-0">
                      <img
                        src={item.images?.[0] || '/api/placeholder/96/96'}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3
                        className="font-serif text-sm tracking-wide uppercase mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-velmora-warm-gray mb-2">
                        {item.variant}
                      </p>
                      <p className="font-sans text-sm text-velmora-charcoal mb-3">
                        ${item.price}
                      </p>

                      {/* Quantity Control */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-sans text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="ml-auto text-xs text-velmora-warm-gray hover:text-red-500 transition-colors"
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
            <div className="border-t border-velmora-border p-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm tracking-wide uppercase">Total</span>
                <span className="font-serif text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-velmora-charcoal text-white py-4 font-sans text-xs tracking-ultra-wide uppercase hover:bg-velmora-gold transition-colors duration-300">
                Checkout
              </button>

              <Link
                to="/cart"
                onClick={closeCart}
                className="block text-center text-xs text-velmora-warm-gray hover:text-velmora-gold transition-colors"
              >
                View Bag
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
