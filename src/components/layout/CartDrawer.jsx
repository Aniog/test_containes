import React from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const CartDrawer = () => {
  const { items, subtotal, isCartOpen, closeCart, removeItem, updateQuantity } = useCart()

  if (!isCartOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        className="absolute inset-0 h-full w-full bg-velmora-ink/60 backdrop-blur-sm"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-jewel animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between border-b border-velmora-sand px-5 py-5">
          <div>
            <p className="text-[0.66rem] font-bold uppercase tracking-nav text-velmora-clay">Your cart</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Velmora edit</h2>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-velmora-sand bg-transparent text-velmora-ink transition hover:border-velmora-champagne hover:text-velmora-clay"
            aria-label="Close cart"
            onClick={closeCart}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-champagne" />
              <h3 className="font-serif text-3xl">Your cart is quiet for now</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-clay">
                Add a golden everyday piece or a gift-ready set to begin your Velmora order.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const cartTitleId = `cart-${item.cartId}-title`
                const cartDescId = `cart-${item.cartId}-desc`

                return (
                  <article key={item.cartId} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-sand pb-5">
                    <div className="flex aspect-square items-center justify-center overflow-hidden bg-velmora-sand text-center shadow-sm">
                      <span className="px-3 font-serif text-2xl uppercase tracking-logo text-velmora-ink">
                        {item.name.split(' ').map((word) => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div className="min-w-0 text-velmora-ink">
                      <h3 id={cartTitleId} className="font-serif text-base uppercase tracking-product text-velmora-ink">
                        {item.name}
                      </h3>
                      <p id={cartDescId} className="sr-only">{item.description}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-nav text-velmora-clay">{item.tone} tone</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center border border-velmora-sand bg-velmora-porcelain text-velmora-ink">
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center bg-transparent text-velmora-ink transition hover:text-velmora-champagne"
                            aria-label={`Decrease quantity of ${item.name}`}
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center bg-transparent text-velmora-ink transition hover:text-velmora-champagne"
                            aria-label={`Increase quantity of ${item.name}`}
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-semibold text-velmora-ink">${item.price * item.quantity}</p>
                      </div>
                      <button
                        type="button"
                        className="mt-3 inline-flex items-center gap-2 bg-transparent p-0 text-xs font-bold uppercase tracking-nav text-velmora-clay transition hover:text-velmora-ink"
                        onClick={() => removeItem(item.cartId)}
                      >
                        <Trash2 className="h-3 w-3" /> Remove
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-sand bg-velmora-porcelain px-5 py-5 text-velmora-ink">
          <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-nav">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <p className="mt-2 text-xs leading-6 text-velmora-clay">Shipping and taxes calculated at checkout. This preview uses local cart state only.</p>
          <button
            type="button"
            className="mt-5 w-full bg-velmora-ink px-6 py-4 text-xs font-bold uppercase tracking-nav text-velmora-pearl transition hover:bg-velmora-champagne hover:text-velmora-ink"
          >
            Continue to checkout
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
