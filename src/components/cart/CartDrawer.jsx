import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-ivory shadow-2xl flex flex-col animate-slide-left">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-cream-dark">
          <h2 className="font-serif text-xl tracking-[0.1em]">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-stone-light mb-4" />
              <p className="font-serif text-lg mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-stone mb-6">
                Discover our curated collection of fine jewelry.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block bg-velmora-black text-white px-8 py-3 text-xs tracking-[0.15em] uppercase font-sans font-medium hover:bg-velmora-charcoal transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 animate-fade-in"
                >
                  {/* Image */}
                  <div className="w-20 h-20 bg-velmora-cream rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium tracking-wide truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-stone mt-0.5">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity - 1)
                        }
                        className="w-6 h-6 border border-velmora-cream-dark rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity + 1)
                        }
                        className="w-6 h-6 border border-velmora-cream-dark rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1 text-velmora-stone hover:text-velmora-black transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-velmora-cream-dark space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-stone">Subtotal</span>
              <span className="font-sans font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-stone">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-black text-white py-4 text-xs tracking-[0.15em] uppercase font-sans font-medium hover:bg-velmora-charcoal transition-colors">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-xs tracking-[0.1em] uppercase text-velmora-stone hover:text-velmora-gold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
