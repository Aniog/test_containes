import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()
  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <button type="button" aria-label="Close cart" onClick={() => setIsCartOpen(false)} className={`absolute inset-0 bg-velmora-ink/50 transition duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-drawer transition duration-300 ease-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
          <div><p className="eyebrow">Your Cart</p><h2 className="font-display text-3xl font-semibold">A considered selection</h2></div>
          <button type="button" aria-label="Close cart" onClick={() => setIsCartOpen(false)} className="rounded-full border border-velmora-sand p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? <div className="grid h-full place-items-center text-center"><div><p className="font-display text-4xl text-velmora-ink">Your cart is quiet.</p><p className="mt-3 text-sm leading-6 text-velmora-taupe">Add a demi-fine piece to begin your Velmora edit.</p></div></div> : <div className="space-y-5">{items.map((item) => { const titleId = `cart-${item.key}-title`; const descId = `cart-${item.key}-desc`; return (
            <article key={item.key} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-sand pb-5">
              <div className="grid aspect-square h-22 w-22 place-items-center border border-velmora-sand bg-velmora-cream text-center font-display text-3xl text-velmora-gold">V</div>
              <div><div className="flex items-start justify-between gap-3"><div><h3 id={titleId} className="font-display text-lg font-semibold uppercase tracking-product text-velmora-ink">{item.name}</h3><p id={descId} className="mt-1 text-xs font-semibold uppercase tracking-nav text-velmora-taupe">{item.selectedTone} tone</p></div><button type="button" onClick={() => removeFromCart(item.key)} className="text-xs font-bold uppercase tracking-nav text-velmora-taupe transition hover:text-velmora-ink">Remove</button></div>
                <div className="mt-4 flex items-center justify-between"><div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-cream"><button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(item.key, item.quantity - 1)} className="p-2 text-velmora-ink"><Minus className="h-4 w-4" /></button><span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(item.key, item.quantity + 1)} className="p-2 text-velmora-ink"><Plus className="h-4 w-4" /></button></div><span className="font-bold text-velmora-ink">${item.price * item.quantity}</span></div></div>
            </article>
          )})}</div>}
        </div>
        <div className="border-t border-velmora-sand bg-velmora-cream px-6 py-5"><div className="flex items-center justify-between text-sm font-bold uppercase tracking-nav text-velmora-ink"><span>Subtotal</span><span>${subtotal}</span></div><p className="mt-2 text-sm text-velmora-taupe">Shipping and taxes calculated at checkout. Frontend preview only.</p><button type="button" className="primary-button mt-5 w-full">Checkout</button></div>
      </aside>
    </div>
  )
}
