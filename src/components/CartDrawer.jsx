import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, totalPrice, removeItem, updateQuantity, toggleDrawer } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => toggleDrawer(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-velmora-cream shadow-2xl transform transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
          <h2 className="font-serif text-xl text-velmora-black">Your Cart</h2>
          <button
            onClick={() => toggleDrawer(false)}
            className="text-velmora-stone hover:text-velmora-black transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-velmora-sand mb-4" />
              <p className="font-serif text-lg text-velmora-stone mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-stone/70">
                Discover our collection and add something beautiful.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-velmora-sand/50 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-pearl flex-shrink-0 flex items-center justify-center">
                    <span className="text-velmora-gold text-lg font-serif">V</span>
                  </div>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-velmora-black truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-stone mt-1">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-velmora-black mt-2">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium text-velmora-black w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-velmora-stone hover:text-velmora-rose transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-velmora-cream border-t border-velmora-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-velmora-stone">Subtotal</span>
              <span className="font-serif text-lg text-velmora-black">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-stone mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full text-center">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
