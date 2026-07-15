import React from 'react';
import { X, Minus, Plus, ShoppingBag, Gem } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 text-stone-500 hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-stone-300 mb-4" />
              <p className="font-serif text-lg text-stone-500 mb-2">Your bag is empty</p>
              <p className="text-sm text-stone-400">Discover our curated collection</p>
              <button
                onClick={closeCart}
                className="btn-primary mt-6"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-stone-200/50"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-stone-100 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <Gem size={28} className="text-gold/50" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-product-name text-xs text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-stone-500 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-stone-300 rounded flex items-center justify-center text-stone-500 hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-stone-300 rounded flex items-center justify-center text-stone-500 hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-stone-400 hover:text-red-600 transition-colors uppercase tracking-wider"
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
          <div className="border-t border-stone-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-stone-600 uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-stone-400">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full text-center">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-stone-500 hover:text-gold transition-colors uppercase tracking-wider py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
