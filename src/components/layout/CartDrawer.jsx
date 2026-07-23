import React from 'react'
import { Minus, Plus, Trash2, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

function CartItemMark({ product }) {
  return (
    <div className="grid h-24 w-20 shrink-0 place-items-center rounded-sm bg-velmora-blush text-center font-serif text-3xl font-semibold text-velmora-antique" aria-hidden="true">
      {product.name.charAt(0)}
    </div>
  )
}

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen, removeItem, updateQuantity } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button type="button" className="absolute inset-0 bg-velmora-deep/55 backdrop-blur-sm" aria-label="Close cart" onClick={() => setIsCartOpen(false)} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-espresso shadow-velvet">
        <div className="flex items-center justify-between border-b border-velmora-sand/70 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-velmora-antique">Your Cart</p>
            <h2 className="font-serif text-3xl">A considered selection</h2>
          </div>
          <button type="button" className="velmora-focus rounded-full p-2 text-velmora-espresso hover:text-velmora-antique" aria-label="Close cart" onClick={() => setIsCartOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <p className="font-serif text-3xl text-velmora-espresso">Your cart is quiet for now.</p>
                <p className="mt-3 text-sm leading-6 text-velmora-smoke">Add a luminous piece and it will appear here.</p>
              </div>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 border-b border-velmora-sand/60 pb-5">
                  <CartItemMark product={item.product} />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg uppercase tracking-luxury text-velmora-espresso">{item.product.name}</h3>
                    <p className="mt-1 text-xs text-velmora-smoke">{item.tone} tone · ${item.product.price}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-sand bg-velmora-ivory text-velmora-espresso">
                        <button type="button" className="velmora-focus p-2" aria-label="Decrease quantity" onClick={() => updateQuantity(item.key, item.quantity - 1)}><Minus className="h-3 w-3" /></button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button type="button" className="velmora-focus p-2" aria-label="Increase quantity" onClick={() => updateQuantity(item.key, item.quantity + 1)}><Plus className="h-3 w-3" /></button>
                      </div>
                      <button type="button" className="velmora-focus p-2 text-velmora-smoke transition hover:text-velmora-antique" aria-label="Remove item" onClick={() => removeItem(item.key)}><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-velmora-sand/70 p-5">
          <div className="flex items-center justify-between text-sm text-velmora-smoke"><span>Subtotal</span><span className="font-semibold text-velmora-espresso">${subtotal}</span></div>
          <p className="mt-2 text-xs text-velmora-smoke">Shipping and taxes calculated at checkout. Frontend preview only.</p>
          <button type="button" className="velmora-focus mt-5 w-full bg-velmora-espresso px-6 py-4 text-sm font-bold uppercase tracking-widest text-velmora-ivory transition hover:bg-velmora-antique">Checkout later</button>
        </div>
      </aside>
    </div>
  )
}
