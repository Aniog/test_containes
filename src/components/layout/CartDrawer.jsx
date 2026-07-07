import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { StrkImage } from '@/components/product/StrkImage'

export function CartDrawer() {
  const {
    items,
    totals,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart()

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeCart])

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-deep/50 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={cn(
          'absolute top-0 right-0 h-full w-full sm:w-[440px] bg-cream shadow-2xl flex flex-col transition-transform duration-400 ease-out-soft',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-taupe/40">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-deep" strokeWidth={1.5} />
            <h2 className="font-serif text-xl text-deep">Your Bag</h2>
            <span className="text-xs font-sans tracking-eyebrow uppercase text-mocha">
              {totals.itemCount} {totals.itemCount === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 text-deep hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <EmptyCart onClose={closeCart} />
          ) : (
            <ul className="divide-y divide-taupe/30">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 p-6">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-sand overflow-hidden"
                  >
                    <StrkImage
                      id={item.image}
                      query={`[cart-${item.id}-name] [cart-${item.id}-cat] [cart-product-context]`}
                      ratio="3x4"
                      width={400}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Hidden text references for strk-img query */}
                    <span id={`cart-${item.id}-name`} className="sr-only">
                      {item.name}
                    </span>
                    <span id={`cart-${item.id}-cat`} className="sr-only">
                      gold jewelry product photo
                    </span>
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="product-name block hover:text-gold transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-[11px] tracking-eyebrow uppercase font-sans text-mocha mt-1">
                          {item.variant === 'silver' ? 'Sterling Silver' : '18K Gold Plated'}
                        </p>
                      </div>
                      <p className="font-sans text-sm text-deep whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="flex items-center border border-taupe">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center text-deep hover:bg-sand transition-colors"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm font-sans text-deep">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center text-deep hover:bg-sand transition-colors"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-[11px] tracking-eyebrow uppercase font-sans text-mocha hover:text-gold transition-colors"
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

        {items.length > 0 && (
          <footer className="border-t border-taupe/40 p-6 bg-sand/40">
            <div className="space-y-2 text-sm font-sans text-deep">
              <div className="flex justify-between">
                <span className="text-mocha">Subtotal</span>
                <span>{formatPrice(totals.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mocha">Shipping</span>
                <span>
                  {totals.shipping === 0 ? 'Complimentary' : formatPrice(totals.shipping)}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-taupe/40 text-base">
                <span className="font-serif text-lg">Total</span>
                <span className="font-sans font-medium">
                  {formatPrice(totals.subtotal + totals.shipping)}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="btn-primary w-full mt-5"
              onClick={() => alert('Checkout is a placeholder — connect a real provider here.')}
            >
              Checkout
            </button>
            <p className="text-[11px] tracking-eyebrow uppercase font-sans text-mocha text-center mt-3">
              Free worldwide shipping on orders over $75
            </p>
          </footer>
        )}
      </aside>

      {/* Hidden context for image queries */}
      <span id="cart-product-context" className="sr-only">
        gold jewelry editorial product photography
      </span>
    </div>
  )
}

function EmptyCart({ onClose }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-8 py-16">
      <div className="w-16 h-16 border border-taupe flex items-center justify-center mb-6">
        <ShoppingBag className="w-6 h-6 text-mocha" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-2xl text-deep">Your bag is empty</h3>
      <p className="body-base mt-3 max-w-xs">
        Discover our demi-fine pieces — designed in our New York studio and made to be treasured.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="btn-outline mt-8"
      >
        Shop the Collection
      </Link>
    </div>
  )
}
