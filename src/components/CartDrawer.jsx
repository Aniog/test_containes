import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[70] bg-ink/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`fixed bottom-0 right-0 top-0 z-[80] flex w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-cream-dark px-6 py-5">
          <h2 className="font-serif text-xl font-semibold uppercase tracking-wider text-ink">
            Your Cart ({totalItems})
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="text-ink transition-opacity hover:opacity-60"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} strokeWidth={1} className="mb-4 text-taupe" />
            <p className="font-serif text-lg text-ink">Your cart is empty</p>
            <p className="mt-1 text-sm text-taupe">Add a little sparkle to get started.</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 bg-ink px-8 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-ink-soft"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="flex flex-col gap-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="flex h-24 w-20 flex-shrink-0 items-center justify-center bg-cream-warm">
                      <span className="font-serif text-2xl font-light uppercase tracking-wider text-taupe">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-ink">
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-xs capitalize text-taupe">
                          Tone: {item.tone}
                        </p>
                        <p className="mt-1 text-sm font-medium text-ink-soft">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-cream-dark">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="px-2 py-1 text-ink hover:bg-cream-dark"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="px-2 py-1 text-ink hover:bg-cream-dark"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label="Remove item"
                          onClick={() => removeFromCart(item.id, item.tone)}
                          className="text-taupe transition-colors hover:text-red-500"
                        >
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-cream-dark px-6 py-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-sans text-sm uppercase tracking-wider text-ink-soft">
                  Subtotal
                </span>
                <span className="font-serif text-lg font-semibold text-ink">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="mb-5 text-xs text-taupe">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full bg-gold py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-deep"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full py-2 text-center text-xs uppercase tracking-wider text-ink-soft underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
