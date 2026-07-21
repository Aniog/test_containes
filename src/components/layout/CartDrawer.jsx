import { useRef, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { StockImg } from '@/lib/images';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeCart]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={closeCart}
        />
      )}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[70] transform transition-transform duration-500 ease-out shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-velmora-sand">
          <h2 className="font-serif text-lg tracking-widest uppercase text-velmora-espresso">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="text-velmora-stone hover:text-velmora-espresso transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-stone">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-40" strokeWidth={1} />
              <p className="font-sans text-sm tracking-wide">Your cart is empty</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-parchment rounded overflow-hidden flex-shrink-0">
                    <StockImg
                      id={`cart-${item.id}`}
                      query={`[product-name-${item.id}]`}
                      ratio="3x4"
                      width={200}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span id={`product-name-${item.id}`} className="sr-only">
                      {item.name} gold jewelry
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <p className="font-serif text-sm tracking-widest uppercase text-velmora-espresso">
                        {item.name}
                      </p>
                      <p className="font-sans text-xs text-velmora-stone mt-0.5 capitalize">
                        {item.variant} tone
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-velmora-sand rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="px-2 py-1 text-velmora-stone hover:text-velmora-espresso transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-xs text-velmora-espresso min-w-[1rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="px-2 py-1 text-velmora-stone hover:text-velmora-espresso transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-medium text-velmora-espresso">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start text-velmora-taupe hover:text-velmora-espresso transition-colors mt-0.5"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-sand px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-velmora-stone">Subtotal</span>
              <span className="font-sans text-base font-semibold text-velmora-espresso">
                ${subtotal}
              </span>
            </div>
            <p className="font-sans text-xs text-velmora-stone">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-velmora-espresso text-white font-sans text-xs font-medium tracking-widest uppercase py-4 rounded hover:bg-velmora-ink transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full border border-velmora-espresso text-velmora-espresso font-sans text-xs font-medium tracking-widest uppercase py-3.5 rounded hover:bg-velmora-espresso hover:text-white transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
