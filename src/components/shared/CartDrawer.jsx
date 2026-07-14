import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalPrice, totalItems, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream z-[70] shadow-xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-beige">
            <h2 className="font-cormorant text-xl uppercase tracking-wider">
              Cart ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="p-1 hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-taupe/30 mb-4" />
                <p className="text-taupe font-inter text-sm">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="mt-4 text-xs uppercase tracking-widest text-gold hover:text-gold-dark transition-colors"
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-beige flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="text-xs uppercase tracking-widest font-medium text-charcoal hover:text-gold transition-colors block truncate"
                      >
                        {item.name}
                      </Link>
                      {item.variant && (
                        <p className="text-[11px] text-taupe mt-0.5">{item.variant}</p>
                      )}
                      <p className="text-sm font-medium text-charcoal mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-beige">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="px-2 py-1 hover:bg-beige transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="px-2 py-1 hover:bg-beige transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-[11px] uppercase tracking-wider text-taupe hover:text-red-muted transition-colors"
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
            <div className="border-t border-beige px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-wider text-taupe">Subtotal</span>
                <span className="text-lg font-medium font-cormorant">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-taupe">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-charcoal text-cream uppercase tracking-widest text-xs py-3.5 hover:bg-charcoal/90 transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors py-2"
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