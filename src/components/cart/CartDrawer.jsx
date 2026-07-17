import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { cn } from '@/lib/utils'

function CartDrawer() {
  const { items, isOpen, subtotal, closeCart, removeItem, updateQuantity } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className={cn('fixed inset-0 z-[60] transition', isOpen ? 'pointer-events-auto' : 'pointer-events-none')} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label="Close cart"
        className={cn('absolute inset-0 bg-velvet/45 transition-opacity duration-300', isOpen ? 'opacity-100' : 'opacity-0')}
        onClick={closeCart}
      />

      <aside className={cn('absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory text-velvet shadow-soft transition-transform duration-500 ease-premium', isOpen ? 'translate-x-0' : 'translate-x-full')}>
        <div className="flex items-center justify-between border-b border-pearl px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-luxe text-smoke">Your Cart</p>
            <h2 className="font-serif text-3xl text-velvet">Velmora Bag</h2>
          </div>
          <button type="button" aria-label="Close cart" className="rounded-full border border-pearl p-2 text-velvet" onClick={closeCart}>
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
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <div key={item.key} className="rounded-luxe border border-pearl bg-white/40 p-4 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <Link to={`/products/${item.slug}`} onClick={closeCart} className="font-serif text-2xl uppercase tracking-luxe text-velvet">
                        {item.name}
                      </Link>
                      <p className="text-xs uppercase tracking-luxe text-smoke">{item.variant}</p>
                      <p className="text-sm uppercase tracking-luxe text-smoke">{item.category}</p>
                    </div>
                    <button type="button" onClick={() => removeItem(item.key)} className="text-xs uppercase tracking-luxe text-smoke transition hover:text-velvet">
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full border border-pearl bg-ivory">
                      <button type="button" className="p-3 text-velvet" onClick={() => updateQuantity(item.key, item.quantity - 1)}>
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-10 text-center text-sm text-velvet">{item.quantity}</span>
                      <button type="button" className="p-3 text-velvet" onClick={() => updateQuantity(item.key, item.quantity + 1)}>
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-sm uppercase tracking-luxe text-velvet">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-pearl bg-white/40 px-5 py-5">
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
