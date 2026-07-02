import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ isOpen, cartItems, onClose, onUpdateQuantity, onRemove }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <div className={`fixed inset-0 z-40 bg-velmora-night/40 backdrop-blur-sm transition duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden="true" onClick={onClose} />
      <aside className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-editorial transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart" aria-hidden={!isOpen}>
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-bronze">Velmora Cart</p>
            <h2 className="font-serif text-2xl text-velmora-espresso">Your Selections</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-line p-2 text-velmora-espresso transition hover:bg-velmora-pearl" aria-label="Close cart"><X className="h-5 w-5" /></button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-12 w-12 text-velmora-bronze" />
            <h3 className="mt-5 font-serif text-3xl text-velmora-espresso">Your cart is waiting</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-taupe">Add demi-fine pieces to begin building your everyday gold edit.</p>
            <button type="button" onClick={onClose} className="mt-8 bg-velmora-night px-6 py-3 text-xs font-bold uppercase tracking-widest text-velmora-ivory transition hover:bg-velmora-espresso">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-velmora-line py-5">
                  <div className="h-24 w-20 shrink-0 overflow-hidden bg-velmora-blush">
                    <img alt={item.name} className="h-full w-full object-cover" data-strk-img-id={item.imgId} data-strk-img={`[${item.descId}] [${item.titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="280" src={'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-velmora-espresso">{item.name}</h3>
                    <p className="mt-1 text-sm text-velmora-taupe">{formatPrice(item.price)}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-line bg-velmora-pearl text-velmora-espresso">
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-2 text-velmora-espresso transition hover:bg-velmora-line" aria-label={`Decrease ${item.name} quantity`}><Minus className="h-3.5 w-3.5" /></button>
                        <span className="w-9 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-2 text-velmora-espresso transition hover:bg-velmora-line" aria-label={`Increase ${item.name} quantity`}><Plus className="h-3.5 w-3.5" /></button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id)} className="p-2 text-velmora-taupe transition hover:text-velmora-espresso" aria-label={`Remove ${item.name}`}><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-line p-5">
              <div className="flex items-center justify-between text-sm uppercase tracking-widest text-velmora-taupe"><span>Subtotal · {itemCount} item{itemCount === 1 ? '' : 's'}</span><span className="font-semibold text-velmora-espresso">{formatPrice(subtotal)}</span></div>
              <p className="mt-3 text-sm leading-6 text-velmora-taupe">Shipping and taxes are calculated at checkout. Free worldwide shipping is included.</p>
              <button type="button" className="mt-5 w-full bg-velmora-gold px-6 py-4 text-xs font-extrabold uppercase tracking-widest text-velmora-espresso transition hover:bg-velmora-bronze hover:text-velmora-ivory">Checkout Coming Soon</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
