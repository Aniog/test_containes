import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, closeCart, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-cream shadow-2xl transition-transform duration-400 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-charcoal" />
            <h2 className="font-serif text-lg tracking-wide text-charcoal">
              Your Bag
            </h2>
            <span className="font-sans text-xs text-warm-gray">
              ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-warm-gray hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-warm-gray-light mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
              <p className="font-sans text-sm text-warm-gray mb-6">
                Looks like you haven&apos;t added any treasures yet.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary text-xs"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="flex gap-4 py-4 border-b border-border/60 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-cream-dark rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                      <span className="font-serif text-gold/40 text-xs">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="font-sans text-sm font-medium text-charcoal hover:text-gold transition-colors block truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="font-sans text-xs text-warm-gray mt-0.5">
                      {item.variant}
                    </p>
                    <p className="font-sans text-sm font-medium text-charcoal mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-sans text-xs w-8 text-center text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="p-1.5 text-warm-gray-light hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
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
          <div className="px-6 py-5 border-t border-border bg-cream-dark/50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm text-warm-gray uppercase tracking-wider">
                Subtotal
              </span>
              <span className="font-serif text-xl text-charcoal">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-xs text-warm-gray mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-primary py-3.5 text-sm">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 text-center font-sans text-xs text-warm-gray hover:text-charcoal transition-colors tracking-wider uppercase py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
