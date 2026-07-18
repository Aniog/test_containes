import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const CartDrawer = () => {
  const { closeCart, isOpen, items, removeItem, subtotal, updateQuantity } = useCart()

  return (
    <>
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] bg-velvet/45 transition-opacity duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeCart}
      />

      <aside
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-[70] flex h-screen w-full max-w-md flex-col bg-mist text-ink shadow-floating transition-transform duration-300 ease-luxe ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <div>
            <p className="editorial-kicker">Your Cart</p>
            <h2 className="mt-2 font-display text-3xl text-velvet">Ready to treasure</h2>
          </div>
          <button type="button" aria-label="Close cart" onClick={closeCart} className="rounded-full border border-ink/10 p-2 text-ink/80 transition-colors hover:border-champagne hover:text-velvet">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="surface-card flex h-full flex-col items-center justify-center gap-4 px-6 py-10 text-center">
              <p className="font-display text-3xl text-velvet">Your bag is still empty</p>
              <p className="max-w-xs text-sm leading-7 text-ink/70">Add a few polished pieces and they’ll appear here instantly.</p>
            </div>
          ) : (
            items.map((item) => (
              <article key={item.cartKey} className="surface-card p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="product-title text-lg">{item.name}</p>
                    <p className="text-sm text-ink/65">{item.variant}</p>
                    <p className="text-sm text-ink/65">${item.price}</p>
                  </div>
                  <button type="button" onClick={() => removeItem(item.cartKey)} className="text-sm text-ink/60 transition-colors hover:text-velvet">
                    Remove
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-ink/10 bg-ivory">
                    <button type="button" onClick={() => updateQuantity(item.cartKey, item.quantity - 1)} className="p-2 text-ink/70">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-10 text-center text-sm text-velvet">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.cartKey, item.quantity + 1)} className="p-2 text-ink/70">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm font-medium text-velvet">${item.quantity * item.price}</p>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="border-t border-ink/10 px-6 py-5">
          <div className="mb-4 flex items-center justify-between text-sm text-ink/75">
            <span>Subtotal</span>
            <span className="text-lg font-medium text-velvet">${subtotal}</span>
          </div>
          <button type="button" className="button-primary w-full">Proceed to Checkout</button>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.16em] text-ink/55">Checkout can be connected later</p>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
