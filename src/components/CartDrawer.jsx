import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

function resolveImageUrl(imageId) {
  const config = typeof window !== 'undefined' ? window.__STRK_IMG_CONFIG__ : null;
  if (!config || !imageId || !config[imageId]) return null;
  const entry = config[imageId];
  const picked = entry.results?.find((r) => r.id === entry.picked);
  return picked?.url || entry.results?.[0]?.url || null;
}

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    count,
  } = useCart();

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-50 bg-velmora-ink/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeCart}
      />
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-full max-w-md bg-velmora-porcelain shadow-2xl transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
            <div className="flex items-center gap-3">
              <ShoppingBag size={20} className="text-velmora-ink" />
              <h2 className="font-serif text-xl text-velmora-ink">Your Cart</h2>
              <span className="text-sm text-velmora-taupe">({count})</span>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-velmora-taupe transition-colors hover:text-velmora-ink"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
              <ShoppingBag size={48} className="mb-4 text-velmora-sand" />
              <p className="font-serif text-xl text-velmora-ink">Your cart is empty</p>
              <p className="mt-2 text-sm text-velmora-taupe">
                Discover pieces crafted to be treasured.
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li
                      key={`${item.id}-${item.tone}`}
                      className="flex gap-4 border-b border-velmora-sand pb-6"
                    >
                      <div
                        className="h-20 w-20 shrink-0 bg-cover bg-center bg-velmora-stone"
                        style={resolveImageUrl(item.imageId) ? { backgroundImage: `url(${resolveImageUrl(item.imageId)})` } : undefined}
                        aria-label={item.name}
                        role="img"
                      />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-serif text-base uppercase tracking-widest text-velmora-ink">
                              {item.name}
                            </p>
                            <p className="mt-0.5 text-xs capitalize text-velmora-taupe">
                              Tone: {item.tone}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.tone)}
                            className="text-velmora-taupe transition-colors hover:text-red-600"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="inline-flex items-center border border-velmora-sand bg-white">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.tone, item.quantity - 1)
                              }
                              className="flex h-7 w-7 items-center justify-center text-velmora-taupe hover:text-velmora-ink"
                              aria-label="Decrease"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="flex h-7 w-7 items-center justify-center text-xs font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.tone, item.quantity + 1)
                              }
                              className="flex h-7 w-7 items-center justify-center text-velmora-taupe hover:text-velmora-ink"
                              aria-label="Increase"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-medium text-velmora-ink">
                            ${item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-velmora-sand px-6 py-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm uppercase tracking-widest text-velmora-taupe">
                    Subtotal
                  </span>
                  <span className="font-serif text-xl text-velmora-ink">
                    ${subtotal}
                  </span>
                </div>
                <p className="mb-5 text-xs text-velmora-taupe">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full bg-velmora-ink py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-charcoal">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
