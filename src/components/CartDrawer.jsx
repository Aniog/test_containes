import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { StrkImage } from '@/components/ui/StrkImage'
import { Button } from '@/components/ui/Button'
import { formatPrice, cn } from '@/lib/utils'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeCart])

  return (
    <>
      {/* overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* drawer */}
      <aside
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Cart <span className="text-sm text-taupe">({count})</span>
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold-deep">
            <X size={20} />
          </button>
        </div>

        {/* items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} className="text-sand" strokeWidth={1} />
              <p className="mt-4 font-serif text-xl text-ink">Your cart is empty</p>
              <p className="mt-2 text-sm text-taupe">Discover pieces crafted to be treasured.</p>
              <Button as={Link} to="/shop" variant="solid" className="mt-6" onClick={closeCart}>
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-sand">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link to={`/products/${item.slug}`} onClick={closeCart} className="shrink-0">
                    <StrkImage
                      imgId={item.imgId}
                      query={`[${item.imgDescId}] [${item.imgTitleId}]`}
                      ratio="4x5"
                      width={200}
                      alt={item.name}
                      titleId={item.imgTitleId}
                      descId={item.imgDescId}
                      className="h-24 w-20 object-cover bg-cream"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-taupe">{item.category}</p>
                        <Link
                          to={`/products/${item.slug}`}
                          onClick={closeCart}
                          className="font-serif text-base uppercase tracking-[0.08em] text-ink hover:text-gold-deep"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-0.5 text-xs text-taupe">{item.variant}</p>
                      </div>
                      <p className="text-sm text-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1.5 text-ink hover:bg-cream"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="min-w-8 text-center text-sm text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1.5 text-ink hover:bg-cream"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label="Remove item"
                        onClick={() => removeItem(item.key)}
                        className="text-taupe transition-colors hover:text-ink"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-taupe">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-taupe">Shipping & taxes calculated at checkout.</p>
            <Button variant="dark" className="mt-4 w-full">
              Proceed to Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.2em] text-taupe transition-colors hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
