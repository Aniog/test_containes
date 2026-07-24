import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'
import { formatPrice, resolveStrkImageUrl } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const containerRef = useStrkImages([items, isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream-soft shadow-soft transition-transform duration-400 ease-elegant ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-serif text-lg uppercase tracking-widest2 text-ink">
            Your Bag ({count})
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink transition-colors hover:text-gold">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-sand-deep" />
            <p className="font-serif text-xl text-ink">Your bag is empty</p>
            <p className="text-sm text-ink-muted">Discover pieces crafted to be treasured.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-3.5 text-[11px] uppercase tracking-widest2 text-cream-soft transition-colors hover:bg-gold-deep"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => {
                const cartTitleId = `cart-${item.lineId}-title`
                const cartSubId = `cart-${item.lineId}-sub`
                return (
                <div key={item.lineId} className="flex gap-4 border-b border-ink/10 py-5">
                  <Link to={`/product/${item.productId}`} onClick={closeCart} className="shrink-0">
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${cartSubId}] [${cartTitleId}] gold jewelry`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src={resolveStrkImageUrl(item.imgId)}
                      className="h-24 w-20 object-cover bg-cream-deep"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <h3 id={cartTitleId} className="font-serif text-base uppercase tracking-widest2 text-ink">
                          {item.name}
                        </h3>
                        <p id={cartSubId} className="mt-0.5 text-xs text-ink-muted">
                          {item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-xs text-ink-muted transition-colors hover:text-gold-deep"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-ink/15">
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2.5 py-1.5 text-ink transition-colors hover:bg-cream-deep"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2.5 py-1.5 text-ink transition-colors hover:bg-cream-deep"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>

            <div className="border-t border-ink/10 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-widest2 text-ink-muted">Subtotal</span>
                <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-ink-muted">Shipping & taxes calculated at checkout.</p>
              <button className="mt-4 w-full bg-gold py-4 text-[11px] uppercase tracking-widest2 text-cream-soft transition-colors hover:bg-gold-deep">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-2 w-full py-3 text-[11px] uppercase tracking-widest2 text-ink-muted transition-colors hover:text-ink"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
