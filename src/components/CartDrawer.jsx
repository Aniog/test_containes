import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    totalItems,
    totalPrice,
    removeFromCart,
    updateQuantity,
    closeCart,
    clearCart
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="cart-drawer-overlay fixed inset-0 bg-black/50 z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`cart-drawer fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-premium-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-serif text-xl">
              Shopping Bag ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="text-charcoal hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-border mb-4" />
                <p className="text-charcoal-light font-serif text-lg mb-2">
                  Your bag is empty
                </p>
                <p className="text-sm text-charcoal-light">
                  Discover our collection and find something you love
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-32 bg-cream rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-charcoal-light mb-2">{item.variant}</p>
                      <p className="font-serif text-sm mb-3">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-8 h-8 border border-border flex items-center justify-center hover:border-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-8 h-8 border border-border flex items-center justify-center hover:border-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-charcoal-light hover:text-gold mt-2 underline"
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
            <div className="p-6 border-t border-border">
              <div className="flex justify-between mb-4">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full text-center block"
              >
                Checkout
              </Link>
              <button
                onClick={clearCart}
                className="text-xs text-charcoal-light hover:text-gold mt-3 underline w-full text-center"
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
