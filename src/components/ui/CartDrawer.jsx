import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/lib/utils.js'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <div
        className={[
          'fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-taupe/40 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-ink" />
            <h2 className="font-serif text-lg font-semibold uppercase tracking-widest text-ink">
              Your Cart
            </h2>
            <span className="rounded-full bg-gold px-2 py-0.5 text-xs font-medium text-ink">
              {count}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-stone transition-colors hover:text-ink"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={48} className="mb-4 text-taupe" />
              <p className="font-serif text-lg text-ink">Your cart is empty</p>
              <p className="mt-2 max-w-xs text-sm text-stone">
                Discover something beautiful to treasure.
              </p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-cream">
                    <img
                      data-strk-img-id={`cart-thumb-${item.image.imgId}`}
                      data-strk-img={`[product-title-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-serif text-sm font-semibold uppercase tracking-widest text-ink">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs text-stone">{item.variant}</p>
                      <p className="mt-1 text-sm text-ink">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center border border-taupe/60">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-stone hover:bg-cream"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="flex h-7 w-7 items-center justify-center text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center text-stone hover:bg-cream"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-stone underline transition-colors hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-taupe/40 px-6 py-6">
            <div className="mb-4 flex items-center justify-between text-ink">
              <span className="font-sans text-sm uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-lg font-semibold">{formatPrice(subtotal)}</span>
            </div>
            <p className="mb-5 text-center text-xs text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="w-full bg-gold py-4 text-center text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-gold-dark"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full border border-ink py-3 text-center text-xs font-medium uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-ivory"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
