import { Fragment } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <Fragment>
      <div className="fixed inset-0 z-[60] bg-velmora-black/40 backdrop-blur-sm" onClick={closeCart} />
      <aside className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-velmora-pearl shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 hairline-bottom">
          <h2 className="font-serif text-xl font-semibold tracking-ultra-wide text-velmora-charcoal">
            YOUR BAG ({cartCount})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 text-velmora-ink hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-velmora-muted mb-4" />
              <p className="font-serif text-lg text-velmora-ink mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-muted mb-6">Discover our collection and find something you love.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-flex items-center justify-center px-6 py-3 bg-velmora-charcoal text-velmora-white text-xs font-semibold tracking-editorial uppercase hover:bg-velmora-gold transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 hairline-bottom pb-6 last:border-0">
                  <div className="h-24 w-20 flex-shrink-0 rounded-sm bg-velmora-sand overflow-hidden">
                    <img
                      src={`https://placehold.co/160x200/f7f4ef/c9a96e?text=${encodeURIComponent(item.name)}`}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-sm font-semibold tracking-ultra-wide uppercase text-velmora-charcoal truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-velmora-muted mt-0.5 capitalize">{item.variant}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item)}
                        className="p-1 -mr-1 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-border rounded-sm">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, item.quantity - 1)}
                          className="p-1.5 text-velmora-ink hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-2 text-xs font-medium text-velmora-charcoal min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, item.quantity + 1)}
                          className="p-1.5 text-velmora-ink hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-velmora-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-muted">Subtotal</span>
              <span className="font-serif text-lg font-semibold text-velmora-charcoal">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-muted">Shipping and taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full py-3.5 bg-velmora-charcoal text-velmora-white text-xs font-semibold tracking-editorial uppercase hover:bg-velmora-gold transition-colors"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full py-3 text-velmora-ink text-xs font-medium tracking-editorial uppercase hover:text-velmora-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </Fragment>
  );
}
