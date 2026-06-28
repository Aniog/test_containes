import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { products } from '@/data/products'

const formatPrice = (value) => `$${value}`

export default function CartDrawer({ isOpen, cartItems, onClose, onIncrement, onDecrement, onRemove }) {
  const hydratedItems = cartItems
    .map((item) => ({ ...item, product: products.find((product) => product.id === item.productId) }))
    .filter((item) => item.product)

  const subtotal = hydratedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-[70] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div onClick={onClose} className={`absolute inset-0 bg-[rgba(33,24,18,0.48)] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[var(--color-ivory)] text-[var(--color-espresso)] shadow-2xl transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-[color:var(--color-hairline)] px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-gold)]">Velmora Bag</p>
            <h2 className="mt-1 font-[var(--font-heading)] text-2xl">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-[color:var(--color-hairline)] bg-transparent p-2 text-[var(--color-espresso)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]" aria-label="Close cart">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {hydratedItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-[var(--font-heading)] text-3xl">Your bag is waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-7 text-[var(--color-muted)]">Add a gold piece you will reach for every day.</p>
            </div>
          ) : (
            <ul className="grid gap-5">
              {hydratedItems.map((item) => (
                <li key={item.key} className="border-b border-[color:var(--color-hairline)] pb-5">
                  <div className="flex gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-alabaster)] text-center font-[var(--font-heading)] text-2xl text-[var(--color-gold)] shadow-inner">V</div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-espresso)]">{item.product.name}</h3>
                      <p className="mt-1 text-xs text-[var(--color-muted)]">{item.tone} tone · {formatPrice(item.product.price)}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-[color:var(--color-hairline)] bg-[var(--color-alabaster)]">
                          <button type="button" onClick={() => onDecrement(item.key)} className="rounded-full bg-transparent p-2 text-[var(--color-espresso)] hover:text-[var(--color-gold)]" aria-label={`Decrease ${item.product.name}`}><Minus className="h-3.5 w-3.5" /></button>
                          <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button type="button" onClick={() => onIncrement(item.key)} className="rounded-full bg-transparent p-2 text-[var(--color-espresso)] hover:text-[var(--color-gold)]" aria-label={`Increase ${item.product.name}`}><Plus className="h-3.5 w-3.5" /></button>
                        </div>
                        <button type="button" onClick={() => onRemove(item.key)} className="rounded-full bg-transparent p-2 text-[var(--color-muted)] hover:text-[var(--color-gold)]" aria-label={`Remove ${item.product.name}`}><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-[color:var(--color-hairline)] px-5 py-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em]"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
          <p className="mt-3 text-xs leading-6 text-[var(--color-muted)]">Shipping and taxes calculated at checkout. Checkout connection can be added later.</p>
          <button type="button" className="mt-5 w-full rounded-full bg-[var(--color-gold)] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-espresso)] shadow-[0_18px_40px_rgba(197,154,82,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--color-gold-dark)]">Checkout</button>
        </div>
      </aside>
    </div>
  )
}
