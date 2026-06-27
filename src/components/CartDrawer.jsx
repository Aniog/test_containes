import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-[110] transition-opacity duration-300 opacity-100"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-velmora-cream z-[120] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] translate-x-0"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <h2 className="font-serif text-xl font-medium tracking-wide text-velmora-charcoal">
              Your Cart ({items.length})
            </h2>
            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="text-velmora-charcoal hover:text-velmora-warm-gray transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-velmora-warm-gray">
                <ShoppingBag className="w-10 h-10 mb-3 opacity-40" />
                <p className="font-sans text-sm">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="mt-4 font-sans text-xs font-medium tracking-[0.1em] uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.tone}`}
                    className="flex gap-4 pb-5 border-b border-velmora-border"
                  >
                    <div className="w-[80px] h-[100px] bg-velmora-cream-dark rounded-sm flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-velmora-cream-dark flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border border-velmora-gold/30 flex items-center justify-center">
                          <div className="w-2 h-2 bg-velmora-gold rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-serif text-[14px] font-medium tracking-[0.06em] uppercase text-velmora-charcoal">
                            {item.name}
                          </p>
                          <p className="font-sans text-[11px] text-velmora-warm-gray mt-0.5 capitalize">
                            {item.tone} / {item.category}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-velmora-warm-gray hover:text-velmora-charcoal transition-colors mt-0.5"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 border border-velmora-border rounded-full px-2 py-0.5">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.tone, item.quantity - 1)
                            }
                            className="w-5 h-5 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-charcoal"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-sans text-[12px] font-medium w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.tone, item.quantity + 1)
                            }
                            className="w-5 h-5 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-charcoal"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-sans text-[13px] font-medium text-velmora-charcoal">
                          ${(item.price * item.quantity).toFixed(0)}
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
            <div className="px-6 py-5 border-t border-velmora-border">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-[13px] text-velmora-warm-gray">Subtotal</span>
                <span className="font-sans text-[15px] font-semibold text-velmora-charcoal">
                  ${subtotal.toFixed(0)}
                </span>
              </div>
              <p className="font-sans text-[11px] text-velmora-warm-gray mb-4 text-center">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full py-3.5 bg-velmora-charcoal text-white font-sans text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-velmora-charcoal-light transition-colors duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}