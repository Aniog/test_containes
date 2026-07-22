import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, cartCount, cartTotal, closeCart, removeItem, updateQuantity } = useCart();

  const cartItems = Object.entries(items);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 shadow-drawer animate-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-stone hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-linen mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
              <p className="text-stone text-sm mb-6">Discover our collection of fine jewelry</p>
              <Link
                to="/collections"
                onClick={closeCart}
                className="px-6 py-3 bg-gold text-white text-btn uppercase tracking-btn font-sans hover:bg-gold-dark transition-colors duration-200 rounded-btn"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map(([key, item]) => (
                <div key={key} className="flex gap-4 pb-6 border-b border-linen last:border-b-0">
                  {/* Product Image Placeholder */}
                  <div className="w-20 h-24 bg-sand rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center text-stone/30 text-xs">
                      {item.product.name.split(' ')[0]}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-product-name uppercase text-charcoal font-sans">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-stone mt-1 font-sans">
                          {item.variant.name}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(key)}
                        className="p-1 text-stone hover:text-charcoal transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-linen rounded">
                        <button
                          onClick={() => updateQuantity(key, item.quantity - 1)}
                          className="p-2 text-stone hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-sans text-charcoal min-w-[32px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(key, item.quantity + 1)}
                          className="p-2 text-stone hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <p className="text-sm font-sans text-charcoal font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-stone font-sans">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-stone font-sans">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-gold text-white text-btn uppercase tracking-btn font-sans hover:bg-gold-dark transition-colors duration-200 rounded-btn">
              Proceed to Checkout
            </button>
            <Link
              to="/collections"
              onClick={closeCart}
              className="block w-full py-3 text-center border border-charcoal text-charcoal text-btn uppercase tracking-btn font-sans hover:bg-charcoal hover:text-white transition-colors duration-200 rounded-btn"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
