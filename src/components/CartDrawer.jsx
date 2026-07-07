import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    shipping,
    total,
  } = useCart()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-velmora-charcoal/60 backdrop-blur-sm"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          'fixed top-0 right-0 z-[80] h-full w-full max-w-md bg-velmora-ivory shadow-2xl transform transition-transform duration-400 ease-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-border px-6 py-5">
          <h2 className="font-serif text-2xl tracking-wide">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-text-muted">
              <ShoppingBag size={48} strokeWidth={1} className="mb-4" />
              <p className="font-serif text-xl text-velmora-text-dark">Your bag is empty</p>
              <p className="mt-2 text-sm">Discover pieces crafted to be treasured.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 bg-velmora-linen" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-serif text-base uppercase tracking-extra-wide text-velmora-text-dark">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs uppercase tracking-wider text-velmora-text-muted">
                        Tone: {item.tone}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center border border-velmora-border">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="h-7 w-7 flex items-center justify-center hover:bg-velmora-linen"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="h-7 w-7 flex items-center justify-center hover:bg-velmora-linen"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium tabular-nums">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id, item.tone)}
                    className="self-start p-1 text-velmora-text-muted hover:text-velmora-text-dark"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-border px-6 py-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-velmora-text-muted">
                <span>Subtotal</span>
                <span className="tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-velmora-text-muted">
                <span>Shipping</span>
                <span className="tabular-nums">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between pt-2 text-base font-semibold text-velmora-text-dark">
                <span>Total</span>
                <span className="tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              type="button"
              className="mt-6 w-full bg-velmora-gold py-4 text-xs font-semibold uppercase tracking-[0.12em] text-velmora-charcoal hover:bg-velmora-gold-light transition-colors duration-300"
            >
              Checkout
            </button>
            <p className="mt-3 text-center text-xs text-velmora-text-muted">
              Free shipping on orders over $50
            </p>
          </div>
        )}
      </aside>
    </>
  )
}
