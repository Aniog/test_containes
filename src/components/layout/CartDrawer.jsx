import React from 'react';
import { X, Minus, Plus, ShoppingBag, Gem } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-black/50 transition-opacity duration-400 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-velmora-white shadow-drawer transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-hairline border-velmora-light/30">
            <h2 className="font-serif text-heading-md text-velmora-charcoal">
              Your Cart
              <span className="ml-3 text-body-sm text-velmora-muted font-sans font-normal">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            </h2>
            <button
              onClick={closeCart}
              className="p-2 text-velmora-muted hover:text-velmora-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-light mb-4" />
                <p className="font-serif text-heading-sm text-velmora-charcoal mb-2">
                  Your cart is empty
                </p>
                <p className="text-body-sm text-velmora-muted mb-8">
                  Looks like you haven't added any treasures yet.
                </p>
                <button onClick={closeCart} className="btn-secondary text-[11px]">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-hairline border-velmora-light/20"
                  >
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 flex items-center justify-center">
                      <Gem className="w-8 h-8 text-velmora-gold/40" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-body-sm uppercase tracking-[0.12em] text-velmora-charcoal truncate">
                        {item.name}
                      </p>
                      <p className="text-caption text-velmora-muted mt-0.5 font-sans">
                        {item.variant}
                      </p>
                      <p className="text-body font-sans font-medium text-velmora-charcoal mt-1">
                        {formatPrice(item.price)}
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-velmora-light/40">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-caption font-sans text-velmora-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-caption text-velmora-muted hover:text-velmora-charcoal font-sans underline underline-offset-2 transition-colors"
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
            <div className="px-6 py-6 border-t border-hairline border-velmora-light/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-body-sm text-velmora-muted font-sans uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="font-serif text-heading-sm text-velmora-charcoal">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <p className="text-caption text-velmora-muted font-sans mb-5">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-body-sm text-velmora-muted hover:text-velmora-charcoal font-sans mt-4 transition-colors"
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
