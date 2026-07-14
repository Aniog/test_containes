import { useRef } from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useStrkImages } from '@/lib/useStrkImages'

export default function CartDrawer({ open, items, onClose, onUpdateQuantity, onRemove }) {
  const drawerRef = useRef(null)
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  useStrkImages(drawerRef, [open, items.length, subtotal])

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-velmora-espresso/45 transition duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside ref={drawerRef} className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-soft transition duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-sand px-5 py-5 sm:px-6">
          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-luxury text-velmora-taupe">Your cart</p>
            <h2 className="font-serif text-2xl text-velmora-espresso">Velmora Bag</h2>
          </div>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-sand text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Close cart" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-velmora-cream text-velmora-gold">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-serif text-3xl text-velmora-espresso">Your bag is quiet for now.</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-ink/75">Add a pair of huggies, a luminous necklace, or a gift-ready set to begin.</p>
            <Button className="mt-7" onClick={onClose}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
              <div className="space-y-5">
                {items.map((item) => {
                  const titleId = `cart-${item.product.slug}-title`
                  return (
                    <article key={`${item.product.id}-${item.variant}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-sand pb-5 text-velmora-espresso">
                      <div
                        className="h-28 w-[5.5rem] bg-cover bg-center"
                        data-strk-bg-id={`cart-${item.product.slug}-7b3a`}
                        data-strk-bg={`[${titleId}]`}
                        data-strk-bg-ratio="3x4"
                        data-strk-bg-width="240"
                        role="img"
                        aria-label={item.product.name}
                      />
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 id={titleId} className="font-serif text-base uppercase tracking-editorial text-velmora-espresso">{item.product.name}</h3>
                            <p className="mt-1 text-xs text-velmora-ink/70">{item.variant}</p>
                          </div>
                          <button type="button" className="text-velmora-taupe transition hover:text-velmora-gold" aria-label={`Remove ${item.product.name}`} onClick={() => onRemove(item.product.id, item.variant)}>
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full border border-velmora-sand">
                            <button type="button" className="flex h-9 w-9 items-center justify-center text-velmora-espresso transition hover:text-velmora-gold" aria-label="Decrease quantity" onClick={() => onUpdateQuantity(item.product.id, item.variant, item.quantity - 1)}>
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="min-w-7 text-center text-sm font-semibold text-velmora-espresso">{item.quantity}</span>
                            <button type="button" className="flex h-9 w-9 items-center justify-center text-velmora-espresso transition hover:text-velmora-gold" aria-label="Increase quantity" onClick={() => onUpdateQuantity(item.product.id, item.variant, item.quantity + 1)}>
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-velmora-espresso">${item.product.price * item.quantity}</p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="border-t border-velmora-sand bg-velmora-cream px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-velmora-ink">
                <span>Subtotal</span>
                <span className="font-semibold text-velmora-espresso">${subtotal}</span>
              </div>
              <p className="mt-2 text-xs text-velmora-ink/70">Shipping and taxes calculated at checkout.</p>
              <Button className="mt-5 w-full">Checkout</Button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
