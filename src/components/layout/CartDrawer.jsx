import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useStrkImages } from '@/lib/useStrkImages';
import { formatPrice, getStrkImageUrl } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart();
  const ref = useStrkImages([isOpen, items.length]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-soft transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl tracking-widest3 text-ink">
            Your Cart ({count})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink transition-colors hover:text-gold"
          >
            <X width={20} height={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag width={40} height={40} className="text-stone-light" strokeWidth={1} />
            <p className="mt-4 font-serif text-xl text-ink">Your cart is empty</p>
            <p className="mt-2 text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 bg-gold px-8 py-3 text-[11px] uppercase tracking-widest2 text-white transition-colors hover:bg-gold-deep"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.lineId} className="flex gap-4">
                    <Link
                      to={`/products/${item.slug}`}
                      onClick={closeCart}
                      className="shrink-0"
                    >
                      <div className="relative h-24 w-20 overflow-hidden bg-sand">
                        <img
                          alt={item.name}
                          src={getStrkImageUrl(item.imgId)}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <p
                            id={`cart-${item.lineId}-title`}
                            className="font-serif text-sm uppercase tracking-widest3 text-ink"
                          >
                            {item.name}
                          </p>
                          <p className="mt-0.5 text-xs text-stone">{item.variant}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.lineId)}
                          className="text-stone-light transition-colors hover:text-gold"
                          aria-label="Remove item"
                        >
                          <X width={16} height={16} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-hairline">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                            className="px-2 py-1 text-ink transition-colors hover:text-gold"
                            aria-label="Decrease quantity"
                          >
                            <Minus width={12} height={12} />
                          </button>
                          <span className="min-w-8 text-center text-xs text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                            className="px-2 py-1 text-ink transition-colors hover:text-gold"
                            aria-label="Increase quantity"
                          >
                            <Plus width={12} height={12} />
                          </button>
                        </div>
                        <p className="text-sm text-ink">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-hairline px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest2 text-stone">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-stone-light">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-4 w-full bg-gold py-4 text-[11px] uppercase tracking-widest2 text-white transition-colors hover:bg-gold-deep"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full py-3 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:text-gold"
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
