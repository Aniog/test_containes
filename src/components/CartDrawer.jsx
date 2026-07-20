import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    count,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-subtle px-6 py-4">
          <h2 className="font-serif text-2xl text-foreground">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-muted hover:text-foreground transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="text-subtle" strokeWidth={1} />
            <p className="mt-4 font-serif text-xl text-foreground">
              Your cart is empty
            </p>
            <p className="mt-2 text-sm text-muted">
              Discover something beautiful to treasure.
            </p>
            <button
              onClick={closeCart}
              className="mt-6 bg-accent px-8 py-3 text-xs font-medium uppercase tracking-brand text-white hover:bg-accent-hover transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 bg-cream" />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-brand text-foreground">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-xs capitalize text-muted">
                          {item.variant}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center border border-subtle">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="px-2 py-1 text-muted hover:text-foreground"
                            aria-label="Decrease"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs font-medium text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="px-2 py-1 text-muted hover:text-foreground"
                            aria-label="Increase"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm text-foreground">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="self-start text-muted hover:text-accent transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-subtle px-6 py-6">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-muted">
                  Subtotal ({count} {count === 1 ? 'item' : 'items'})
                </span>
                <span className="font-serif text-xl text-foreground">
                  ${subtotal}
                </span>
              </div>
              <p className="text-xs text-muted">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="mt-5 w-full bg-accent py-3.5 text-xs font-medium uppercase tracking-brand text-white hover:bg-accent-hover transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-3 w-full border border-foreground py-3.5 text-xs font-medium uppercase tracking-brand text-foreground hover:bg-foreground hover:text-background transition-colors"
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
