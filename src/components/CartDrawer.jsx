import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQty, removeItem, subtotal, count } = useCart()

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

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ivory shadow-card flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl text-ink">
            Your Bag{' '}
            <span className="text-sand text-base">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-ink hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag size={40} strokeWidth={1} className="text-sand" />
              <p className="font-serif text-xl text-ink">Your bag is empty</p>
              <p className="text-sm text-sand max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <Button as={Link} to="/shop" onClick={closeCart} variant="outline" size="sm" className="mt-2">
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-20 bg-cream border border-line overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-cream to-line" />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-serif text-base text-ink uppercase tracking-wider leading-tight hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-sand hover:text-ink transition-colors text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-xs text-sand mt-1 capitalize">
                      {item.tone} tone · {item.category}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-sm text-ink">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-ink">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-line px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest3 text-sand">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-sand">
              Shipping & taxes calculated at checkout.
            </p>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-widest3 text-ink hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
