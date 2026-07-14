import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { formatPrice } from '../../lib/formatters.js'

const CartDrawer = () => {
  const { items, isCartOpen, closeCart, removeItem, subtotal, updateQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-[60] transition ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div className={`absolute inset-0 bg-velmora-ink/45 transition duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeCart} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-velmora transition duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div><p className="eyebrow-label">Shopping bag</p><h2 className="mt-2 text-3xl">Your Cart</h2></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line" onClick={closeCart} aria-label="Close cart"><X className="h-4 w-4" /></button>
        </div>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-velmora-pearl text-velmora-gold"><ShoppingBag className="h-7 w-7" /></div>
            <div className="space-y-2">
              <h3 className="text-3xl">Your cart is empty</h3>
              <p className="text-sm leading-7 text-velmora-mocha">Add a few luminous pieces to begin your Velmora collection.</p>
            </div>
            <Link to="/shop" onClick={closeCart} className="premium-button">Shop bestsellers</Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {items.map((item) => (
                <article key={item.itemKey} className="rounded-[1.5rem] border border-velmora-line bg-velmora-pearl/45 p-4">
                  <div className="flex gap-4">
                    <div className="flex h-24 w-20 items-end rounded-2xl bg-gradient-to-b from-velmora-pearl to-velmora-gold/30 p-3 text-[10px] uppercase tracking-[0.18em] text-velmora-ink/70">
                      <span>{item.category}</span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="space-y-1">
                        <Link to={`/product/${item.slug}`} onClick={closeCart} className="font-serif text-lg uppercase tracking-[0.18em] text-velmora-ink">{item.name}</Link>
                        <p className="text-sm text-velmora-mocha">{item.variant}</p>
                        <p className="text-sm font-medium text-velmora-ink">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center rounded-full border border-velmora-line bg-velmora-ivory px-3 py-2">
                          <button className="text-velmora-mocha" onClick={() => updateQuantity(item.itemKey, item.quantity - 1)} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                          <span className="min-w-10 text-center text-sm">{item.quantity}</span>
                          <button className="text-velmora-mocha" onClick={() => updateQuantity(item.itemKey, item.quantity + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                        </div>
                        <button className="text-sm uppercase tracking-[0.16em] text-velmora-mocha transition hover:text-velmora-ink" onClick={() => removeItem(item.itemKey)}>Remove</button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="border-t border-velmora-line px-6 py-5">
              <div className="mb-4 flex items-center justify-between text-sm text-velmora-mocha"><span>Subtotal</span><span className="text-lg font-medium text-velmora-ink">{formatPrice(subtotal)}</span></div>
              <button className="premium-button w-full">Checkout coming soon</button>
              <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-velmora-mocha">Secure checkout to be connected next</p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
