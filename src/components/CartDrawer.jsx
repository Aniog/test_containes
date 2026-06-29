import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useImageLoader } from '@/hooks/useImageLoader';

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, count } =
    useCart();
  const containerRef = useImageLoader([isOpen, items.length]);

  return (
    <>
      <div
        onClick={closeCart}
        className={cn(
          'fixed inset-0 bg-velmora-espresso/30 backdrop-blur-sm z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
      />
      <aside
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50',
          'flex flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-espresso/10">
          <h2 className="font-serif text-2xl text-velmora-espresso">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 text-velmora-espresso hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-velmora-stone mb-4" />
            <p className="font-serif text-xl text-velmora-espresso mb-2">
              Your cart is empty
            </p>
            <p className="text-velmora-stone mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="px-8 py-3 bg-velmora-gold text-white text-sm uppercase tracking-wider hover:bg-velmora-gold-dark transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-stone/10 flex-shrink-0 overflow-hidden">
                    <span id={`cart-title-${item.id}`} className="sr-only">
                      {item.name}
                    </span>
                    <span id={`cart-search-${item.id}`} className="sr-only">
                      {item.searchTerms}
                    </span>
                    <img
                      alt={item.name}
                      data-strk-img-id={`cart-${item.imgId}`}
                      data-strk-img={`[cart-search-${item.id}] [cart-title-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src={SVG_PLACEHOLDER}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.14em] text-velmora-espresso truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-stone mt-1 capitalize">
                      Tone: {item.tone}
                    </p>
                    <p className="text-sm text-velmora-espresso mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-espresso/20 text-velmora-espresso hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-velmora-espresso w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-espresso/20 text-velmora-espresso hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.tone)}
                        className="ml-auto p-2 text-velmora-stone hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-espresso/10 px-6 py-6 bg-white/50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-stone">Subtotal</span>
                <span className="font-serif text-xl text-velmora-espresso">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velmora-stone mb-5">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full py-4 bg-velmora-gold text-white text-sm uppercase tracking-wider hover:bg-velmora-gold-dark transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full mt-3 py-3 text-sm text-velmora-espresso underline underline-offset-4 hover:text-velmora-gold transition-colors"
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
