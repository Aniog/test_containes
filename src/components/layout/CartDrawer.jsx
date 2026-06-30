import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-base-charcoal/40 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-base-cream z-50 shadow-elevated transform transition-transform duration-300 ease-smooth flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-base-sand">
          <h2 className="font-display text-xl font-medium">Shopping Bag ({cartCount})</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:text-gold transition-colors duration-200"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-base-subtle mb-4" />
              <p className="text-base-muted font-medium mb-2">Your bag is empty</p>
              <p className="text-sm text-base-subtle mb-6">
                Discover our collection and find something you love.
              </p>
              <button onClick={closeCart} className="btn-outline">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product image */}
                  <div className="w-24 h-32 bg-base-paper flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-base font-medium text-base-charcoal">
                          {item.name}
                        </h3>
                        <p className="text-xs text-base-muted mt-1 uppercase tracking-wider">
                          {item.variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-base-subtle hover:text-base-charcoal transition-colors duration-200"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-base-sand">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-base-paper transition-colors duration-200"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-base-paper transition-colors duration-200"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <p className="font-medium text-base-charcoal">
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
          <div className="border-t border-base-sand px-6 py-6 space-y-4">
            <div className="flex items-center justify-between text-base-charcoal">
              <span className="font-medium">Subtotal</span>
              <span className="font-display text-xl font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-base-muted">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="btn-primary w-full">Checkout</button>
            <button
              onClick={closeCart}
              className="btn-outline w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
