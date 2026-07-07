import { X, Minus, Plus, Trash2, Gem } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from '@/cart/CartContext'

export default function CartDrawer() {
  const { items, itemCount, subtotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()

  return (
    <div
      className={`fixed inset-0 z-[80] transition ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isCartOpen}
    >
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-velmora-line bg-velmora-ivory text-velmora-espresso shadow-velvet transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">Your Cart</p>
            <h2 className="font-serif text-2xl text-velmora-espresso">Velmora Edit</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-velmora-line bg-velmora-porcelain p-2 text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-porcelain"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-velmora-line bg-velmora-porcelain p-8 text-center">
              <p className="font-serif text-2xl text-velmora-espresso">Your jewelry box is empty.</p>
              <p className="mt-3 text-sm leading-6 text-velmora-mink">Add a luminous piece to begin your Velmora collection.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.key} className="grid grid-cols-[84px_1fr] gap-4 border-b border-velmora-line/80 pb-5">
                  <div className="flex h-24 w-20 items-center justify-center rounded-2xl border border-velmora-line bg-velmora-champagne text-velmora-bronze" aria-hidden="true">
                    <Gem className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p id={`cart-title-${item.key}`} className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-velmora-espresso">{item.product.name}</p>
                        <p id={`cart-tone-${item.key}`} className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-bronze">{item.tone} Tone</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.key)}
                        className="text-velmora-mink transition hover:text-velmora-espresso"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-line bg-velmora-porcelain">
                        <button type="button" className="p-2 text-velmora-espresso" onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold text-velmora-espresso">{item.quantity}</span>
                        <button type="button" className="p-2 text-velmora-espresso" onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-serif text-lg font-semibold text-velmora-espresso">{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line bg-velmora-porcelain px-5 py-5 sm:px-7">
          <div className="mb-4 flex items-center justify-between text-velmora-espresso">
            <span className="text-sm uppercase tracking-[0.18em]">Subtotal · {itemCount} item{itemCount === 1 ? '' : 's'}</span>
            <span className="font-serif text-2xl font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <button className="w-full rounded-full bg-velmora-espresso px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-porcelain transition hover:bg-velmora-gold hover:text-velmora-espresso">
            Continue to Checkout
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-mink">Checkout is ready to connect when you add your payment provider.</p>
        </div>
      </aside>
    </div>
  )
}
