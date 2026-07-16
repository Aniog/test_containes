import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/format'

export default function CartDrawer() {
  const { closeCart, isCartOpen, items, removeItem, subtotal, updateQuantity } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-stone-950/45 transition ${isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#fffdf9] text-stone-900 shadow-2xl transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-sand/50 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Your Cart</p>
            <h2 className="font-heading text-3xl text-stone-900">Velmora Bag</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:bg-stone-50"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-velmora-mist text-velmora-cocoa">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="font-heading text-3xl text-stone-900">Your bag is empty</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-stone-500">
              Add a few luminous pieces to build your everyday jewelry wardrobe.
            </p>
            <Button className="mt-6" onClick={closeCart}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="rounded-[1.75rem] border border-velmora-sand/50 bg-white p-4 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-heading text-xl text-stone-900">{item.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-stone-500">{item.variant}</p>
                    </div>
                    <p className="text-sm font-medium text-stone-900">{formatCurrency(item.price)}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-sand/60 bg-velmora-ivory px-2 py-1">
                      <button
                        type="button"
                        aria-label={`Decrease quantity for ${item.name}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-stone-600 transition hover:bg-white"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-medium text-stone-900">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity for ${item.name}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-stone-600 transition hover:bg-white"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs uppercase tracking-[0.24em] text-stone-500 transition hover:text-stone-900"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-sand/50 bg-white px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-stone-500">
                <span>Subtotal</span>
                <span className="font-medium text-stone-900">{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs leading-6 text-stone-500">
                Taxes and shipping calculated at checkout. Checkout can be connected later.
              </p>
              <Button size="lg" className="mt-5 w-full">Proceed to Checkout</Button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
