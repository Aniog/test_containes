import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[70] shadow-2xl transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
            <h2 className="font-serif text-xl tracking-widest uppercase">Your Cart</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-velmora-stone hover:text-velmora-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-sand mb-4" />
                <p className="font-serif text-lg text-velmora-stone">Your cart is empty</p>
                <p className="text-sm text-velmora-muted mt-1">Add something beautiful.</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-6 px-8 py-3 bg-velmora-gold text-white text-xs font-semibold tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-velmora-warm flex-shrink-0 flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-velmora-sand" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={() => setIsOpen(false)}
                        className="font-serif text-sm tracking-widest uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-velmora-stone mt-0.5 capitalize">{item.tone} tone</p>
                      <p className="text-sm font-medium text-velmora-charcoal mt-1">${item.price}</p>

                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-velmora-sand">
                          <button
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="px-2 py-1 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="px-2 py-1 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-velmora-stone hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
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
            <div className="px-6 py-5 border-t border-velmora-sand">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-velmora-stone">Subtotal</span>
                <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted mb-4">Shipping and taxes calculated at checkout.</p>
              <button className="w-full py-4 bg-velmora-gold text-white text-xs font-semibold tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 mt-2 border border-velmora-charcoal text-velmora-charcoal text-xs font-semibold tracking-widest uppercase hover:bg-velmora-charcoal hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
