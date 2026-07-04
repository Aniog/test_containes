import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { formatPrice } from '@/data/products'
import EditorialImage from '@/components/storefront/EditorialImage'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-espresso/45 backdrop-blur-sm transition duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col bg-velmora-porcelain text-velmora-espresso shadow-velvet transition duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-cocoa/10 px-6 py-5">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-velmora-taupe">Velmora Cart</p>
            <h2 className="font-serifDisplay text-3xl font-semibold text-velmora-espresso">Your Selection</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-velmora-espresso transition hover:bg-velmora-blush" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-espresso">
              <p className="font-serifDisplay text-3xl font-semibold">Your cart is waiting.</p>
              <p className="mt-3 max-w-xs font-sans text-sm leading-6 text-velmora-cocoa">
                Add a gold piece you will reach for every day, or a gift meant to be remembered.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              {items.map((item) => {
                const variantSlug = item.variant.replace(/\s+/g, '-').toLowerCase()
                const cartTitleId = `cart-title-${item.id}-${variantSlug}`
                const cartVariantId = `cart-variant-${item.id}-${variantSlug}`

                return (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-velmora-cocoa/10 pb-5">
                    <div className="h-24 w-20 shrink-0 overflow-hidden bg-velmora-blush">
                      <EditorialImage
                        id={`cart-${item.imageId}-${variantSlug}`}
                        query={`[${cartVariantId}] [${cartTitleId}]`}
                        ratio="3x4"
                        width="180"
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1 text-velmora-espresso">
                      <h3 id={cartTitleId} className="font-serifDisplay text-lg font-semibold uppercase tracking-product text-velmora-espresso">
                        {item.name}
                      </h3>
                      <p id={cartVariantId} className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-velmora-taupe">
                        {item.variant}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-velmora-cocoa/15 bg-velmora-porcelain text-velmora-espresso">
                          <button
                            type="button"
                            className="p-2 text-velmora-espresso transition hover:text-velmora-antique"
                            onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center font-sans text-sm font-semibold text-velmora-espresso">{item.quantity}</span>
                          <button
                            type="button"
                            className="p-2 text-velmora-espresso transition hover:text-velmora-antique"
                            onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="font-sans text-sm font-semibold text-velmora-cocoa">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id, item.variant)}
                      className="self-start rounded-full p-2 text-velmora-taupe transition hover:bg-velmora-blush hover:text-velmora-espresso"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-cocoa/10 px-6 py-6 text-velmora-espresso">
          <div className="mb-4 flex items-center justify-between font-sans text-sm uppercase tracking-[0.18em] text-velmora-cocoa">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-champagne px-6 py-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-antique hover:text-velmora-ivory disabled:cursor-not-allowed disabled:opacity-50"
            disabled={items.length === 0}
          >
            Continue to Checkout
          </button>
          <p className="mt-3 text-center font-sans text-xs leading-5 text-velmora-taupe">
            Complimentary worldwide shipping and 30-day returns.
          </p>
        </div>
      </aside>
    </>
  )
}
