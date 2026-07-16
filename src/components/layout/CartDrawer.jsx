import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-cream)] shadow-2xl animate-slide-up flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border-light)]">
          <h2 className="serif-heading text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-[var(--velmora-bg-secondary)] rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-[var(--velmora-border)] mb-4" />
              <p className="serif-heading text-lg text-[var(--velmora-text-secondary)]">Your cart is empty</p>
              <p className="text-sm text-[var(--velmora-text-secondary)] mt-2">Discover our collection and find something you love.</p>
              <Link
                to="/shop"
                className="btn-primary mt-6"
                onClick={() => setIsCartOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--velmora-bg-secondary)] rounded overflow-hidden flex-shrink-0">
                    <img
                      data-strk-img-id={`cart-${item.productId}-${item.variant}`}
                      data-strk-img={`[cart-item-name-${item.productId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p id={`cart-item-name-${item.productId}`} className="product-name text-sm text-[var(--velmora-text)] truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-[var(--velmora-text-secondary)] mt-1 capitalize">
                      {item.variant} tone
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[var(--velmora-border-light)] rounded">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:bg-[var(--velmora-bg-secondary)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-[var(--velmora-bg-secondary)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-[var(--velmora-border-light)] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--velmora-text-secondary)]">Subtotal</span>
              <span className="serif-heading text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-secondary)]">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <Link
              to="/shop"
              className="block text-center text-xs tracking-widest uppercase text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
