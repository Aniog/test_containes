import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { cn } from '@/lib/utils'

function CartDrawer() {
  const { items, isOpen, subtotal, closeCart, removeItem, updateQuantity } = useCart()
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCart()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closeCart, isOpen])

  useEffect(() => {
    closeCart()
  }, [closeCart, location.hash, location.pathname, location.search])

  return (
    <div className={cn('fixed inset-0 z-[60] transition', isOpen ? 'pointer-events-auto' : 'pointer-events-none')} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label="Close cart"
        className={cn('absolute inset-0 bg-velvet/55 backdrop-blur-sm transition-opacity duration-300', isOpen ? 'opacity-100' : 'opacity-0')}
        onClick={closeCart}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className={cn('absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory text-velvet shadow-soft transition-transform duration-500 ease-premium', isOpen ? 'translate-x-0' : 'translate-x-full')}
      >
        <div className="flex items-center justify-between border-b border-pearl px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-luxe text-smoke">Your Cart</p>
            <h2 id="cart-drawer-title" className="font-serif text-3xl text-velvet">Velmora Bag</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="rounded-full border border-pearl bg-white/70 p-2 text-velvet transition hover:border-champagne hover:text-champagne"
            onClick={closeCart}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="rounded-full border border-pearl bg-pearl/50 p-5 text-velvet">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-velvet">Your bag is empty</h3>
              <p className="text-sm leading-7 text-smoke">Add a few softly luminous pieces and they’ll appear here.</p>
            </div>
            <Link to="/shop" onClick={closeCart} className="rounded-full bg-champagne px-6 py-3 text-xs uppercase tracking-luxe text-velvet transition hover:bg-velvet hover:text-ivory">
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="border-b border-pearl/70 bg-white/40 px-5 py-3 text-[11px] uppercase tracking-luxe text-smoke">
              {items.length} curated {items.length === 1 ? 'piece' : 'pieces'} ready to ship
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <div key={item.key} className="rounded-luxe border border-pearl bg-white/50 p-4 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[11px] uppercase tracking-luxe text-smoke">{item.category}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="shrink-0 text-[11px] uppercase tracking-luxe text-smoke transition hover:text-velvet"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-3 min-w-0 space-y-2">
                    <Link
                      to={`/products/${item.slug}`}
                      onClick={closeCart}
                      className="block max-w-full font-serif text-[1.45rem] uppercase leading-[1.02] tracking-[0.14em] text-velvet transition hover:text-champagne"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs uppercase tracking-luxe text-smoke">{item.variant}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4 border-t border-pearl/70 pt-4">
                    <div className="inline-flex items-center rounded-full border border-pearl bg-ivory">
                      <button
                        type="button"
                        aria-label={`Decrease quantity for ${item.name}`}
                        className="p-3 text-velvet transition hover:text-champagne"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-10 text-center text-sm text-velvet">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity for ${item.name}`}
                        className="p-3 text-velvet transition hover:text-champagne"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-sm uppercase tracking-luxe text-velvet">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-pearl bg-white/50 px-5 py-5">
              <div className="flex items-center justify-between text-sm uppercase tracking-luxe text-velvet">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-smoke">Taxes and duties calculated at checkout. Real checkout can be connected later.</p>
              <button type="button" className="mt-5 w-full rounded-full bg-velvet px-5 py-4 text-xs uppercase tracking-luxe text-ivory transition hover:bg-truffle">
                Secure Checkout Coming Soon
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
