import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ImageSlot } from '@/components/ui/ImageSlot'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'

export const CartDrawer = () => {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-brand-ink/40 transition-opacity duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-brand-line bg-brand-mist shadow-panel transition-transform duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-brand-line px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-overline text-brand-gold">
              Your Cart
            </p>
            <h2 className="mt-2 text-3xl leading-none text-brand-ink">Curated pieces</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-brand-line p-3 text-brand-ink transition hover:bg-brand-ink hover:text-brand-parchment"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {items.length ? (
            items.map((item) => (
              <article
                key={item.key}
                className="flex gap-4 rounded-3xl border border-brand-line bg-white p-4"
              >
                <div className="h-28 w-24 overflow-hidden rounded-2xl bg-brand-sand">
                  <ImageSlot
                    slotId={item.product.gallery[0].slotId}
                    query={`[product-${item.product.id}-desc] [product-${item.product.id}-name]`}
                    ratio="3x4"
                    width="320"
                    alt={item.product.name}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          id={`product-${item.product.id}-name`}
                          className="text-sm uppercase tracking-product text-brand-ink"
                        >
                          {item.product.name}
                        </h3>
                        <p className="mt-2 text-xs uppercase tracking-overline text-brand-cocoa">
                          {item.tone}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-brand-ink">
                        {formatPrice(item.lineTotal)}
                      </p>
                    </div>
                    <p
                      id={`product-${item.product.id}-desc`}
                      className="text-sm leading-6 text-brand-cocoa"
                    >
                      {item.product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center rounded-full border border-brand-line">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="p-3 text-brand-ink"
                        aria-label={`Decrease quantity of ${item.product.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-medium text-brand-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="p-3 text-brand-ink"
                        aria-label={`Increase quantity of ${item.product.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs font-semibold uppercase tracking-overline text-brand-cocoa hover:text-brand-ink"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-brand-line bg-white px-6 py-12 text-center">
              <div className="rounded-full bg-brand-sand p-4 text-brand-ink">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl leading-none text-brand-ink">Your cart is empty</h3>
                <p className="text-sm leading-6 text-brand-cocoa">
                  Add a few Velmora favorites and build your own polished stack.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-brand-line bg-white px-6 py-5">
          <div className="mb-4 flex items-center justify-between text-sm font-medium text-brand-ink">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <Button className="w-full justify-center">Checkout Soon</Button>
          <p className="mt-3 text-center text-xs leading-5 text-brand-cocoa">
            Frontend preview only. Checkout can be connected later.
          </p>
        </div>
      </aside>
    </>
  )
}
