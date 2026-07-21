import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-velmora-cream shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-velmora-border px-6 py-5">
            <h2 className="font-serif text-xl tracking-wide text-velmora-charcoal">
              Your Cart
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-stone hover:text-velmora-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-velmora-stone">
                <ShoppingBag size={40} strokeWidth={1} />
                <p className="font-sans text-sm">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="mt-2 px-6 py-2.5 bg-velmora-charcoal text-velmora-cream text-xs uppercase tracking-widest hover:bg-velmora-charcoal-soft transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Image placeholder */}
                    <div className="h-20 w-20 shrink-0 bg-velmora-cream-dark flex items-center justify-center">
                      <ShoppingBag size={20} className="text-velmora-stone-light" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-sans text-xs font-medium uppercase tracking-widest text-velmora-charcoal">
                          {item.name}
                        </p>
                        {item.variant && (
                          <p className="mt-0.5 text-xs text-velmora-stone">
                            {item.variant}
                          </p>
                        )}
                        <p className="mt-1 font-sans text-sm text-velmora-charcoal">
                          ${item.price}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-border">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="px-2 py-1 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-2 text-xs font-medium text-velmora-charcoal min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="px-2 py-1 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-stone hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
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
            <div className="border-t border-velmora-border px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-velmora-stone">Subtotal</span>
                <span className="font-sans text-base font-semibold text-velmora-charcoal">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velmora-stone mb-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="w-full py-3.5 bg-velmora-gold text-velmora-charcoal text-xs font-semibold uppercase tracking-widest hover:bg-velmora-gold-light transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-3 w-full py-3 border border-velmora-charcoal text-velmora-charcoal text-xs font-semibold uppercase tracking-widest hover:bg-velmora-charcoal hover:text-velmora-cream transition-colors"
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
