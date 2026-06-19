import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-velmora-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-velmora-ivory shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/30">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4 text-velmora-dark" />
            <h2 className="font-serif text-lg text-velmora-dark">Your Bag</h2>
            <span className="font-sans text-xs text-velmora-stone">
              ({items.reduce((s, i) => s + i.quantity, 0)})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-stone hover:text-velmora-dark transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag className="w-10 h-10 text-velmora-sand mb-4" />
              <p className="font-serif text-lg text-velmora-dark mb-2">
                Your bag is empty
              </p>
              <p className="font-sans text-sm text-velmora-stone">
                Discover our collection and find something you love.
              </p>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="flex gap-4 py-4 border-b border-velmora-sand/20 last:border-0"
                >
                  <div className="w-20 h-20 bg-velmora-cream rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-product-name text-sm text-velmora-dark truncate">
                      {item.product.name}
                    </h3>
                    <p className="font-sans text-xs text-velmora-stone mt-0.5">
                      {item.variant}
                    </p>
                    <p className="font-sans text-sm font-medium text-velmora-dark mt-1">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-sand/40 rounded text-velmora-stone hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm text-velmora-dark w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-sand/40 rounded text-velmora-stone hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto font-sans text-xs text-velmora-stone underline hover:text-velmora-dark transition-colors"
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
          <div className="border-t border-velmora-sand/30 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-velmora-stone uppercase tracking-wider">
                Subtotal
              </span>
              <span className="font-serif text-lg text-velmora-dark">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-xs text-velmora-stone">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-gold w-full text-center">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-sans text-xs text-velmora-stone uppercase tracking-wider hover:text-gold transition-colors text-center py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
