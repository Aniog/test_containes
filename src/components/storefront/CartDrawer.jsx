import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import ProductImage from './ProductImage'

export default function CartDrawer({ cartItems, isOpen, onClose, onDecrease, onIncrease, onRemove, subtotal }) {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-espresso/45 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory text-espresso shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-taupe px-5 py-5">
          <div className="flex items-center gap-3"><ShoppingBag className="h-5 w-5 text-champagne" /><h2 className="font-serif text-2xl">Your Cart</h2></div>
          <button type="button" onClick={onClose} className="rounded-full bg-transparent p-2 text-espresso hover:text-champagne" aria-label="Close cart"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {cartItems.length === 0 ? (
            <div className="grid h-full place-items-center text-center text-sable"><div><p className="font-serif text-3xl text-espresso">Your ritual awaits</p><p className="mt-3 text-sm leading-6">Add a piece of demi-fine gold jewelry to begin.</p></div></div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-[88px_1fr] gap-4 border-b border-taupe/70 pb-5">
                  <div className="aspect-square overflow-hidden bg-rose-beige"><ProductImage imageId={item.imgId} alt={item.name} className="h-full w-full object-cover" /></div>
                  <div>
                    <div className="flex justify-between gap-3"><h3 className="font-serif text-lg uppercase tracking-[0.12em] text-espresso">{item.name}</h3><button type="button" onClick={() => onRemove(item.id)} className="h-fit bg-transparent p-1 text-sable hover:text-espresso" aria-label={`Remove ${item.name}`}><Trash2 className="h-4 w-4" /></button></div>
                    <p className="mt-1 text-sm text-sable">{formatPrice(item.price)}</p>
                    <div className="mt-4 flex w-28 items-center justify-between rounded-full border border-taupe bg-porcelain px-2 py-1">
                      <button type="button" onClick={() => onDecrease(item.id)} className="bg-transparent p-1 text-espresso" aria-label="Decrease quantity"><Minus className="h-3.5 w-3.5" /></button>
                      <span className="text-sm font-semibold">{item.quantity}</span>
                      <button type="button" onClick={() => onIncrease(item.id)} className="bg-transparent p-1 text-espresso" aria-label="Increase quantity"><Plus className="h-3.5 w-3.5" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-taupe bg-porcelain px-5 py-5 text-espresso">
          <div className="flex justify-between text-sm uppercase tracking-[0.2em]"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
          <button type="button" className="mt-5 w-full rounded-full bg-champagne px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-espresso transition hover:bg-espresso hover:text-ivory">Checkout</button>
          <p className="mt-3 text-center text-xs text-sable">Taxes calculated at checkout. Free worldwide shipping included.</p>
        </div>
      </aside>
    </div>
  )
}
