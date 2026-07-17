import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { resolveStrkImageUrl } from '@/lib/strkImages'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <div
      className={cn(
        'fixed inset-0 z-[70] transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-ink/50" onClick={closeCart} />
      <aside
        className={cn(
          'absolute right-0 top-0 h-full w-full max-w-md bg-ivory flex flex-col transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Bag <span className="text-muted text-base">({count})</span>
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-charcoal hover:text-gold transition-colors">
            <X width={22} height={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag width={40} height={40} strokeWidth={1} className="text-sand" />
              <p className="font-serif text-xl text-ink">Your bag is empty</p>
              <p className="text-sm text-muted font-light max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <Button as={Link} to="/shop" onClick={closeCart} variant="outline" size="sm">
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-sand">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 py-5">
                  <Link to={`/product/${item.slug}`} onClick={closeCart} className="shrink-0">
                    <img
                      src={resolveStrkImageUrl(item.imgId)}
                      alt={item.name}
                      className="h-24 w-24 object-cover bg-cream"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="font-serif text-base uppercase tracking-[0.12em] text-ink hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-muted mt-1 font-light">{item.variant} tone</p>
                    <p className="text-sm text-charcoal mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(item, item.quantity - 1)}
                          className="px-2 py-1.5 text-charcoal hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus width={13} height={13} strokeWidth={1.5} />
                        </button>
                        <span className="px-3 text-xs text-ink min-w-[2ch] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item, item.quantity + 1)}
                          className="px-2 py-1.5 text-charcoal hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus width={13} height={13} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item)}
                        className="text-[10px] uppercase tracking-[0.15em] text-muted hover:text-gold transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5 space-y-4 bg-cream/50">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted font-light">
              Shipping & taxes calculated at checkout. Free worldwide shipping over $75.
            </p>
            <Button className="w-full" size="md">
              Checkout
            </Button>
            <button
              onClick={closeCart}
              className="w-full text-center text-[10px] uppercase tracking-[0.2em] text-muted hover:text-gold transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
