import { Fragment } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart, useCartDispatch } from '../../hooks/useCart';

const CartDrawer = () => {
  const { items, isOpen } = useCart();
  const dispatch = useCartDispatch();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Fragment>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => dispatch({ type: 'CLOSE_DRAWER' })} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-2xl flex flex-col">
            <header className="flex items-center justify-between border-b border-border px-6 py-5">
              <div className="flex items-center gap-2 text-ink">
                <ShoppingBag className="h-5 w-5" />
                <h2 className="font-display text-xl font-semibold tracking-wide">Your Cart</h2>
              </div>
              <button
                onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
                className="rounded-full p-2 text-ink-secondary transition-colors hover:bg-background hover:text-ink"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <ShoppingBag className="h-10 w-10 text-ink-secondary" />
                  <p className="font-display text-lg text-ink-secondary">Your cart is empty</p>
                  <p className="text-sm text-ink-secondary">Discover our latest pieces and add something special.</p>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-background">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink">{item.name}</p>
                          <p className="text-xs text-ink-secondary">{item.variant}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 rounded-full border border-border px-2 py-1">
                            <button
                              onClick={() =>
                                dispatch({
                                  type: 'UPDATE_QUANTITY',
                                  payload: { id: item.id, variant: item.variant, quantity: item.quantity - 1 },
                                })
                              }
                              className="rounded-full p-1 text-ink-secondary hover:text-ink"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="text-xs font-medium">{item.quantity}</span>
                            <button
                              onClick={() =>
                                dispatch({
                                  type: 'UPDATE_QUANTITY',
                                  payload: { id: item.id, variant: item.variant, quantity: item.quantity + 1 },
                                })
                              }
                              className="rounded-full p-1 text-ink-secondary hover:text-ink"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-ink">${(item.price * item.quantity).toFixed(2)}</p>
                            <button
                              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id, variant: item.variant } })}
                              className="text-xs text-ink-secondary underline underline-offset-4 hover:text-ink"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <footer className="border-t border-border px-6 py-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-secondary">Subtotal</span>
                  <span className="font-display text-base font-semibold text-ink">${subtotal.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-xs text-ink-secondary">Shipping and taxes calculated at checkout.</p>
                <button className="mt-4 w-full btn-primary">Checkout</button>
              </footer>
            )}
          </aside>
        </div>
      )}
    </Fragment>
  );
};

export default CartDrawer;
