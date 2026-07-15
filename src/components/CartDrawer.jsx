import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, count, updateQuantity, removeFromCart } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-velmora-charcoal/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />
      <div
        className={cn(
          'fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-velmora-cream shadow-2xl transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal={isOpen}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
        inert={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-velmora-stone px-6 py-5">
            <h2 className="font-serif text-xl tracking-widest-xl uppercase text-velmora-charcoal">
              Your Cart ({count})
            </h2>
            <button
              type="button"
              onClick={closeCart}
              className="p-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="mb-4 text-velmora-taupe" strokeWidth={1} />
              <p className="font-serif text-lg text-velmora-charcoal">Your cart is empty</p>
              <p className="mt-2 text-sm text-velmora-warm-gray">
                Discover something beautiful to treasure.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 bg-velmora-charcoal px-8 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-velmora-charcoal-soft"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                      <div className="flex h-24 w-20 flex-shrink-0 items-center justify-center overflow-hidden bg-velmora-cream-dark">
                        <span className="font-serif text-lg uppercase tracking-widest text-velmora-taupe">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="font-serif text-sm uppercase tracking-widest-xl text-velmora-charcoal">
                            {item.name}
                          </p>
                          <p className="mt-0.5 text-xs capitalize text-velmora-warm-gray">
                            Tone: {item.tone}
                          </p>
                          <p className="mt-1 font-sans text-sm font-medium text-velmora-charcoal">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-velmora-stone">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                              className="h-7 w-7 flex items-center justify-center hover:bg-velmora-cream-dark transition-colors"
                              aria-label="Decrease"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-7 text-center text-xs">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                              className="h-7 w-7 flex items-center justify-center hover:bg-velmora-cream-dark transition-colors"
                              aria-label="Increase"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id, item.tone)}
                            className="text-velmora-taupe hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-velmora-stone px-6 py-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-sans text-sm uppercase tracking-widest text-velmora-warm-gray">
                    Subtotal
                  </span>
                  <span className="font-serif text-lg text-velmora-charcoal">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="mb-5 text-xs text-velmora-warm-gray">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  type="button"
                  className="w-full bg-velmora-gold py-4 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold-dark"
                >
                  Checkout
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-3 w-full py-3 font-sans text-xs uppercase tracking-widest text-velmora-charcoal underline underline-offset-4 hover:text-velmora-gold"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
